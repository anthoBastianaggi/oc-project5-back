import React, { useState, useEffect } from 'react';
import './Services.module.scss';
import cs from 'classnames';
import Table from '../../components/Table/Table';
import Select from '../../components/Select/Select';
import Button from '../../components/Button/Button';
import Flex from '../../components/Flex/Flex';
import Title from '../../components/Title/Title';
import TableHead from '../../components/Table/TableHead/TableHead';
import TableRow from '../../components/Table/TableRow/TableRow';
import TableHeaderCell from '../../components/Table/TableHeaderCell/TableHeaderCell';
import TableBody from '../../components/Table/TableBody/TableBody';
import TableDataCell from '../../components/Table/TableDataCell/TableDataCell';
import Link from '../../components/Link/Link';
import Modal from '../../components/Modal/Modal';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { servicesSection } from '../../server/services/services';

const Services = () => {
    const [open, setOpen] = useState(false);
    const [data, setData] = useState([]);
    const [showMessage, setShowMessage] = useState(false);

    function openModal() {
        setOpen(true);
    }

    function closeModal() {
        setOpen(false);
    }

    function deleteService(id) {
        servicesSection.deleteService(id);
        setShowMessage(true);
        window.setTimeout("location=('/services');", 2000);
    }

    const optionsList = [
        {
            id: "1",
            name: "Actions groupées"
        },
        {
            id: "2",
            name: "Supprimer"
        }
    ];  

    useEffect(() => {
        servicesSection.getServices().then(result => setData(result))
    }, []);

    const renderDeleteServiceModal = (id) => (
        <Modal className="modal-service" onClose={closeModal} title="Supprimer service">
            <form className="modal-container" role="form">
                <div className="modal-icon">
                    <FontAwesomeIcon icon={faExclamationCircle} />
                </div>
                <p className="modal-description">Êtes-vous vraiment certains de vouloir supprimer le service ?</p>
                <p className="modal-description">Cette action irrémédiable supprimera le service de votre portfolio.</p>
                <p className="modal-description">Cliquez sur le bouton pour confirmer la suppression de votre service.</p>
                <Button className={cs("modal-button", "delete-btn")} variant="primary" type="button" label="Supprimer le service" onClick={(e) => deleteService(id)} />
                <Button className={cs("modal-button", "cancel")} variant="secondary" type="button" label="Annuler"  onClick={closeModal} />
            </form>
        </Modal>
    );

    return (
        <>
        {showMessage && <span className="success-message"><strong>Succès !</strong> Le service a bien été supprimé !</span>}
        <div className="wrap">
            <Title as="h1" stylesTitle="stylesH1" className="services-title">SERVICES</Title>
            <Flex className="action-select">
                <Select optionsList={optionsList} />
                <Button variant="tertiary" type="button" label="Appliquer" className="btn-apply" />
            </Flex>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableHeaderCell className="checkbox">
                            <input type="checkbox" />
                        </TableHeaderCell>
                        <TableHeaderCell>
                            Titre
                        </TableHeaderCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {data.map(({ id, name }) => (
                    <TableRow key={id}>
                        <TableDataCell className="checkbox">
                            <input type="checkbox" />
                        </TableDataCell>
                        <TableDataCell>
                            <span className="item">{name}</span>
                            <Flex className="actions">
                                <div className="update">
                                    <Link href={`/update-service/${id}`} label="Modifier" />
                                </div>
                                <div className="delete">
                                    <Button variant="tertiary" type="button" className="btn-open-modal" label="Supprimer" onClick={openModal} />
                                    {open && renderDeleteServiceModal(id)}
                                </div>
                            </Flex>
                        </TableDataCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </div>
        </>
    )
}
    
export default Services;