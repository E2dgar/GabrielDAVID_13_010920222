import './index.css';
import CheckBox from '../../components/atoms/form/checkBox';
import InputText from '../../components/atoms/form/inputText';
import Panel from '../../components/atoms/panel';
import Button from '../../components/atoms/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

export const Form = () => {
    return (
        <Panel className="sign-in-content">
            <FontAwesomeIcon icon={faUserCircle} size="lg" />
            <h1>Sign in</h1>
            <InputText label="Username" />
            <InputText label="Password" />
            <CheckBox label="Remember me" />
            <Button className="sign-in-button" label="Sign in" />
        </Panel>
    );
};

export default Form;
