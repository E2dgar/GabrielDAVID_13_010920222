import PropTypes from 'prop-types';
import MenuItem from '../../atoms/link/menuItem';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

export const SignInNav = () => {
    return (
        <div>
            <MenuItem
                label=" Sign in"
                faIcon={<FontAwesomeIcon icon={faUserCircle} />}
                href="/sign-in"
            />
        </div>
    );
};

export default SignInNav;
