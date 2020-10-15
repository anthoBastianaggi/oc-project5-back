import React from 'react';
import './UpdateCategorySkill.module.scss';
import Button from '../../../../components/Button/Button';
    
const UpdateCategorySkill = () => {
    return (
        <div className="wrap">
            <div className="update-category-skill-header">
                <div className="update-category-skill-settings">
                    <div className="button-update-category-skill">
                        <Button variant="primary" type="button" label="Modifier" className="btn-update-category-skill" />
                    </div>
                </div>  
                <div className="update-category-skill-title">
                    <h1 className="title">Modifier la categorie skill</h1>
                </div>  
            </div>
            <div className="content-update-category-skill">
                <div className="content-edit">
                    <div className="name-update-category-skill">
                        <label>Nom</label>
                        <input placeholder="Ajouter un nom de categorie" />
                    </div>
                    <div className="slug-update-category-skill">
                        <label>Slug</label>
                        <input placeholder="Ajouter un slug" />
                    </div>
                </div>
            </div>
        </div>
    )
}
    
export default UpdateCategorySkill;