import React,  {useState} from 'react';
import './Select.scss';
import PropTypes from "prop-types";

function Select({onSelectRegion}) {
    const [show, setShow] = useState(false);
    const [name, setName] = useState('Filter By Region');


    /**
     *
     * @param region that we added state
     *
     */
    const handleSelectRegion = (region) => {
        onSelectRegion(region.toLowerCase());
        setName(region);
        setShow(prevState => !prevState);
    }

    return (
        <div className={'select'}>
            <div className="select__field" onClick={() => setShow(prevState => !prevState)}>
                <div>{name}</div>
                <ion-icon name="chevron-down"></ion-icon>
            </div>
            {show && <ul>
                {
                    ["Africa", "Americas", "Asia", "Europe", "Oceania"].map((country, id) => <li
                        onClick={() => handleSelectRegion(country)} key={id}>{country}</li>)
                }
            </ul>
            }
        </div>
    );
}

Select.propTypes = {
    onSelectRegion: PropTypes.func
}

Select.defaultProps = {
    onSelectRegion: (value) => {
    }
}

export default Select;