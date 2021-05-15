import React, {useState, createContext, useEffect} from 'react'


export const MovieContext = createContext();

export const MovieState = (props) => {

    const API_KEY = "cf31c59cb6d17167f1989c4def6eb4d2";

    const[isLoading, setIsLoading] = useState(false);
    const[hiddenMenu, setHiddenMenu] = useState(true);
    const[activeLink, setActiveLink] = useState('Popular');
    const[popularMovies, setPopularMovies] = useState([]);
    const[upcomingMovies, setUpcomingMovies] = useState([]);
    const[movies, setMovies] = useState([]);
    const[search, setSearch] = useState("");
    const[currentPage, setCurrentPage] = useState(1);
    const[showPagination, setShowPagination] = useState(true);

    const[searchTitle, setSearchTitle] = useState(false);



    const getPopularMovies = async () => {

        const popularMoviesResponse = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US`) 
      
        const popularMoviesData = await popularMoviesResponse.json();
        //console.log(popularMoviesData);

        setPopularMovies(popularMoviesData);
    };



    const getUpcomingMovies = async () => {

        const upcomingMoviesResponse = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`) 
      
        const upcomingMoviesData = await upcomingMoviesResponse.json();
        //console.log(upcomingMoviesData);

        setUpcomingMovies(upcomingMoviesData);
    };



    const getMovies = async() => {

        const response =await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${currentPage}`);

        const data = await response.json();
        
        console.log(data);

        if(search.trim() === "")
        {
            setMovies(data);
        }

    }



    const handleSearch = async(e) => {

        e.preventDefault();

        if(search.trim === '') return;
        
        const searchResponse = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${search}&page=${currentPage}`);
        
        const searchData = await searchResponse.json();

        setMovies(searchData);
        setSearchTitle(true);

        e.target.reset();

        setIsLoading(true);
        setShowPagination(false);

        window.scrollTo(0, 0);

    }



    const newPage = (direction) => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

        if(direction === "next")
        {
            setCurrentPage(prevCurrent => prevCurrent + 1);
            setIsLoading(true);
        }
        if(direction === "previous" && currentPage !== 1)
        {
            setCurrentPage(prevCurrent => prevCurrent - 1);
            setIsLoading(true);
        }
    }



    useEffect(()=>{

        getPopularMovies();
        getUpcomingMovies();
    },[]);

    

    useEffect(()=>{

        if(search.trim() === "")
        {
            setShowPagination(true);
        }     

        getMovies();

    },[search, currentPage]);



    useEffect(()=> {

        const loadingTimeout = setTimeout(() => {

            setIsLoading(false);
        },1000)

        return ()=>clearTimeout(loadingTimeout);

    }, [movies, currentPage])


    return (
    
        <MovieContext.Provider 

            value={{
                        hiddenMenu, 
                        setHiddenMenu, 
                        activeLink, 
                        setActiveLink, 
                        popularMovies, 
                        upcomingMovies, 
                        search, 
                        setSearch,
                        movies, 
                        setMovies,
                        getPopularMovies,
                        getMovies,
                        handleSearch,
                        isLoading, 
                        setIsLoading,
                        currentPage,
                        showPagination, 
                        setShowPagination,
                        newPage,
                        searchTitle
                    }} 
        >
            {props.children}
        
        </MovieContext.Provider>
    
    )
}
