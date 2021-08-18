import React from 'react'
import './App.css';
import {  Route, Switch } from 'react-router-dom';

//Pages
import Home from './Pages/Home';
import Favorites from './Pages/Favorites';
import Details from './Components/Details';
import Contact from './Components/Contact.js';
import Navbar from "./Components/Navbar";
import Checkout from './Pages/Checkout'
import Toaster from './Components/Toaster'



function App() {
    return (
        <>
            <Switch>
                <Route exact path='/'>
                    <Navbar />
                    <Toaster/>
                    <Home />
                </Route>
                <Route path='/favorites'>
                    <Navbar />
                    <Toaster/>
                    <Favorites />
                </Route>
                <Route path='/contact'>
                    <Navbar />
                    <Contact />
                </Route>
                <Route path='/details'>
                    <Navbar />
                    <Toaster/>
                    <Details />
                </Route>
                <Route path='/checkout'>
                    <Navbar />
                    <Checkout/>
                </Route>
            </Switch>
        </>
    )
}


export default App;
