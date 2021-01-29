import React, { useEffect, useRef } from 'react';
import Button from '../Button/Button';
import Flex from '../Flex/Flex';
import cs from 'classnames';
import './Modal.module.scss';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const Modal = ({ className, children, onClose, overflowControl = true, title }) => {
    const modal = useRef(null);
    const handleClickOutside = evt => {
        if(modal.current && !modal.current.contains(evt.target)) {
            onClose();
        }
    }

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        }
    });

    useEffect(() => {
       if(overflowControl) {
           document.body.style.overflow = 'hidden';
           return () => {
            document.body.style.overflow = 'auto';
           }
       }
    }, [overflowControl]);

    return (
        <>
            <div className="overlay"></div>
            <Flex id="modal" className={cs("modal", className)} center>
                <div className="modal-content" role="dialog" aria-modal="true"  ref={modal}>
                    {onClose && (
                        <div className="modal-header">
                            <h4 className="modal-title">{title}</h4>
                            <Button variant="tertiary" type="button" className="close" onClick={onClose} icon={faTimes} />
                        </div>      
                    )}
                    {children}
                </div>
            </Flex>
        </>
    );
}

export default Modal;