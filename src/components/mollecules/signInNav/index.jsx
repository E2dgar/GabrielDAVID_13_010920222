import PropTypes from 'prop-types';
import MenuItem from '../../atoms/link/menuItem';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

/**
 * Component for showing the sign in nav
 * @component
 * @returns {JSX.Element}
 */
export const SignInNav = () => {
    return (
        <div>
            <MenuItem
                label=" Sign in"
                faIcon={<FontAwesomeIcon icon={faUserCircle} />}
                href="/login"
            />
        </div>
    );
};

export default SignInNav;
