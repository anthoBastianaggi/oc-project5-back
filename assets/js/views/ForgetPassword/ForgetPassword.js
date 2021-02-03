import React, { useState } from 'react';
import './ForgetPassword.module.scss';
import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import cs from 'classnames';
import Flex from '../../components/Flex/Flex';
import Title from '../../components/Title/Title';
import Button from '../../components/Button/Button';

const ForgetPassword = () => {
    const { register, errors, handleSubmit } = useForm({});
    const [email, setEmail] = useState(null);

    function onSubmit() {
        alert("Non fonctionnel actuellement.");
    }

    function cancelButton() {
        window.location.href = '/admin';
    }

    alert("Ce service n'est pas fonctionnel actuellement.");

    return (
        <div className="wrap">
            <div className="container">
                <Flex className="content" wrap>
                    <div className="title">
                        <Title as="h1" stylesTitle="stylesH1">Réinitialisation du mot de passe</Title>
                        <div className="line"></div>
                    </div>
                    <div className="infobox-forget">
                        <div className="infobox-container">
                            <div className="forget-title-container">
                                <Title as="h2" stylesTitle="stylesH2" className="forget-title">Vous avez oublié votre mot de passe ?</Title>
                            </div>
                            <div className="info-forget-container">
                                <p className="info-forget">
                                    Vous avez demandé la réinitialisation de votre mot de passe.
                                </p>
                                <p className="info-forget">
                                    Pour réinitialiser votre mot de passe, saisissez l'adresse e-mail que vous utilisez pour vous connecter 
                                    à votre compte. 
                                </p>
                            </div>
                            <form className="form" onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-group">
                                    <Flex className={cs("group", errors.email ? 'has-error' : '')} wrap>
                                        <label className="label-form">Adresse e-mail</label>
                                        <span className="icon"><FontAwesomeIcon icon={faEnvelope} /></span>
                                        <input
                                            name="email"
                                            type="text"
                                            placeholder="Entrez votre adresse email"
                                            className="input-form"
                                            ref={register({
                                                required: true
                                            })}
                                            onChange={(e) => { setEmail(e.target.value) }}
                                        />
                                        {errors.password?.type === "required" && (
                                            <p className="error-message">L'email est requis</p>
                                        )}
                                    </Flex>
                                </div>
                                <div className="form-group">
                                    <Flex className="group" wrap>
                                        <Flex className="group-button-forget">
                                            <Button variant="primary" type="submit" className="btn-submit" label="Réinitialiser votre mot de passe" />
                                            <Button variant="tertiary" type="button" className="btn-cancel" label="Annuler" onClick={cancelButton} />
                                        </Flex>
                                    </Flex>
                                </div>
                            </form>
                        </div>
                    </div>
                </Flex>
            </div>
        </div>
    )
}
    
export default ForgetPassword;