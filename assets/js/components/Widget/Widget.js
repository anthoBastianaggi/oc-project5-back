import React from 'react';
import PropTypes from 'prop-types';
import './Widget.module.scss';
import Flex from '../Flex/Flex';

const Widget = ({ id, label, children }) => {
    return (
        <Flex id={id} className="widget" column>
            <label className="label">{label}</label>
            <div className="box">
                <div className="box-container">
                    {children}
                </div>
            </div>
        </Flex>
    );
}

Widget.propTypes = {
    id: PropTypes.string,
    label: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
}

export default Widget;