import { ReactComponent as Stroom } from '../assets/svg/EnergieStroom.svg';

function SlideTwo() {
  return (
    <div className="embla__slide flex items-center justify-center bg-slate-200 p-12">
      <div className="flex h-full w-full items-center justify-center rounded-lg bg-white p-5 ">
        <Stroom className="h-full w-full" />
      </div>
    </div>
  );
}

export default SlideTwo;
