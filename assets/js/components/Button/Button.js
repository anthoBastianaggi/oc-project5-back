import React from 'react';
import './Button.module.scss';
import cx from 'classnames';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const type = ['primary', 'secondary', 'tertiary'];

const Button = ({as: Element = "button", label, icon, type, onClick, className, btnType }) => {
    return (
        <Element className={cx("button", `btn-${type}`, className)} onClick={onClick} type={btnType}>
            {icon && <FontAwesomeIcon icon={icon} />}
            <span className={"label"}>{label}</span>
        </Element>
    );
}

Button.defaultProps = {
    as: 'button',
    label: null,
    type: 'primary',
    onClick: null,
    className: '',
    btnType: 'button',
    icon: ''
}

Button.propTypes = {
    as: PropTypes.elementType,
    label: PropTypes.string,
    icon: PropTypes.string,
    type: PropTypes.oneOf(type),
    onClick: PropTypes.func,
    className: PropTypes.string,
    btnType: PropTypes.string
}

export default Button;
