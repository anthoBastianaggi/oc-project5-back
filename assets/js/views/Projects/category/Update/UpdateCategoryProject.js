import React from 'react';
import './UpdateCategoryProject.module.scss';
import Button from '../../../../components/Button/Button';
    
const UpdateCategoryProject = () => {
    return (
        <div className="wrap">
            <div className="update-category-project-header">
                <div className="update-category-project-settings">
                    <div className="button-update-category-project">
                        <Button variant="primary" type="button" label="Modifier" className="btn-update-category-project" />
                    </div>
                </div>  
                <div className="update-category-project-title">
                    <h1 className="title">Modifier la categorie projet</h1>
                </div>  
            </div>
            <div className="content-update-category-project">
                <div className="content-edit">
                    <div className="name-update-category-project">
                        <label>Nom</label>
                        <input placeholder="Ajouter un nom de categorie" />
                    </div>
                    <div className="slug-update-category-project">
                        <label>Slug</label>
                        <input placeholder="Ajouter un slug" />
                    </div>
                </div>
            </div>
        </div>
    )
}
    
export default UpdateCategoryProject;