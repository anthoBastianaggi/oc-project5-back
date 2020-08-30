import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import './Flex.module.scss';

const Flex = ({ as: Element = "div", between, center, column, end, wrap, grow, className, children, ...props }) => {
    return (
        <Element className={cx("flex", className, {
            ["between"] : between,
            ["center"]: center,
            ["column"]: column,
            ["end"]: end,
            ["wrap"]: wrap,
            ["grow"]: grow
        })}
        {...props}>
            {children}
        </Element>
    )
}

Flex.propTypes = {
    as: PropTypes.elementType,
    between: PropTypes.bool,
    center: PropTypes.bool,
    column: PropTypes.bool,
    end: PropTypes.bool,
    wrap: PropTypes.bool,
    grow: PropTypes.bool,
    className: PropTypes.string,
    children: PropTypes.node
};

Flex.defaultProps = {
    as: "div",
    between: false,
    center: false,
    column: false,
    end: false,
    wrap: false,
    grow: false,
    className: "",
    chilren: null
};

export default Flex;