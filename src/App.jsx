import React from 'react';
import "./App.css"
import rasm from "./images/city1.51e44d49b1c61434ca07.jpeg"
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import Header from "./Header/Header";
import Hero from "./Hero/Hero";
// import Home from './pages/Home'; // Sahifalar
// import About from './pages/About';
// import Enterprises from './pages/Enterprises';
// import Advantages from './pages/Advantages';
// import News from './pages/News';
// import Communication from './pages/Communication';


const App = () => {
    return (
        <div className="container">
            <div className="home-pagevideo">
                <img src={rasm} className="home-video" alt=""/>
            </div>
                <Router>
                    <Header/>
                    <Hero/>
                    <Routes>
                        {/*<Route path="/" element={<Home />} />*/}
                        {/*<Route path="/about" element={<About />} />*/}
                        {/*<Route path="/enterprises" element={<Enterprises />} />*/}
                        {/*<Route path="/advantages" element={<Advantages />} />*/}
                        {/*<Route path="/news" element={<News />} />*/}
                        {/*<Route path="/communication" element={<Communication />} />*/}
                    </Routes>
                </Router>
        </div>
    );
};

export default App;
