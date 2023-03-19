import { TransformCountries } from "../mappers/transform";
import { CountryItem } from "./CountryItem";


export interface CountryListProps {
    countriesTrans: TransformCountries[],
}

export const CountryList = ({ countriesTrans }: CountryListProps) => {
    return (
        <ul className="list-group ">
            {
                countriesTrans.map((countryObj) => {
                    return <CountryItem countryObj={countryObj} />
                })
            }
        </ul>

    )
}
