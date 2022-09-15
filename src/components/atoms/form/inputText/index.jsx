import PropTypes from 'prop-types';
import './index.css';

export const InputText = ({ label, type, name, id }) => {
    return (
        <div className="input-text-wrapper">
            <label htmlFor={name}>{label}</label>
            <input id={id} type={type ?? 'text'} name={name} />
        </div>
    );
};

InputText.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    type: PropTypes.string
};

export default InputText;
