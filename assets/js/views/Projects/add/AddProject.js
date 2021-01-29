import React, { useRef, useState, useEffect } from 'react';
import './AddProject.module.scss';
import Button from '../../../components/Button/Button';
import Widget from '../../../components/Widget/Widget';
import SidebarWidget from '../../../components/Widget/SidebarWidget/SidebarWidget';
import Checkbox from '../../../components/Checkbox/Checkbox';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import cx from 'classnames';
import cs from 'classnames';
import { projectsSection } from '../../../server/services/projects/projects';
import { categoryProjectService } from '../../../server/services/projects/category/category-project';
import Flex from '../../../components/Flex/Flex';
import Title from '../../../components/Title/Title';
    
const AddProject = () => {
    const [dataCategory, setDataCategory] = useState([]);
    const [open, setOpen] = useState(false);
    const [name, setName] = useState(null);
    const [description, setDescription] = useState(null);
    const [image, setImage] = useState(null);
    const [alt, setAlt] = useState(null);
    const [link, setLink] = useState(null);
    const [select, setSelect] = useState('');
    const [showMessage, setShowMessage] = useState(false);

    const container = useRef();

    function addProjectFetch() {
        if(name && description && image && alt && link && select !== null) {
            projectsSection.postProject(name, description, image, alt, link, select);
            setShowMessage(true);
            window.setTimeout("location=('/projects');", 2000);
        }
    };

    function handleSelectChange(event) {
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

    useEffect(() => {
        categoryProjectService.getCategoryProject().then(result => setDataCategory(result))
    }, []);

    return (
        <>
        {showMessage && <span className="info-message"><strong>Info !</strong> Le projet a bien été ajouté !</span>}
        <div className="wrap">
            <Flex className="project-header">
                <Flex className="project-settings" end>
                    <Flex className="button-add-project" center>
                        <Button variant="primary" type="button" label="Publier" className="btn-add-project" onClick={(e) => { addProjectFetch(e) }} />
                    </Flex>
                    <Flex className="button-widget" center>
                        <Button variant="tertiary" type="button" className="btn-open-widget" icon={faCog} onClick={openSidebarWidget} />
                    </Flex>
                </Flex>  
                <Flex className="project-title">
                    <Title as="h1" stylesTitle="stylesH1" className="title">Ajouter un nouveau projet</Title>
                </Flex>  
            </Flex>
            <Flex className="content-project">
                <div className={cx("content-edit", { ["active"]: open })}>
                    <div className="title">
                        <label>Titre</label>
                        <input placeholder="Ajouter un titre" onChange={(e) => { setName(e.target.value) }} />
                    </div>
                    <div className="description">
                        <label>Description</label>
                        <textarea placeholder="Ajouter une description" onChange={(e) => { setDescription(e.target.value) }} />
                    </div>
                </div>
                <SidebarWidget 
                className={cx("sidebar-widget", { ["active"]: open })} 
                setSidebarWidgetRef={setSidebarWidgetRef} 
                opened={open}
                onClose={closeSidebarWidget}
                >   
                    <Widget id="category" label="Catégorie du projet">
                        {dataCategory.map(({ id, name }) => (
                            <Checkbox
                            key={id} 
                            id={id} 
                            label={name} 
                            name="category-project" 
                            value={id} 
                            checked={select === name}
                            onChange={event => handleSelectChange(event)}                    
                            />
                        ))}
                    </Widget>
                    <Widget id="image" label="Image du projet">
                        <label className="label-widget">Ajouter le lien de l'image</label>
                        <input className={cs("input-widget", "input-image")} placeholder="mon-image.jpg" onChange={(e) => { setImage(e.target.value) }} />
                        
                        <label className="label-widget">Ajouter le text alternative</label>
                        <input className="input-widget" placeholder="Text alternative" onChange={(e) => { setAlt(e.target.value) }} />
                    </Widget>
                    <Widget id="link" label="Lien du projet">
                        <label className="label-widget">Ajouter le lien du projet</label>
                        <input className="input-widget" placeholder="http://mon-projet.fr" onChange={(e) => { setLink(e.target.value) }} />
                    </Widget>
                </SidebarWidget>
                <div className="content-widget">
                    <Widget id="category" label="Catégorie du projet">
                        {dataCategory.map(({ id, name }) => (
                            <Checkbox
                            key={id} 
                            id={id} 
                            label={name} 
                            name="category-project" 
                            value={id} 
                            checked={select === name}
                            onChange={event => handleSelectChange(event)}                    
                            />
                        ))}
                    </Widget>
                    <Widget id="image" label="Image du projet">
                        <label className="label-widget">Ajouter le lien de l'image</label>
                        <input className={cs("input-widget", "input-image")} placeholder="mon-image.jpg" onChange={(e) => { setImage(e.target.value) }} />
                        
                        <label className="label-widget">Ajouter le text alternative</label>
                        <input className="input-widget" placeholder="Text alternative" onChange={(e) => { setAlt(e.target.value) }} />
                    </Widget>
                    <Widget id="link" label="Lien du projet">
                        <label className="label-widget">Ajouter le lien du projet</label>
                        <input className="input-widget" placeholder="http://mon-projet.fr" onChange={(e) => { setLink(e.target.value) }} />
                    </Widget>
                </div>
            </Flex>
        </div>
        </>
    )
}
    
export default AddProject;