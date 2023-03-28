import React from "react";

const GalleryItem = (key, src, alt) => {
    return (
        <li key={key } className="gallery-item">
            <img src={src} alt={alt} />
        </li>
    )
}

export default GalleryItem;