import React from 'react';
import './Button.module.scss';
import cx from 'classnames';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const variantButtons = ['primary', 'secondary', 'tertiary', 'error'];
const type = ['button', 'reset', 'submit'];

const Button = ({as: Element = "button", label, icon, type, onClick, className, variant }) => {
    return (
        <Element className={cx("button", `btn-${variant}`, className)} onClick={onClick} type={type} variant={variant}>
            {icon && <FontAwesomeIcon icon={icon} />}
            <span className={"label"}>{label}</span>
        </Element>
    );
}

Button.defaultProps = {
    as: 'button',
    label: null,
    variant: 'primary',
    onClick: null,
    className: '',
    type: 'button'
}

Button.propTypes = {
    as: PropTypes.elementType,
    label: PropTypes.string,
    icon: PropTypes.object || PropTypes.string,
    type: PropTypes.oneOf(type),
    onClick: PropTypes.func,
    className: PropTypes.string,
    variant: PropTypes.oneOf(variantButtons)
}

export default Button;
