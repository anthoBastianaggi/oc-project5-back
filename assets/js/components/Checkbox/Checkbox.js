import React from 'react';
import cs from 'classnames';
import './Checkbox.module.scss';
import PropTypes from 'prop-types';

const Checkbox = ({ className = '', id, label, name, value, onChange, checked }) => {
    return (
        <div className={cs(className, "checkbox-content")}>
            <input
                type="radio"
                id={id}
                name={name}
                value={value}
                onChange={onChange}
                defaultChecked={checked}
            />
            <span className="checkbox-label">{label}</span>
        </div>
    )
}

Checkbox.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    id: PropTypes.number,
    className: PropTypes.string,
    onChange: PropTypes.func,
    isSelected: PropTypes.bool
}

export default Checkbox;