import React from 'react';
import './Services.module.scss';
import List from '../../components/List/List';
    
const Services = () => {
    const data = [
        { id: "2", title: "Developpement Wordpress" },
        { id: "3", title: "Developpement Prestashop" },
        { id: "4", title: "Domaines et hébergement" }
    ];
    
    return (
        <div className="wrap">
            <h1 className="services-title">SERVICES</h1>
            <List 
            data={data} 
            children={
                <div className="list-header">
                    <div className="title">
                        <span>Titre</span>
                    </div>
                </div>
            } 
            />
        </div>
    )
}
    
export default Services;