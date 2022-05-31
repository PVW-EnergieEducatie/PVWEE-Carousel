import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

import SlideOne from './Pages/SlideOne';
import SlideTwo from './Pages/SlideTwo';
import SlideThree from './Pages/SlideThree';

import './App.css';
import { useEffect, useState } from 'react';
import EmblaOptions from './types/EmblaOptions';
import { useMQTT } from './types/MqttClient';

import { ReactComponent as Logo } from './../beleeftransfoCode.svg';
import ProgressBar from './components/ProgressBar';

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
        console.log(emblaApi.scrollProgress());

        setProgress(Math.round(emblaApi.scrollProgress() * 100 + 25));
        console.log(`progress: ${progress}%`);
      });

      client.on('message', (topic: string, message: string) => {
        var msg = message.toString();
        if (topic === '/configure/controls') handleControl(msg);
        else if (topic === '/configure/values') handleValues(msg);
      });
    }
  }, [emblaApi]);

  useEffect(() => {
    const interval = setInterval(() => {
      let API_URL = window['env']['API_URL'];
      console.log(API_URL);
      fetch(API_URL + '/api/v1/transfo/power/usage/Conciergewoning/realtime')
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setValues(data);
        });
    }, 6000);
    return () => clearInterval(interval);
  }, []);

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
    <>
      <div>
        <p>
          Aansluiting_Conciergewoning_EB2:{' '}
          {values
            ? values['values']['Aansluiting_Conciergewoning_EB2'].at(-1)[
                'value'
              ]
            : '-'}
          kW
        </p>
        <p>progress: {progress}%</p>
        <ProgressBar progress={progress} />
      </div>
      <div className="embla h-screen w-screen" ref={emblaRef}>
        <div className="embla__container h-screen w-screen">
          <SlideOne />
          <SlideTwo />
          <SlideThree />
          <SlideTwo />
        </div>
      </div>
    </>
  );
}

export default Carousel;
