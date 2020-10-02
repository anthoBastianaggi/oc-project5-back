import React from 'react';
import './CategorySkill.module.scss';
import Button from '../../../components/Button/Button';
import Table from '../../../components/Table/Table';
import Select from '../../../components/Select/Select';
    
const CategorySkill = () => {
    const data = [
        { id: "1", name: "CMS", slug: "cms" },
        { id: "2", name: "Graphic", slug: "graphic" },
        { id: "3", name: "Langages", slug: "langages" },
        { id: "4", name: "Libraries and Frameworks", slug: "libraries-and-frameworks" }
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
        <div className="wrap category-skill">
            <div className="category-skill-header">
                <div className="category-skill-settings">
                    <div className="button-add-category-skill">
                        <Button type="primary" label="Publier" className="btn-add-category-skill" />
                    </div>
                </div>  
                <div className="category-skill-title">
                    <h1 className="title">Categorie skills</h1>
                </div>  
            </div>
            <div className="content-category-skill">
                <div className="content-edit">
                    <h2 >Ajouter une nouvelle catégorie</h2>
                    <div className="name-category-skill">
                        <label>Nom</label>
                        <input placeholder="Ajouter un nom de categorie" />
                    </div>
                    <div className="slug-category-skill">
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
    
export default CategorySkill;