import React, {useContext, useEffect} from 'react'
import {MovieContext} from '../../context/MovieContext';
import Container from '../ReusableComponents/Container';

function AllMoviesPagination() {

    const {currentPage, showPagination, newPage} = useContext(MovieContext);

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        <div className="moviesPagination" >
            {
                showPagination && (

                    <Container>
                        <div className="btnPage-container">
                            <button 
                                className={ currentPage === 1 ? `disableCheck` : `` }
                                onClick={() => newPage("previous")} >Prev Page</button>
                            
                            <button onClick={() => newPage("next")} >Next Page</button>
                        </div>
                    </Container>
                )
            }
        </div>
    )
}

export default AllMoviesPagination;
