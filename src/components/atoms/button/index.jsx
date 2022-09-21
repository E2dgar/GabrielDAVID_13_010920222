import PropTypes from 'prop-types';
import './index.css';

export const Button = ({ label, className, onClick }) => {
    return (
        <button className={`button ${className}`} onClick={onClick}>
            {label}
        </button>
    );
};

Button.propTypes = {
    label: PropTypes.string.isRequired,
    className: PropTypes.string
};

export default Button;
