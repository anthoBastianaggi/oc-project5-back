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
        ref={(element) => {
            if (element !== null) {
                const content = document.getElementById('content');
                element.addEventListener('click', function() {
                    window.scrollTo({
                        top: content.children[id].offsetTop - 96,
                        behavior: 'smooth',
                    });
                })
            }
        }}
        >
            {icon && <FontAwesomeIcon className="icon" icon={icon} />}
            {icon ? <span className="label">{label}</span> : label}
        </a>
    )
}

Link.defaultProps = {
    label: null,
    className: '',
    href: '',
    external: false,
    target: '_self',
    icon: null,
    refresh: true
}

Link.propTypes = {
    label: PropTypes.string,
    icon: PropTypes.object,
    className: PropTypes.string,
    external: PropTypes.bool,
    target: PropTypes.string,
    href: PropTypes.string,
    refresh: PropTypes.bool
}

export default Link;