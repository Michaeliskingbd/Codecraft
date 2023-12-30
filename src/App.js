import React from 'react';
import "./App.css"
import Navbar from './components/nav/Navbar';
import About from './components/about/About';
import Intro from './components/intro/Intro';
import Work from './components/works/Work';
import Client from './components/clients/Client';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';



const App = () => {
 

  return (
    <div>
   <Navbar/>
   <About/>
   <Intro/>
   <Work/>
   <Client/>
   <Contact/>
   <Footer/>
   
    </div>
  );
};

export default App;

