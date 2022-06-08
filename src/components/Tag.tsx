export default ({ text }: { text: string }) => {
  return (
    <p className="m-1 h-min whitespace-nowrap rounded bg-ondernemen-80 py-1.5 px-2.5 font-roboto text-sm text-white">
      #{text}
    </p>
  );
};
