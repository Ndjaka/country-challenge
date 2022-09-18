import React from 'react';
import './Item.scss'

function Item() {
    return (
        <div className={'card'}>
                <img src="https://flagcdn.com/cm.svg" alt="flags" />
                <div className="card__body">
                    <div className="title">United States of america</div>
                    <div className={'description'}>
                        <div className="description__item">
                            <div className="label">Population: </div>
                            <div className="value">323,947,000</div>
                        </div>
                        <div className="description__item">
                            <div className="label">Region: </div>
                            <div className="value">323,947,000</div>
                        </div>
                        <div className="description__item">
                            <div className="label">Capital: </div>
                            <div className="value">323,947,000</div>
                        </div>
                    </div>
                </div>
        </div>
    );
}

export default Item;