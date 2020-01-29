import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import './Pets.css';
import logo from '../assets/logo/logo-greenthumb.svg';


export default function Pets({ history }){
    const [pet, setPet] = useState('true')
    function back(){
        history.push('/water')
    }
    return (
    
        <div id="content">
            <div id="pets" />
                <span className="contentText">Do you have pets? Do they <strong>chew</strong> plants? </span>
                <span className="subContent">We are asking because some plants can be <strong>toxic</strong> for your buddy. </span>
                <img id="logoTranslate" src={logo} alt="logo-greenthumb" />
                <hr/>
                <div className="flex">
                    <div className="cardPet" id="dog" onClick={() => setPet('true')}>
                         <span className="textCard" >Yes</span>
                    </div>
                    <div className="cardPet" id="noDog" onClick={() => setPet('false')}>
                        <span className="textCard" >No/they don't care</span>
                    </div>
                    
                    <div className="button-group-pet">
                        <button className='default-button-pet' onClick={back}>previous</button>
                        <Link to='/Plants'>
                            <button className='default-button-pet'>Next</button>
                        </Link>
                    </div>
                </div>
        </div>
    )
}