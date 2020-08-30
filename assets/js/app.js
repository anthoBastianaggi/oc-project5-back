import React from 'react';
import ReactDOM from 'react-dom';
import './App.module.scss';
import '../sass/main.scss';
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import About from './views/About/About';
import Admin from './views/Admin/Admin';
import Home from './views/Home/Home';
import Projects from './views/Projects/Projects';
import AddProject from './views/Projects/add/AddProject';
import Services from './views/Services/Services';
import AddService from './views/Services/add/AddService';
import Skills from './views/Skills/Skills';
import AddSkill from './views/Skills/add/AddSkill';

ReactDOM.render(
    <BrowserRouter>
        <div className="app">
            <Switch>
                <Redirect exact from="/" to="/home" />
                <Route path={"/admin"} component={() => Layout(Admin)} />
                <Route path={"/home"} component={() => Layout(Home)} />
                <Route path={"/about"} component={() => Layout(About)} />
                <Route path={"/skills"} component={() => Layout(Skills)} />
                <Route path={"/add-skill"} component={() => Layout(AddSkill)} />
                <Route path={"/services"} component={() => Layout(Services)} />
                <Route path={"/add-service"} component={() => Layout(AddService)} />
                <Route path={"/projects"} component={() => Layout(Projects)} />
                <Route path={"/add-project"} component={() => Layout(AddProject)} />
            </Switch>
        </div>
    </BrowserRouter>,
    document.getElementById('root')
);
