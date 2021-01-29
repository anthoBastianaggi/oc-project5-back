import React, { useState, useEffect } from 'react';
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
import { projectsSection } from '../../server/services/projects/projects';
import Flex from '../../components/Flex/Flex';
import Title from '../../components/Title/Title';

const Projects = () => {
    const [open, setOpen] = useState(false);
    const [data, setData] = useState([]);
    const [showMessage, setShowMessage] = useState(false);

    function openModal() {
        setOpen(true);
    }

    function closeModal() {
        setOpen(false);
    }
    
    function deleteProject(id) {
        projectsSection.deleteProject(id);
        setShowMessage(true);
        window.setTimeout("location=('/projects');", 2000);
    }

    const columns = [
        {
          id: "1",
          name: "Titre",
          slug: "title"
        },
        {
            id: "2",
            name: "Catégorie",
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

    useEffect(() => {
        projectsSection.getProjects().then(result => setData(result))
    }, []);

    const renderDeleteProjectModal = (id) => (
        <Modal className="modal-project" onClose={closeModal} title="Supprimer projet">
            <form className="modal-container" role="form">
                <div className="modal-icon">
                    <FontAwesomeIcon icon={faExclamationCircle} />
                </div>
                <p className="modal-description">Êtes-vous vraiment certains de vouloir supprimer le projet ?</p>
                <p className="modal-description">Cette action irrémédiable supprimera le projet de votre portfolio.</p>
                <p className="modal-description">Cliquez sur le bouton pour confirmer la suppression de votre projet.</p>
                <Button className={cs("modal-button", "delete-btn")} variant="primary" type="button" label="Supprimer le projet" onClick={(e) => deleteProject(id)} />
                <Button className={cs("modal-button", "cancel")} variant="secondary" type="button" label="Annuler"  onClick={closeModal} />
            </form>
        </Modal>
    );

    return (
        <>
        {showMessage && <span className="success-message"><strong>Succès !</strong> Le projet a bien été supprimé !</span>}
        <div className="wrap">
            <Title as="h1" stylesTitle="stylesH1" className="projects-title">Portfolio</Title>
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
                            <Flex className="actions">
                                <div className="update">
                                    <Link href={`/update-project/${id}`} label="Modifier" />
                                </div>
                                <div className="delete">
                                    <Button variant="tertiary" type="button" className="btn-open-modal" label="Supprimer" onClick={openModal} />
                                    {open && renderDeleteProjectModal(id)}
                                </div>
                            </Flex>
                        </TableDataCell>
                        <TableDataCell>
                            <span className="item">{category.name}</span>
                        </TableDataCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </div>
        </>
    )
}
    
export default Projects;