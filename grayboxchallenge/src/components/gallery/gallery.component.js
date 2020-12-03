import React from 'react'

const Gallery = (altText) => {
    
    return (
    <div>
        <img alt={altText.alt} src={altText.source} />
    </div>    
    )
}

export default Gallery