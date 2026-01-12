import React from 'react'
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Services from './components/Services/Services'
import ServiceDetails from "./components/Services/ServiceDetails";
import MyWork from './components/MyWork/MyWork'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'


const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        {/* Home Page */}
        <Route path='/' element={
          <div>
            <Hero />
            <About />
            <Services />
            <MyWork />
            <Contact />
            
          </div>
        }
        />
        {/* Services Details Page */}
        <Route path='/service/:id' element={<ServiceDetails />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
