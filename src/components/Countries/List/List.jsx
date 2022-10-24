import React from 'react';
import Item from "../Item/Item.jsx";
import './List.scss';
import PropTypes from "prop-types";
import {useNavigate} from "react-router-dom";

function List({countries}) {
    const navigate = useNavigate();

    return (
        <div className={'list'}>
            {Array.isArray(countries)
                && countries.map(country =>
                    <Item key={country.numericCode}
                          flag={country.flag}
                          population={country.population}
                          capital={country.capital}
                          region={country.region}
                          country={country.name}
                          onClick={() => navigate(`/country/${country.name}`)}
                    />
                )
            }
        </div>
    );
}


List.propTypes = {
    countries: PropTypes.arrayOf(
        PropTypes.shape({
            country: PropTypes.string,
            population: PropTypes.number,
            region: PropTypes.string,
            capital: PropTypes.string,
            flag: PropTypes.string
        }))
}

List.defaultProps = {
    countries: []
}

export default List;