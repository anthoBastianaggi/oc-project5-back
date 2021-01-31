import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './SidebarWidget.module.scss';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import Button from '../../Button/Button';
import Flex from '../../Flex/Flex';


const SidebarWidget = ({ opened, className, children, onClose = undefined, setSidebarWidgetRef, id }) => {
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


    setTimeout(function() {
        if(onClose === undefined || opened === false) {
            document.getElementById('button-widget').style.display = 'none';
            document.getElementById('content-widget-sidebar').style.display = 'none';
        }
    }, 1000); 

    setTimeout(function() {
         if (opened === true) {
            document.getElementById('button-widget').style.display = 'flex';
            document.getElementById('content-widget-sidebar').style.display = 'block';
        }
    }, 0); 

    useLockBodyScroll();
    return (
        <div id={id} className={className}>
            <Flex id="button-widget" className="button-widget" end>
                <Button variant="tertiary" type="button" className="btn-close-widget" icon={faTimes} onClick={onClose} />
            </Flex>
            <div id="content-widget-sidebar" className="content-widget-sidebar" ref={(ref) => setSidebarWidgetRef(ref)}>
                {children}
            </div>
        </div>
    );
}


SidebarWidget.propTypes = {
    className: PropTypes.string,
    id: PropTypes.string,
    opened: PropTypes.bool,
    setSidebarWidgetRef: PropTypes.func,
    onClose: PropTypes.func
};

export default SidebarWidget;