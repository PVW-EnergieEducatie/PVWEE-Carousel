import { get } from '../utils/data-acces';

export const getVideoURL = () => {
  try {
    // const data = await get(
    //   `https://api.airtable.com/v0/appS16VafPZAqBNVV/Gebouwen/dsadas`,
    // );
    // console.log(data);
    return 'https://www.youtube.com/watch?v=jXiiulGxrT4';
  } catch (err) {
    console.log(err);
  }
};
