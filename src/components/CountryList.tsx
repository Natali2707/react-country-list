import { TransformCountry } from "../types/types";
import { CountryItem } from "./CountryItem";


export interface CountryListProps {
    countriesTransform: TransformCountry[],
}

export const CountryList = ({ countriesTransform }: CountryListProps) => {
    return (
        <ul className="list-group ">
            {
                countriesTransform.map((country) => {
                    return <CountryItem key={country.area} country={country} />
                })
            }
        </ul>

    )
}
