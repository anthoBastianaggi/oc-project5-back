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
import { PrivateRoute } from './components/PrivateRoute/PrivateRoute';
import ForgetPassword from './views/ForgetPassword/ForgetPassword';

ReactDOM.render(
    <BrowserRouter>
        <div className="app">
            <Switch>
                <Route path={"/admin"} component={() => LayoutAdmin(Admin)} />
                <Route path={"/forget-password"} component={() => LayoutAdmin(ForgetPassword)} />
                <PrivateRoute component={() => Layout(Home)} path="/" exact />
                <PrivateRoute component={() => Layout(Home)} path="/home" exact />
                <PrivateRoute component={() => Layout(About)} path="/about" exact />
                <PrivateRoute component={() => Layout(Skills)} path="/skills" exact />
                <PrivateRoute component={() => Layout(UpdateSkill)} path={"/update-skill/:id"} exact />
                <PrivateRoute component={() => Layout(AddSkill)} path={"/add-skill"} exact />
                <PrivateRoute component={() => Layout(CategorySkill)} path={"/category-skill"} exact />
                <PrivateRoute component={() => Layout(UpdateCategorySkill)} path={"/update-category-skill/:id"} exact />
                <PrivateRoute component={() => Layout(Services)} path={"/services"} exact />
                <PrivateRoute component={() => Layout(UpdateService)} path={"/update-service/:id"} exact />
                <PrivateRoute component={() => Layout(AddService)} path={"/add-service"} exact />
                <PrivateRoute component={() => Layout(Projects)} path={"/projects"} exact />
                <PrivateRoute component={() => Layout(UpdateProject)} path={"/update-project/:id"} exact />
                <PrivateRoute component={() => Layout(AddProject)} path={"/add-project"} exact />
                <PrivateRoute component={() => Layout(CategoryProject)} path={"/category-project"} exact />
                <PrivateRoute component={() => Layout(UpdateCategoryProject)} path="/update-category-project/:id" exact />
            </Switch>
        </div>    
    </BrowserRouter>,
    document.getElementById('root')
);
