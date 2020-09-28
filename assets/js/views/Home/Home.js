import React, { useRef, useState } from 'react';
import './Home.module.scss';
import Button from '../../components/Button/Button';
import Widget from '../../components/Widget/Widget';
import SidebarWidget from '../../components/Widget/SidebarWidget/SidebarWidget';
import { faCog, faTimes } from '@fortawesome/free-solid-svg-icons';
import cx from 'classnames';
    
const Home = () => {
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
            <div className="home-header">
                <div className="home-settings">
                    <div className="button-update-home">
                        <Button type="primary" label="Modifier" className="btn-update-home" />
                    </div>
                    <div className="button-widget">
                        <Button type="tertiary" className="btn-open-widget" icon={faCog} onClick={openSidebarWidget} />
                    </div>
                </div>  
                <div className="home-title">
                    <h1 className="title">Home</h1>
                </div>  
            </div>
            <div className="content-home">
                <div className={cx("content-edit", { ["active"]: open })}>
                    <div className="title">
                        <label>Titre</label>
                        <input placeholder="Ajouter un titre" defaultValue="Développeur Web Junior" />
                    </div>
                    <div className="description">
                        <label>Description</label>
                        <textarea 
                        placeholder="Ajouter une description" 
                        defaultValue="Bonjour et bienvenue sur mon site, Venez découvrir mon parcours professionnel, Mes services proposés, Ainsi que mes projets réalisés."  
                        />
                    </div>
                </div>
                <SidebarWidget 
                className={cx("sidebar-widget", { ["active"]: open })}
                setSidebarWidgetRef={setSidebarWidgetRef}
                opened={open} 
                onClose={closeSidebarWidget}
                >
                    <Widget id="image" label="Image du projet">
                        <label className="label-widget">Ajouter le lien de l'image</label>
                        <input className="input-widget" placeholder="http://mon-image.fr" defaultValue="http://mon-image-home.fr" />
                    </Widget>
                </SidebarWidget>
                <div className="content-widget">
                    <Widget id="image" label="Image du projet">
                        <label className="label-widget">Ajouter le lien de l'image</label>
                        <input className="input-widget" placeholder="http://mon-image.fr" defaultValue="http://mon-image-home.fr" />
                    </Widget>
                </div>
            </div>
        </div>
    )
}
    
export default Home;