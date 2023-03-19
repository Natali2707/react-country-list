import { Country } from "../components/types";

export interface TransformCountries {
  region: string;
  area: number;
  population: number;
  capital: string;
  name: string;
  flags: string;
}

export const transformCountries = (
  countries: Country[]
): TransformCountries[] => {
  return countries.map((country) => ({
    name: country.name.common,
    capital: country.capital[0],
    population: country.population,
    flags: country.flags.svg,
    area: country.area,
    region: country.region,
  }));
};
