import React, { useState, useEffect } from 'react';
import './CategorySkill.module.scss';
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
import { categorySkillService } from '../../../server/services/skills/category/category-skill';
import Flex from '../../../components/Flex/Flex';
import Title from '../../../components/Title/Title';
    
const CategorySkill = () => {
    const [open, setOpen] = useState(false);
    const [name, setName] = useState(null);
    const [slug, setSlug] = useState(null);
    const [data, setData] = useState([]);
    const [showMessageDelete, setShowMessageDelete] = useState(false);
    const [showMessage, setShowMessage] = useState(false);

    function openModal() {
        setOpen(true);
    }

    function closeModal() {
        setOpen(false);
    }

    function deleteCategorySkill(id) {
        categorySkillService.deleteCategorySkill(id);
        setShowMessageDelete(true);
        window.setTimeout("location=('/category-skill');", 2000);
    }

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

    function addCategorySkillFetch() {
        if(name && slug) {
            categorySkillService.postCategorySkill(name, slug);
            setShowMessage(true);
            window.setTimeout("location=('/category-skill');", 2000);
        }   
    };

    useEffect(() => {
        categorySkillService.getCategorySkill().then(result => setData(result))
    }, []);

    const renderDeleteCategorySkillModal = (id) => (
        <Modal className="modal-category-skill" onClose={closeModal} title="Supprimer catégorie de compétences">
            <form className="modal-container" role="form">
                <div className="modal-icon">
                    <FontAwesomeIcon icon={faExclamationCircle} />
                </div>
                <p className="modal-description">Êtes-vous vraiment certains de vouloir supprimer la catégorie de compétences ?</p>
                <p className="modal-description">Cette action irrémédiable supprimera la catégorie de votre portfolio.</p>
                <p className="modal-description">Cliquez sur le bouton pour confirmer la suppression de votre catégorie.</p>
                <Button className={cs("modal-button", "delete-btn")} variant="primary" type="button" label="Supprimer la catégorie" onClick={(e) => deleteCategorySkill(id)} />
                <Button className={cs("modal-button", "cancel")} variant="secondary" type="button" label="Annuler"  onClick={closeModal} />
            </form>
        </Modal>
    );
    
    return (
        <>
        {showMessageDelete && <span className="success-message"><strong>Succès !</strong> La catégorie de compétence a bien été supprimée !</span>}
        {showMessage && <span className="info-message"><strong>Info !</strong> La catégorie de compétence a bien été ajoutée !</span>}
        <div className="wrap category-skill">
            <Flex className="category-skill-header">
                <Flex className="category-skill-settings" end>
                    <Flex className="button-add-category-skill" center>
                        <Button variant="primary" type="button" label="Publier" className="btn-add-category-skill" onClick={(e) => addCategorySkillFetch()} />
                    </Flex>
                </Flex>  
                <Flex className="category-skill-title">
                    <Title as="h1" stylesTitle="stylesH1" className="title">Catégorie de compétences</Title>
                </Flex>  
            </Flex>
            <Flex className="content-category-skill">
                <div className="content-edit">
                    <Title as="h2" stylesTitle="stylesH2" >Ajouter une nouvelle catégorie</Title>
                    <div className="name-category-skill">
                        <label>Nom</label>
                        <input placeholder="Ajouter un nom de catégorie" onChange={(e) => { setName(e.target.value) }} />
                    </div>
                    <div className="slug-category-skill">
                        <label>Slug</label>
                        <input placeholder="Ajouter un slug" onChange={(e) => { setSlug(e.target.value) }} />
                    </div>
                </div>
                <div className="content-table">
                    <Title as="h2" stylesTitle="stylesH2">Liste des catégories</Title>
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
                        {data.map(({ id, name, slug }) => (
                            <TableRow key={id}>
                                <TableDataCell className="checkbox">
                                    <input type="checkbox" />
                                </TableDataCell>
                                <TableDataCell>
                                    <span className="item">{name}</span>
                                    <Flex className="actions">
                                        <div className="update">
                                            <Link href={`/update-category-skill/${id}`} label="Modifier" />
                                        </div>
                                        <div className="delete">
                                            <Button variant="tertiary" type="button" className="btn-open-modal" label="Supprimer" onClick={openModal} />
                                            {open && renderDeleteCategorySkillModal(id)}
                                        </div>
                                    </Flex>
                                </TableDataCell>
                                <TableDataCell>
                                    <span className="item">{slug}</span>
                                </TableDataCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                </div>
            </Flex>
        </div>
        </>
    )
}
    
export default CategorySkill;