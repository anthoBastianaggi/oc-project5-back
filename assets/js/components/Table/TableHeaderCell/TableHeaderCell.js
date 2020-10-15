import React from 'react';
import PropTypes from 'prop-types';
import './TableHeaderCell.module.scss';
import cs from 'classnames';

const TableHeaderCell = ({ as: Element = "th", children, className }) => {
    return (
        <Element className={cs("table-header-cell", className)}>
            {children}
        </Element>
    )
}

TableHeaderCell.propTypes = {
    as: PropTypes.elementType,
    children: PropTypes.node
};

TableHeaderCell.defaultProps = {
    as: "th",
    chilren: null
};

export default TableHeaderCell;