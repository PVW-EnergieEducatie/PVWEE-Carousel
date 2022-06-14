import BuildingArray from '../interfaces/BuildingData';

const AIR_TABLE_KEY = window['env']['AIRTABLE_KEY'];
const INFLUX_API_BASE = window['env']['API_INFLUX_URL'];

export const get = async (url: string) => {
  if (!AIR_TABLE_KEY) {
    throw new Error('AIR_TABLE_KEY was not provided!');
  }
  return await fetch(url, {
    headers: {
      Authorization: 'Bearer ' + AIR_TABLE_KEY,
      'Content-Type': 'application/json',
    },
  }).then((response) => {
    if (response.status === 401) {
      throw new Error('Invalid AIR_TABLE_KEY');
    }
    return response.json();
  });
};

export const getTransfoPowerData = async (
  building: 'total' | string,
  time: 'daily' | 'monthly' | 'realtime',
  showRecent: boolean = false,
  calendarTime: boolean = true,
) => {
  if (!INFLUX_API_BASE) {
    throw new Error('API_INFLUX_URL was not provided!');
  }
  const res = await fetch(
    `${INFLUX_API_BASE}/api/v1/transfo/power/usage/${building}/${time}?showRecent=${showRecent}&calendarTime=${calendarTime}`,
  );
  if (res.status == 200) {
    let data = await res.json();
    return data['values'] as BuildingArray;
  } else {
    throw new Error('Failed to fetch transfo building data');
  }
};
