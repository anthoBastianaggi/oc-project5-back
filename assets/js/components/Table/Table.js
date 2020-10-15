import React from 'react';
import PropTypes from 'prop-types';
import './Table.module.scss';

const Table = ({ as: Element = "table", children }) => {
    return (
        <div className="table-container">
            <Element className="table">
                {children}
            </Element>
        </div>
    )
}

Table.propTypes = {
    as: PropTypes.elementType,
    children: PropTypes.node
};

Table.defaultProps = {
    as: "table",
    chilren: null
};

export default Table;