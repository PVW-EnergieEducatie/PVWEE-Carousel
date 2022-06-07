import BuildingArray from '../interfaces/BuildingData';

const AIR_KEY = window['env']['AIR_KEY'];
const INFLUX_BASE = window['env']['INFLUX_URL'];

export const get = async (url: string) => {
  return await fetch(url, {
    headers: {
      Authorization: 'Bearer ' + AIR_KEY,
      'Content-Type': 'application/json',
    },
  }).then((response) => response.json());
};

export const getTransfoPowerData = async (
  building: 'total' | string,
  time: 'daily' | 'monthly' | 'realtime',
) => {
  const res = await fetch(
    `${INFLUX_BASE}/api/v1/transfo/power/usage/${building}/${time}?showRecent=true`,
  );
  if (res.status == 200) {
    let data = await res.json();
    return data['values'] as BuildingArray;
  } else {
    throw new Error('Failed to fetch transfo building data');
  }
};
