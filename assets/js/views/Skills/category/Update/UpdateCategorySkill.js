import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './UpdateCategorySkill.module.scss';
import Button from '../../../../components/Button/Button';
import { categorySkillService } from '../../../../server/services/skills/category/category-skill';
import Flex from '../../../../components/Flex/Flex';
import Title from '../../../../components/Title/Title';

const UpdateCategorySkill = () => {
    const [data, setData] = useState([]);
    const [name, setName] = useState(null);
    const [slug, setSlug] = useState(null);
    const [showMessage, setShowMessage] = useState(false);
    
    let params = useParams();

    useEffect(() => {
        categorySkillService.showCategorySkill(params.id).then(result => setData(result))
    }, []);

    function updateCategorySkillFetch() {
        if( data.id === params.id 
            || name !== null && name !== data.name 
            || slug !== null && slug !== data.slug
        ) {
            categorySkillService.updateCategorySkill(params.id, name, slug);
            setShowMessage(true);
            window.setTimeout("location=('/category-skill');",2000);
        }      
    };

    return (
        <>
        {showMessage && <span className="success-message"><strong>Succès !</strong> Les données de la catégorie de compétence ont bien été mise à jour !</span>}
        <div className="wrap">
            <Flex className="update-category-skill-header">
                <Flex className="update-category-skill-settings" end>
                    <Flex className="button-update-category-skill" center>
                        <Button variant="primary" type="button" label="Modifier" className="btn-update-category-skill" onClick={(e) => { updateCategorySkillFetch(e) }} />
                    </Flex>
                </Flex>  
                <Flex className="update-category-skill-title">
                    <Title as="h1" stylesTitle="stylesH1" className="title">Modifier la catégorie de compétences</Title>
                </Flex>  
            </Flex>
            <Flex className="content-update-category-skill">
                <div className="content-edit">
                    <div className="name-update-category-skill">
                        <label>Nom</label>
                        <input placeholder="Ajouter un nom de catégorie" defaultValue={data.name} onChange={(e) => { setName(e.target.value) }} />
                    </div>
                    <div className="slug-update-category-skill">
                        <label>Slug</label>
                        <input placeholder="Ajouter un slug" defaultValue={data.slug} onChange={(e) => { setSlug(e.target.value) }} />
                    </div>
                </div>
            </Flex>
        </div>
        </>
    )
}
    
export default UpdateCategorySkill;