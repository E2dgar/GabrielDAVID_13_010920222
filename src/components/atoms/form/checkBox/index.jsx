import PropTypes from 'prop-types';
import './index.css';

/**
 * A checkbox component
 * @component
 * @returns {JSX.Element}
 */
export const CheckBox = ({ label, id, name, inputRef }) => {
    return (
        <div className="input-remember">
            <input type="checkbox" id={id} name={name} ref={inputRef} />
            <label htmlFor={id}>{label}</label>
        </div>
    );
};

CheckBox.propTypes = {
    /**
     * Checkbox's label
     */
    label: PropTypes.string.isRequired,
    /**
     * Checkbox's id
     */
    id: PropTypes.string.isRequired,
    /**
     * Checkbox's name
     */
    name: PropTypes.string.isRequired,
    /**
     * Checkbox's inputRef
     */
    inputRef: PropTypes.string.isRequired
};

export default CheckBox;
