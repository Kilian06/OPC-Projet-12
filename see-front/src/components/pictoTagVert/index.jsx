import React from 'react';

function PictoTagVert(props) {
    console.log(props.backgroundColor)
    
    return (
        <div className='picto'>
                <div className='pictoTag' style={{ backgroundColor: props.backgroundColor, opacity: props.opacity }}></div>
                <img className='pictoTagImg' src={props.picto}></img>

        </div>
    );
}

export default PictoTagVert;