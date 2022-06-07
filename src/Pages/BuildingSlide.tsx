import { useEffect, useState } from 'react';
import { ChartOptions } from 'chart.js';
import { Bar } from 'react-chartjs-2';

import { Gebouw } from '../interfaces/Gebouw';
import Gebouwen from '../data/Gebouwen';

import Tag from '../components/Tag';

import { ReactComponent as QRcode } from '../assets/QRcode.svg';
import TransfoMap from '../components/TransfoMap';
import { BuildingData } from '../interfaces/BuildingData';
import { getTransfoPowerData } from '../utils/data-acces';

function SlideFour() {
  const gebouwen = Gebouwen();
  const [building, setBuilding] = useState<Gebouw>();
  const [monthlyPower, setMonthlyPower] = useState<BuildingData[]>();
  const [realtimePower, setRealtimePower] = useState<number | undefined>();

  useEffect(() => {
    let b = gebouwen.find((g) => g.naam === 'Duiktank');
    setBuilding(b);
  }, [gebouwen]);

  useEffect(() => {
    const fetchBuildingRealtimeData = () =>
      getTransfoPowerData('Duiktank', 'realtime').then((fields) => {
        const data = fields['TotaalNet'];
        let buildingPower = data.at(-1)?.value;
        setRealtimePower(buildingPower);
      });

    const fetchBuildingPowerData = () =>
      getTransfoPowerData('Duiktank', 'monthly').then((fields) => {
        const data = fields['TotaalNet'];
        setMonthlyPower(data);
        console.log(data.at(-1)?.time);

        console.log('monthlyPower', data);
      });

    fetchBuildingRealtimeData();
    fetchBuildingPowerData();
    const realtimeInterval = setInterval(fetchBuildingRealtimeData, 1000 * 6); // 6s
    const powerInterval = setInterval(fetchBuildingPowerData, 1000 * 60 * 60); // 1h

    return () => {
      clearInterval(realtimeInterval);
      clearInterval(powerInterval);
    };
  }, []);

  const options: any = {
    plugins: {
      datalabels: {
        formatter: (value: number) =>
          `${value.toLocaleString('nl-NL', { maximumFractionDigits: 2 })} kWh`,
        color: 'white',
        font: {
          size: 14,
          family: 'Roboto',
          weight: 'bold',
        },
      },
      legend: {
        display: false,
      },
    },
  };

  const Bardata = {
    labels: monthlyPower?.map((d) =>
      new Date(d.time).toLocaleString('default', { month: 'long', year: 'numeric' }),
    ),
    datasets: [
      {
        color: '#ffffff',
        data: monthlyPower?.map((d) => d.value),
        backgroundColor: [
          '#CC4E2A',
          '#B1CC65',
          '#89B6CC',
          '#CCA337',
          '#66241E',
          '#455B66',
          '#66511B',
        ],
        hoverOffset: 4,
      },
    ],
  };
  return (
    <div className="embla__slide grid grid-flow-col grid-cols-6 grid-rows-6 gap-6 bg-slate-200 p-12 ">
      <div
        id="info_card"
        className="col-start-1 col-end-4 row-span-3 flex flex-row items-center rounded-lg bg-white"
      >
        <img
          className="h-full w-[55%] rounded-l-lg"
          src={building?.profielfoto[0].url}
          alt={building?.naam}
        />

        <div className="p flex max-w-sm flex-col items-center p-5">
          <h1 className="mb-3 font-roboto text-2xl font-bold">{building?.naam}</h1>
          <p className="font-roboto text-sm leading-[1.5]">{building?.info}</p>
        </div>
      </div>
      <div
        id="map_card"
        className="col-start-4 col-end-6 row-start-1 row-end-4 flex items-center justify-center rounded-lg bg-white"
      >
        {' '}
        <TransfoMap selectedBuilding="30" />
      </div>
      <div
        id="rtd_1"
        className="col-start-6 col-end-7 row-start-1 row-end-1 flex flex-col items-center justify-center rounded-lg bg-white"
      >
        {' '}
        <h1 className="font-roboto font-semibold">Prijs maand verbruik</h1>
        <p className="font-roboto text-2xl font-bold text-verbruik-72">
          € {((monthlyPower?.at(-1)?.value ?? 0) * 0.291).toFixed(2) ?? '-'}
        </p>
      </div>
      <div
        id="rtd_2"
        className="col-start-6 col-end-7 row-start-2 row-end-2 flex flex-col items-center justify-center rounded-lg bg-white"
      >
        {' '}
        <h1 className="font-roboto font-semibold">Totaal maand verbruik</h1>
        <p className="font-roboto text-2xl font-bold text-verbruik-72">
          {monthlyPower?.at(-1)?.value?.toFixed(0) ?? '-'}
          <span className="text-lg"> kWh</span>
        </p>
      </div>
      <div
        id="rtd_3"
        className="col-start-6 col-end-7 row-start-3 row-end-3 flex flex-col items-center justify-center rounded-lg bg-white"
      >
        {' '}
        <h1 className="font-roboto font-semibold">Huidig verbruik</h1>
        <p className="font-roboto text-2xl font-bold text-verbruik-72">
          {realtimePower?.toFixed(2) ?? '-'}
          <span className="text-lg"> kW</span>
        </p>
      </div>
      <div
        id="graph"
        className="col-start-1 col-end-5 row-span-3 row-start-4 flex items-center justify-center rounded-lg bg-white"
      >
        <Bar data={Bardata} className={'max-w-72 max-h-72 px-4'} options={options} />
      </div>
      <div
        id="graph"
        className=" relative col-start-5 col-end-7 row-span-3 flex rounded-lg bg-white p-5 "
      >
        {building?.hashtags && building?.hashtags.length > 0 ? (
          building?.hashtags.map((tag) => <Tag key={tag} text={tag} />)
        ) : (
          <></>
        )}

        <QRcode className=" absolute bottom-0 right-0 m-3 h-auto w-40" />
      </div>
    </div>
  );
}

export default SlideFour;
