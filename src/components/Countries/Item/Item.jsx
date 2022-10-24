import React from 'react';
import './Item.scss'
import PropTypes from "prop-types";

function Item({flag, country, region, population, capital, onClick}) {
    return (
        <div onClick={onClick} className={'card'}>
            <img  src={flag} alt={country} />
            <div className="card__body">
                <div className="title">{country}</div>
                <div className={'description'}>
                    <div className="description__item">
                        <div className="label">Population:</div>
                        <div className="value">{population}</div>
                    </div>
                    <div className="description__item">
                        <div className="label">Region:</div>
                        <div className="value">{region}</div>
                    </div>
                    <div className="description__item">
                        <div className="label">Capital:</div>
                        <div className="value">{capital}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

Item.propTypes = {
    country: PropTypes.string,
    population: PropTypes.number,
    region: PropTypes.string,
    capital: PropTypes.string,
    flag: PropTypes.string,
    onClick: PropTypes.func
}

Item.defaultProps = {
    country: '',
    population: '',
    region: '',
    capital: '',
    flag: '',
    onClick: () => { }
}


export default Item;