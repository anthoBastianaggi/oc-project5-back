import React from 'react';
import PropTypes from 'prop-types';
import './SidebarWidget.module.scss';
import Widget from '../Widget';

const SidebarWidget = (props) => {
    const { opened, className } = props;
    
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
                <Widget id="category" label="Categorie du projet">
                    <div>Hello world</div>
                </Widget>
                <Widget id="image" label="Image du projet">
                    <label className="label-widget">Ajouter le lien de l'image</label>
                    <input className="input-widget" placeholder="http://mon-image.fr" />
                </Widget>
                <Widget id="link" label="Lien du projet">
                    <label className="label-widget">Ajouter le lien du projet</label>
                    <input className="input-widget" placeholder="http://mon-projet.fr" />
                </Widget>
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