import { Country, TransformCountry } from "../types/types";

export const transformCountries = (
  countries: Country[]
): TransformCountry[] => {
  return countries.map((country) => ({
    name: country.name.common,
    capital: country.capital[0],
    population: country.population,
    flags: country.flags.svg,
    area: country.area,
    region: country.region,
  }));
};
