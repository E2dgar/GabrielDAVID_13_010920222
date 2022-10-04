import PropTypes from 'prop-types';
import './index.css';

/**
 * A paragraph component
 * @component
 * @returns {JSX.Element}
 */
export const Paragraph = ({ children, className }) => {
    return <p className={`paragraph ${className}`}>{children}</p>;
};

Paragraph.propTypes = {
    /**
     * Paragraph's children
     */
    children: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.arrayOf(PropTypes.node)
    ]),
    /**
     * Paragraph's className
     */
    className: PropTypes.string
};

export default Paragraph;
