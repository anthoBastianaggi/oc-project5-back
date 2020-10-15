import React, { useState } from 'react';
import './CategoryProject.module.scss';
import cs from 'classnames';
import Button from '../../../components/Button/Button';
import Table from '../../../components/Table/Table';
import TableHead from '../../../components/Table/TableHead/TableHead';
import TableRow from '../../../components/Table/TableRow/TableRow';
import TableHeaderCell from '../../../components/Table/TableHeaderCell/TableHeaderCell';
import TableBody from '../../../components/Table/TableBody/TableBody';
import TableDataCell from '../../../components/Table/TableDataCell/TableDataCell';
import Select from '../../../components/Select/Select';
import Link from '../../../components/Link/Link';
import Modal from '../../../components/Modal/Modal';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CategoryProject = () => {
    const [open, setOpen] = useState(false);

    function openModal() {
        setOpen(true);
    }

    function closeModal() {
        setOpen(false);
    }

    const data = [
        { id: "1", name: "App Web", slug: "app-web" },
        { id: "2", name: "CMS", slug: "cms" },
        { id: "3", name: "Sites Vitrines", slug: "sites-vitrines" },
        { id: "4", name: "Web Design", slug: "web-design" },
        { id: "5", name: "Web Develop", slug: "web-develop" }
    ];

    const columns = [
        {
          id: "1",
          name: "Nom",
          slug: "name"
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

    const renderDeleteCategoryProjectModal = () => (
        <Modal className="modal-category-project" onClose={closeModal} title="Supprimer categorie projet">
            <form className="modal-container" role="form">
                <div className="modal-icon">
                    <FontAwesomeIcon icon={faExclamationCircle} />
                </div>
                <p className="modal-description">Êtes-vous vraiment certains de vouloir supprimer la categorie du projet ?</p>
                <p className="modal-description">Cette action irrémédiable supprimera la categorie de votre portfolio.</p>
                <p className="modal-description">Cliquez sur le bouton pour confirmer la suppression de votre categorie.</p>
                <Button className={cs("modal-button", "delete")} variant="primary" type="submit" label="Supprimer la categorie" />
                <Button className={cs("modal-button", "cancel")} variant="secondary" type="button" label="Annuler"  onClick={closeModal} />
            </form>
        </Modal>
    );

    return (
        <div className="wrap category-project">
            <div className="category-project-header">
                <div className="category-project-settings">
                    <div className="button-add-category-project">
                        <Button variant="primary" type="button" label="Publier" className="btn-add-category-project" />
                    </div>
                </div>  
                <div className="category-project-title">
                    <h1 className="title">Categorie projet</h1>
                </div>  
            </div>
            <div className="content-category-project">
                <div className="content-edit">
                    <h2 >Ajouter une nouvelle catégorie</h2>
                    <div className="name-category-project">
                        <label>Nom</label>
                        <input placeholder="Ajouter un nom de categorie" />
                    </div>
                    <div className="slug-category-project">
                        <label>Slug</label>
                        <input placeholder="Ajouter un slug" />
                    </div>
                </div>
                <div className="content-table">
                    <h2>Liste des catégories</h2>
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
                                            <Link href="/update-category-project" label="Modifier" />
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
                    {open && renderDeleteCategoryProjectModal()}
                </div>
            </div>
        </div>
    )
}
    
export default CategoryProject;