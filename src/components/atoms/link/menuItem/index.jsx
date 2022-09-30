import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './index.css';

export const MenuItem = ({ label, faIcon, href, onClick }) => {
    return (
        <Link className="main-nav-item" to={href} onClick={onClick}>
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
