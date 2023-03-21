import React from 'react';
import { CountryList } from './components/CountryList';
import { transformCountries } from './mappers/transformCountries';
import countriesAPI from './materials/country-data.json';

export const App = () => {

  const transformedCountries = transformCountries(countriesAPI);
  return < div className='container' >
    <h1 className='text-center p-3'>Country List</h1>
    <CountryList countriesTransform={transformedCountries} />
  </div >
}

