import React, {useContext, useEffect} from 'react';
import './Navbar.css';
import {MovieContext} from '../../context/MovieContext';


function NavbarLink(props) {

    const {btnText} = props;

    const{setHiddenMenu,activeLink, setActiveLink} = useContext(MovieContext);

    const highlightLink = () => {

        setActiveLink(btnText);
        setHiddenMenu(true);

        window.scrollTo(0, 0);
    }


    return (

        <button  
                onClick={highlightLink}
                className={ activeLink === btnText ? `navlink activeNavLink` : `navlink` }
        >
            {btnText}
        </button>
    ) 
}

export default NavbarLink
