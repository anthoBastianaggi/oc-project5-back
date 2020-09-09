import React, { useRef } from 'react';
import './Admin.module.scss';
import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';

const Admin = () => {
    const { register, errors, handleSubmit } = useForm({});

    const onSubmit = () => {
        window.location.href = '/home';
      };

    return (
        <div className="wrap">
            <div className="container">
                <div className="content">
                    <div className="title">
                        <h1>Connectez-vous à votre compte</h1>
                    </div>
                    <div className="infobox">
                        <div className="infobox-container">
                            <form className="form" onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-group">
                                    <div className="group">
                                        <label className="label-form">Identifiant ou adresse e-mail</label>
                                        <span className="icon"><FontAwesomeIcon icon={faUser} /></span>
                                        <input
                                            name="email"
                                            type="email"
                                            placeholder="Entrez votre identifiant ou adresse e-mail"
                                            className="input-form"
                                            ref={register({
                                                required: "You must specify email",
                                                pattern: {
                                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                message: "invalid email address"
                                                }
                                            })}
                                        />
                                        {errors.email && <p className="error-message">{errors.email.message}</p>}
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="group">
                                        <label className="label-form">Mot de passe</label>
                                        <span className="icon"><FontAwesomeIcon icon={faLock} /></span>
                                        <input
                                            name="password"
                                            type="password"
                                            placeholder="Entrez votre mot de passe"
                                            className="input-form"
                                            ref={register({
                                            required: "You must specify a password",
                                            minLength: {
                                                value: 8,
                                                message: "Password must have at least 8 characters"
                                            }
                                            })}
                                        />
                                        {errors.password && <p className="error-message">{errors.password.message}</p>}
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="group">
                                        <a href="">(J'ai oublié mon mot de passe)</a>
                                        <div className="group-button">
                                            <input name="checkbox" type="checkbox" />
                                            <label className="label-form">Se souvenir de moi</label>
                                            <input className="input-form-submit" type="submit" value="Se connecter" />
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
    
export default Admin;