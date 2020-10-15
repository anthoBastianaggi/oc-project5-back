import React from 'react';
import PropTypes from 'prop-types';
import './TableDataCell.module.scss';
import cs from 'classnames';

const TableDataCell = ({ as: Element = "td", children, className }) => {
    return (
        <Element className={cs("table-data-cell", className)}>
            {children}
        </Element>
    )
}

TableDataCell.propTypes = {
    as: PropTypes.elementType,
    children: PropTypes.node
};

TableDataCell.defaultProps = {
    as: "td",
    chilren: null
};

export default TableDataCell;