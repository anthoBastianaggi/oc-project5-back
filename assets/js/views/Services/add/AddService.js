import React from 'react';
import './AddService.module.scss';
import Button from '../../../components/Button/Button';
    
const AddService = () => {
    return (
        <div className="wrap">
            <div className="service-header">
                <div className="service-button">
                    <div className="button-add-service">
                        <Button type="primary" label="Publier" className="btn-add-service" />
                    </div>
                </div>     
                <div className="service-title">
                    <h1 className="title">Ajouter un nouveau service</h1>
                </div>  
            </div>
            <div className="content-service">
                <div className="content-edit">
                    <div className="title">
                        <label>Titre</label>
                        <input placeholder="Ajouter un titre" />
                    </div>
                    <div className="description">
                        <label>Description</label>
                        <textarea placeholder="Ajouter une description"  />
                    </div>
                </div>
            </div>
        </div>
    )
}
    
export default AddService;