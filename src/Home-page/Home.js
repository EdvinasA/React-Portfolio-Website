import React from 'react';
import './Home.css';
import {FaGithub, FaSteam} from 'react-icons/fa'
import { SiGmail } from "react-icons/si";
import {Tooltip, withStyles} from "@material-ui/core";
import {Theme} from "@material-ui/core";

const LightTooltip = withStyles((theme: Theme) => ({
    tooltip: {
        backgroundColor: theme.palette.common.white,
        color: 'rgba(0, 0, 0, 0.87)',
        boxShadow: theme.shadows[2],
        fontSize: 10,
    },
}))(Tooltip);


const Home = () => {
    return (
        <main className="section">
            <div className="homePage">
                <h1 className='homePage-bigger-h1'>Edvinas Alimas</h1>
                <h3>Developer & Athlete</h3>
                <LightTooltip title="EdvinasA GitHub">
                <a id="icon" href={'https://github.com/EdvinasA'} target={'_blank'} rel="noreferrer">
                <FaGithub id="icon" size={'30px'} style={{padding: '10px 10px 0 10px'}}/>
                </a>
                </LightTooltip>
                <LightTooltip title="Steam account">
                <a href={'https://steamcommunity.com/profiles/76561198177315491/'} target={'_blank'} rel="noreferrer">
                    <FaSteam alt="Steam account" id="icon" size={'30px'} style={{padding: '20px 10px 0 10px'}}/>
                </a>
                </LightTooltip>
                <LightTooltip title="edvinasalimas98@gmail.com">
                    <a>
                        <SiGmail id="icon" size={'30px'} style={{padding: '20px 10px 0 10px'}}/>
                    </a>
                </LightTooltip>
            </div>
            <div>

            </div>
        </main>
    );
};



export default Home;
