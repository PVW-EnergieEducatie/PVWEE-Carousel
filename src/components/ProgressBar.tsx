function ProgressBar({ progress }: { progress: number }) {
  return (
    <div className="h-4 w-full rounded-full bg-slate-200 ">
      <div
        className={`transition-slowest ease h-4  rounded-full bg-verbruik-72 transition-width duration-500`}
        style={{ width: progress + '%' }}
      ></div>
    </div>
  );
}

export default ProgressBar;
