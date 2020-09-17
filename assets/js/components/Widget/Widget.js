import React from 'react';
import PropTypes from 'prop-types';
import './Widget.module.scss';

const Widget = ({ id, label, children }) => {
    return (
        <div id={id} className="widget">
            <label className="label">{label}</label>
            <div className="box">
                <div className="box-container">
                    {children}
                </div>
            </div>
        </div>
    );
}

Widget.propTypes = {
    id: PropTypes.string,
    label: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
}

export default Widget;