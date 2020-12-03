import React from 'react'

const GenericButton = (text) => {    
    return (
        <div>
            <a href="/#" className="myButton" >{text.text}</a>
        </div>
    )
}

export default GenericButton;
