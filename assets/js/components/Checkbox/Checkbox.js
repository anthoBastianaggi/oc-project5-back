import React, { useState } from 'react';
import cs from 'classnames';
import './Checkbox.module.scss';
import PropTypes from 'prop-types';

const Checkbox = ({ className = '', label, name }) => {
    const [selected, setSelected] = useState(false);

    const changeHandler = e => {
      setSelected(!selected);
    };

    return (
        <div className={cs(className, "checkbox-content")}>
            <input
                type="checkbox"
                name={name}
                aria-checked={selected}
                checked={selected}
                onChange={changeHandler}
            />
            <span className="checkbox-label">{label}</span>
        </div>
    )
}

Checkbox.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    checked: PropTypes.bool,
    onChange: PropTypes.func
}

export default Checkbox;