import React from 'react';
import logosport1 from '../../assets/sport1.png'
import logosport2 from '../../assets/sport2.png'
import logosport3 from '../../assets/sport3.png'
import logosport4 from '../../assets/sport4.png'
import PictoTagVert from '../pictoTagVert';


function NavBarVer(props) {


    return (
        
            <div className='NavBarVer'>
                <ul className='NavBarVerListPicto'>
                    <PictoTagVert picto={logosport1} backgroundColor="#FFFFFF" />
                    <PictoTagVert picto={logosport2} backgroundColor="#FFFFFF" />
                    <PictoTagVert picto={logosport3} backgroundColor="#FFFFFF" />
                    <PictoTagVert picto={logosport4} backgroundColor="#FFFFFF" />
                </ul>
                <p className='copyright'>Copiryght, SportSee 2020</p>
            </div>
        
    );
}

export default NavBarVer;