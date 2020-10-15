import React from 'react';
import './UpdateService.module.scss';
import Button from '../../../components/Button/Button';
    
const UpdateService= () => {
    return (
        <div className="wrap">
            <div className="update-service-header">
                <div className="update-service-button">
                    <div className="button-update-service">
                        <Button variant="primary" type="button" label="Modifier" className="btn-update-service" />
                    </div>
                </div>     
                <div className="update-service-title">
                    <h1 className="title">Modifier le service</h1>
                </div>  
            </div>
            <div className="content-update-service">
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
    
export default UpdateService;