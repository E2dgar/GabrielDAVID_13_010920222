import MenuItem from '../../atoms/link/menuItem';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faSignOut } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../../features/auth/authSlice';

export const SignOutNav = () => {
    const dispatch = useDispatch();
    const firstName = useSelector((state) => state.auth.profil.firstName);

    const handleSignOut = async () => {
        dispatch(logout());
        // persistor.purge();
    };
    return (
        <div>
            <MenuItem
                label={firstName}
                faIcon={<FontAwesomeIcon icon={faUserCircle} />}
                href="/profil"
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
