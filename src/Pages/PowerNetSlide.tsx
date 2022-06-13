import { SVG } from '@svgdotjs/svg.js';
import { useEffect, useState } from 'react';
import { ReactComponent as Stroom } from '../assets/svg/EnergieStroom.svg';
import BuildingArray from '../interfaces/BuildingData';
import { getTransfoPowerData } from '../utils/data-acces';

function PowerNetSlide() {
  const [realtimePower, setRealtimePower] = useState<BuildingArray>();

  useEffect(() => {
    // fetch realtime values every 6s and store in state
    const fetchRealtimeData = () =>
      getTransfoPowerData('total', 'realtime').then((buildings) => {
        console.log('getting data');

        delete buildings['Smappee']; // remove Smappee from data as it is not a building
        setRealtimePower(buildings);
      });

    // execute right now first and after that every X seconds
    fetchRealtimeData();
    const realtimeInterval = setInterval(fetchRealtimeData, 1000 * 6); // 6s

    return () => {
      clearInterval(realtimeInterval);
    };
  }, []);

  useEffect(() => {
    if (realtimePower) {
      console.log('setting svg', realtimePower);
      let svg = SVG('#PowerNet');

      let totalPower = 0;
      for (const [key, building] of Object.entries(realtimePower)) {
        let buildingPower = building.at(-1)?.value ?? 0;
        totalPower += buildingPower;

        if (buildingPower > 0) {
          let element = svg.findOne(`#${key}_powertext`);
          if (element) {
            element.node.textContent = `${buildingPower.toLocaleString('NL-nl', {
              maximumFractionDigits: 2,
            })} kW`;
          }
        }
      }
      // set sum of all buildings
      svg.findOne('#Transfo_powertext')!.node.textContent = `${totalPower.toLocaleString(
        'NL-nl',
        {
          maximumFractionDigits: 2,
        },
      )} kW`;
    }
  }, [realtimePower]);

  return (
    <div className="embla__slide flex items-center justify-center bg-base-100 p-12">
      <div className="flex h-full w-full items-center justify-center rounded-lg bg-white p-5 ">
        <Stroom className="h-full w-full" />
      </div>
    </div>
  );
}

export default PowerNetSlide;
