import React, { useRef, useState } from 'react';
import './UpdateSkill.module.scss';
import Button from '../../../components/Button/Button';
import Widget from '../../../components/Widget/Widget';
import SidebarWidget from '../../../components/Widget/SidebarWidget/SidebarWidget';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import cx from 'classnames';
import Checkbox from '../../../components/Checkbox/Checkbox';

const UpdateSkill = () => {
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
        { id: "1", name: "CMS", slug: "cms" },
        { id: "2", name: "Graphic", slug: "graphic" },
        { id: "3", name: "Langages", slug: "langages" },
        { id: "4", name: "Libraries and Frameworks", slug: "libraries-and-frameworks" }
    ];

    return (
        <div className="wrap">
            <div className="update-skill-header">
                <div className="update-skill-settings">
                    <div className="button-update-skill">
                        <Button variant="primary" type="button" label="Modifier" className="btn-update-skill" />
                    </div>
                    <div className="button-widget">
                        <Button variant="tertiary" type="button" className="btn-open-widget" icon={faCog} onClick={openSidebarWidget} />
                    </div>
                </div>  
                <div className="update-skill-title">
                    <h1 className="title">Modifer le skill</h1>
                </div>  
            </div>
            <div className="content-update-skill">
                <div className={cx("content-edit", { ["active"]: open })}>
                    <div className="title">
                        <label>Titre</label>
                        <input placeholder="Ajouter un titre" />
                    </div>
                    <div className="percentage">
                        <label>Pourcentage</label>
                        <input type="number" min="0" max="100" placeholder="Ajouter un pourcentage" />
                    </div>
                </div>
                <SidebarWidget 
                className={cx("sidebar-widget", { ["active"]: open })}
                setSidebarWidgetRef={setSidebarWidgetRef}
                opened={open} 
                onClose={closeSidebarWidget}
                >
                    <Widget id="category-skill" label="Categorie du skill">
                        {data.map(({ id, name, slug }) => (
                            <Checkbox key={id} label={name} name={slug}/>
                        ))}
                    </Widget>
                </SidebarWidget>
                <div className="content-widget">
                    <Widget id="category-skill" label="Categorie du skill">
                        {data.map(({ id, name, slug }) => (
                            <Checkbox key={id} label={name} name={slug}/>
                        ))}
                    </Widget>
                </div>
            </div>
        </div>
    )
}
    
export default UpdateSkill;