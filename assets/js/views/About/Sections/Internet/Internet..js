import React from 'react';
import './Internet.module.scss';
    
const Internet = () => {
    return (
        <div className="section-internet">
            <h2 className="internet-title">Internet</h2>
            <div className="address-e-mail">
                <label>Address E-mail</label>
                <input placeholder="Address E-mail" defaultValue="a.bastianaggi@gmail.com" />
            </div>
        </div>
    )
}
    
export default Internet;