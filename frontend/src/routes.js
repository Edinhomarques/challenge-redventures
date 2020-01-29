import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Water from './pages/Water'
import Home from './pages/Home';
import Sunlight from './pages/Sunlight'
import Pets from './pages/Pets'
import Plants from './pages/Plants'
export default function Routes() {
    return (
        //switch garante que apenas uma rota seja executada por vez
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/Sunlight"  component={Sunlight} />
                <Route path="/water"  component={Water} />
                <Route path="/pets"  component={Pets} />
                <Route path="plants" component={Plants}/>
              
            </Switch>
        </BrowserRouter>
    );
}