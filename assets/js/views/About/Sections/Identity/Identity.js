import React from 'react';
import './Identity.module.scss';
import SelectDate from '../../../../components/Select/SelectDate/SelectDate';
import PropTypes from 'prop-types';
import Flex from '../../../../components/Flex/Flex';
import Title from '../../../../components/Title/Title';

const Identity = ({ user, onIdentityUpdate, onIdentityBirthdateUpdate, values }) => {
    const defaultValue = getDefaultValues(user);
    
    function getDefaultValues(user) {
        return {
            firstname: user.firstname,
            lastname: user.lastname,
            birthdate: new Date(user.birthdate.slice(0, 10)),
            profile: user.profile,
            status: user.status,
            description: user.description
        }
    }

    return (
        <div className="section-identity">
            <Title as="h2" stylesTitle="stylesH2" className="identity">Identité</Title>
            <div className="name">
                <Flex className="name-container">
                    <div className="firstname">
                        <label>Prénom</label>
                        <input 
                        name="firstname"
                        placeholder="Ajouter votre prénom" 
                        defaultValue={values.firstname || defaultValue.firstname} 
                        onChange={onIdentityUpdate} 
                        />
                    </div>
                    <div className="lastname">
                        <label>Nom</label>
                        <input 
                        name="lastname"
                        placeholder="Ajouter votre nom" 
                        defaultValue={values.lastname || defaultValue.lastname} 
                        onChange={onIdentityUpdate} 
                        />
                    </div>
                </Flex>   
            </div>
            <div className="birthdate">
                <SelectDate
                    name="birthdate"
                    value={values.birthdate || defaultValue.birthdate}
                    onDateChange={onIdentityBirthdateUpdate}
                    className="date-picker"
                />
            </div>
            <div className="profile">
                <label>Profil</label>
                <input 
                name="profile"
                placeholder="Ajouter un profil" 
                defaultValue={values.profile || defaultValue.profile} 
                onChange={onIdentityUpdate} 
                />
            </div>
            <div className="status">
                <label>Statut</label>
                <input 
                name="status"
                placeholder="Ajouter un statut" 
                defaultValue={values.status || defaultValue.status} 
                onChange={onIdentityUpdate} 
                />
            </div>
            <div className="description">
                <label>Description</label>
                <textarea 
                name="description"
                placeholder="Ajouter une description" 
                defaultValue={values.description || defaultValue.description}  
                onChange={onIdentityUpdate}
                />
            </div>
        </div>
    )
}

Identity.propTypes = {
    onIdentityUpdate: PropTypes.func,
    values: PropTypes.object
  }
    
export default Identity;