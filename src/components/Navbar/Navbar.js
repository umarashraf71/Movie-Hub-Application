import React, {useContext} from 'react';
import './Navbar.css';
import Container from '../ReusableComponents/Container';
import NavbarLogo from './NavbarLogo';
import NavbarMenu from './NavbarMenu';
import NavbarSearch from './NavbarSearch';
import {MovieContext} from '../../context/MovieContext';

function Navbar() {

    const {hiddenMenu, setHiddenMenu} = useContext(MovieContext);

    return (
        <nav class="navBar">
            <Container>
                <div className="wrapper">
                    <NavbarLogo/>
                    <NavbarMenu/>
                </div>
                    <NavbarSearch/>
                    <i  onClick={() => setHiddenMenu(!hiddenMenu)} id="burgerMenu" 
                        className={hiddenMenu ? `fa fa-bars` : `fa fa-times`} 
                    >   
                    </i>
            </Container>
        </nav>
    )
}

export default Navbar
