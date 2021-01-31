import React, { useState } from 'react';
import './Admin.module.scss';
import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import { userService } from '../../server/services/user';
import cs from 'classnames';
import Flex from '../../components/Flex/Flex';
import Title from '../../components/Title/Title';
import Link from '../../components/Link/Link';

const Admin = () => {
    const { register, errors, handleSubmit } = useForm({});
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const [validation, setValidation] = useState(true);

    function onSubmit() {
        if (userService.login(username, password).then(value => value === undefined)) {
            setValidation(false);
        }
        return userService.login(username, password);
    }

    return (
        <div className="wrap">
            <div className="container">
                <Flex className="content" wrap>
                    <div className="title">
                        <Title as="h1" stylesTitle="stylesH1">Connectez-vous à votre compte</Title>
                    </div>
                    <div className="infobox">
                        <div className="infobox-container">
                            {!validation && <span className="errorMessage">Erreur identifiant ou mot de passe incorrect.</span> }
                            <form className="form" onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-group">
                                    <Flex className={cs("group", errors.email ? 'has-error' : '')} wrap>
                                        <label className="label-form">Identifiant</label>
                                        <span className="icon"><FontAwesomeIcon icon={faUser} /></span>
                                        <input
                                            name="email"
                                            type="text"
                                            placeholder="Entrez votre identifiant"
                                            className="input-form"
                                            ref={register({
                                                required: true,
                                                pattern: "[A-F][0-9]{5}"
                                            })}
                                            onChange={(e) => { setUsername(e.target.value) }}
                                        />
                                        {errors.email?.type === "required" && (
                                            <p className="error-message">You must specify email or username</p>
                                        )}
                                        {errors.email?.type === "pattern" && (
                                        <p className="error-message">Invalid email address or username</p>
                                        )}
                                    </Flex>
                                </div>
                                <div className="form-group">
                                    <Flex className={cs("group", errors.password ? 'has-error' : '')} wrap>
                                        <label className="label-form">Mot de passe</label>
                                        <span className="icon"><FontAwesomeIcon icon={faLock} /></span>
                                        <input
                                            name="password"
                                            type="password"
                                            placeholder="Entrez votre mot de passe"
                                            className="input-form"
                                            ref={register({
                                            required: true,
                                            minLength: 8
                                            })}
                                            onChange={(e) => { setPassword(e.target.value) }}
                                        />
                                        {errors.password?.type === "required" && (
                                            <p className="error-message">You must specify a password</p>
                                        )}
                                        {errors.password?.type === "minLength" && (
                                        <p className="error-message">Password must have at least 8 characters</p>
                                        )}
                                    </Flex>
                                </div>
                                <div className="form-group">
                                    <Flex className="group" wrap>
                                        <Link href="/forget-password" label="(J'ai oublié mon mot de passe)" className="item-link" />
                                        <Flex className="group-button">
                                            <input name="checkbox" type="checkbox" />
                                            <label className="label-form">Se souvenir de moi</label>
                                            <input className="input-form-submit" type="submit" value="Se connecter" />
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
    
export default Admin;