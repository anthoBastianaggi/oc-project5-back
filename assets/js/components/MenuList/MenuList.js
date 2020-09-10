import React from 'react';
import './MenuList.module.scss';
import  Link from '../Link/Link';
import cx from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MenuList = ({ data }) => {
    
  return (
    <div className="menu-list">
        <div className="menu-list-container">
        {data.map(({ id, href, label, subMenu, isActive, icon } = {}) =>
            <div key={id} className="menu-item">
                <div className={cx("menu-item-container", { ["active"]: isActive() })}>
                    <Link href={href} label={label} className="item-link" icon={icon} />
                </div>
                {subMenu !== undefined ?
                    <ul className="sub-menu">
                        {subMenu.map((item) => (
                            <li key={item.id} className="sub-menu-item">
                                <Link href={item.href} label={item.label} className={cx("item-link", { ["active"]: item.isActive() })} />
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
