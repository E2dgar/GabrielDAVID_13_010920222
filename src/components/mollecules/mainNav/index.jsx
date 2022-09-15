import LogoLink from '../../atoms/link/logoLink';
import Nav from '../signInNav';
import './index.css';

export const MainNav = () => {
    return (
        <nav className="main-nav">
            <LogoLink />
            <Nav />
        </nav>
    );
};

export default MainNav;
