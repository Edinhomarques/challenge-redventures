import React from 'react';
import './Home.css';
import logo from '../assets/logo/logo-greenthumb.svg';
import illustration from '../assets/illustrations/illustration-home.png'
export default function Home(){
    return (
        <div id="content">
            <img id="logo" src={logo} alt="logo-greenthumb" />
            <img id="illustration-home" src={illustration} alt=" illustration-home"/>
            <p id="initial-text">
                Find your next green friend
            </p>
            <button id="starter"> Next </button>
        </div>
    )
}