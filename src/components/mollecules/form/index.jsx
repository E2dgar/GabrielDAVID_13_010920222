import './index.css';
import CheckBox from '../../atoms/form/checkBox';
import InputText from '../../atoms/form/inputText';
import Panel from '../../atoms/panel';
import Button from '../../atoms/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

export const Form = () => {
    const navigate = useNavigate();

    const tempNav = (e) => {
        e.preventDefault();
        navigate('/account');
    };

    return (
        <Panel className="sign-in-content">
            <FontAwesomeIcon icon={faUserCircle} size="lg" />
            <h1>Sign in</h1>
            <form>
                <InputText label="Username" name="username" id="username" />
                <InputText
                    label="Password"
                    name="password"
                    id="password"
                    type="password"
                />
                <CheckBox
                    id="remember-me"
                    label="Remember me"
                    name="remember-me"
                />
                <Button
                    className="large-secondary-button"
                    label="Sign in"
                    onClick={(e) => tempNav(e)}
                />
            </form>
        </Panel>
    );
};

export default Form;
