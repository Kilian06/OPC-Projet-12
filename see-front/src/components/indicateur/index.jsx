import React from 'react';
import PictoTagVert from '../pictoTagVert';

function CardIndicateur(props) {
    return (
        <li className='cardIndicateur'>
            <div className='cardPicto'>
            <PictoTagVert
          picto={props.logo}
          backgroundColor={props.back}
          opacity={props.opacity} />
            </div>
            <div className='cardContent'>
                <p className='cardValue'>{props.info + props.unite}</p>
                <p className='cardLegend'>{props.type}</p>
            </div>

        </li>
    );
}

export default CardIndicateur;