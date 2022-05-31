function ProgressBar({ progress }: { progress: number }) {
  return (
    <div className="h-2.5 w-full rounded-full bg-gray-200 dark:bg-gray-700">
      <div
        className={`transition-slowest ease h-2.5 rounded-full bg-blue-600 transition-width duration-500`}
        style={{ width: progress + '%' }}
      ></div>
    </div>
  );
}

export default ProgressBar;
