import React, {useEffect, useState, useContext} from 'react'
import {MovieContext} from '../../context/MovieContext';
import 'font-awesome/css/font-awesome.min.css';
import './MovieList.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function MovieList(props) {

    const{upcomingMovies, isLoading, activeLink} = useContext(MovieContext);


    const [slideNo, setSlideNo] = useState(5);

    const slideNum = () => {


        if(window.innerWidth <= 550 ) {

            setSlideNo(2);
        }
        else if(window.innerWidth > 550 && window.innerWidth <= 767)
        {

            setSlideNo(3);
        }
        else if(window.innerWidth > 767 && window.innerWidth <= 1150){

            setSlideNo(4);
        }
        else {

            setSlideNo(5);
        }

    }

    window.addEventListener('resize', slideNum);


    useEffect(()=>{

        slideNum();

    },[])


    var settings = {
        dots: false,
        infinite: true,
        autoplay:true,
        speed: 500,
        slidesToShow: slideNo,
        slidesToScroll: 1
      };

    return (

        <Slider {...settings} >

        {
            /* || activeLink !== "All Movies" */
            !isLoading ? 
            ( 		
            upcomingMovies.results && upcomingMovies.results.map((upcomingMovieItem,index)=>{

                 return (
                      <>  
                            <div className="card" key={index}>
                                <img className="image-container" src={`https://image.tmdb.org/t/p/w400${upcomingMovieItem.poster_path}`} alt="Card img" />
                                <div className="overlay">
                            
                                <h4>Votes</h4>
                                <h5>{upcomingMovieItem.vote_average} / 10</h5>
                                
                                </div>
                                {/* <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                </div> */}
                            </div>
                      </>
                 );   

              })
            ) : ""
        }

        </Slider>
    );
}

export default MovieList;
