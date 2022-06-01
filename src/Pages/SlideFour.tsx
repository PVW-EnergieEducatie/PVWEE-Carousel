function SlideFour() {
  return (
    <div className="embla__slide grid grid-flow-col grid-rows-6 gap-6 bg-slate-200 p-12 ">
      <div
        id="info_card"
        className="col-span-3 row-span-3 flex items-center justify-center rounded-lg bg-white"
      >
        <p>Info card</p>
      </div>
      <div
        id="map_card"
        className="col-start-4 col-end-6 row-start-1 row-end-4 flex items-center justify-center rounded-lg bg-white"
      >
        {' '}
        <p>Map card</p>
      </div>
      <div
        id="rtd_1"
        className="col-start-6 col-end-6 row-start-1 row-end-1 flex items-center justify-center rounded-lg bg-white"
      >
        {' '}
        <p>Realtime 1</p>
      </div>
      <div
        id="rtd_2"
        className="col-start-6 col-end-6 row-start-2 row-end-2 flex items-center justify-center rounded-lg bg-white"
      >
        {' '}
        <p>Realtime 2</p>
      </div>
      <div
        id="rtd_3"
        className="col-start-6 col-end-6 row-start-3 row-end-3 flex items-center justify-center rounded-lg bg-white"
      >
        <p>Realtime 3</p>
      </div>
      <div
        id="graph"
        className="col-span-6 row-span-3 flex items-center justify-center rounded-lg bg-white"
      >
        <p>Graph card</p>
      </div>
    </div>
  );
}

export default SlideFour;
