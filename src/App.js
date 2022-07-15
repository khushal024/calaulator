import React, { useState } from 'react';
import './App.scss';
import {Header , } from './components/header' ;
import {Home} from './components/home' ;
import Footer from './components/footer';
import {Mycalculator} from './components/calculator';
import {Contactform} from './components/contactus'
import 'bootstrap/dist/js/bootstrap.js'; 
 import {BrowserRouter as Router , Routes , Route } from "react-router-dom";
//  import useLocalStorage from 'use-local-storage'

const App = () => {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches; 
  const [theme, setTheme] = useState('theme', defaultDark ? 'dark' : 'light' ); 

  const switchtheme = ()=>{
      const newtheme = theme ===  'dark' ? 'light' : 'dark'; 
      setTheme(newtheme); 
      console.log(theme);  
  }
  return (
    <div className="App" data-theme={theme}> 
     <Header calculator="Calculator"/>
     <div className="container"> <button onClick={switchtheme} id="changethemebtn" className="btn btn-primary m-2 colorblue" >Switch to {theme === 'dark' ? 'light' : 'dark'}  Theme</button></div> 
     <Router>
      <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/calculator" element={<Mycalculator />} /> 
     <Route path="/contactus" element={<Contactform />}  />
     </Routes>
     </Router>

     <Footer />
      

    </div> 
  ); 
}

export default App;
