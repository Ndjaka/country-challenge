import React from 'react';
import './button.scss'
import PropTypes from "prop-types";

function Button({showIcon, value}) {
    return (
        <div>
            <div className="button">
                {showIcon && <ion-icon name="arrow-back-outline"></ion-icon>}
                <div className={"button__text"}>{value}</div>
            </div>
        </div>
    );
}

Button.propTypes = {
    showIcon : PropTypes.bool,
    value : PropTypes.string
}

Button.defaultProps  = {
    showIcon : false,
    value : ''
}


export default Button;