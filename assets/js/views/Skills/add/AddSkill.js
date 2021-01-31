import React, { useRef, useState, useEffect } from 'react';
import './AddSkill.module.scss';
import Button from '../../../components/Button/Button';
import Widget from '../../../components/Widget/Widget';
import SidebarWidget from '../../../components/Widget/SidebarWidget/SidebarWidget';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import cx from 'classnames';
import Checkbox from '../../../components/Checkbox/Checkbox';
import { skillsSection } from '../../../server/services/skills/skills';
import { categorySkillService } from '../../../server/services/skills/category/category-skill';
import Flex from '../../../components/Flex/Flex';
import Title from '../../../components/Title/Title';
    
const AddSkill = () => {
    const [open, setOpen] = useState(false);
    const [name, setName] = useState(null);
    const [percentage, setPercentage] = useState(null);
    const [select, setSelect] = useState('');
    const [dataCategory, setDataCategory] = useState([]);
    const [showMessage, setShowMessage] = useState(false);

    const container = useRef();

    function addSkillFetch() {
        if(name && percentage && percentage <= 100 && select !== null) {
            skillsSection.postSkill(name, percentage, select);
            setShowMessage(true);
            window.setTimeout("location=('/skills');", 2000);
        }
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

    function handleSelectChange(event) {
        const value = event.target.id;
        setSelect(value);
    };

    useEffect(() => {
        categorySkillService.getCategorySkill().then(result => setDataCategory(result))
    }, []);

    return (
        <>
        {showMessage && <span className="info-message"><strong>Info !</strong> La compétence a bien été ajoutée !</span>}
        <SidebarWidget 
            className={cx("sidebar-widget", { ["active"]: open })}
            setSidebarWidgetRef={setSidebarWidgetRef}
            opened={open} 
            onClose={closeSidebarWidget}
            id="sidebarWidgetAddSkill"
        >
            <Widget id="category-skill" label="Catégorie de compétences">
                {dataCategory.map(({ id, name }) => (
                    <Checkbox  
                    key={id} 
                    id={id} 
                    label={name} 
                    name="category-skill" 
                    value={id} 
                    checked={select === name}
                    onChange={event => handleSelectChange(event)}  
                    />
                ))}
            </Widget>
        </SidebarWidget>
        <div className="wrap">
            <Flex className="skill-header">
                <Flex className="skill-settings" end>
                    <Flex className="button-add-skill" center>
                        <Button variant="primary" type="button" label="Publier" className="btn-add-skill" onClick={(e) => { addSkillFetch(e) }} />
                    </Flex>
                    <Flex className="button-widget" center>
                        <Button variant="tertiary" type="button" className="btn-open-widget" icon={faCog} onClick={openSidebarWidget} />
                    </Flex>
                </Flex>  
                <Flex className="skill-title">
                    <Title as="h1" stylesTitle="stylesH1" className="title">Ajouter une nouvelle compétence</Title>
                </Flex>  
            </Flex>
            <Flex className="content-skill">
                <div className={cx("content-edit", { ["active"]: open })}>
                    <div className="title">
                        <label>Titre</label>
                        <input placeholder="Ajouter un titre" onChange={(e) => { setName(e.target.value) }} />
                    </div>
                    <div className="percentage">
                        <label>Pourcentage</label>
                        <input type="number" min="0" max="100" placeholder="Ajouter un pourcentage" onChange={(e) => { setPercentage(e.target.value) }} />
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
                            checked={select === name}
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
    
export default AddSkill;