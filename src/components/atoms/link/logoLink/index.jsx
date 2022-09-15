import './index.css';

export const LogoLink = () => {
    return (
        <a className="main-nav-logo" href="#">
            <img
                className="main-nav-logo-image"
                src="assets/img/argentBankLogo.png"
                alt="Argent Bank Logo"
            />
            <h1 className="sr-only">Argent Bank</h1>
        </a>
    );
};

export default LogoLink;
