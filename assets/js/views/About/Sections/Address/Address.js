import React from 'react';
import './Address.module.scss';
    
const Address = () => {
    return (
        <div className="section-address">
            <h2 className="address-title">Address</h2>
            <div className="street-address">
                <label>Street Address</label>
                <input placeholder="Street Address" defaultValue="Route d'Afa, Lieu-dit U vangoni" />
            </div>
            <div className="address">
                <div className="address-container">
                    <div className="postal-code">
                        <label>Postal Code</label>
                        <input placeholder="Postal Code" defaultValue="20167" />
                    </div>
                    <div className="city">
                        <label>City</label>
                        <input placeholder="City" defaultValue="Appietto" />
                    </div>
                    <div className="country">
                        <label>Country</label>
                        <input placeholder="Country" defaultValue="France" />
                    </div>
                </div>
            </div>
        </div>
    )
}
    
export default Address;