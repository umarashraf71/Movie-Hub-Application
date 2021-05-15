import React, {useContext} from 'react'
import {MovieContext} from '../../context/MovieContext';
import Container from '../ReusableComponents/Container';
import './AllMovies.css';
import Loader from '../ReusableComponents/Loader'; 

function AllMovies() {

    const{movies, isLoading, searchTitle} = useContext(MovieContext);

    return (
        <div className="allMovies" >
           
            {
                searchTitle ? (

                    <h3>{ movies.results && movies.results.length === 0 ? `No Match Found !` : `Searched Results` }</h3>
                ) :

                <h3>{ movies.results && movies.results.length === 0 ? `No Match Found !` : `All Movies` }</h3>
            }


           
            <Container>
                <div className="allMoviesContainer">

                {
                    
                !isLoading ?
                    ( 
                        movies.results && movies.results.map((allMovieItem, index) => {

                            return(

                                <img data-aos="zoom-left" data-aos-duration="2500"  key={index}  src={`https://image.tmdb.org/t/p/w400${allMovieItem.poster_path}`} alt="moviesPoster" />
                            );
                        })
                    ) : (

                        <Loader/>
                    )
                }
                </div>
            </Container>
        </div>
    )
}

export default AllMovies;
