import MenuItem from '../../atoms/link/menuItem';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faSignOut } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../../features/auth/authSlice';
import { userLogout } from '../../../features/user/userSlice';
import { storageLogout } from '../../../features/rememberMe/rememberMeSlice';

/**
 * Component for showing sign out nav
 * @component
 * @returns {JSX.Element}
 */
export const SignOutNav = () => {
    const dispatch = useDispatch();
    const firstName = useSelector((state) => state.user.profile.firstName);

    const handleSignOut = () => {
        dispatch(logout());
        dispatch(userLogout());
        dispatch(storageLogout());
    };

    return (
        <div>
            <MenuItem
                label={firstName}
                faIcon={<FontAwesomeIcon icon={faUserCircle} />}
                href="/profile"
            />
            <MenuItem
                label=" Sign out"
                faIcon={<FontAwesomeIcon icon={faSignOut} />}
                href="#"
                onClick={handleSignOut}
            />
        </div>
    );
};

export default SignOutNav;
