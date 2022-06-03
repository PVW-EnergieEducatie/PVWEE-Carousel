import { useEffect } from 'react';
import Gebouwen from '../data/Gebouwen';
import { ReactComponent as QRcode } from '../assets/QRcode.svg';
import { ChartOptions } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import Tag from '../components/Tag';

function SlideFour() {
  const gebouwen = Gebouwen();
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
  const gebouw = gebouwen.find((g) => g.naam === 'Watertoren');
  useEffect(() => {
    console.log(gebouwen.find((g) => g.naam === 'Duiktank'));
  }, []);
  return (
    <div className="embla__slide grid grid-flow-col grid-cols-6 grid-rows-6 gap-6 bg-slate-200 p-12 ">
      <div
        id="info_card"
        className="col-start-1 col-end-4 row-span-3 flex flex-row items-center rounded-lg bg-white"
      >
        <img
          className="h-full w-[55%] rounded-l-lg"
          src={gebouw?.profielfoto[0].url}
          alt={gebouw?.naam}
        />

        <div className="p flex max-w-sm flex-col items-center p-5">
          <h1 className="mb-3 font-roboto text-2xl font-bold">
            {gebouw?.naam}
          </h1>
          <p className="font-roboto text-sm leading-[1.5]">{gebouw?.info}</p>
        </div>
      </div>
      <div
        id="map_card"
        className="col-start-4 col-end-6 row-start-1 row-end-4 flex items-center justify-center rounded-lg bg-white"
      >
        {' '}
        <svg
          id="Layer_2"
          data-name="Layer 2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 865.13 794.63"
          className="h-72 w-72"
        >
          <g id="Vlakken">
            <path
              className="fill-slate-300"
              d="M0,170.99l32.07,185.01,44,20,34,168s6,16-15,25-62.57,32.94-62.57,32.94l75.16,35.29,140.41-52.23,23,62s6,14,17,21,94,74,103,90l9,16,42.78,20.63v-69.28l-139.78-233.35,178-88,7,4,136-31v-124.47l23-1.53v-22.28l152.78-.74,65.28-139.02v-13.31l-185.06-6.65,2-69H80.29L0,170.99Z"
            />
            <polygon
              className="fill-slate-400"
              points="91.15 121.4 100.07 258 175.57 252.08 175.57 291 245.07 286 248.47 115.87 91.15 121.4"
            />
            <path
              className="fill-slate-400"
              d="M325.57,191l-9.5,95-6,45.17-3.35,102.83,44.65,3.46,81.45-33.17s20.25-11.3,19.75-43.3-3.5-112-3.5-112c0,0,17.32-19,36.66-20l19.34-1,6.17-1.5v-35.5h-185.67Z"
            />
          </g>
          <g id="Machinezaal">
            <rect
              className="fill-slate-700"
              x="372.07"
              y="111"
              width="123.3"
              height="34.78"
            />
          </g>
          <g id="Oud_Transfogebouw" data-name="Oud Transfogebouw">
            <polygon
              className="fill-slate-700"
              points="372.07 151.45 372.07 166.76 437.54 166.76 437.07 151 372.07 151.45"
            />
          </g>
          <g id="Nieuw_Transfogebouw" data-name="Nieuw Transfogebouw">
            <polygon
              className="fill-slate-700"
              points="440.94 151 441.07 171 503.87 171 503.87 151 440.94 151"
            />
          </g>
          <g id="Ketelhuis">
            <polygon
              className="fill-slate-700"
              points="357.39 68.68 357.39 106.66 440.94 106.66 441.07 77 433.72 77.18 433.72 61.87 401.83 61.87 401.83 68.68 357.39 68.68"
            />
          </g>
          <g id="Oude_pompenzaal" data-name="Oude pompenzaal">
            <polygon
              className="fill-slate-700"
              points="445.07 77 445.07 106.66 495.07 107 495.07 70.94 481.76 70.94 482.07 45 460.07 48 460.07 65 449.07 65 449.45 76 445.07 77"
            />
          </g>
          <g id="Reservoirs_koelwater" data-name="Reservoirs koelwater">
            <path
              className="fill-slate-700"
              d="M372.07,171h11.61v3.69h47.06s4.67,8.97,0,9.64-58.67,0-58.67,0v-13.33Z"
            />
          </g>
          <g id="Mechaniekersgebouw">
            <polygon
              className="fill-slate-700"
              points="367.38 166.76 335.07 166.76 335.07 171 323.16 171 323.16 166.76 306.72 166.76 306.72 145.78 367.38 145.78 367.38 166.76"
            />
          </g>
          <g id="Werkhuis_Elektriekers" data-name="Werkhuis Elektriekers">
            <rect
              className="fill-slate-700"
              x="376.07"
              y="199"
              width="23.16"
              height="13.68"
            />
          </g>
          <g id="Voet_van_oude_koeltoren" data-name="Voet van oude koeltoren">
            <polygon
              className="fill-slate-700"
              points="407.07 218 407.07 235.35 419.07 247 437.54 247 449.07 236 449.07 218 437.54 205.84 419.4 205.84 407.07 218"
            />
          </g>
          <g id="Ventilatorengebouw">
            <rect
              className="fill-slate-700"
              x="319.05"
              y="68.68"
              width="13.04"
              height="42.32"
            />
          </g>
          <g id="Werkhuis___Watertoren" data-name="Werkhuis + Watertoren">
            <rect
              className="fill-slate-700"
              x="285.07"
              y="78"
              width="14.14"
              height="21.29"
            />
            <rect
              className="fill-slate-700"
              x="267.46"
              y="84.27"
              width="13.61"
              height="12.19"
            />
          </g>
          <g
            id="Opslagplaats_voor_ijzerafval"
            data-name="Opslagplaats voor ijzerafval"
          >
            <rect
              className="fill-slate-700"
              x="243.07"
              y="119"
              width="19.72"
              height="16.57"
            />
          </g>
          <g id="Overslaggebouwtje">
            <path
              className="fill-slate-700"
              d="M231.75,99.29c1.32,2.71,0,22.11,0,22.11h7.37v-22.11h-7.37Z"
            />
          </g>
          <g id="Pompgebouw_fuel" data-name="Pompgebouw fuel">
            <polygon
              className="fill-slate-700"
              points="205.67 111 205.67 119 222.68 121.4 222.68 110.35 205.67 111"
            />
          </g>
          <g
            id="Opslagplaats_kolen_en_sintels_as"
            data-name="Opslagplaats kolen en sintels/as"
          >
            <rect
              className="fill-slate-700"
              x="188.07"
              y="16.52"
              width="113.98"
              height="32.48"
            />
          </g>
          <g id="Bezinkingsbekkens">
            <path
              className="fill-slate-700"
              d="M539.02,76l311.81,2v6.27s-57.76,134.73-60.76,134.73h-164.87l-2.27-91.71h-83.91v-51.29Z"
            />
          </g>
          <g
            id="Voorpost_onderstation_70_kV"
            data-name="Voorpost onderstation 70 kV"
          >
            <polygon
              className="fill-slate-700"
              points="549.07 132 617.96 132 621.07 229 565.24 229 565.24 212.68 549.07 212.68 549.07 177.81 565.8 177.81 566.37 161 551.63 161 551.63 151 565.8 151 565.8 135.57 549.07 135.57 549.07 132"
            />
          </g>
          <g id="Brandweerarsenaal">
            <polygon
              className="fill-slate-700"
              points="459.65 219 460.07 234 470.07 234 470.07 219 459.65 219"
            />
          </g>
          <g id="Klimzaal">
            <path
              className="fill-slate-700"
              d="M499.07,278v59.4l10,8.6h13.51v3.87h-11.76l-38.42,6.8,3.66,19.32h35.74l38.26-7.98s-1-18.02-3-19.02-14,0-14,0l-1-4h14l-1.38-70.7h-37.42l-8.2,3.7Z"
            />
          </g>
          <g id="Transformatorpost">
            <path
              className="fill-slate-700"
              d="M595.28,247v15h6.24l2.55,99h8.79s1.79-115,0-114-17.57,0-17.57,0Z"
            />
          </g>
          <g id="Administratief_gebouw" data-name="Administratief gebouw">
            <polygon
              className="fill-slate-700"
              points="315.07 311 319.05 311 319.05 304 347.4 304 347.4 311 351.37 311 351.37 319.83 347.07 320 345.7 325.15 319.05 325.15 319.05 318.69 315.07 318.13 315.07 311"
            />
          </g>
          <g id="Opzichterswoning">
            <polygon
              className="fill-slate-700"
              points="351.37 292.26 352.15 304 355.2 304 355.55 314.57 366.07 314 366.07 309.27 377.07 309 377.59 303.42 388.01 303.42 387.07 291 351.37 292.26"
            />
          </g>
          <g id="Directeurswoning">
            <polygon
              className="fill-slate-700"
              points="392.07 303 392.07 289.35 403.05 290 403.07 286 400.64 286 401.07 269 408.07 270 408.07 280.28 413.07 280 413.07 276.73 417.07 277 418.07 281 426.07 280 427.07 299 402.07 299 401.07 295 396.07 295 396.53 303 392.07 303"
            />
          </g>
          <g
            id="Residentieel_woonproject_Mevaco_"
            data-name="Residentieel woonproject(Mevaco)"
          >
            <polygon
              className="fill-slate-700"
              points="85.07 405 136.07 397 141.07 419 89.07 428 85.07 405"
            />
            <polygon
              className="fill-slate-700"
              points="107.07 440 120.07 513 149.07 508 135.07 434 107.07 440"
            />
            <polygon
              className="fill-slate-700"
              points="24.07 306 78.07 297 84.07 327 29.07 336 24.07 306"
            />
            <polygon
              className="fill-slate-700"
              points="20.07 216 33.07 287 57.07 282 44.07 211 20.07 216"
            />
            <polygon
              className="fill-slate-700"
              points="4.07 190 1.07 171 4.07 165.73 42.57 160.39 47.07 183 4.07 190"
            />
          </g>
          <g
            id="Sociaal_woonproject_Eigen_Haard"
            data-name="Sociaal woonproject Eigen Haard"
          >
            <polygon
              className="fill-slate-700"
              points="53.07 606 75.07 617 166.07 580 158.07 563 53.07 606"
            />
            <polygon
              className="fill-slate-700"
              points="164.07 551.51 173.07 576 190.07 569 183.07 552 179.97 551.51 177.07 546.6 164.07 551.51"
            />
            <polygon
              className="fill-slate-700"
              points="215.5 564 220.07 578 245.07 569 238.07 551 220.07 559 221.16 561.3 215.5 564"
            />
          </g>
          <g id="Oude_loods" data-name="Oude loods">
            <polygon
              className="fill-slate-700"
              points="255.07 587 258.07 596 255.07 596 268.07 634 271.07 632 273.7 634 293.07 626 274.07 580.24 255.07 587"
            />
          </g>
          <g id="Bunker">
            <polygon
              className="fill-slate-700"
              points="279.07 638 276.07 644 311.07 670 315.07 664 279.07 638"
            />
          </g>
          <g id="Duiktank">
            <ellipse
              className="fill-slate-700"
              cx="147.07"
              cy="203.5"
              rx="28.5"
              ry="29"
            />
          </g>
          <g id="Oude_Stookolietank_3" data-name="Oude Stookolietank 3">
            <circle
              className="fill-slate-700"
              cx="202.57"
              cy="143.5"
              r="16.5"
            />
          </g>
          <g id="Oude_stookolietank_2" data-name="Oude stookolietank 2">
            <circle
              className="fill-slate-700"
              cx="203.57"
              cy="203.5"
              r="12.5"
            />
          </g>
          <g id="Noordelijke_schoorsteen" data-name="Noordelijke schoorsteen">
            <circle className="fill-slate-700" cx="310.07" cy="89" r="6" />
          </g>
          <g id="Centrale_schoorsteen" data-name="Centrale schoorsteen">
            <circle className="fill-slate-700" cx="440.57" cy="70.5" r="3.5" />
          </g>
          <g
            id="Tank_ter_hoogte_van_het_kanaal_en_jaagpad"
            data-name="Tank ter hoogte van het kanaal en jaagpad"
          >
            <circle className="fill-slate-700" cx="563.57" cy="40.5" r="12.5" />
          </g>
          <g id="Conciërgewoning">
            <polygon
              className="fill-slate-700"
              points="274.07 179 278.07 197 274.07 198.03 275.07 202 280.07 201 284.07 220 296.07 218 287.07 177 274.07 179"
            />
          </g>
        </svg>
      </div>
      <div
        id="rtd_1"
        className="col-start-6 col-end-7 row-start-1 row-end-1 flex flex-col items-center justify-center rounded-lg bg-white"
      >
        {' '}
        <h1 className="font-roboto font-semibold">Prijs maand verbruik</h1>
        <p className="font-roboto text-2xl font-bold text-verbruik-72">€40</p>
      </div>
      <div
        id="rtd_2"
        className="col-start-6 col-end-7 row-start-2 row-end-2 flex flex-col items-center justify-center rounded-lg bg-white"
      >
        {' '}
        <h1 className="font-roboto font-semibold">Totaal maand verbruik</h1>
        <p className="font-roboto text-2xl font-bold text-verbruik-72">
          15.95kWh
        </p>
      </div>
      <div
        id="rtd_3"
        className="col-start-6 col-end-7 row-start-3 row-end-3 flex flex-col items-center justify-center rounded-lg bg-white"
      >
        {' '}
        <h1 className="font-roboto font-semibold">Huidig verbruik</h1>
        <p className="font-roboto text-2xl font-bold text-verbruik-72">
          0.15kW
        </p>
      </div>
      <div
        id="graph"
        className="col-start-1 col-end-5 row-span-3 row-start-4 flex items-center justify-center rounded-lg bg-white"
      >
        <Bar
          data={Piedata}
          className={'max-w-72 max-h-72 px-4'}
          options={options}
        />
      </div>
      <div
        id="graph"
        className=" relative col-start-5 col-end-7 row-span-3 flex rounded-lg bg-white p-5 "
      >
        {gebouw?.hashtags && gebouw?.hashtags.length > 0 ? (
          gebouw?.hashtags.map((tag) => <Tag key={tag} text={tag} />)
        ) : (
          <></>
        )}

        <QRcode className=" absolute bottom-0 right-0 m-3 h-auto w-40" />
      </div>
    </div>
  );
}

export default SlideFour;
