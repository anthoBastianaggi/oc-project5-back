import React, { useEffect, useState } from 'react';
import './Dashboard.module.scss';
import MenuList from '../MenuList/MenuList';
import Flex from '../Flex/Flex';
import { useRouteMatch } from 'react-router-dom';
import { aboutSection } from '../../server/services/about';
import { faHome, faUser, faCode, faFolderOpen, faTools } from '@fortawesome/free-solid-svg-icons';

const Dashboard = () => {
    const [data, setData] = useState([]);

    async function dataDashboard() {
      await aboutSection.getAbout().then(result => setData(result))
  }
  useEffect(() => {
    dataDashboard()
  }, []);

  console.log(data[0]?.firstname);

    const menuItems = [
        { id: "home", href: "/home", label: "accueil", icon: faHome, isActive: () => useRouteMatch("/home") },
        { id: "about", href: "/about", label: "à propos", icon: faUser, isActive: () => useRouteMatch("/about") },
        { 
          id: "skills", 
          label: "compétences", 
          href: "/skills",
          icon: faCode,
          isActive: () => useRouteMatch("/skills"), 
          subMenu: [
            { 
              id:"sub-menu-all-skills",
              label: "Toutes les compétences", 
              href: "/skills",
              isActiveSubMenu: () => useRouteMatch("/skills") 
            },
            {
              id:"sub-menu-add-skill",
              label: "Ajouter compétence", 
              href: "/add-skill",
              isActiveSubMenu: () => useRouteMatch("/add-skill") 
            },
            {
              id:"sub-menu-category-skill",
              label: "Catégorie", 
              href: "/category-skill",
              isActiveSubMenu: () => useRouteMatch("/category-skill") 
            }
          ],
        },
        { 
          id: "services", 
          label: "services", 
          href: "/services",
          icon: faTools,
          isActive: () => useRouteMatch("/services"),
          subMenu: [
            { 
              id:"sub-menu-all-services",
              label: "Tous les services", 
              href: "/services",
              isActiveSubMenu: () => useRouteMatch("/services") 
            },
            {
              id:"sub-menu-add-service",
              label: "Ajouter service", 
              href: "/add-service",
              isActiveSubMenu: () => useRouteMatch("/add-service") 
            }
          ], 
        },
        { 
          id: "project", 
          label: "portfolio", 
          href: "/projects",
          icon: faFolderOpen,
          isActive: () => useRouteMatch("/projects"),
          subMenu: [
            { 
              id:"sub-menu-all-projects",
              label: "Tous les projets",
              href: "/projects",
              isActiveSubMenu: () => useRouteMatch("/projects") 
            },
            {
              id:"sub-menu-add-project",
              label: "Ajouter projet", 
              href: "/add-project",
              isActiveSubMenu: () => useRouteMatch("/add-project") 
            },
            {
              id:"sub-menu-category-project",
              label: "Catégorie", 
              href: "/category-project",
              isActiveSubMenu: () => useRouteMatch("/category-project") 
            }
          ], 
        }
    ];
  
  const filterData = menuItems.filter(subMenu => subMenu !== undefined);

  return (
    <div className="wrapper">
      <div className="sidebar">
        <Flex className="user-panel" center>
          <div className="user-image">
              <img src="http://0.gravatar.com/avatar/05e213faf044f681d8f974ead9c2a167?s=26&d=mm&r=g"></img>
          </div>
          <ul className="user-info">
            <li className="info">
              <span className="username">{data[0]?.firstname + " " + data[0]?.lastname}</span>
            </li>
            <li className="info">
              <span className="user-role">{data[0]?.roles}</span>
            </li>
          </ul>
        </Flex>   
        <MenuList data={filterData} />
      </div>
      <header className="header">
        <nav className="navigation">
          <div className="admin-container">
              <div className="admin-info">
                <span>{"Bonjour " + data[0]?.username}</span>
              </div>
          </div>
        </nav>
      </header>
    </div> 
  );
}

export default Dashboard;
