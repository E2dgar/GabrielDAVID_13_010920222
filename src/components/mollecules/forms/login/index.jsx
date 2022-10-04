import './index.css';
import CheckBox from '../../../atoms/form/checkBox';
import InputText from '../../../atoms/form/inputText';
import Panel from '../../../atoms/panel';
import Button from '../../../atoms/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { login } from '../../../../features/auth/authSlice';
import { useDispatch } from 'react-redux';
import { useRef } from 'react';

/**
 * Component for showind login form
 * @component
 * @returns {JSX.Element}
 */
export const Form = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const rememberRef = useRef();

    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();

        dispatch(
            login({
                email: emailRef.current.value,
                password: passwordRef.current.value
            })
        );

        if (rememberRef.current.checked) {
            localStorage.setItem('isRemember', true);
        }
    };

    return (
        <Panel className="sign-in-content">
            <FontAwesomeIcon icon={faUserCircle} size="lg" />

            <h1>Sign in</h1>
            <form id="login-form" name="login-form" onSubmit={handleSubmit}>
                <InputText
                    inputRef={emailRef}
                    label="Mail"
                    name="mail"
                    id="mail"
                />
                <InputText
                    inputRef={passwordRef}
                    label="Password"
                    name="password"
                    id="password"
                    type="password"
                />
                <CheckBox
                    inputRef={rememberRef}
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
