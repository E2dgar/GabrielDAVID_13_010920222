import PropTypes from 'prop-types';
import './index.css';

export const Panel = ({ children, className }) => {
    return <section className={`panel ${className}`}>{children}</section>;
};

Panel.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.arrayOf(PropTypes.node)
    ]),
    className: PropTypes.string
};

export default Panel;
