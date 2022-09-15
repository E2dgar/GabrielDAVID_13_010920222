import PropTypes from 'prop-types';
import './index.css';

export const InputText = ({ label }) => {
    return (
        <div className="input-text-wrapper">
            <label>{label}</label>
            <input type="text" />
        </div>
    );
};

InputText.propTypes = {
    label: PropTypes.string.isRequired
};

export default InputText;
