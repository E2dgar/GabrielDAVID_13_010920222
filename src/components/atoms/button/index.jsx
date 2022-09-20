import PropTypes from 'prop-types';
import './index.css';

export const Button = ({ label, className }) => {
    return <button className={`button ${className}`}>{label}</button>;
};

Button.propTypes = {
    label: PropTypes.string.isRequired,
    className: PropTypes.string
};

export default Button;
