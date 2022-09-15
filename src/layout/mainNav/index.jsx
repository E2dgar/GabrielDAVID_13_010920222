import LogoLink from '../../components/atoms/link/logoLink';
import Nav from '../../components/mollecules/signInNav';
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
