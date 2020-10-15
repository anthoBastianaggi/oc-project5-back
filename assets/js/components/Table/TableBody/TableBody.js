import React from 'react';
import PropTypes from 'prop-types';
import './TableBody.module.scss';

const TableBody = ({ as: Element = "tbody", children }) => {
    return (
        <Element className="table-body">
            {children}
        </Element>
    )
}

TableBody.propTypes = {
    as: PropTypes.elementType,
    children: PropTypes.node
};

TableBody.defaultProps = {
    as: "tbody",
    chilren: null
};

export default TableBody;