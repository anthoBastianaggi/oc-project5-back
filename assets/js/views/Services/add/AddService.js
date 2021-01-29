import React, { useState, useRef } from 'react';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import './AddService.module.scss';
import Button from '../../../components/Button/Button';
import { servicesSection } from '../../../server/services/services';
import SidebarWidget from '../../../components/Widget/SidebarWidget/SidebarWidget';
import Widget from '../../../components/Widget/Widget';
import cx from 'classnames';
import Flex from '../../../components/Flex/Flex';
import Title from '../../../components/Title/Title';

const AddService = () => {
    const [open, setOpen] = useState(false);
    const [name, setName] = useState(null);
    const [description, setDescription] = useState(null);
    const [icon, setIcon] = useState(null);
    const [showMessage, setShowMessage] = useState(false);

    const container = useRef();

    function addServiceFetch() {
        if(name && description && icon) {
            servicesSection.postService(name, description, icon);
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
        {showMessage && <span className="info-message"><strong>Info !</strong> Le service a bien été ajouté !</span>}
        <div className="wrap">
            <Flex className="service-header">
                <Flex className="service-settings" end>
                    <Flex className="button-add-service" center>
                        <Button variant="primary" type="button" label="Publier" className="btn-add-service" onClick={(e) => { addServiceFetch(e) }} />
                    </Flex>
                    <Flex className="button-widget" center>
                        <Button variant="tertiary" type="button" className="btn-open-widget" icon={faCog} onClick={openSidebarWidget} />
                    </Flex>
                </Flex>     
                <Flex className="service-title">
                    <Title as="h1" stylesTitle="stylesH1" className="title">Ajouter un nouveau service</Title>
                </Flex>  
            </Flex>
            <Flex className="content-service">
                <div className={cx("content-edit", { ["active"]: open })}>
                    <div className="title">
                        <label>Titre</label>
                        <input placeholder="Ajouter un titre" onChange={(e) => { setName(e.target.value) }} />
                    </div>
                    <div className="description">
                        <label>Description</label>
                        <textarea placeholder="Ajouter une description" onChange={(e) => { setDescription(e.target.value) }}  />
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
                        <input className="input-widget" placeholder="faWordpress" onChange={(e) => { setIcon(e.target.value) }} />
                    </Widget>
                </SidebarWidget>
                <div className="content-widget">
                    <Widget id="icone" label="Icone du service">
                        <label className="label-widget">Ajouter une icone</label>
                        <input className="input-widget" placeholder="faWordpress" onChange={(e) => { setIcon(e.target.value) }} />
                    </Widget>
                </div>
            </Flex>
        </div>
        </>
    )
}
    
export default AddService;