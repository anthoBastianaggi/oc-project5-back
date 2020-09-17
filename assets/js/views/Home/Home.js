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

    const BtnSettings = () => (
        <div className="button-widget">
            {!open ? 
                <Button type="tertiary" className="btn-open-widget" icon={faCog} onClick={openSidebarWidget} /> :
                <Button type="tertiary" className="btn-close-widget" icon={faTimes} onClick={closeSidebarWidget} />
            }
        </div>
    )

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
                    <BtnSettings />
                </div>  
                <div className="home-title">
                    <h1 className="title">Home</h1>
                </div>  
            </div>
            <div className="content-home">
                <div className={cx("content-edit", { ["active"]: open })}>
                    <div className="title">
                        <h2>Titre</h2>
                        <input placeholder="Ajouter un titre" defaultValue="Développeur Web Junior" />
                    </div>
                    <div className="description">
                        <h2>Description</h2>
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