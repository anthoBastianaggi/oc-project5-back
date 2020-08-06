import React from 'react';
import ReactDOM from 'react-dom';
import './App.module.scss';
import '../sass/main.scss';
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import About from './views/About/About';
import Admin from './views/Admin/Admin';
import Home from './views/Home/Home';
import Project from './views/Project/Project';
import Services from './views/Services/Services';
import Skills from './views/Skills/Skills';

ReactDOM.render(
    <BrowserRouter>
        <div className="app">
            <Switch>
                <Redirect exact from="/" to="/home" />
                <Route path={"/admin"} component={() => Layout(Admin)} />
                <Route path={"/home"} component={() => Layout(Home)} />
                <Route path={"/about"} component={() => Layout(About)} />
                <Route path={"/skills"} component={() => Layout(Skills)} />
                <Route path={"/services"} component={() => Layout(Services)} />
                <Route path={"/project"} component={() => Layout(Project)} />
            </Switch>
        </div>
    </BrowserRouter>,
    document.getElementById('root')
);
