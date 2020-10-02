import React, { useState } from "react";
import './Select.module.scss';

const Select = ({ defaultValue = "Actions groupées", optionsList, onChange  }) => {
    const [value, setValue] = useState(defaultValue);

    function onChange(e) {
        setValue(e.target.value)
    }

    return (
        <div className="select-container">
            <select value={value} onChange={onChange} className="select">
                {optionsList.map((item) => (
                <option
                    key={item.id}
                    value={item.name}
                    className="option"
                >
                    {item.name}
                </option>
                ))}
            </select>
        </div>
    );
};

export default Select;