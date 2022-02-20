import React from "react";
import './view-collection.styles.scss';

function PrintCollection (props){
    return(
        <div className="viewBox">
            <div className="imagePortion">
                <div 
                className='image' 
                style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}${props.data.imageSource})`
                }}
                />
            </div>
            <div className="dataPortion">
                <h3>{props.data.title}</h3>
                <p>{props.data.paragraph}</p>
            </div>
        </div>
    )
}
export default PrintCollection;