import React, { useRef, useState } from 'react';
import './AddProject.module.scss';
import Button from '../../../components/Button/Button';
import Widget from '../../../components/Widget/Widget';
import SidebarWidget from '../../../components/Widget/SidebarWidget/SidebarWidget';
import { faCog, faTimes } from '@fortawesome/free-solid-svg-icons';
import cx from 'classnames';
    
const AddProject = () => {
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
            <div className="project-header">
                <div className="project-settings">
                    <div className="button-add-project">
                        <Button type="primary" label="Publier" className="btn-add-project" />
                    </div>
                    <BtnSettings />
                </div>  
                <div className="project-title">
                    <h1 className="title">Ajouter un nouveau projet</h1>
                </div>  
            </div>
            <div className="content-project">
                <div className={cx("content-edit", { ["active"]: open })}>
                    <div className="title">
                        <h2>Titre</h2>
                        <input placeholder="Ajouter un titre" />
                    </div>
                    <div className="description">
                        <h2>Description</h2>
                        <textarea placeholder="Ajouter une description"  />
                    </div>
                </div>
                <SidebarWidget 
                className={cx("sidebar-widget", { ["active"]: open })}
                setSidebarWidgetRef={setSidebarWidgetRef}
                opened={open} 
                />
                <div className="content-widget">
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
        </div>
    )
}
    
export default AddProject;