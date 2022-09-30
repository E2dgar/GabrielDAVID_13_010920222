import PropTypes from 'prop-types';
import './index.css';

export const H1 = ({ children, className }) => {
    return <h1 className={className}>{children}</h1>;
};

H1.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.string
    ]).isRequired,
    className: PropTypes.string
};

export default H1;
