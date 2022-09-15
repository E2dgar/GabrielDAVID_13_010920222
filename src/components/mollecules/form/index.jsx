import './index.css';
import CheckBox from '../../atoms/form/checkBox';
import InputText from '../../atoms/form/inputText';
import Panel from '../../atoms/panel';
import Button from '../../atoms/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

export const Form = () => {
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
                <Button className="large-secondary" label="Sign in" />
            </form>
        </Panel>
    );
};

export default Form;
