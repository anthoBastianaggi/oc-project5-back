import React from 'react';
import Title from '../../../../components/Title/Title';
import './Internet.module.scss';
    
const Internet = ({ user, onInternetUpdate, values }) => {
    const defaultValue = getDefaultValues(user);

    function getDefaultValues(user) {
        return {
            email: user.email
        }
    }

    return (
        <div className="section-internet">
            <Title as="h2" stylesTitle="stylesH2" className="internet-title">Internet</Title>
            <div className="address-e-mail">
                <label>Adresse e-mail</label>
                <input 
                name="email" 
                placeholder="Ajouter adresse e-mail" 
                defaultValue={values.email || defaultValue.email}
                onChange={onInternetUpdate} 
                />
            </div>
        </div>
    )
}
    
export default Internet;