import { useEffect, useState } from 'react';
import { Gebouw } from '../interfaces/Gebouw';
import { get } from '../utils/data-acces';

export default () => {
  const [airData, setAirData] = useState<Gebouw[]>([]);

  const getgebouwen = () => {
    get(`https://api.airtable.com/v0/appS16VafPZAqBNVV/Gebouwen`)
      .then((data) => {
        //console.log('Succes:', data)
        const tempArray: Gebouw[] = [];

        data.records.forEach((record: { fields: any }) => {
          tempArray.push(record.fields);
        });

        setAirData(tempArray);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };
  useEffect(() => {
    getgebouwen();
  }, []);

  return airData;
};
