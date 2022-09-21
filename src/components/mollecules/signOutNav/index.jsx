import PropTypes from 'prop-types';
import MenuItem from '../../atoms/link/menuItem';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faSignOut } from '@fortawesome/free-solid-svg-icons';

export const SignOutNav = () => {
    return (
        <div>
            <MenuItem
                label=" User"
                faIcon={<FontAwesomeIcon icon={faUserCircle} />}
                href="#"
            />
            <MenuItem
                label=" Sign out"
                faIcon={<FontAwesomeIcon icon={faSignOut} />}
                href="#"
            />
        </div>
    );
};

export default SignOutNav;
