import { ReactComponent as Lightning } from '../assets/svg/Transfo_Logo.svg';
import MCT from '../assets/MCT.png';
import EM from '../assets/EM.png';
import Empowered from '../assets/Empowered.png';
import { ReactComponent as Transfo } from '../assets/svg/Transfo_Logo_Nm.svg';
import { ReactComponent as QRcode } from '../assets/svg/QRcode_Howest.svg';

function AboutSlide() {
  return (
    <div className=" embla__slide bg-base-100 p-12 ">
      <div className=" relative flex h-full w-full flex-col items-center rounded-lg bg-white p-8 ">
        <div className="flex flex-col items-center justify-center">
          <h1 className="mb-8 font-roboto text-3xl font-bold">In samenwerking met:</h1>
          <div className="mb-16 flex w-full flex-row items-center justify-center gap-32">
            <img src={MCT} alt="MCT logo" className="h-auto w-[30%]" />
            <img src={EM} alt="Energie Management logo" className="h-auto w-[30%]" />
          </div>
          <div className="flex w-full flex-row items-center justify-center gap-32">
            <img src={Empowered} alt="MCT logo" className="h-auto w-[30%]" />
            <Transfo className="h-auto w-[30%]" />
          </div>
        </div>
        <div className="absolute bottom-8 left-8 flex flex-col ">
          <QRcode className="h-auto w-[90%]" />
        </div>
        <div className=" absolute bottom-8 right-8 flex flex-col ">
          <h2 className="font-roboto text-lg font-bold">Gemaakt door:</h2>

          <ul className="inline-flex w-full items-center gap-2">
            <li className="font-roboto">Carmino Deschuijmere</li>
            <li>
              <Lightning className="h-10 w-5 rotate-90" />
            </li>
            <li className="font-roboto">Aaron Carton</li>
            <li>
              <Lightning className="h-10 w-5 rotate-90" />
            </li>
            <li className="font-roboto">Merijn Defoort</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default AboutSlide;
