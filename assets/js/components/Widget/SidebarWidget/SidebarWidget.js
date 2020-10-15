import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './SidebarWidget.module.scss';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import Button from '../../Button/Button';


const SidebarWidget = ({ opened, className, children, onClose = undefined, setSidebarWidgetRef }) => {
    const [mobile, setMobile] = useState(0);
    
    function resize() {
        setMobile(window.innerWidth);
    }

    useEffect(() => {
        resize();
        window.addEventListener("resize", resize);
    
        return () => {
          window.removeEventListener("resize", resize);
        };
    }, []);
    
    function useLockBodyScroll() {
        if(opened && mobile <= 640) {
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
            <div className="button-widget">
                <Button variant="tertiary" type="button" className="btn-close-widget" icon={faTimes} onClick={onClose} />
            </div>
            <div className="content-widget-sidebar" ref={(ref) => setSidebarWidgetRef(ref)}>
                {children}
            </div>
        </div>
    );
}


SidebarWidget.propTypes = {
    className: PropTypes.string,
    opened: PropTypes.bool,
    setSidebarWidgetRef: PropTypes.func,
    onClose: PropTypes.func
};

export default SidebarWidget;