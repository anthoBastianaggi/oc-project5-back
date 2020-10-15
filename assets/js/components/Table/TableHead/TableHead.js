import React from 'react';
import PropTypes from 'prop-types';
import './TableHead.module.scss';

const TableHead = ({ as: Element = "thead", children }) => {
    return (
        <Element className="table-head">
            {children}
        </Element>
    )
}

TableHead.propTypes = {
    as: PropTypes.elementType,
    children: PropTypes.node
};

TableHead.defaultProps = {
    as: "thead",
    chilren: null
};

export default TableHead;