function ProgressBar({ progress }: { progress: number }) {
  return (
    <div className="h-4 w-full rounded-full bg-base-100 ">
      <div
        className={`transition-slowest ease h-4  rounded-full bg-verbruik-72 transition-width duration-700`}
        style={{ width: progress + '%' }}
      ></div>
    </div>
  );
}

export default ProgressBar;
