import { log } from 'console';

export const get = async (url: string) => {
  const AIR_KEY = window['env']['AIR_KEY'];
  console.log(AIR_KEY);
  return await fetch(url, {
    headers: {
      Authorization: 'Bearer ' + AIR_KEY,
      'Content-Type': 'application/json',
    },
  }).then((response) => response.json());
};
