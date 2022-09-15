import PropTypes from 'prop-types';
import './index.css';

export const CheckBox = ({ label, id, name }) => {
    return (
        <div className="input-remember">
            <input type="checkbox" id={id} name={name} />
            <label htmlFor={id}>{label}</label>
        </div>
    );
};

CheckBox.propTypes = {
    label: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
};

export default CheckBox;
