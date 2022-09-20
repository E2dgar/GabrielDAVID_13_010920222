import PropTypes from 'prop-types';
import './index.css';

export const MenuItem = ({ label, faIcon, href }) => {
    return (
        <a className="main-nav-item" href={href}>
            {faIcon}
            {label}
        </a>
    );
};

MenuItem.propTypes = {
    label: PropTypes.string.isRequired,
    faIcon: PropTypes.element,
    href: PropTypes.string.isRequired
};

export default MenuItem;
