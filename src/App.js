import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Home from './components/Home/Home';
import {MovieState} from './context/MovieContext';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();


const App = () => {

  return (

    <MovieState>

      <Home/>   
      
      <div class="footer">
        <div className="footerText"> 
          <span> MovieHub </span>
           Copyrights &copy; 2021-2025 
        </div>
      </div>

    </MovieState>

    );

}

export default App;
