import { Bar, Doughnut, Pie } from 'react-chartjs-2';
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
  CoreChartOptions,
  ChartOptions,
} from 'chart.js';
import Summary from '../data/Summary';
import { useEffect } from 'react';
import { CSSOptions } from 'vite';

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
  useEffect(() => {
    console.log(summary?.foto[0]);
  }, [summary]);

  const options: ChartOptions = {
    plugins: {
      datalabels: {
        color: 'white',
        font: {
          size: 14,
          family: 'Roboto',
          weight: 'bold',
        },
      },
      legend: {
        labels: {
          color: '#000',
          font: {
            size: 14,
            family: 'Roboto',
            weight: 'bold' as const,
          },
        },
      },
    },
  };

  const Piedata = {
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
          options={options}
        />
      </div>
      <div
        id="small2"
        className="col-start-6 col-end-9 row-start-1 row-end-1 flex flex-col items-center justify-center rounded-lg bg-white"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="365"
          height="128.795"
          viewBox="0 0 365 128.795"
          className="mb-5"
        >
          <g id="Group_74" data-name="Group 74" transform="translate(0 2.5)">
            <line
              id="Line_19"
              data-name="Line 19"
              x2="365"
              transform="translate(0 123.795)"
              fill="none"
              stroke="#cc4e2a"
              stroke-width="5"
            />
            <g
              id="Group_72"
              data-name="Group 72"
              transform="translate(157.5 0)"
            >
              <path
                id="Path_12"
                data-name="Path 12"
                d="M-6099.623,6568.42h124.375v-82.289l-44.475,24.741v-24.741l-43.69,24.741v-24.741l-40.343,22.908Z"
                transform="translate(6151.578 -6445.079)"
                fill="none"
                stroke="#cc4e2a"
                stroke-linecap="round"
                stroke-width="5"
              />
              <path
                id="Path_13"
                data-name="Path 13"
                d="M-6138.33,6577.6l11.021-123.342h30.5l10.823,123.342Z"
                transform="translate(6138.33 -6454.261)"
                fill="none"
                stroke="#cc4e2a"
                stroke-width="5"
              />
              <path
                id="Path_14"
                data-name="Path 14"
                d="M0,0H35.963"
                transform="translate(8.064 41.529)"
                fill="none"
                stroke="#cc4e2a"
                stroke-width="4"
              />
              <line
                id="Line_17"
                data-name="Line 17"
                x2="35.963"
                transform="translate(8.064 27.359)"
                fill="none"
                stroke="#cc4e2a"
                stroke-width="5"
              />
              <line
                id="Line_18"
                data-name="Line 18"
                x2="33.196"
                transform="translate(10.83 13.19)"
                fill="none"
                stroke="#cc4e2a"
                stroke-width="5"
              />
              <g
                id="Rectangle_130"
                data-name="Rectangle 130"
                transform="translate(62.33 78.628)"
                fill="none"
                stroke="#cc4e2a"
                stroke-width="5"
              >
                <rect width="29" height="18.625" stroke="none" />
                <rect x="2.5" y="2.5" width="24" height="13.625" fill="none" />
              </g>
              <g
                id="Rectangle_131"
                data-name="Rectangle 131"
                transform="translate(98.33 78.628)"
                fill="none"
                stroke="#cc4e2a"
                stroke-width="5"
              >
                <rect width="29" height="18.625" stroke="none" />
                <rect x="2.5" y="2.5" width="24" height="13.625" fill="none" />
              </g>
              <g
                id="Rectangle_132"
                data-name="Rectangle 132"
                transform="translate(134.33 78.628)"
                fill="none"
                stroke="#cc4e2a"
                stroke-width="5"
              >
                <rect width="29" height="18.625" stroke="none" />
                <rect x="2.5" y="2.5" width="24" height="13.625" fill="none" />
              </g>
            </g>
            <g
              id="Group_73"
              data-name="Group 73"
              transform="translate(55.5 29.271)"
            >
              <line
                id="Line_20"
                data-name="Line 20"
                x1="6.805"
                y2="65.484"
                transform="translate(1.134 29.04)"
                fill="none"
                stroke="#cc4e2a"
                stroke-width="3"
              />
              <line
                id="Line_21"
                data-name="Line 21"
                x2="5.293"
                y2="65.484"
                transform="translate(23.817 29.04)"
                fill="none"
                stroke="#cc4e2a"
                stroke-width="3"
              />
              <g
                id="Rectangle_133"
                data-name="Rectangle 133"
                transform="translate(2 25.144)"
                fill="none"
                stroke="#cc4e2a"
                stroke-width="1"
              >
                <rect width="27" height="4.656" rx="2.328" stroke="none" />
                <rect
                  x="0.5"
                  y="0.5"
                  width="26"
                  height="3.656"
                  rx="1.828"
                  fill="none"
                />
              </g>
              <g
                id="Rectangle_134"
                data-name="Rectangle 134"
                transform="translate(7 6.519)"
                fill="none"
                stroke="#cc4e2a"
                stroke-width="1"
              >
                <rect width="18" height="19.557" stroke="none" />
                <rect x="0.5" y="0.5" width="17" height="18.557" fill="none" />
              </g>
              <g
                id="Polygon_2"
                data-name="Polygon 2"
                transform="translate(0 0)"
                fill="none"
              >
                <path
                  d="M15.067.208a1,1,0,0,1,.866,0L27.044,5.549a1,1,0,0,1-.433,1.9H4.389a1,1,0,0,1-.433-1.9Z"
                  stroke="none"
                />
                <path
                  d="M 15.49999141693115 2.219036102294922 L 8.777643203735352 5.450176239013672 L 22.22235298156738 5.450176239013672 L 15.49999141693115 2.219036102294922 M 15.50000095367432 0.1095190048217773 C 15.64815330505371 0.1095190048217773 15.79630565643311 0.1424217224121094 15.93321132659912 0.2082266807556152 L 27.04439163208008 5.548886299133301 C 28.00308990478516 6.009696483612061 27.67488098144531 7.45017671585083 26.61117172241211 7.45017671585083 L 4.388820648193359 7.45017671585083 C 3.32512092590332 7.45017671585083 2.99690055847168 6.009696483612061 3.955610275268555 5.548886299133301 L 15.06679058074951 0.2082266807556152 C 15.20369625091553 0.1424217224121094 15.35184860229492 0.1095190048217773 15.50000095367432 0.1095190048217773 Z"
                  stroke="none"
                  fill="#cc4e2a"
                />
              </g>
              <line
                id="Line_22"
                data-name="Line 22"
                x2="18.146"
                y2="13.379"
                transform="translate(7.183 30.448)"
                fill="none"
                stroke="#cc4e2a"
                stroke-width="1"
              />
              <line
                id="Line_23"
                data-name="Line 23"
                x1="18.146"
                y2="13.379"
                transform="translate(5.671 30.448)"
                fill="none"
                stroke="#cc4e2a"
                stroke-width="1"
              />
              <line
                id="Line_24"
                data-name="Line 24"
                x1="19.659"
                y1="11.266"
                transform="translate(5.671 43.826)"
                fill="none"
                stroke="#cc4e2a"
                stroke-width="1"
              />
              <line
                id="Line_25"
                data-name="Line 25"
                y1="11.266"
                x2="20.415"
                transform="translate(4.915 43.826)"
                fill="none"
                stroke="#cc4e2a"
                stroke-width="1"
              />
              <line
                id="Line_26"
                data-name="Line 26"
                x2="21.927"
                y2="9.858"
                transform="translate(4.915 55.093)"
                fill="none"
                stroke="#cc4e2a"
                stroke-width="1"
              />
              <line
                id="Line_27"
                data-name="Line 27"
                x1="21.171"
                y2="9.858"
                transform="translate(4.159 55.093)"
                fill="none"
                stroke="#cc4e2a"
                stroke-width="1"
              />
              <line
                id="Line_28"
                data-name="Line 28"
                x2="24.195"
                y2="12.674"
                transform="translate(4.159 64.95)"
                fill="none"
                stroke="#cc4e2a"
                stroke-width="1"
              />
              <line
                id="Line_29"
                data-name="Line 29"
                x1="24.195"
                y2="13.379"
                transform="translate(2.646 64.95)"
                fill="none"
                stroke="#cc4e2a"
                stroke-width="1"
              />
              <line
                id="Line_30"
                data-name="Line 30"
                x2="27.22"
                y2="15.491"
                transform="translate(2.646 78.329)"
                fill="none"
                stroke="#cc4e2a"
                stroke-width="1"
              />
              <line
                id="Line_31"
                data-name="Line 31"
                x1="27.22"
                y2="16.195"
                transform="translate(1.134 77.625)"
                fill="none"
                stroke="#cc4e2a"
                stroke-width="1"
              />
              <line
                id="Line_32"
                data-name="Line 32"
                y2="64.78"
                transform="translate(15.5 29.04)"
                fill="none"
                stroke="#cc4e2a"
                stroke-width="1"
              />
              <g
                id="Rectangle_135"
                data-name="Rectangle 135"
                transform="translate(5 20.488)"
                fill="none"
                stroke="#cc4e2a"
                stroke-width="1"
              >
                <rect width="21" height="5.588" stroke="none" />
                <rect x="0.5" y="0.5" width="20" height="4.588" fill="none" />
              </g>
              <g
                id="Rectangle_136"
                data-name="Rectangle 136"
                transform="translate(8 20.488)"
                fill="#fff"
                stroke="#cc4e2a"
                stroke-width="1"
              >
                <rect width="15" height="5.588" stroke="none" />
                <rect x="0.5" y="0.5" width="14" height="4.588" fill="none" />
              </g>
              <g
                id="Rectangle_137"
                data-name="Rectangle 137"
                transform="translate(10 20.488)"
                fill="#fff"
                stroke="#cc4e2a"
                stroke-width="1"
              >
                <rect width="12" height="5.588" stroke="none" />
                <rect x="0.5" y="0.5" width="11" height="4.588" fill="none" />
              </g>
              <g
                id="Rectangle_138"
                data-name="Rectangle 138"
                transform="translate(11 20.488)"
                fill="#fff"
                stroke="#cc4e2a"
                stroke-width="1"
              >
                <rect width="9" height="5.588" stroke="none" />
                <rect x="0.5" y="0.5" width="8" height="4.588" fill="none" />
              </g>
              <g
                id="Rectangle_139"
                data-name="Rectangle 139"
                transform="translate(13 20.488)"
                fill="#fff"
                stroke="#cc4e2a"
                stroke-width="1"
              >
                <rect width="6" height="5.588" stroke="none" />
                <rect x="0.5" y="0.5" width="5" height="4.588" fill="none" />
              </g>
              <g
                id="Rectangle_140"
                data-name="Rectangle 140"
                transform="translate(14 20.488)"
                fill="#fff"
                stroke="#cc4e2a"
                stroke-width="1"
              >
                <rect width="3" height="5.588" stroke="none" />
                <rect x="0.5" y="0.5" width="2" height="4.588" fill="none" />
              </g>
            </g>
          </g>
        </svg>
        <p className="font-roboto">15kW</p>
      </div>
      <div
        id="bigbottom"
        className="col-span-6 flex items-center justify-center rounded-lg bg-white"
      >
        <Bar
          data={Piedata}
          className={'max-w-72 max-h-72 px-4'}
          options={options}
        />
      </div>
    </div>
  );
}

export default SlideOne;
