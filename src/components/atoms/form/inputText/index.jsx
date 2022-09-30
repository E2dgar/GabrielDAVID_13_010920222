import PropTypes from 'prop-types';
import './index.css';

export const InputText = ({ label, type, name, id, onChange, placeholder }) => {
    return (
        <div className="input-text-wrapper">
            {label && <label htmlFor={name}>{label}</label>}
            <input
                id={id}
                type={type ?? 'text'}
                name={name}
                onChange={onChange}
                placeholder={placeholder}
            />
        </div>
    );
};

InputText.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    type: PropTypes.string,
    placeholder: PropTypes.string
};

export default InputText;
