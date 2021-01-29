import React, { useState, useEffect, useRef } from 'react';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import './UpdateService.module.scss';
import Button from '../../../components/Button/Button';
import { useParams } from 'react-router-dom';
import { servicesSection } from '../../../server/services/services';
import SidebarWidget from '../../../components/Widget/SidebarWidget/SidebarWidget';
import Widget from '../../../components/Widget/Widget';
import cx from 'classnames';
import Flex from '../../../components/Flex/Flex';
import Title from '../../../components/Title/Title';

const UpdateService= () => {
    const [open, setOpen] = useState(false);
    const [data, setData] = useState([]);
    const [title, setTitle] = useState(null);
    const [description, setDescription] = useState(null);
    const [icon, setIcon] = useState(null);
    const [showMessage, setShowMessage] = useState(false);
    
    const container = useRef();

    let params = useParams();

    useEffect(() => {
        servicesSection.showService(params.id).then(result => setData(result))
    }, []);

    function updateServiceFetch() {
        if( data.id === params.id 
            || title !== null && title !== data.title 
            || description !== null && description !== data.description
            || icon !== null && icon !== data.icon
        ) {
            servicesSection.updateService(params.id, title, description, icon);
            setShowMessage(true);
            window.setTimeout("location=('/services');", 2000);
        } 
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

    return (
        <>
        {showMessage && <span className="success-message"><strong>Succès !</strong> Les données du service ont bien été mise à jour !</span>}
        <div className="wrap">
            <Flex className="update-service-header">
                <Flex className="update-service-button" end>
                    <Flex className="button-update-service" center>
                        <Button variant="primary" type="button" label="Modifier" className="btn-update-service" onClick={(e) => { updateServiceFetch(e) }} />
                    </Flex>
                    <Flex className="button-widget" center>
                        <Button variant="tertiary" type="button" className="btn-open-widget" icon={faCog} onClick={openSidebarWidget} />
                    </Flex>
                </Flex>     
                <Flex className="update-service-title">
                    <Title as="h1" stylesTitle="stylesH1" className="title">Modifier le service</Title>
                </Flex>  
            </Flex>
            <Flex className="content-update-service">
                <div className={cx("content-edit", { ["active"]: open })}>
                    <div className="title">
                        <label>Titre</label>
                        <input placeholder="Ajouter un titre" defaultValue={data.name} onChange={(e) => { setTitle(e.target.value) }} />
                    </div>
                    <div className="description">
                        <label>Description</label>
                        <textarea placeholder="Ajouter une description" defaultValue={data.description} onChange={(e) => { setDescription(e.target.value) }} />
                    </div>
                </div>
                <SidebarWidget 
                className={cx("sidebar-widget", { ["active"]: open })}
                setSidebarWidgetRef={setSidebarWidgetRef}
                opened={open} 
                onClose={closeSidebarWidget}
                >
                    <Widget id="icone" label="Icone du service">
                        <label className="label-widget">Ajouter une icone</label>
                        <input className="input-widget" placeholder="faWordpress" defaultValue={data.icon} onChange={(e) => { setIcon(e.target.value) }} />
                    </Widget>
                </SidebarWidget>
                <div className="content-widget">
                    <Widget id="icone" label="Icone du service">
                        <label className="label-widget">Ajouter une icone</label>
                        <input className="input-widget" placeholder="faWordpress" defaultValue={data.icon} onChange={(e) => { setIcon(e.target.value) }} />
                    </Widget>
                </div>
            </Flex>
        </div>
        </>
    )
}
    
export default UpdateService;