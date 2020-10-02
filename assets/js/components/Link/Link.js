import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import './Link.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Link = ({ label, icon, id, className, href, target, external }) => {
    return (
        <a 
        href={href} 
        id={id}
        className={cx("link", className)} 
        target={external ? '_blank' : target}
        >
            {icon && <FontAwesomeIcon className="icon" icon={icon} />}
            {icon ? 
                <div className="label-container">
                    <span className="label">{label}</span>
                </div>
            : label}
        </a>
    )
}

Link.defaultProps = {
    label: null,
    className: '',
    href: '',
    external: false,
    target: '_self',
    icon: null
}

Link.propTypes = {
    label: PropTypes.string,
    icon: PropTypes.object,
    className: PropTypes.string,
    external: PropTypes.bool,
    target: PropTypes.string,
    href: PropTypes.string
}

export default Link;