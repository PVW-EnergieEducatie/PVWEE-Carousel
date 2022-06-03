import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Bar, Doughnut, Pie } from 'react-chartjs-2';
import { useEffect, useState } from 'react';
import Summary from '../data/Summary';

import { ReactComponent as TransfoDrawing } from '/src/assets/svg/TransfoDrawing.svg';

Chart.register(ChartDataLabels);
import {
  Chart,
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
  SubTitle,
  CoreChartOptions,
  ChartOptions,
} from 'chart.js';
import { getTransfoPowerData } from '../utils/data-acces';
import { BuildingPieChartData } from '../interfaces/BuildingData';

Chart.register(
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
  SubTitle,
);
function SlideOne() {
  const summary = Summary();
  const [realtimePower, setRealtimePower] = useState(0);
  const [buildingData, setBuildingData] = useState<BuildingPieChartData>({
    labels: [],
    values: [],
  });

  useEffect(() => {
    // fetch realtime values every 6s and store in state
    const fetchRealtimeData = () =>
      getTransfoPowerData('total', 'realtime').then((buildings) => {
        delete buildings['Smappee']; // remove Smappee from data as it is not a building
        let totalPower = 0;
        // sum up power of all buildings
        for (const [key, building] of Object.entries(buildings)) {
          let buildingPower = building.at(-1)?.value ?? 0;
          totalPower += buildingPower;
        }
        setRealtimePower(totalPower);
      });

    // fetch data daily and store in state
    const fetchBuildingData = () =>
      getTransfoPowerData('total', 'daily').then((buildings) => {
        delete buildings['Smappee']; // remove Smappee from data as it is not a building
        let allData = [];
        for (const [key, building] of Object.entries(buildings)) {
          // add data to array
          let buildingPower = building.at(-1)?.value;
          if (buildingPower) {
            allData.push({
              label: key,
              data: buildingPower,
            });
          }
        }
        // sort by power
        allData.sort((a, b) => b.data - a.data);
        // map to seperate arrays for chart
        let data: BuildingPieChartData = { labels: [], values: [] };
        allData.forEach((building) => {
          data.labels.push(building.label);
          data.values.push(building.data);
        });

        setBuildingData(data);
      });

    // execute right now first and after that every X seconds
    fetchRealtimeData();
    fetchBuildingData();
    const realtimeInterval = setInterval(fetchRealtimeData, 1000 * 6); // 6s
    const buildingInterval = setInterval(fetchBuildingData, 1000 * 60 * 60 * 24); // 24h

    return () => {
      clearInterval(realtimeInterval);
      clearInterval(buildingInterval);
    };
  }, []);

  const options: ChartOptions = {
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
        position: 'right',
        labels: {
          color: '#000',
          font: {
            size: 12,
            family: 'Roboto',
            weight: 'bold' as const,
          },
        },
      },
    },
  };

  const Piedata = {
    labels: buildingData.labels,
    datasets: [
      {
        label: '# of Votes',
        color: '#ffffff',
        data: buildingData.values,
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

  const BarData = {
    labels: buildingData.labels.slice(0, 3),
    datasets: [
      {
        label: '# of Votes',
        color: '#ffffff',
        data: buildingData.values.slice(0, 3),
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
    <div className="embla__slide grid grid-flow-col grid-cols-8 grid-rows-2 gap-6  bg-slate-200 p-12 ">
      <div
        id="bigleft"
        className="col-span-2 row-span-2 flex flex-col items-center rounded-lg bg-white "
      >
        <img
          src={summary?.foto[0].url}
          alt=""
          className="mb-3 h-56 w-full rounded-t-lg"
        />
        <h1 className=" font-roboto text-2xl font-bold">{summary?.name}</h1>
        <p className="p-3 text-center font-roboto text-sm">{summary?.inhoud}</p>
      </div>
      <div
        id="small1"
        className="col-start-3 col-end-6 row-start-1 row-end-1 flex items-center justify-center rounded-lg bg-white"
      >
        <Pie
          data={Piedata}
          className={'max-w-72 max-h-72 px-4'}
          options={{
            plugins: {
              legend: { ...options.plugins?.legend },
              datalabels: { display: false },
            },
          }}
        />
      </div>
      <div
        id="small2"
        className="col-start-6 col-end-9 row-start-1 row-end-1 flex flex-col items-center justify-center rounded-lg bg-white"
      >
        <TransfoDrawing className="mb-5" />
        <p className="rounded-lg bg-neutral-200 py-1 px-4 text-lg font-bold">
          {realtimePower ? realtimePower.toFixed(2) : '-'} kW
        </p>
      </div>
      <div
        id="bigbottom"
        className="col-span-6 flex items-center justify-center rounded-lg bg-white"
      >
        <Bar
          data={BarData}
          className={'max-w-72 max-h-72 px-4'}
          options={{
            plugins: {
              datalabels: { ...options.plugins?.datalabels },
              legend: { display: false },
            },
          }}
        />
      </div>
    </div>
  );
}

export default SlideOne;
