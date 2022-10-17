import PropTypes from 'prop-types';
import './index.css';

/**
 * A input text/password component
 * @component
 * @returns {JSX.Element}
 */
export const InputText = ({
    label,
    type,
    name,
    id,
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
                placeholder={placeholder}
                required={required}
            />
        </div>
    );
};

InputText.propTypes = {
    /**
     * InputText's label
     */
    label: PropTypes.string,
    /**
     * InputText's name
     */
    name: PropTypes.string.isRequired,
    /**
     * InputText's id
     */
    id: PropTypes.string.isRequired,
    /**
     * InputText's type
     */
    type: PropTypes.string,
    /**
     * InputText's placeholder
     */
    placeholder: PropTypes.string,
    /**
     * InputText's required
     */
    required: PropTypes.bool,
    /**
     * InputText's inputRef
     */
    inputRef: PropTypes.object.isRequired
};

export default InputText;
