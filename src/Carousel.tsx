import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import mqtt from 'mqtt/dist/mqtt.min';

import SlideOne from './Pages/SlideOne';
import SlideTwo from './Pages/SlideTwo';
import SlideThree from './Pages/SlideThree';

import './App.css';
import { useEffect, useState } from 'react';
import emblaCarouselReact from 'embla-carousel-react';
import EmblaOptions from './types/EmblaOptions';
import { useMQTT } from './types/MqttClient';

function Carousel() {
  const [client] = useMQTT();
  const [autoPlay, setAutoPlay] = useState(Autoplay({ delay: 8000 }));
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, speed: 3 }, [
    autoPlay,
  ]);

  useEffect(() => {
    if (emblaApi && client) {
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

  useEffect(() => {
    client.on('connect', () => {
      console.log('carousel connected to mqtt broker');
      client.subscribe('/configure/controls');
      client.subscribe('/configure/values');
    });
  }, []);

  return (
    <div className="embla h-screen w-screen" ref={emblaRef}>
      <div className="embla__container h-screen w-screen">
        <SlideOne />
        <SlideTwo />
        <SlideThree />
      </div>
    </div>
  );
}

export default Carousel;