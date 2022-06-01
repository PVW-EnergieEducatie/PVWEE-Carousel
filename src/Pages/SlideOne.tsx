function SlideOne() {
  return (
    <div className="embla__slide grid grid-flow-col grid-rows-2 gap-6 bg-slate-200 p-12 ">
      <div
        id="bigleft"
        className="col-span-1 row-span-2 flex items-center justify-center rounded-lg bg-white  "
      >
        <p>Info card</p>
      </div>
      <div
        id="small1"
        className="col-start-2 col-end-2 row-start-1 row-end-1 flex items-center justify-center rounded-lg bg-white"
      >
        {' '}
        <p>Pie chart card</p>
      </div>
      <div
        id="small2"
        className="col-start-3 col-end-3 row-start-1 row-end-1 flex items-center justify-center rounded-lg bg-white"
      >
        <p> Realtime card</p>
      </div>
      <div
        id="bigbottom"
        className="col-span-2 flex items-center justify-center rounded-lg bg-white"
      >
        <p>chart Card</p>
      </div>
    </div>
  );
}

export default SlideOne;
