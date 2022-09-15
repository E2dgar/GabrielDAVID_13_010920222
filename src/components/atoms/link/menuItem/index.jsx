import PropTypes from 'prop-types';
import './index.css';

export const MenuItem = ({ label, faIcon }) => {
    return (
        <a className="main-nav-item" href="#">
            {faIcon}
            {label}
        </a>
    );
};

MenuItem.propTypes = {
    label: PropTypes.string.isRequired,
    faIcon: PropTypes.element
};

export default MenuItem;
