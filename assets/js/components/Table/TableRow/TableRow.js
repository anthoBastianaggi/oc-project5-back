import React from 'react';
import PropTypes from 'prop-types';
import './TableRow.module.scss';

const TableRow = ({ as: Element = "tr", children }) => {
    return (
        <Element className="table-row">
            {children}
        </Element>
    )
}

TableRow.propTypes = {
    as: PropTypes.elementType,
    children: PropTypes.node
};

TableRow.defaultProps = {
    as: "tr",
    chilren: null
};

export default TableRow;