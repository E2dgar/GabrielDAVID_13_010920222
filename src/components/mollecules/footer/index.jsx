import './index.css';
import Paragraph from '../../atoms/paragraph';

/**
 * Component for showing footer
 * @component
 * @returns {JSX.Element}
 */
const Footer = () => {
    return (
        <footer>
            <Paragraph className="footer-text">
                Copyright 2020 Argent Bank
            </Paragraph>
        </footer>
    );
};

export default Footer;
