import PropTypes from 'prop-types';
import './index.css';

/**
 * H3 component
 * @comonent
 * @returns {JSX.Element}
 */
export const H3 = ({ children, className }) => {
    return <h3 className={className}>{children}</h3>;
};

H3.propTypes = {
    /**
     * H3 children
     */
    children: PropTypes.string.isRequired,
    /**
     * H3 className
     */
    className: PropTypes.string
};

export default H3;
