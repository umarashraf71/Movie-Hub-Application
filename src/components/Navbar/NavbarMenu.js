import React, {useContext} from 'react';
import './Navbar.css';
import NavbarLink from './NavbarLink';
import {MovieContext} from '../../context/MovieContext';


function NavbarMenu() {

    const {hiddenMenu} = useContext(MovieContext);

    return (
        <div className={hiddenMenu ? `navMenu navMenuHidden` : `navMenu`} >
            <NavbarLink btnText = "Popular" />
            <NavbarLink btnText = "All Movies" />
        </div>
    )
}

export default NavbarMenu
