import React from 'react';
import './Skills.module.scss';
import List from '../../components/List/List';
    
const Skills = () => {
    const data = [
        { id: "2", title: "javascript", category: "Langages" },
        { id: "3", title: "bootstrap", category: "Libraries and Frameworks" },
        { id: "4", title: "Prestashop", category: "CMS" }
    ];
    
    return (
        <div className="wrap">
            <h1 className="skills-title">Skills</h1>
            <List 
            data={data} 
            children={
                <div className="list-header">
                    <div className="title">
                        <span>Titre</span>
                    </div>
                    <div className="category">
                        <span>Categories</span>
                    </div>
                </div>
            } 
            />
        </div>
    )
}
    
export default Skills;