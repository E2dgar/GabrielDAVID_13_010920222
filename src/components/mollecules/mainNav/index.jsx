import { useSelector } from 'react-redux';
import LogoLink from '../../atoms/link/logoLink';
import SignInNav from '../signInNav';
import SignOutNav from '../signOutNav';
import './index.css';

export const MainNav = () => {
    /* const isUserConnected = useSelector((state) => state.auth.token);*/
    return (
        <nav className="main-nav">
            <LogoLink />

            {/*isUserConnected ? <SignOutNav /> : <SignInNav />*/}
        </nav>
    );
};

export default MainNav;
