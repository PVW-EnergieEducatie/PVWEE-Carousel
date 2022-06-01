import ProgressBar from './ProgressBar';

import Logo from '../assets/Logo.png';

export default ({ progress }: { progress: number }) => {
  return (
    <div className="flex flex-row bg-slate-200 ">
      <div className="flex h-[6.5vh] w-32 items-center bg-verbruik-72 p-2">
        <img src={Logo} alt="" className=" object-contain" />
      </div>
      <div className="flex w-full items-center bg-white px-12">
        <ProgressBar progress={progress} />
      </div>
    </div>
  );
};
