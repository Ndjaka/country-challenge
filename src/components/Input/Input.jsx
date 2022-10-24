import React from 'react';
import './Input.scss';
import PropTypes from "prop-types";

function Input({handleChangeInput}) {
    return (
        <div className={'text__field'}>
            <ion-icon name="search"></ion-icon>
            <input onChange={handleChangeInput} placeholder={'Search for country...'} />
        </div>
    );
}

Input.propTypes = {
    handleChangeInput : PropTypes.func
}

Input.defaultProps = {
    handleChangeInput : (value) => {}
}
export default Input;