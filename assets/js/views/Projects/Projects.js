import React, { useState } from 'react';
import './Projects.module.scss';
import cs from 'classnames';
import Table from '../../components/Table/Table';
import TableHead from '../../components/Table/TableHead/TableHead';
import TableRow from '../../components/Table/TableRow/TableRow';
import TableHeaderCell from '../../components/Table/TableHeaderCell/TableHeaderCell';
import TableBody from '../../components/Table/TableBody/TableBody';
import TableDataCell from '../../components/Table/TableDataCell/TableDataCell';
import Select from '../../components/Select/Select';
import Button from '../../components/Button/Button';
import Link from '../../components/Link/Link';
import Modal from '../../components/Modal/Modal';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
    
const Projects = () => {
    const [open, setOpen] = useState(false);

    function openModal() {
        setOpen(true);
    }

    function closeModal() {
        setOpen(false);
    }

    const data = [
        { id: "2", name: "WebAgency", category: "Sites Vitrines" },
        { id: "3", name: "Blog de Jean Forteroche", category: "Web Develop" },
        { id: "4", name: "VeloV : Réservation de vélo", category: "App Web" }
    ];
    
    const columns = [
        {
          id: "1",
          name: "Titre",
          slug: "title"
        },
        {
            id: "2",
            name: "Categories",
            slug: "category"
        },
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

    const renderDeleteProjectModal = () => (
        <Modal className="modal-project" onClose={closeModal} title="Supprimer projet">
            <form className="modal-container" role="form">
                <div className="modal-icon">
                    <FontAwesomeIcon icon={faExclamationCircle} />
                </div>
                <p className="modal-description">Êtes-vous vraiment certains de vouloir supprimer le projet ?</p>
                <p className="modal-description">Cette action irrémédiable supprimera le projet de votre portfolio.</p>
                <p className="modal-description">Cliquez sur le bouton pour confirmer la suppression de votre projet.</p>
                <Button className={cs("modal-button", "delete")} variant="primary" type="submit" label="Supprimer le projet" />
                <Button className={cs("modal-button", "cancel")} variant="secondary" type="button" label="Annuler"  onClick={closeModal} />
            </form>
        </Modal>
    );

    return (
        <div className="wrap">
            <h1 className="projects-title">Projects</h1>
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
                {data.map(({ id, name, category }) => (
                    <TableRow key={id}>
                        <TableDataCell className="checkbox">
                            <input type="checkbox" />
                        </TableDataCell>
                        <TableDataCell>
                            <span className="item">{name}</span>
                            <div className="actions">
                                <div className="update">
                                    <Link href="/update-project" label="Modifier" />
                                </div>
                                <div className="delete">
                                    <Button variant="tertiary" type="button" className="btn-open-modal" label="Supprimer" onClick={openModal} />
                                </div>
                            </div>
                        </TableDataCell>
                        <TableDataCell>
                            <span className="item">{category}</span>
                        </TableDataCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
            {open && renderDeleteProjectModal()}
        </div>
    )
}
    
export default Projects;