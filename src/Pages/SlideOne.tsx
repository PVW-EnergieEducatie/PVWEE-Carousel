import { Doughnut, Pie } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';

Chart.register(ChartDataLabels);
import Transfo from '../assets/zwevegem.debeeldbank.be3__0.jpg';
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
} from 'chart.js';

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
  const options = {
    plugins: {
      datalabels: {
        color: 'white',
        font: {
          size: 14,
          family: 'Roboto',
          weight: 'bold',
          color: '#ffffff',
        },
      },
      legend: {
        labels: {
          render: 'value',
          color: '#000',
          font: {
            size: 14,
            family: 'Roboto',
            weight: 'bold',
          },
        },
      },
    },
  };

  const data = {
    labels: ['Red', 'Blue', 'Yellow'],
    datasets: [
      {
        label: '# of Votes',
        color: '#ffffff',
        data: [300, 50, 100],
        backgroundColor: ['#89b6cc', '#b1cc65', '#b84626'],
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
        <img src={Transfo} alt="" className="mb-3 h-56 w-full rounded-t-lg" />
        <h1 className=" text-2xl font-bold ">Transfo Site</h1>
        <p className="p-3  text-center text-sm">
          Transfo is een beschermde erfgoedparel met een unieke uitstraling.
          Deze voormalige elektriciteitscentrale is een uitzonderlijk monument
          door haar imposante omvang en de hoge kwaliteit van het industriële
          erfgoed. Haar geografische ligging in het groene Zwevegem, langs het
          Kanaal Bossuit-Kortrijk, in combinatie met de sport- en
          cultuurprogrammatie transformeert de site in een aantrekkelijke
          recreatieve hot spot.
          <br />
          <br /> De herbestemming van de site trekt experten in recreatie aan
          zoals Oenanthe (avontuurlijk sporten), Transfo Duiktank, Plong Escape
          Rooms, Transfo Climbing (Klimzaal) en De Circus Brouwerij (craft
          brewery), Ten slotte ontstaat er dankzij co-creatie en kruisbestuiving
          tussen alle aanbieders op Transfo een gevarieerd aanbod voor
          verschillende doelgroepen: sportfanaten, gezinnen met kinderen,
          levensgenieters, cultuuradepten, kunstliefhebbers, …
        </p>
      </div>
      <div
        id="small1"
        className="col-start-3 col-end-6 row-start-1 row-end-1 flex items-center justify-center rounded-lg bg-white"
      >
        {' '}
        {/* @ts-ignore */}
        <Pie
          data={data}
          className={'max-w-72 max-h-72 px-4'}
          options={options}
        />
      </div>
      <div
        id="small2"
        className="col-start-6 col-end-9 row-start-1 row-end-1 flex items-center justify-center rounded-lg bg-white"
      >
        <p> Realtime card</p>
      </div>
      <div
        id="bigbottom"
        className="col-span-6 flex items-center justify-center rounded-lg bg-white"
      >
        <p>chart Card</p>
      </div>
    </div>
  );
}

export default SlideOne;
