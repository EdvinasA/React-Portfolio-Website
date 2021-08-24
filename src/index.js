import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navbar from './Navbar/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from "./Home-page/Home";
import About from "./About-page/About";
import Contact from "./Contact-page/Contact"
import Projects from "./Projects-page/Projects"

const ReactRouterSetup = () => {
    return (
        <Router>
            <Navbar/>
            <Switch>
                <Route exact path='/'>
                    <Home />
                </Route>
                <Route path='/about'>
                    <About />
                </Route>
                <Route path='/contact'>
                    <Contact />
                </Route>
                <Route path='/projects'>
                    <Projects />
                </Route>
            </Switch>
        </Router>

    );
};

ReactDOM.render(
    <React.StrictMode>
        <ReactRouterSetup />
    </React.StrictMode>,
    document.getElementById('root')
);


