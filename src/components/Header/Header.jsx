import React from 'react';
import './Header.scss';

function Header() {
    return (
        <div className={'header'}>
            <div className={'header__text'}>Where in the world?</div>
            <div className={'header__color-mode'}>
                <ion-icon name="moon-sharp" ></ion-icon>
                <div>Dark Mode</div>
            </div>
        </div>
    );
}

export default Header;