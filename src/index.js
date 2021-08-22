import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navbar from './Navbar/Navbar';
import reportWebVitals from './reportWebVitals';
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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

