import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import EmblaOptions from './interfaces/EmblaOptions';
import { useMQTT } from './utils/MqttClient';
import { useEffect, useState } from 'react';

import TransfoSlide from './Pages/TransfoSlide';
import PowerNetSlide from './Pages/PowerNetSlide';
import VideoSlide from './Pages/VideoSlide';
import BuildingSlide from './Pages/BuildingSlide';
import Bar from './components/Bar';

import './App.css';
import ReactPlayer from 'react-player';
import { getgebouwen, useGebouw } from './data/Gebouwen';
import { Gebouw } from './interfaces/Gebouw';
import Summary from './data/Summary';

function Carousel() {
  const { summary, refreshData } = Summary();
  const videoURL = summary?.video[0].url;
  const client = useMQTT();
  const { gebouw, setGebouw } = useGebouw();
  const [autoPlay, setAutoPlay] = useState(
    Autoplay({ delay: 15000, stopOnInteraction: false }),
  );
  const [progress, setProgress] = useState(25);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, speed: 6 }, [autoPlay]);

  useEffect(() => {
    if (emblaApi && client) {
      emblaApi.on('select', () => {
        // convert [0.25 - 0.75] range to [25 - 100]
        let progress =
          (emblaApi.slidesInView(true)[0] / emblaApi.slideNodes().length) * 100;
        let convertedProgress = ((progress - 0) * (100 - 25)) / (75 - 0) + 25;
        setProgress(convertedProgress);
      });

      client.on('message', (topic: string, message: string) => {
        if (topic === '/configure/ask_building')
          client.publish('/configure/response_building', gebouw?.id || '');
      });

      client.on('message', (topic: string, message: string) => {
        if (topic === '/configure/airtable_refresh') {
          // refresh summary
          refreshData();
          // refresh building
          getgebouwen().then((gebouwen) => {
            let refreshedGebouw = gebouwen.find((g) => g.id === gebouw?.id);
            setGebouw(refreshedGebouw);
          });
        }
      });

      client.on('message', (topic: string, message: string) => {
        var msg = message.toString();
        if (topic === '/configure/controls') handleControl(msg);
        else if (topic === '/configure/values') handleValues(msg);
        else if (topic === '/configure/set_building') {
          let gebouw: Gebouw = JSON.parse(msg);
          setGebouw(gebouw);
        }
      });
    }
  }, [emblaApi]);

  useEffect(() => {
    emblaApi?.reInit();
  }, [videoURL]);

  const handleValues = (msg: string) => {
    // convert string to EmblaOptions
    var values: EmblaOptions = JSON.parse(msg);
    // apply new options and reload
    setAutoPlay(
      Autoplay({ delay: values.delay, playOnInit: autoPlay.options.playOnInit }),
    );
    emblaApi?.reInit({ speed: values.speed }, [autoPlay]);
  };

  const handleControl = (message: string) => {
    switch (message) {
      case 'PREVIOUS':
        autoPlay.stop();
        emblaApi?.scrollPrev();
        autoPlay.play();
        break;
      case 'PAUSE':
        autoPlay.stop();
        break;
      case 'PLAY':
        autoPlay.play();
        break;
      case 'NEXT':
        autoPlay.stop();
        emblaApi?.scrollNext();
        autoPlay.play();
        break;
      default:
        break;
    }
  };

  if (!gebouw) {
    return <div>Loading...</div>;
  }

  return (
    <div className=" h-screen ">
      <div className="h-[6.5vh]">
        <Bar progress={progress} />
      </div>
      <div className="embla " ref={emblaRef}>
        <div className="embla__container  h-[93.5vh] w-screen">
          <TransfoSlide summary={summary} />
          <PowerNetSlide />
          {videoURL && ReactPlayer.canPlay(videoURL) && (
            <VideoSlide videoURL={videoURL} emblaApi={emblaApi!} autoPlay={autoPlay} />
          )}
          <BuildingSlide building={gebouw} />
        </div>
      </div>
    </div>
  );
}

export default Carousel;
