import PropTypes from 'prop-types';
import './index.css';

export const InputText = ({
    label,
    type,
    name,
    id,
    onChange,
    placeholder,
    required,
    inputRef
}) => {
    return (
        <div className="input-text-wrapper">
            {label && <label htmlFor={name}>{label}</label>}
            <input
                id={id}
                ref={inputRef}
                type={type ?? 'text'}
                name={name}
                onChange={onChange}
                placeholder={placeholder}
                required={required}
            />
        </div>
    );
};

InputText.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    type: PropTypes.string,
    placeholder: PropTypes.string,
    required: PropTypes.bool
};

export default InputText;
