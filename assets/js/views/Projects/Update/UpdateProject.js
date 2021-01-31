import React, { useRef, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './UpdateProject.module.scss';
import Button from '../../../components/Button/Button';
import Widget from '../../../components/Widget/Widget';
import SidebarWidget from '../../../components/Widget/SidebarWidget/SidebarWidget';
import Checkbox from '../../../components/Checkbox/Checkbox';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import cx from 'classnames';
import cs from 'classnames';
import { categoryProjectService } from '../../../server/services/projects/category/category-project';
import { projectsSection } from '../../../server/services/projects/projects';
import Flex from '../../../components/Flex/Flex';
import Title from '../../../components/Title/Title';
    
const UpdateProject = () => {
    const [open, setOpen] = useState(false);
    const [dataCategory, setDataCategory] = useState([]);
    const [data, setData] = useState([]);
    const [name, setName] = useState(null);
    const [description, setDescription] = useState(null);
    const [image, setImage] = useState(null);
    const [alt, setAlt] = useState(null);
    const [link, setLink] = useState(null);
    const [select, setSelect] = useState(null);
    const [showMessage, setShowMessage] = useState(false);

    const container = useRef();

    let params = useParams();

    const handleSelectChange = event => {
        const value = event.target.id;
        setSelect(value);
      };

    function openSidebarWidget() {
        setOpen(true);
    }

    function closeSidebarWidget() {
        setOpen(false);
    }

    function setSidebarWidgetRef(ref) {
        container.current = ref;
    }

    function updateProjectFetch() {
        if( data.id === params.id 
            || name !== null && name !== data.name 
            || description !== null && description !== data.description
            || image !== null && image !== data.image 
            || alt !== null && alt !== data.alt 
            || link !== null && link !== data.link  
            || select !== null && select !== data?.category?.id
        ) {
            projectsSection.updateProject(params.id, name, description, select, image, alt, link);
            setShowMessage(true);
            window.setTimeout("location=('/projects');", 2000);
        } 
    };

    useEffect(() => {
        projectsSection.showProject(params.id).then(result => setData(result));
    }, []);

    useEffect(() => {
        categoryProjectService.getCategoryProject().then(result => setDataCategory(result))
    }, []);

    return (
        <>
        {showMessage && <span className="success-message"><strong>Succès !</strong> Les données du projet ont bien été mise à jour !</span>}
        <SidebarWidget 
        className={cx("sidebar-widget", { ["active"]: open })} 
        setSidebarWidgetRef={setSidebarWidgetRef} 
        opened={open}
        onClose={closeSidebarWidget}
        >   
            <Widget id="sidebar-category" label="Catégorie du projet">
                {dataCategory.map(({ id, name }) => (
                    <Checkbox  
                    key={id} 
                    id={id} 
                    label={name} 
                    name="sidebar-category-project" 
                    value={id} 
                    checked={id === data?.category?.id}
                    onChange={event => handleSelectChange(event)}  
                    />
                ))}
            </Widget>
            <Widget id="image" label="Image du projet">
                <label className="label-widget">Ajouter le lien de l'image</label>
                <input 
                className={cs("input-widget", "input-image")}
                placeholder="mon-image.jpg" 
                defaultValue={data.image}
                onChange={(e) => { setImage(e.target.value) }} 
                />
                <label className="label-widget">Ajouter le text alternative</label>
                <input 
                className="input-widget" 
                placeholder="Text alternative" 
                defaultValue={data.alt}
                onChange={(e) => { setAlt(e.target.value) }} 
                />
            </Widget>
            <Widget id="link" label="Lien du projet">
                <label className="label-widget">Ajouter le lien du projet</label>
                <input className="input-widget" placeholder="http://mon-projet.fr" defaultValue={data.link} onChange={(e) => { setLink(e.target.value) }} />
            </Widget>
        </SidebarWidget>
        <div className="wrap">
            <Flex className="update-project-header">
                <Flex className="update-project-settings" end>
                    <Flex className="button-update-project" center>
                        <Button variant="primary" type="button" label="Modifier" className="btn-update-project" onClick={(e) => { updateProjectFetch(e) }} />
                    </Flex>
                    <Flex className="button-widget" center>
                        <Button variant="tertiary" type="button" className="btn-open-widget" icon={faCog} onClick={openSidebarWidget} />
                    </Flex>
                </Flex>  
                <Flex className="update-project-title">
                    <Title as="h1" stylesTitle="stylesH1" className="title">Modifier le projet</Title>
                </Flex>  
            </Flex>
            <Flex className="content-update-project">
                <div className={cx("content-edit", { ["active"]: open })}>
                    <div className="title">
                        <label>Titre</label>
                        <input placeholder="Ajouter un titre" defaultValue={data.name} onChange={(e) => { setName(e.target.value) }} />
                    </div>
                    <div className="description">
                        <label>Description</label>
                        <textarea placeholder="Ajouter une description" defaultValue={data.description} onChange={(e) => { setDescription(e.target.value) }}  />
                    </div>
                </div>
                <div className="content-widget">
                    <Widget id="category" label="Catégorie du projet">
                        {dataCategory.map(({ id, name }) => (
                            <Checkbox  
                            key={id} 
                            id={id} 
                            label={name} 
                            name="category-project" 
                            value={id}
                            checked={id === data?.category?.id}
                            onChange={event => handleSelectChange(event)}  
                            />
                        ))}
                    </Widget>
                    <Widget id="image" label="Image du projet">
                        <label className="label-widget">Ajouter le lien de l'image</label>
                        <input 
                        className={cs("input-widget", "input-image")}
                        placeholder="mon-image.jpg" 
                        defaultValue={data.image}
                        onChange={(e) => { setImage(e.target.value) }} 
                        />
                        <label className="label-widget">Ajouter le text alternative</label>
                        <input 
                        className="input-widget" 
                        placeholder="Text alternative" 
                        defaultValue={data.alt}
                        onChange={(e) => { setAlt(e.target.value) }} 
                        />
                    </Widget>
                    <Widget id="link" label="Lien du projet">
                        <label className="label-widget">Ajouter le lien du projet</label>
                        <input className="input-widget" placeholder="http://mon-projet.fr" defaultValue={data.link} onChange={(e) => { setLink(e.target.value) }} />
                    </Widget>
                </div>
            </Flex>
        </div>
        </>
    )
}
    
export default UpdateProject;