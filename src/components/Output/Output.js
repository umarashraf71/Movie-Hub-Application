import React, {useContext} from 'react'
import {MovieContext} from '../../context/MovieContext';
import PopularMovies from '../PopularMovies/PopularMovies';
import AllMovies from '../AllMovies/AllMovies';
// import Container from '../ReusableComponents/Container';
import ContainerFluid from '../ReusableComponents/ContainerFluid';
import AllMoviesPagination from '../AllMovies/AllMoviesPagination';
import './Output.css';

function Output() {

    const {activeLink} = useContext(MovieContext);

    return (
        <div className="output">
            {
                activeLink === "Popular" && 

                <ContainerFluid>
                    <PopularMovies/>
                </ContainerFluid> 
            }
            {
                activeLink === "All Movies" && 

                <ContainerFluid>
                    <AllMovies/>
                    <AllMoviesPagination/>
                </ContainerFluid> 
            }
        </div>
    )
}

export default Output;
