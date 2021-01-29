import React, { useEffect } from 'react';
import './MenuList.module.scss';
import Link from '../Link/Link';
import cx from 'classnames';

const MenuList = ({ data }) => {
    function activeClassSubMenu() {
        const parent = document.getElementsByClassName('sub-menu');
        parent.forEach(function(element, index) {
            const child = element.children;
            const id = element.id;
            child.forEach(function(el, i) {
                if(child[i].classList.contains('active')) {
                    element.classList.toggle('active')
                    document.getElementById("menu-item-"+id).classList.toggle('active-menu')
                }
            })
        })     
    }

    function isHover() {
        const parent = document.getElementsByClassName('sub-menu');
        parent.forEach(function(element, index) {
            const child = element.children;
            const id = element.id;
            child.forEach(function(el, i) {
                child[i].addEventListener("mouseover", function(e) {
                    document.getElementById("menu-item-"+id).classList.add('hover-menu')
                })

                child[i].addEventListener("mouseout", function(e) {
                    document.getElementById("menu-item-"+id).classList.remove('hover-menu')
                })
            })
        })
    }

    useEffect(() => {
        activeClassSubMenu();
       isHover();
      }, []);

  return (
    <div className="menu-list">
        <div className="menu-list-container">
        {data.map(({ id, href, label, subMenu, isActive, icon } = {}) =>
            <div key={id} className="menu-item">
                <div id={"menu-item-" + id} className={cx("menu-item-container", { ["active"]: isActive() })}>
                    <Link href={href} label={label} className="item-link" icon={icon} />
                </div>
                {subMenu !== undefined ?
                    <ul id={id} className="sub-menu">
                        {subMenu.map((item) => (
                            <li key={item.id}  className={cx("sub-menu-item", { ["active"]: item.isActiveSubMenu() })}>
                                <Link href={item.href} label={item.label} className="item-link" />
                            </li>
                            ))
                        }
                    </ul> : ""
                }
            </div>
        )}
        </div>
    </div>
  );
}

export default MenuList;
