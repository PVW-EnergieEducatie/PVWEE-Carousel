import { createContext, useContext, useEffect, useState } from 'react';
import { Gebouw } from '../interfaces/Gebouw';
import { get } from '../utils/data-acces';

export interface GebouwContextType {
  gebouw: Gebouw | undefined;
  setGebouw: Function;
}

export const GebouwContext = createContext<GebouwContextType>({
  gebouw: undefined,
  setGebouw: (gebouw: Gebouw) => {},
});

export const useGebouw = () => useContext(GebouwContext);

export const getgebouwen = () => {
  return get(`https://api.airtable.com/v0/appS16VafPZAqBNVV/Gebouwen`).then((data) => {
    const tempArray: Gebouw[] = [];
    data.records.forEach((record: { fields: any }) => {
      tempArray.push(record.fields);
    });
    return tempArray;
  });
};
