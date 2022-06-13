import { useEffect, useState } from 'react';
import { Summary } from '../interfaces/Summary';
import { get } from '../utils/data-acces';

export default () => {
  const [summary, setSummary] = useState<Summary>();

  const refreshData = () => {
    get('https://api.airtable.com/v0/appS16VafPZAqBNVV/Summary/recQ66nzImy3t0Ahz')
      .then((data) => {
        console.log(data);

        setSummary(data.fields);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    refreshData();
  }, []);

  return { summary, refreshData };
};
