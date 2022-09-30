import PropTypes from 'prop-types';
import './index.css';

export const Button = ({ label, className, onClick, type }) => {
    return (
        <button className={`button ${className}`} onClick={onClick} type={type}>
            {label}
        </button>
    );
};

Button.propTypes = {
    label: PropTypes.string.isRequired,
    className: PropTypes.string,
    type: PropTypes.string
};

export default Button;
