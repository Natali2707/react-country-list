import { TransformCountries } from "../mappers/transform";
import { CountryItem } from "./CountryItem";


export interface CountryListProps {
    countriesTransform: TransformCountries[],
}

export const CountryList = ({ countriesTransform }: CountryListProps) => {
    // console.log(props);
    return (
        <ul className="list-group ">
            {
                countriesTransform.map((country) => {
                    return <CountryItem {...country} />
                })
            }
        </ul>

    )
}
