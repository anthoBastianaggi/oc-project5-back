import React, { useRef, useState } from 'react';
import './UpdateProject.module.scss';
import Button from '../../../components/Button/Button';
import Widget from '../../../components/Widget/Widget';
import SidebarWidget from '../../../components/Widget/SidebarWidget/SidebarWidget';
import Checkbox from '../../../components/Checkbox/Checkbox';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import cx from 'classnames';
    
const UpdateProject = () => {
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

    const data = [
        { id: "1", name: "App Web", slug: "app-web" },
        { id: "2", name: "CMS", slug: "cms" },
        { id: "3", name: "Sites Vitrines", slug: "sites-vitrines" },
        { id: "4", name: "Web Design", slug: "web-design" },
        { id: "5", name: "Web Develop", slug: "web-develop" }
    ];

    return (
        <div className="wrap">
            <div className="update-project-header">
                <div className="update-project-settings">
                    <div className="button-update-project">
                        <Button variant="primary" type="button" label="Modifier" className="btn-update-project" />
                    </div>
                    <div className="button-widget">
                        <Button variant="tertiary" type="button" className="btn-open-widget" icon={faCog} onClick={openSidebarWidget} />
                    </div>
                </div>  
                <div className="update-project-title">
                    <h1 className="title">Modifier le projet</h1>
                </div>  
            </div>
            <div className="content-update-project">
                <div className={cx("content-edit", { ["active"]: open })}>
                    <div className="title">
                        <label>Titre</label>
                        <input placeholder="Ajouter un titre" />
                    </div>
                    <div className="description">
                        <label>Description</label>
                        <textarea placeholder="Ajouter une description"  />
                    </div>
                </div>
                <SidebarWidget 
                className={cx("sidebar-widget", { ["active"]: open })} 
                setSidebarWidgetRef={setSidebarWidgetRef} 
                opened={open}
                onClose={closeSidebarWidget}
                >   
                    <Widget id="category" label="Categorie du projet">
                        {data.map(({ id, name, slug }) => (
                            <Checkbox key={id} label={name} name={slug}/>
                        ))}
                    </Widget>
                    <Widget id="image" label="Image du projet">
                        <label className="label-widget">Ajouter le lien de l'image</label>
                        <input className="input-widget" placeholder="http://mon-image.fr" />
                    </Widget>
                    <Widget id="link" label="Lien du projet">
                        <label className="label-widget">Ajouter le lien du projet</label>
                        <input className="input-widget" placeholder="http://mon-projet.fr" />
                    </Widget>
                </SidebarWidget>
                <div className="content-widget">
                    <Widget id="category" label="Categorie du projet">
                        {data.map(({ id, name, slug }) => (
                            <Checkbox key={id} label={name} name={slug}/>
                        ))}
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
    
export default UpdateProject;