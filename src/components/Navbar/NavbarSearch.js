import React, {useContext} from 'react'
import {MovieContext} from '../../context/MovieContext';
import './Navbar.css';



function NavbarSearch() {

    const{setSearch, handleSearch, activeLink} = useContext(MovieContext);

    return (
        
        <form className="navSearch" onSubmit={(e)=>handleSearch(e)} >
            {activeLink !== "Popular" && 
                
                <input type="text" onChange={(e) => setSearch(e.target.value)} placeholder="Search for movies ..." />
            }
        </form>
        
    )
}

export default NavbarSearch
