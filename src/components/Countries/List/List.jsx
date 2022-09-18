import React from 'react';
import Item from "../Item/Item.jsx";
import  './List.scss';

function List() {
    return (
        <div className={'list'}>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
        </div>
    );
}

export default List;