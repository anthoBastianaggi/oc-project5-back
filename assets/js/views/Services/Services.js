import React, { useState } from 'react';
import './Services.module.scss';
import cs from 'classnames';
import Table from '../../components/Table/Table';
import Select from '../../components/Select/Select';
import Button from '../../components/Button/Button';
import TableHead from '../../components/Table/TableHead/TableHead';
import TableRow from '../../components/Table/TableRow/TableRow';
import TableHeaderCell from '../../components/Table/TableHeaderCell/TableHeaderCell';
import TableBody from '../../components/Table/TableBody/TableBody';
import TableDataCell from '../../components/Table/TableDataCell/TableDataCell';
import Link from '../../components/Link/Link';
import Modal from '../../components/Modal/Modal';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
    
const Services = () => {
    const [open, setOpen] = useState(false);

    function openModal() {
        setOpen(true);
    }

    function closeModal() {
        setOpen(false);
    }

    const data = [
        { id: "1", name: "Developpement Wordpress", slug: "developpement-wordpress" },
        { id: "2", name: "Developpement Prestashop", slug: "developpement-prestashop" },
        { id: "3", name: "Domaines et hébergement", slug: "domaines-et-hébergement" }
    ];

    const columns = [
        {
          id: "1",
          name: "Titre",
          slug: "title"
        },
        {
            id: "2",
            name: "Slug",
            slug: "slug"
          }
    ];

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

    const renderDeleteServiceModal = () => (
        <Modal className="modal-service" onClose={closeModal} title="Supprimer service">
            <form className="modal-container" role="form">
                <div className="modal-icon">
                    <FontAwesomeIcon icon={faExclamationCircle} />
                </div>
                <p className="modal-description">Êtes-vous vraiment certains de vouloir supprimer le service ?</p>
                <p className="modal-description">Cette action irrémédiable supprimera le service de votre portfolio.</p>
                <p className="modal-description">Cliquez sur le bouton pour confirmer la suppression de votre service.</p>
                <Button className={cs("modal-button", "delete")} variant="primary" type="submit" label="Supprimer le service" />
                <Button className={cs("modal-button", "cancel")} variant="secondary" type="button" label="Annuler"  onClick={closeModal} />
            </form>
        </Modal>
    );
    
    return (
        <div className="wrap">
            <h1 className="services-title">SERVICES</h1>
            <div className="action-select">
                <Select optionsList={optionsList} />
                <Button variant="tertiary" type="button" label="Appliquer" className="btn-apply" />
            </div>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableHeaderCell className="checkbox">
                            <input type="checkbox" />
                        </TableHeaderCell>
                        {columns.map(({ id, name, slug }) => (
                            <TableHeaderCell key={id} className={slug}>
                               {name}
                            </TableHeaderCell>
                        ))}   
                    </TableRow>
                </TableHead>
                <TableBody>
                {data.map(({ id, name, slug }) => (
                    <TableRow key={id}>
                        <TableDataCell className="checkbox">
                            <input type="checkbox" />
                        </TableDataCell>
                        <TableDataCell>
                            <span className="item">{name}</span>
                            <div className="actions">
                                <div className="update">
                                    <Link href={`/update-service/${id}`} label="Modifier" />
                                </div>
                                <div className="delete">
                                    <Button variant="tertiary" type="button" className="btn-open-modal" label="Supprimer" onClick={openModal} />
                                </div>
                            </div>
                        </TableDataCell>
                        <TableDataCell>
                            <span className="item">{slug}</span>
                        </TableDataCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
            {open && renderDeleteServiceModal()}
        </div>
    )
}
    
export default Services;