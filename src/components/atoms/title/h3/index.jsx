import PropTypes from 'prop-types';
import './index.css';

export const H3 = ({ children, className }) => {
    return <h3 className={className}>{children}</h3>;
};

H3.propTypes = {
    children: PropTypes.string.isRequired,
    className: PropTypes.string
};

export default H3;
