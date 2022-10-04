import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './index.css';

/**
 * A menu item component
 * @component
 * @returns {JSX.Element}
 */
export const MenuItem = ({ label, faIcon, href, onClick }) => {
    return (
        <Link className="main-nav-item" to={href} onClick={onClick}>
            {faIcon}
            {label}
        </Link>
    );
};

MenuItem.propTypes = {
    /**
     * MenuItem's label
     */
    label: PropTypes.string.isRequired,
    /**
     * MenuItem's faIcon
     */
    faIcon: PropTypes.element,
    /**
     * MenuItem's href
     */
    href: PropTypes.string.isRequired,
    /**
     * MenuItem's onClick
     */
    onClick: PropTypes.string
};

export default MenuItem;
