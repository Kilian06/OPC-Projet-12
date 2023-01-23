import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbouton(props) {
    return (
        <nav className='btnStyle'>
            
            <NavLink to="/user/12"><button>User 12</button></NavLink>
            <NavLink to="/user/18"><button>User 18</button></NavLink>
            <NavLink to="/user/mock/12"><button>User Mock 12</button></NavLink>
            <NavLink to="/user/mock/18"><button>User Mock 18</button></NavLink>

            
        </nav>
    );
}

export default Navbouton;