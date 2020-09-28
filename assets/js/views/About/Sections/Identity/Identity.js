import React, { useState } from 'react';
import './Identity.module.scss';
import SelectDate from '../../../../components/Select/SelectDate/SelectDate';
    
const Identity = () => {
    const [date, setDate] = useState(new Date(2000, 0, 1));
    const handleChange = value => setDate(value);

    return (
        <div className="section-identity">
            <h2 className="identity">Identity</h2>
            <div className="name">
                <div className="name-container">
                    <div className="firstname">
                        <label>Firstname</label>
                        <input placeholder="Ajouter votre nom" defaultValue="Anthony" />
                    </div>
                    <div className="lastname">
                        <label>Lastname</label>
                        <input placeholder="Ajouter votre nom" defaultValue="Bastianaggi" />
                    </div>
                </div>   
            </div>
            <div className="birthdate">
                <SelectDate
                    value={date}
                    onDateChange={handleChange}
                    className="date-picker"
                />
            </div>
            <div className="profile">
                <label>Profil</label>
                <input placeholder="Ajouter un titre" defaultValue="Developpeur Front-End Junior" />
            </div>
            <div className="status">
                <label>Statut</label>
                <input placeholder="Ajouter un titre" defaultValue="Etudiant / Salarié" />
            </div>
            <div className="description">
                <label>Description</label>
                <textarea 
                placeholder="Ajouter une description" 
                defaultValue="Je travaille actuellement chez Qwant Music situé sur Ajaccio en Corse et je suis une formation de Développeur Web Junior sur OpenClassrooms.

                Ce portfolio a pour but de présenter les diiférents services proposés ainsi que les projets sur lesquels j'ai travaillé. Vous pouvez également visualiser mon CV et le télécharger.
                
                Si vous avez une question, ou si vous avez simplement besoin d'un renseignement, vous pouvez me contacter en cliquant ici: "  
                />
            </div>
        </div>
    )
}
    
export default Identity;