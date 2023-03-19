import React from 'react';
import { CountryList } from './components/CountryList';
import { transformCountries } from './mappers/transform';
import countriesOriginal from './materials/country-data.json';

export const App = () => {

  const transformedCountries = transformCountries(countriesOriginal);
  return < div className='container' >
    <h1 className='text-center p-3'>Country List</h1>
    <CountryList countriesTrans={transformedCountries} />
  </div >
}

