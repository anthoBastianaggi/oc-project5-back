import React from "react";

const Field = ({ items, value, label, name, onChange, renderOption, generateValue, classNameError }) => {
    return (
        <div className={name}>
            <label data-label={name}>{label}</label>
            <select value={value} onChange={onChange} data-field={name} className={classNameError}>
                <option disabled value="">
                {label}
                </option>
                {items.map((item, index) => (
                <option
                    key={item}
                    value={generateValue ? generateValue(item, index) : item}
                >
                    {renderOption ? renderOption(item, index) : item}
                </option>
                ))}
            </select>
        </div>
      );
}
export default Field;
