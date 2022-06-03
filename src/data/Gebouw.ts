import { useEffect, useState } from 'react';
import { Gebouw } from '../interfaces/Gebouw';
import { get } from '../utils/data-acces';

export default (gebouwId: string) => {
  const [airData, setAirData] = useState<Gebouw>();

  useEffect(() => {
    get(`https://api.airtable.com/v0/appS16VafPZAqBNVV/Gebouwen/${gebouwId}`)
      .then((data) => {
        setAirData(data.fields);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return airData;
};
