import { get } from '../utils/data-acces';

export default async () => {
  try {
    const data = await get(
      `https://api.airtable.com/v0/appS16VafPZAqBNVV/Gebouwen/dsadas`,
    );
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};
