import React from 'react'
import './App.css';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import About from './components/About';
import HtmlTest from './components/HtmlTest';
import CssQuiz from './components/CssQuiz';

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/about" element={<CssQuiz/>}/>
        <Route path="/*" element={<h1 style={{marginTop:60}} className='text-danger'>404 Not Found</h1>}/>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
