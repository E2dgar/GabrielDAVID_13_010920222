import './index.css';
import CheckBox from '../../atoms/form/checkBox';
import InputText from '../../atoms/form/inputText';
import Panel from '../../atoms/panel';
import Button from '../../atoms/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { Navigate, useNavigate } from 'react-router-dom';
import { login } from '../../../features/auth/loginSlice';
import { useDispatch, useSelector } from 'react-redux';
import { ROUTES } from '../../../constants/api';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { logTest } from '../../../features/auth/loginSlice';

export const Form = () => {
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();

        dispatch(login({ email: mail, password: password }));
    };

    return (
        <Panel className="sign-in-content">
            <FontAwesomeIcon icon={faUserCircle} size="lg" />

            <h1>Sign in</h1>
            <form id="login-form" name="login-form" onSubmit={handleSubmit}>
                <InputText
                    label="Mail"
                    name="mail"
                    id="mail"
                    onChange={(e) => setMail(e.target.value)}
                />
                <InputText
                    label="Password"
                    name="password"
                    id="password"
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <CheckBox
                    id="remember-me"
                    label="Remember me"
                    name="remember-me"
                />
                <Button className="large-secondary-button" label="Sign in" />
            </form>
        </Panel>
    );
};

export default Form;
