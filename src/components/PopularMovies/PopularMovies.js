import React, {useContext} from 'react'
import {MovieContext} from '../../context/MovieContext';
import Container from '../ReusableComponents/Container';
import './PopularMovies.css';

function PopularMovies() {

    const{popularMovies} = useContext(MovieContext);

    return (
        <div className="popularMovies" >
                        <h3>Popular Movies</h3>
            <Container>
                <div className="popularContainer">

                {
                    popularMovies.results && popularMovies.results.map((popularMovieItem, index) => {

                        return(

                            <img data-aos="zoom-left" data-aos-duration="2500"  key={index}  src={`https://image.tmdb.org/t/p/w400${popularMovieItem.poster_path}`} alt="moviesPoster" />
                        );
                    })
                }
                </div>
            </Container>
        </div>
    )
}

export default PopularMovies;
