import React from 'react'
import PropTypes from 'prop-types';
import PictoTagVert from '../pictoTagVert';

/**
 * 
 * @param {*} props 
 * @returns A card with information
 */
function CardIndicateur(props) {
    console.log(props)
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

CardIndicateur.propTypes = {
    back: PropTypes.string.isRequired,
    info: PropTypes.number.isRequired,
    logo: PropTypes.string.isRequired,
    opacity: PropTypes.number,
    type: PropTypes.string,
    unite: PropTypes.string.isRequired,
  };

export default CardIndicateur;