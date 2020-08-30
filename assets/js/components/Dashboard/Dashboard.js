import React from 'react';
import './Dashboard.module.scss';
import { useRouteMatch } from 'react-router-dom';
import  Link from '../Link/Link';
import Button from '../Button/Button';
import Dropdown from '../Dropdown/Dropdown';
import cx from 'classnames';

const Dashboard = () => {
    const menuItems = [
        { id: "home", href: "/home", label: "home", isActive: () => useRouteMatch("/home") },
        { id: "about", href: "/about", label: "about", isActive: () => useRouteMatch("/about") },
        { 
          id: "skills", 
          label: "skills", 
          subMenu: [
            { 
              id:"sub-menu-all-skills",
              label: "Toutes les compétences", 
              href: "/skills",
              isActive: () => useRouteMatch("/skills") 
            },
            {
              id:"sub-menu-add-skill",
              label: "Ajouter compétence", 
              href: "/add-skill",
              isActive: () => useRouteMatch("/add-skill") 
            }
          ],
        },
        { 
          id: "services", 
          label: "services", 
          subMenu: [
            { 
              id:"sub-menu-all-services",
              label: "Tous les services", 
              href: "/services",
              isActive: () => useRouteMatch("/services") 
            },
            {
              id:"sub-menu-add-service",
              label: "Ajouter service", 
              href: "/add-service",
              isActive: () => useRouteMatch("/add-service") 
            }
          ], 
        },
        { 
          id: "project", 
          label: "project", 
          subMenu: [
            { 
              id:"sub-menu-all-projects",
              label: "Toutes les projets",
              href: "/projects",
              isActive: () => useRouteMatch("/projects") 
            },
            {
              id:"sub-menu-add-project",
              label: "Ajouter projet", 
              href: "/add-project",
              isActive: () => useRouteMatch("/add-project") 
            }
          ], 
        }
    ];
  
  const filterData = menuItems.filter(subMenu => subMenu !== undefined);

  return (
    <div className="wrapper">
      <div className="sidebar">
        <div className="user-panel">
          <div className="user-image">
            <img src="http://0.gravatar.com/avatar/05e213faf044f681d8f974ead9c2a167?s=26&d=mm&r=g"></img>
          </div>
          <ul className="user-info">
            <li className="info">
              <span className="username">Anthony Bastianaggi</span>
            </li>
            <li className="info">
              <span className="user-role">Administrateur</span>
            </li>
          </ul>
        </div>    
        <div className="menu-item">
          <div className="menu-item-container">
            {filterData.map(({ id, href, isActive, label, subMenu, } = {}) =>
              <div key={id} className="menu-item-list">
                {subMenu === undefined ? 
                  <Link href={href} label={label} className={cx("item-link", { ["active"]: isActive() })} /> : 
                  <Dropdown 
                    opener={<Button type="tertiary" label={label} className={"item-link-button"} />} 
                    data={subMenu}> 
                  </Dropdown>
                }
              </div>
            )}
          </div>
        </div>
      </div>
      <header className="header">
        <nav className="navigation">
          <div className="admin-container">
              <div className="admin-info">
                <span>Bonjour Thedevildark2a</span>
              </div>
          </div>
        </nav>
      </header>
    </div> 
  );
}

export default Dashboard;
