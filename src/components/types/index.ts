import { type } from "os";

interface Country {
  flags: CountryFlag;
  name: CountryName;
  capital: string[];
  region: string;
  area: number;
  population: number;
}

interface CountryName {
  common: string;
  official: string;
  nativeName: CountryNativeName;
}

interface CountryAllNative {
  official: string;
  common: string;
}

interface CountryNativeName {
  [key: string]: CountryAllNative | undefined;
}

interface CountryFlag {
  png: string;
  svg: string;
}

export type {
  Country,
  CountryFlag,
  CountryName,
  CountryNativeName,
  CountryAllNative,
};
