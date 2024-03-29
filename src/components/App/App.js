import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Contact from "../Contact/Contact";
import HUD from "../HUD/HUD";
import Project from "../Project/Project";
import About from "../About/About";
import Main from "../Main/Main";
import View from "../View/View";
import PathFinding from "../PathFinding/PathFinding";

function App() {
    return (
        <BrowserRouter>
            <HUD>
                <Switch>
                    <Route exact path='/' component={Main} />
                    <Route exact path='/contact' component={Contact} />
                    <Route exact path='/project' component={Project} />
                    <Route exact path='/about' component={About} />
                    <Route exact path='/view' component={View} />
                    <Route exact path='/pathfinding' component={PathFinding} />
                </Switch>
            </HUD>
        </BrowserRouter>
    );
}

export default App;