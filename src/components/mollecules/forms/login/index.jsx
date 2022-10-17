import './index.css';
import CheckBox from '../../../atoms/form/checkBox';
import InputText from '../../../atoms/form/inputText';
import Panel from '../../../atoms/panel';
import Button from '../../../atoms/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { login } from '../../../../features/auth/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useRef } from 'react';
import Loader from '../../../atoms/loader';
import { rememberState } from '../../../../features/rememberMe/rememberMeSlice';
import { ERRORS_LOGIN } from '../../../../constants/errors';

/**
 * Component for showind login form
 * @component
 * @returns {JSX.Element}
 */
export const Form = () => {
    const isLoading = useSelector((state) => state.auth.status);
    const error = useSelector((state) => state.auth.error?.code);

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
            dispatch(rememberState());
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

                {error && <p className="error">{ERRORS_LOGIN[`${error}`]}</p>}

                <Button className="large-secondary-button" label="Sign in" />
            </form>

            {isLoading === 'loading' && (
                <div className="loader-layer">
                    <Loader />
                </div>
            )}
        </Panel>
    );
};

export default Form;
