import PropTypes from 'prop-types';
import './index.css';

/**
 * A button component
 * @component
 * @returns {JSX.Element}
 */
export const Button = ({ label, className, onClick, type }) => {
    return (
        <button className={`button ${className}`} onClick={onClick} type={type}>
            {label}
        </button>
    );
};

Button.propTypes = {
    /**
     * Button'label
     */
    label: PropTypes.string.isRequired,
    /**
     * Button's classNamme
     */
    className: PropTypes.string,
    /**
     * Button's type
     */
    type: PropTypes.string
};

export default Button;
