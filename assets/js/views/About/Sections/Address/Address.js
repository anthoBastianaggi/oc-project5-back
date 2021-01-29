import React from 'react';
import Flex from '../../../../components/Flex/Flex';
import Title from '../../../../components/Title/Title';
import './Address.module.scss';
    
const Address = ({ user, onAddressUpdate, values }) => {
    const defaultValue = getDefaultValues(user);

    function getDefaultValues(user) {
        return {
            address: user.address,
            postal_code: user.postal_code,
            city: user.city,
            country: user.country
        }
    }

    return (
        <div className="section-address">
            <Title as="h2" stylesTitle="stylesH2" className="address-title">Adresse</Title>
            <div className="street-address">
                <label>Adresse</label>
                <input 
                name="address" 
                placeholder="Adresse" 
                defaultValue={values.address || defaultValue.address} 
                onChange={onAddressUpdate} 
                />
            </div>
            <div className="address">
                <Flex className="address-container">
                    <div className="postal-code">
                        <label>Code Postal</label>
                        <input 
                        name="postal_code" 
                        placeholder="Code Postal" 
                        defaultValue={values.postal_code || defaultValue.postal_code} 
                        onChange={onAddressUpdate} 
                        />
                    </div>
                    <div className="city">
                        <label>Ville</label>
                        <input 
                        name="city" 
                        placeholder="Ville" 
                        defaultValue={values.city || defaultValue.city} 
                        onChange={onAddressUpdate} 
                        />
                    </div>
                    <div className="country">
                        <label>Pays</label>
                        <input 
                        name="country" 
                        placeholder="Pays" 
                        defaultValue={values.country || defaultValue.country} 
                        onChange={onAddressUpdate} 
                        />
                    </div>
                </Flex>
            </div>
        </div>
    )
}
    
export default Address;