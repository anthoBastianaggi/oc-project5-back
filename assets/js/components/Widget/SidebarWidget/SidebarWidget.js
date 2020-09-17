import React from 'react';
import PropTypes from 'prop-types';
import './SidebarWidget.module.scss';
import Widget from '../Widget';

const SidebarWidget = (props) => {
    const { opened, className, children } = props;
    
    function useLockBodyScroll() {
        if(opened) {
            document.body.style.overflow = "hidden";
        } else {
            if(typeof window !== "undefined") {
                document.body.style.overflow = "auto";
            }
        }
    }

    useLockBodyScroll();

    return (
        <div className={className}>
            <div className="content-widget-sidebar" ref={(ref) => props.setSidebarWidgetRef(ref)}>
                {children}
            </div>
        </div>
    );
}


SidebarWidget.propTypes = {
    className: PropTypes.string,
    opened: PropTypes.bool,
    setSidebarWidgetRef: PropTypes.func
};

export default SidebarWidget;