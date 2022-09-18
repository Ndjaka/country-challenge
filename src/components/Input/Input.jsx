import React from 'react';
import './Input.scss';

function Input() {
    return (
        <div className={'text__field'}>
            <ion-icon name="search"></ion-icon>
            <input placeholder={'Search for country...'} />
        </div>
    );
}

export default Input;