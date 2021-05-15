import React, {useContext} from 'react';
import Navbar from '../Navbar/Navbar';
import Output from '../Output/Output';
import MovieList from '../MovieList/MovieList';
import './Home.css'; 
import {MovieContext} from '../../context/MovieContext';

function Home() {
    
    const{isLoading, activeLink} = useContext(MovieContext);

    return (
        <section className='home'>
            <Navbar/>

        {
            !isLoading && activeLink === "Popular" ? (

            <div className="bannerWrapper">
                <MovieList/>
            </div>
            ): null 
        }

            <Output/>
        
        </section>
    );
}

export default Home;
