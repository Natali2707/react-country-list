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

interface CountryNative {
  official: string;
  common: string;
}

interface CountryNativeName {
  [key: string]: CountryNative | undefined;
}

interface CountryFlag {
  png: string;
  svg: string;
}

interface TransformCountry {
  region: string;
  area: number;
  population: number;
  capital: string;
  name: string;
  flags: string;
}
export type {
  Country,
  CountryFlag,
  CountryName,
  CountryNativeName,
  CountryNative,
  TransformCountry,
};
