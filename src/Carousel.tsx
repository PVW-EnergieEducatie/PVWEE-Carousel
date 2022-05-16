import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

import SlideOne from './Pages/SlideOne';
import SlideTwo from './Pages/SlideTwo';
import SlideThree from './Pages/SlideThree';

import './App.css';

function Carousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true, speed: 3 }, [
    Autoplay({ delay: 8000 }),
  ]);

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
