import React from 'react';
import './Projects.module.scss';
import List from '../../components/List/List';
    
const Projects = () => {
    const data = [
        { id: "2", title: "WebAgency", category: "Sites Vitrines" },
        { id: "3", title: "Blog de Jean Forteroche", category: "Web Develop" },
        { id: "4", title: "VeloV : Réservation de vélo", category: "App Web" }
    ];
    
    return (
        <div className="wrap">
            <h1 className="projects-title">Projects</h1>
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
    
export default Projects;