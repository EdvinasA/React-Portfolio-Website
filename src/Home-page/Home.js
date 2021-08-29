import React from 'react';
import './Home.css';
import {FaGithub, FaSteam} from 'react-icons/fa'

const Home = () => {
    return (
        <main className="section">
            <div className="homePage">
                <h1>Edvinas Alimas</h1>
                <h3>Developer & Athlete</h3>
                <a id="icon" href={'https://github.com/EdvinasA'} target={'_blank'} rel="noreferrer">
                <FaGithub id="icon" size={'30px'} style={{padding: '10px 10px 10px 10px'}}/>
                </a>
                <a href={'https://steamcommunity.com/profiles/76561198177315491/'} target={'_blank'} rel="noreferrer">
                    <FaSteam id="icon" size={'30px'} style={{padding: '10px 10px 10px 10px'}}/>
                </a>
            </div>
            <div>

            </div>
        </main>
    );
};



export default Home;
