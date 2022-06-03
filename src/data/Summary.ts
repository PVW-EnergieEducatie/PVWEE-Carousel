import { useEffect, useState } from 'react';
import { Summary } from '../interfaces/Summary';
import { get } from '../utils/data-acces';

export default () => {
  const [airData, setAirData] = useState<Summary>();

  useEffect(() => {
    get(
      'https://api.airtable.com/v0/appS16VafPZAqBNVV/Summary/recQ66nzImy3t0Ahz',
    )
      .then((data) => {
        setAirData(data.fields);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return airData;
};
