import ProgressBar from './ProgressBar';

import Logo from '../assets/Logo.png';

export default ({ progress }: { progress: number }) => {
  return (
    <div className="flex flex-row bg-slate-200 ">
      <div className="w-32 bg-verbruik-72">
        <img src={Logo} alt="" className=" object-contain px-3" />
      </div>
      <div className="flex w-full items-center bg-white px-12">
        <ProgressBar progress={progress} />
      </div>
    </div>
  );
};
