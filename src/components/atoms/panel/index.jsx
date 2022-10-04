import PropTypes from 'prop-types';
import './index.css';

/**
 * A panel component
 * @component
 * @returns {JSX.Element}
 */
export const Panel = ({ children, className }) => {
    return <section className={`panel ${className}`}>{children}</section>;
};

Panel.propTypes = {
    /**
     * Panel's item
     */
    children: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.arrayOf(PropTypes.node)
    ]),
    /**
     * Panel's className
     */
    className: PropTypes.string
};

export default Panel;
