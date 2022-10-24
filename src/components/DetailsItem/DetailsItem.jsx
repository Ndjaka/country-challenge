import React from 'react';
import './DetailsItem.scss'
import PropTypes from 'prop-types';

function DetailsItem({label,value}) {
    return (
        <div className={"detail__item"}>
            <div className={"detail__item__label"}>{label} :</div>
            <div className={"detail__item__value"}>{value}</div>
        </div>
    );
}

DetailsItem.propTypes = {
    label : PropTypes.string,
    value : PropTypes.any
}

DetailsItem.defaultProps  = {
    label : '',
    value : ''
}

export default DetailsItem;