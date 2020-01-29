import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import './Water.css';
import logo from '../assets/logo/logo-greenthumb.svg';


export default function Water({ history }){
    const [water, setWater] = useState('rarely')
    function back(){
        history.push('/sunlight')
    }
    return (
        <div id="content">
            <div id="water" />
                <span className="contentText">How often do you want to <strong>water</strong> your plant?</span>
                <img id="logoTranslate" src={logo} alt="logo-greenthumb" />
                <hr/>
                <div className="flex">
                    <div className="cardWater" id="rarelyWater" onClick={() => setWater('rarely')}>
                         <span className="textCard" >Rarely</span>
                    </div>
                    <div className="cardWater" id="regularlyWater" onClick={() => setWater('regularly')}>
                        <span className="textCard" >Regularly</span>
                    </div>
                    <div className="cardWater" id='dailyWater' onClick={() => setWater('daily')}>
                        <span className="textCard">Daily</span>
                        
                    </div>
                    <div className="button-group">
                        <button className='default-button' onClick={back}>previous</button>
                        <Link to='/pets'>
                            <button className='default-button'>Next</button>
                        </Link>
                    </div>
                </div>
        </div>
    )
}