import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import EmblaOptions from './types/EmblaOptions';
import { useMQTT } from './types/MqttClient';
import { useEffect, useState } from 'react';

import SlideOne from './Pages/SlideOne';
import SlideTwo from './Pages/SlideTwo';
import SlideThree from './Pages/SlideThree';
import SlideFour from './Pages/SlideFour';
import Bar from './components/Bar';

import './App.css';

function Carousel() {
  const client = useMQTT();
  const [values, setValues] = useState<[] | undefined>();
  const [autoPlay, setAutoPlay] = useState(Autoplay({ delay: 4000 }));
  const [progress, setProgress] = useState(25);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, speed: 6 }, [
    autoPlay,
  ]);

  useEffect(() => {
    if (emblaApi && client) {
      emblaApi.on('settle', () => {
        setProgress(Math.round(emblaApi.scrollProgress() * 100 + 25));
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
          <SlideOne />
          <SlideTwo />
          <SlideThree />
          <SlideFour />
        </div>
      </div>
    </div>
  );
}

export default Carousel;
