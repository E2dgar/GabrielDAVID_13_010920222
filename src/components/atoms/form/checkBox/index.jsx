import PropTypes from 'prop-types';
import './index.css';

export const CheckBox = ({ label, id, name, inputRef }) => {
    return (
        <div className="input-remember">
            <input type="checkbox" id={id} name={name} ref={inputRef} />
            <label htmlFor={id}>{label}</label>
        </div>
    );
};

CheckBox.propTypes = {
    label: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
};

export default CheckBox;
