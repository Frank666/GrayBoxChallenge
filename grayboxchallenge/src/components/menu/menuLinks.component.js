import React from 'react'


const MenuLinks = (filters) => {    
    return (
        <div className="liBottomLine">
            <li>
            <i aria-hidden="true" ></i>
            <a href="/#" >{ filters.filters }</a>
            </li>
        </div>
    );
}

export default MenuLinks;