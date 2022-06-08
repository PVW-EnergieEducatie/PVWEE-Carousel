export default ({ text }: { text: string }) => {
  return (
    <p className="m-1 h-min whitespace-nowrap rounded bg-ondernemen-80 p-1 px-2 font-roboto text-xs text-white">
      #{text}
    </p>
  );
};
