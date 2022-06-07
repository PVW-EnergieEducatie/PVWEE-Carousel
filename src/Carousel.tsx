import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import EmblaOptions from './interfaces/EmblaOptions';
import { useMQTT } from './utils/MqttClient';
import { getVideoURL } from './data/Video';
import { useEffect, useState } from 'react';

import TransfoSlide from './Pages/TransfoSlide';
import PowerNetSlide from './Pages/PowerNetSlide';
import VideoSlide from './Pages/VideoSlide';
import BuildingSlide from './Pages/BuildingSlide';
import Bar from './components/Bar';

import './App.css';
import ReactPlayer from 'react-player';

function Carousel() {
  const client = useMQTT();
  const videoURL = getVideoURL();
  const [autoPlay, setAutoPlay] = useState(
    Autoplay({ delay: 6000, stopOnInteraction: false }),
  );
  const [progress, setProgress] = useState(25);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, speed: 6 }, [
    // autoPlay
  ]);

  useEffect(() => {
    if (emblaApi && client) {
      emblaApi.on('settle', () => {
        // convert [0.25 - 0.75] range to [25 - 100]
        let progress =
          ((emblaApi.scrollProgress() * 100 - 0) * (100 - 25)) / (75 - 0) + 25;
        // change range is VideoSlide is not included
        if (!ReactPlayer.canPlay(videoURL ?? '')) {
          progress = ((emblaApi.scrollProgress() * 100 - 0) * (100 - 25)) / (66 - 0) + 25;
        }

        setProgress(progress);
      });

      client.on('message', (topic: string, message: string) => {
        var msg = message.toString();
        if (topic === '/configure/controls') handleControl(msg);
        else if (topic === '/configure/values') handleValues(msg);
      });
    }
  }, [emblaApi]);

  const handleValues = (msg: string) => {
    // convert string to EmblaOptions
    var values: EmblaOptions = JSON.parse(msg);
    // apply new options and reload
    setAutoPlay(Autoplay({ delay: values.delay }));
    emblaApi?.reInit({ speed: values.speed }, [autoPlay]);
  };

  const handleControl = (message: string) => {
    switch (message) {
      case 'PREVIOUS':
        emblaApi?.scrollPrev();
        break;
      case 'PAUSE':
        autoPlay.stop();
        break;
      case 'PLAY':
        autoPlay.play();
        break;
      case 'NEXT':
        emblaApi?.scrollNext();
        break;
      default:
        break;
    }
  };

  return (
    <div className=" h-screen ">
      <div className="h-[6.5vh]">
        <Bar progress={progress} />
      </div>
      <div className="embla " ref={emblaRef}>
        <div className="embla__container  h-[93.5vh] w-screen">
          <TransfoSlide />
          <PowerNetSlide />
          {videoURL && ReactPlayer.canPlay(videoURL) && (
            <VideoSlide videoURL={videoURL} emblaApi={emblaApi!} autoPlay={autoPlay} />
          )}
          <BuildingSlide />
        </div>
      </div>
    </div>
  );
}

export default Carousel;
