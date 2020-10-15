import React from 'react';
import ReactDOM from 'react-dom';
import './App.module.scss';
import '../sass/main.scss';
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';
import Layout from './components/Layout/LayoutDashboard/Layout';
import LayoutAdmin from './components/Layout/LayoutAdmin/LayoutAdmin';
import About from './views/About/About';
import Admin from './views/Admin/Admin';
import Home from './views/Home/Home';
import Projects from './views/Projects/Projects';
import AddProject from './views/Projects/add/AddProject';
import UpdateProject from './views/Projects/Update/UpdateProject';
import UpdateCategoryProject from './views/Projects/category/Update/UpdateCategoryProject';
import CategoryProject from './views/Projects/category/CategoryProject';
import Services from './views/Services/Services';
import UpdateService from './views/Services/Update/UpdateService';
import AddService from './views/Services/add/AddService';
import Skills from './views/Skills/Skills';
import AddSkill from './views/Skills/add/AddSkill';
import CategorySkill from './views/Skills/category/CategorySkill';
import UpdateSkill from './views/Skills/Update/UpdateSkill';
import UpdateCategorySkill from './views/Skills/category/Update/UpdateCategorySkill';

ReactDOM.render(
    <BrowserRouter>
        <div className="app">
            <Switch>
                <Redirect exact from="/" to="/home" />
                <Route path={"/admin"} component={() => LayoutAdmin(Admin)} />
                <Route path={"/home"} component={() => Layout(Home)} />
                <Route path={"/about"} component={() => Layout(About)} />
                <Route path={"/skills"} component={() => Layout(Skills)} />
                <Route path={"/update-skill"} component={() => Layout(UpdateSkill)} />
                <Route path={"/add-skill"} component={() => Layout(AddSkill)} />
                <Route path={"/category-skill"} component={() => Layout(CategorySkill)} />
                <Route path={"/update-category-skill"} component={() => Layout(UpdateCategorySkill)} />
                <Route path={"/services"} component={() => Layout(Services)} />
                <Route path={"/update-service/:id"} component={() => Layout(UpdateService)} />
                <Route path={"/add-service"} component={() => Layout(AddService)} />
                <Route path={"/projects"} component={() => Layout(Projects)} />
                <Route path={"/update-project"} component={() => Layout(UpdateProject)} />
                <Route path={"/add-project"} component={() => Layout(AddProject)} />
                <Route path={"/category-project"} component={() => Layout(CategoryProject)} />
                <Route  path="/update-category-project" component={() => Layout(UpdateCategoryProject)} />
            </Switch>
        </div>
        
    </BrowserRouter>,
    document.getElementById('root')
);
