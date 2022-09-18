import React, {useState} from 'react';
import './Select.scss';

function Select() {
    const [show,setShow] = useState(false);

    return (
        <div className={'select'}>
            <div className="select__field" onClick={()=>setShow(prevState => !prevState)}>
                <div>Filter By Region</div>
                <ion-icon name="chevron-down"></ion-icon>
            </div>
            {show && <ul>
                <li>Afica</li>
                <li>America</li>
                <li>Asia</li>
                <li>Europe</li>
                <li>Oceania</li>
            </ul>}
        </div>
    );
}

export default Select;