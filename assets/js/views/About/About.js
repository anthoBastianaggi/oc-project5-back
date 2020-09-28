import React, { useRef, useState } from 'react';
import './About.module.scss';
import Button from '../../components/Button/Button';
import Widget from '../../components/Widget/Widget';
import SidebarWidget from '../../components/Widget/SidebarWidget/SidebarWidget';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import cx from 'classnames';
import Identity from './sections/Identity/Identity';
import Address from './sections/Address/Address';
import Internet from './sections/Internet/Internet.';
    
const About = () => {
    const [open, setOpen] = useState(false);
    const container = useRef();

    function openSidebarWidget() {
        setOpen(true);
    }

    function closeSidebarWidget() {
        setOpen(false);
    }

    function setSidebarWidgetRef(ref) {
        container.current = ref;
    }

    return (
        <div className="wrap">
            <div className="about-header">
                <div className="about-settings">
                    <div className="button-update-about">
                        <Button type="primary" label="Modifier" className="btn-update-about" />
                    </div>
                    <div className="button-widget">
                        <Button type="tertiary" className="btn-open-widget" icon={faCog} onClick={openSidebarWidget} />
                    </div>
                </div>  
                <div className="about-title">
                    <h1 className="title">About</h1>
                </div>  
            </div>
            <div className="content-about">
                <div className={cx("content-edit", { ["active"]: open })}>
                    <Identity />
                    <Address />
                    <Internet />
                </div>
                <SidebarWidget 
                className={cx("sidebar-widget", "sidebar-widget-about", { ["active"]: open })}
                setSidebarWidgetRef={setSidebarWidgetRef}
                opened={open} 
                onClose={closeSidebarWidget}
                >
                    <Widget id="image-about" label="Image à propos de moi">
                        <label className="label-widget">Ajouter le lien de l'image</label>
                        <input className="input-widget" placeholder="http://mon-image.fr" defaultValue="http://mon-image-about.fr" />
                    </Widget>
                    <Widget id="lien-visualisation" label="Lien visualisation du cv">
                        <label className="label-widget">Ajouter le lien pour visualiser le cv</label>
                        <input className="input-widget" placeholder="http://mon-cv.fr" defaultValue="http://mon-lien-cv.fr" />
                    </Widget>
                    <Widget id="lien-telechargement" label="Lien téléchargement du cv">
                        <label className="label-widget">Ajouter le lien pour télécharger le cv</label>
                        <input className="input-widget" placeholder="http://mon-telechargement-cv.fr" defaultValue="http://mon-lien-telechargement-cv.fr" />
                    </Widget>
                </SidebarWidget>
                <div className="content-widget">
                    <Widget id="image-about" label="Image à propos de moi">
                        <label className="label-widget">Ajouter le lien de l'image</label>
                        <input className="input-widget" placeholder="http://mon-image.fr" defaultValue="http://mon-image-about.fr" />
                    </Widget>
                    <Widget id="lien-visualisation" label="Lien visualisation du cv">
                        <label className="label-widget">Ajouter le lien pour visualiser le cv</label>
                        <input className="input-widget" placeholder="http://mon-cv.fr" defaultValue="http://mon-lien-cv.fr" />
                    </Widget>
                    <Widget id="lien-telechargement" label="Lien téléchargement du cv">
                        <label className="label-widget">Ajouter le lien pour télécharger le cv</label>
                        <input className="input-widget" placeholder="http://mon-telechargement-cv.fr" defaultValue="http://mon-lien-telechargement-cv.fr" />
                    </Widget>
                </div>
            </div>
        </div>
    )
}
    
export default About;