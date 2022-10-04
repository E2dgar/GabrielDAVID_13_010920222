import PropTypes from 'prop-types';
import './index.css';

/**
 * H copmponent
 * @component
 * @returns {JSX.Element}
 */
export const H1 = ({ children, className }) => {
    return <h1 className={className}>{children}</h1>;
};

H1.propTypes = {
    /**
     * H1 children
     */
    children: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.string
    ]).isRequired,
    /**
     * H1 className
     */
    className: PropTypes.string
};

export default H1;
