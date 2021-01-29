import React, { useRef, useState, useEffect } from 'react';
import './Home.module.scss';
import Button from '../../components/Button/Button';
import Widget from '../../components/Widget/Widget';
import SidebarWidget from '../../components/Widget/SidebarWidget/SidebarWidget';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import cx from 'classnames';
import cs from 'classnames';
import { homeSection } from '../../server/services/home';
import Flex from '../../components/Flex/Flex';
import Title from '../../components/Title/Title';
    
const Home = () => {
    const [open, setOpen] = useState(false);
    const [data, setData] = useState([]);
    const [titleValue, setTitle] = useState(null);
    const [descriptionValue, setDescription] = useState(null);
    const [imageValue, setImage] = useState(null);
    const [altValue, setAlt] = useState(null);
    const [showMessage, setShowMessage] = useState(false);

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

    function homeUpdate() { 
        data.map((title, description, image, alt) => {
            if( titleValue !== null && titleValue !== title 
                || descriptionValue !== null && descriptionValue !== description 
                || imageValue !== null && imageValue !== image 
                || altValue !== null && altValue !== alt
            ) {
                homeSection.updateHome(titleValue, descriptionValue, imageValue, altValue)
                setShowMessage(true)
                window.setTimeout("location=('/home');", 2000);
            }
        })
    };

    async function dataHome() {
        await homeSection.getHome().then(result => setData(result))
    }
    useEffect(() => {
       dataHome()
    }, []);

    return (
        <>
        {showMessage && <span className="success-message"><strong>Succès !</strong> Les données de l'accueil ont bien été mise à jour !</span>}
        <div className="wrap">
            <Flex className="home-header">
                <Flex className="home-settings" end>
                    <Flex className="button-update-home" center>
                        <Button variant="primary" type="button" label="Modifier" className="btn-update-home" onClick={(e) => { homeUpdate(e) }} />
                    </Flex>
                    <Flex className="button-widget" center>
                        <Button variant="tertiary" type="button" className="btn-open-widget" icon={faCog} onClick={openSidebarWidget} />
                    </Flex>
                </Flex>  
               
                <Flex className="home-title">
                    <Title as="h1" stylesTitle="stylesH1" className="title">Accueil</Title>
                </Flex>  
            </Flex>
            {data.map(({ id, title, description, image, alt }) => (
            <Flex key={id} className="content-home">
                <div className={cx("content-edit", { ["active"]: open })}>
                    <div className="title">
                        <label>Titre</label>
                        <input placeholder="Ajouter un titre" defaultValue={title} onChange={(e) => { setTitle(e.target.value) }} />
                    </div>
                    <div className="description">
                        <label>Description</label>
                        <textarea 
                        placeholder="Ajouter une description" 
                        defaultValue={description} 
                        onChange={(e) => { setDescription(e.target.value) }}
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
                        <input 
                        className={cs("input-widget", "input-image")}
                        placeholder="mon-image.jpg" 
                        defaultValue={image}
                        onChange={(e) => { setImage(e.target.value) }} 
                        />
                        <label className="label-widget">Ajouter le text alternative</label>
                        <input 
                        className="input-widget" 
                        placeholder="Text alternative" 
                        defaultValue={alt}
                        onChange={(e) => { setAlt(e.target.value) }} 
                        />
                    </Widget>
                </SidebarWidget>
                <div className="content-widget">
                    <Widget id="image" label="Image du projet">
                        <label className="label-widget">Ajouter le lien de l'image</label>
                        <input 
                        className={cs("input-widget", "input-image")}  
                        placeholder="mon-image.jpg" 
                        defaultValue={image}
                        onChange={(e) => { setImage(e.target.value) }} 
                        />
                        <label className="label-widget">Ajouter le text alternative</label>
                        <input 
                        className="input-widget" 
                        placeholder="Text alternative" 
                        defaultValue={alt}
                        onChange={(e) => { setAlt(e.target.value) }} 
                        />
                    </Widget>
                </div>
            </Flex>
            ))}     
        </div>
        </>
    )
}
    
export default Home;