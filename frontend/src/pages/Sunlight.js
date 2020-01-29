import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import './Sunlight.css';
import logo from '../assets/logo/logo-greenthumb.svg';


export default function Home({ history }){
    const [sun, setSun] = useState('high')
    function back(){
        history.push('/')
    }
    return (
        <div id="content">
            <div id="sun" />
                <span className="contentText">First, set the amount of <strong>sunlight</strong> your plant will get</span>
                <img id="logoTranslate" src={logo} alt="logo-greenthumb" />
                <hr/>
                <div className="flex">
                    <div className="card" id="highSun" onClick={() => setSun('high')}>
                         <span className="textCard" >High sunlight</span>
                    </div>
                    <div className="card" id="lowSun" onClick={() => setSun('low')}>
                        <span className="textCard" >Low sunlight</span>
                    </div>
                    <div className="card" id='noSun' onClick={() => setSun('no')}>
                        <span className="textCard">No sunlight</span>
                        
                    </div>
                    <div className="button-group">
                        <button className='default-button' onClick={back}>Home</button>
                        <Link to='/water'>
                            <button className='default-button'>Next</button>
                        </Link>
                    </div>
                </div>
        </div>
    )
}