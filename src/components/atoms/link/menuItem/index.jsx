import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './index.css';

export const MenuItem = ({ label, faIcon, href }) => {
    return (
        <Link className="main-nav-item" to={href}>
            {faIcon}
            {label}
        </Link>
    );
};

MenuItem.propTypes = {
    label: PropTypes.string.isRequired,
    faIcon: PropTypes.element,
    href: PropTypes.string.isRequired
};

export default MenuItem;
