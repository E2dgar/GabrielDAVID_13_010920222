import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProfil } from '../../../features/user/userSlice';
import LogoLink from '../../atoms/link/logoLink';
import SignInNav from '../signInNav';
import SignOutNav from '../signOutNav';
import './index.css';

/**
 * Component for showing the main nav
 * @component
 * @returns {JSX.Element}
 */
export const MainNav = () => {
    const dispatch = useDispatch();
    const isUserConnected = localStorage.getItem('token');

    useEffect(() => {
        isUserConnected && dispatch(getProfil());
    }, [isUserConnected, dispatch]);

    return (
        <nav className="main-nav">
            <LogoLink />

            {isUserConnected ? <SignOutNav /> : <SignInNav />}
        </nav>
    );
};

export default MainNav;
