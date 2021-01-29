import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './UpdateCategoryProject.module.scss';
import Button from '../../../../components/Button/Button';
import { categoryProjectService } from '../../../../server/services/projects/category/category-project';
import Flex from '../../../../components/Flex/Flex';
import Title from '../../../../components/Title/Title';

const UpdateCategoryProject = () => {
    const [data, setData] = useState([]);
    const [name, setName] = useState(null);
    const [slug, setSlug] = useState(null);
    const [showMessage, setShowMessage] = useState(false);
    
    let params = useParams();

    useEffect(() => {
        categoryProjectService.showCategoryProject(params.id).then(result => setData(result))
    }, []);

    function updateCategoryProjectFetch() {
        if( data.id === params.id 
            || name !== null && name !== data.name 
            || slug !== null && slug !== data.slug
        ) {
            categoryProjectService.updateCategoryProject(params.id, name, slug);
            setShowMessage(true);
            window.setTimeout("location=('/category-project');",2000);
        }    
    };

    return (
        <>
        {showMessage && <span className="success-message"><strong>Succès !</strong> Les données de la catégorie du projet ont bien été mise à jour !</span>}
        <div className="wrap">
            <Flex className="update-category-project-header">
                <Flex className="update-category-project-settings" end>
                    <Flex className="button-update-category-project" center>
                        <Button variant="primary" type="button" label="Modifier" className="btn-update-category-project" onClick={(e) => { updateCategoryProjectFetch(e) }} />
                    </Flex>
                </Flex>  
                <Flex className="update-category-project-title">
                    <Title as="h1" stylesTitle="stylesH1" className="title">Modifier la catégorie du projet</Title>
                </Flex>  
            </Flex>
            <Flex className="content-update-category-project">
                <div className="content-edit">
                    <div className="name-update-category-project">
                        <label>Nom</label>
                        <input placeholder="Ajouter un nom de catégorie" defaultValue={data.name} onChange={(e) => { setName(e.target.value) }} />
                    </div>
                    <div className="slug-update-category-project">
                        <label>Slug</label>
                        <input placeholder="Ajouter un slug" defaultValue={data.slug} onChange={(e) => { setSlug(e.target.value) }} />
                    </div>
                </div>
            </Flex>
        </div>
        </>
    )
}
    
export default UpdateCategoryProject;