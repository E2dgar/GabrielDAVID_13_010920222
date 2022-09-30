import PropTypes from 'prop-types';
import MenuItem from '../../atoms/link/menuItem';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faSignOut } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../../features/auth/loginSlice';

export const SignOutNav = () => {
    const dispatch = useDispatch();
    const firstName = useSelector((state) => state.user.profil.firstName);

    const handleClick = () => {
        dispatch(logout());
    };
    return (
        <div>
            <MenuItem
                label={firstName}
                faIcon={<FontAwesomeIcon icon={faUserCircle} />}
                href="#"
            />
            <MenuItem
                label=" Sign out"
                faIcon={<FontAwesomeIcon icon={faSignOut} />}
                href="#"
                onClick={handleClick}
            />
        </div>
    );
};

export default SignOutNav;
