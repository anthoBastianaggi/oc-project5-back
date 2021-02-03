import React, { useRef, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './UpdateSkill.module.scss';
import Button from '../../../components/Button/Button';
import Widget from '../../../components/Widget/Widget';
import SidebarWidget from '../../../components/Widget/SidebarWidget/SidebarWidget';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import cx from 'classnames';
import Checkbox from '../../../components/Checkbox/Checkbox';
import { categorySkillService } from '../../../server/services/skills/category/category-skill';
import { skillsSection } from '../../../server/services/skills/skills';
import Title from '../../../components/Title/Title';
import Flex from '../../../components/Flex/Flex';

const UpdateSkill = () => {
    const [open, setOpen] = useState(false);
    const [dataCategory, setDataCategory] = useState([]);
    const [data, setData] = useState([]);
    const [nameValue, setName] = useState(null);
    const [percentageValue, setPercentage] = useState(null);
    const [select, setSelect] = useState(null);
    const [showMessage, setShowMessage] = useState(false);

    const container = useRef();

    let params = useParams();

    function handleSelectChange(event) {
        const value = event.target.id;
        setSelect(value);
    };

    function openSidebarWidget() {
        setOpen(true);
    }

    function closeSidebarWidget() {
        setOpen(false);
    }

    function setSidebarWidgetRef(ref) {
        container.current = ref;
    }

    function updateSkillFetch() {
        if( data.id === params.id 
            || nameValue !== null && nameValue !== data.name 
            || percentageValue !== null && percentageValue !== data.percentage 
            || select !== null && select !== data?.category?.id
        ) {
            skillsSection.updateSkill(params.id, nameValue, percentageValue, select);
            setShowMessage(true);
            window.setTimeout("location=('/skills');",2000);
        } 
    };

    useEffect(() => {
        skillsSection.showSkill(params.id).then(result => setData(result));
    }, []);

    useEffect(() => {
        categorySkillService.getCategorySkill().then(result => setDataCategory(result))
    }, []);

    return (
        <>
        {showMessage && <span className="success-message"><strong>Succès !</strong> Les données de compétence ont bien été mise à jour !</span>}
        <SidebarWidget 
            className={cx("sidebar-widget", { ["active"]: open })}
            setSidebarWidgetRef={setSidebarWidgetRef}
            opened={open} 
            onClose={closeSidebarWidget}
        >
            <Widget id="sidebar-category-skill" label="Catégorie de compétences">
                {dataCategory.map(({ id, name }) => (
                    <Checkbox  
                    key={id} 
                    id={id} 
                    label={name} 
                    name="sidebar-category-skill" 
                    value={id} 
                    checked={id === data.category.id}
                    onChange={event => handleSelectChange(event)}  
                    />
                ))}
            </Widget>
        </SidebarWidget>
        <div className="wrap">
            <Flex className="update-skill-header">
                <Flex className="update-skill-settings" end>
                    <Flex className="button-update-skill" center>
                        <Button variant="primary" type="button" label="Modifier" className="btn-update-skill"  onClick={(e) => { updateSkillFetch(e) }} />
                    </Flex>
                    <Flex className="button-widget" center>
                        <Button variant="tertiary" type="button" className="btn-open-widget" icon={faCog} onClick={openSidebarWidget} />
                    </Flex>
                </Flex>  
                <Flex className="update-skill-title">
                    <Title as="h1" stylesTitle="stylesH1" className="title">Modifer la compétence</Title>
                </Flex>  
            </Flex>
            <Flex className="content-update-skill">
                <div className={cx("content-edit", { ["active"]: open })}>
                    <div className="title">
                        <label>Titre</label>
                        <input placeholder="Ajouter un titre" defaultValue={data.name} onChange={(e) => { setName(e.target.value) }} />
                    </div>
                    <div className="percentage">
                        <label>Pourcentage</label>
                        <input type="number" min="0" max="100" placeholder="Ajouter un pourcentage" defaultValue={data.percentage} onChange={(e) => { setPercentage(e.target.value) }} />
                    </div>
                </div>
                <div className="content-widget">
                    <Widget id="category-skill" label="Catégorie de compétences">
                        {dataCategory.map(({ id, name }) => (
                            <Checkbox  
                            key={id} 
                            id={id} 
                            label={name} 
                            name="category-skill" 
                            value={id} 
                            checked={id === data.category.id}
                            onChange={event => handleSelectChange(event)}  
                            />
                        ))}
                    </Widget>
                </div>
            </Flex>
        </div>
        </>
    )
}
    
export default UpdateSkill;