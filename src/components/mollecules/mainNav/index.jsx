import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProfil } from '../../../features/user/userSlice';
import LogoLink from '../../atoms/link/logoLink';
import SignInNav from '../signInNav';
import SignOutNav from '../signOutNav';
import './index.css';

export const MainNav = () => {
    const dispatch = useDispatch();
    const isUserConnected = useSelector((state) => state.auth.token);

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
