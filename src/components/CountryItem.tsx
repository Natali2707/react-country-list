import { Badge } from "./Badge"


interface CountryItemProps {
    region: string;
    area: number;
    population: number;
    capital: string;
    name: string;
    flags: string;
}


export const CountryItem = ({ region, area, population, capital, name, flags }: CountryItemProps) => {
    return (
        <li className="list-group-item d-flex flex-column  ">
            <div className="d-flex align-items-center">
                <div className="text-center">
                    <img src={flags} className=" w-50 rounded float-start img-thumbnail" alt="flag" />
                </div>
                <h5 className="m-3">{region}</h5>
                <h5 className="m-3">{capital}</h5>
                <h5 className="m-3">{name}</h5>
                < Badge color='primary' label="area" info={area} />
                <Badge color='secondary' label="population" info={population} />
            </div>
        </li >
    )
}
