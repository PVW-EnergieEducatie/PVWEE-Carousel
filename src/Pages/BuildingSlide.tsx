import { useEffect, useState } from 'react';
import { ChartOptions } from 'chart.js';
import { Bar } from 'react-chartjs-2';

import { Gebouw } from '../interfaces/Gebouw';
import Tag from '../components/Tag';

import { ReactComponent as QRcode } from '../assets/svg/QRcode.svg';
import TransfoMap from '../components/TransfoMap';
import { BuildingData } from '../interfaces/BuildingData';
import { getTransfoPowerData } from '../utils/data-acces';
import NoWorkResult from 'postcss/lib/no-work-result';

function GebouwSlide({ building }: { building: Gebouw }) {
  const [monthlyPower, setMonthlyPower] = useState<BuildingData[] | undefined>();
  const [realtimePower, setRealtimePower] = useState<number | undefined>();

  useEffect(() => {
    if (building.influx_naam === undefined) {
      setRealtimePower(undefined);
      setMonthlyPower(undefined);
    } else {
      const fetchBuildingRealtimeData = () =>
        getTransfoPowerData(building.influx_naam!, 'realtime').then((fields) => {
          const data = fields['TotaalNet'];
          let buildingPower = data.at(-1)?.value;
          setRealtimePower(buildingPower);
        });

      const fetchBuildingPowerData = () =>
        getTransfoPowerData(building.influx_naam!, 'daily', true).then((fields) => {
          const data = fields['TotaalNet'];
          setMonthlyPower(data);
        });

      fetchBuildingRealtimeData();
      fetchBuildingPowerData();

      const realtimeInterval = setInterval(fetchBuildingRealtimeData, 1000 * 6); // 6s
      const powerInterval = setInterval(fetchBuildingPowerData, 1000 * 60 * 60); // 1h

      return () => {
        clearInterval(realtimeInterval);
        clearInterval(powerInterval);
      };
    }
  }, [building]);

  const options: any = {
    scales: {
      y: {
        ticks: {
          callback: function (value: number) {
            return value.toLocaleString('nl-NL') + ' kWh';
          },
          font: {
            size: 14,
            family: 'Roboto',
            weight: 'bold',
          },
        },
      },
      x: {
        ticks: {
          font: {
            size: 14,
            family: 'Roboto',
            weight: 'bold',
          },
        },
      },
    },
    plugins: {
      datalabels: {
        formatter: (value: number) => '',
        // `${value?.toLocaleString('nl-NL', { maximumFractionDigits: 2 })} kWh`,
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
      new Date(d.time).toLocaleString('nl-NL', { day: '2-digit' }),
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
    <div className="embla__slide grid grid-flow-col grid-cols-6 grid-rows-6 gap-6 bg-base-100 p-12 ">
      <div
        id="info_card"
        className="col-start-1 col-end-4 row-span-3 flex flex-row items-center overflow-hidden rounded-lg bg-white"
      >
        {building?.profielfoto ? (
          <img
            className=" h-full w-[55%] rounded-l-lg"
            src={building?.profielfoto?.at(0)?.url ?? ''}
            alt={building?.naam}
          />
        ) : (
          <div className="flex aspect-square h-full w-[55%] content-center items-center justify-center rounded-l-lg bg-slate-200">
            <h1 className="text-lg font-bold uppercase">Image not found</h1>
          </div>
        )}

        <div className=" flex h-full w-full flex-col items-center justify-start overflow-hidden p-4">
          <div className="flex h-[20%] items-start justify-center">
            <h1 className=" font-roboto text-2xl font-bold">{building?.naam}</h1>
          </div>
          <p className="h-auto self-center justify-self-center p-4 text-justify font-roboto text-base leading-[1.5]">
            {building?.info}
          </p>
        </div>
      </div>
      <div
        id="map_card"
        className="col-start-4 col-end-6 row-start-1 row-end-4 flex items-center justify-center rounded-lg bg-white p-4"
      >
        {' '}
        <TransfoMap selectedBuilding={building.building_id} />
      </div>
      <div
        id="rtd_1"
        className="col-start-6 col-end-7 row-start-1 row-end-1 flex flex-col items-center justify-center rounded-lg bg-white"
      >
        {''}

        <h1 className="font-roboto text-xl font-semibold">
          Prijs maand {building?.categorie ? building?.categorie[0].toLowerCase() : 'kWh'}
        </h1>
        <p className="font-roboto text-3xl font-bold text-verbruik-72">
          €{' '}
          {((monthlyPower?.at(-2)?.value ?? 0) * 0.291).toLocaleString('NL-nl', {
            maximumFractionDigits: 2,
          }) ?? '-'}
        </p>
      </div>
      <div
        id="rtd_2"
        className="col-start-6 col-end-7 row-start-2 row-end-2 flex flex-col items-center justify-center rounded-lg bg-white"
      >
        {' '}
        <h1 className="font-roboto text-xl font-semibold">
          Totaal maand{' '}
          {building?.categorie ? building?.categorie[0].toLowerCase() : 'kWh'}
        </h1>
        <p className="font-roboto text-3xl font-bold text-verbruik-72">
          {monthlyPower?.at(-2)?.value?.toLocaleString('NL-nl', {
            maximumFractionDigits: 0,
          }) ?? '-'}
          <span className="text-2xl"> kWh</span>
        </p>
      </div>
      <div
        id="rtd_3"
        className="col-start-6 col-end-7 row-start-3 row-end-3 flex flex-col items-center justify-center rounded-lg bg-white"
      >
        {' '}
        <h1 className="font-roboto text-xl font-semibold">
          Huidig {building?.categorie ? building?.categorie[0].toLowerCase() : 'kWh'}
        </h1>
        <p className="font-roboto text-3xl font-bold text-verbruik-72">
          {realtimePower?.toLocaleString('NL-nl', {
            maximumFractionDigits: 2,
          }) ?? '-'}
          <span className="text-2xl"> kW</span>
        </p>
      </div>
      <div
        id="graph"
        className="col-start-1 col-end-5 row-span-3 row-start-4 flex flex-col items-center justify-center rounded-lg bg-white p-4"
      >
        <h1 className="mb-1 justify-self-start font-roboto text-xl font-bold">
          {building?.categorie ? building?.categorie : 'kWh'} per maand
        </h1>
        <div className="mx-0 my-auto flex w-full flex-col items-center justify-center ">
          {monthlyPower ? (
            <Bar
              data={Bardata}
              className={'max-w-72 max-h-72 px-4 font-roboto'}
              options={options}
            />
          ) : (
            <div>
              <h1 className="font-roboto font-semibold">Grafiek data niet beschikbaar</h1>
            </div>
          )}
        </div>
      </div>
      <div
        id="socials"
        className=" col-start-5 col-end-7 row-span-3 flex overflow-hidden rounded-lg bg-white  p-5"
      >
        <div className="flex h-0 w-[60%] flex-row flex-wrap">
          {building?.hashtags && building?.hashtags.length > 0 ? (
            building?.hashtags.map((tag) => <Tag key={tag} text={tag} />)
          ) : (
            <></>
          )}
        </div>

        <div className="flex w-[40%] items-end justify-end">
          <QRcode className=" m-3 h-auto w-40" />
        </div>
      </div>
    </div>
  );
}

export default GebouwSlide;
