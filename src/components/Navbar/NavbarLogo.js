import React, {useContext} from 'react';
import './Navbar.css';
import {MovieContext} from '../../context/MovieContext';


function NavbarLogo() {

    const{setHiddenMenu, setActiveLink} = useContext(MovieContext);

    const highlightLink = () => {

        setActiveLink("Popular");
        setHiddenMenu(true);
        window.scrollTo(0, 0);
    }

    return (
        
        <h2 class="navLogo" onClick={highlightLink} >
            MovieHub
        </h2>
    )
}

export default NavbarLogo
