import React from 'react';
import './CategoryProject.module.scss';
import Button from '../../../components/Button/Button';
import Table from '../../../components/Table/Table';
import Select from '../../../components/Select/Select';

const CategoryProject = () => {
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

    return (
        <div className="wrap category-project">
            <div className="category-project-header">
                <div className="category-project-settings">
                    <div className="button-add-category-project">
                        <Button type="primary" label="Publier" className="btn-add-category-project" />
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
                        <Button type="tertiary" label="Appliquer" className="btn-apply" />
                    </div>
                    <Table columns={columns} data={data} />
                </div>
            </div>
        </div>
    )
}
    
export default CategoryProject;