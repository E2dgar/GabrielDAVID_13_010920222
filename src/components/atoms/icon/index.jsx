import PropTypes from 'prop-types';
import './index.css';

export const Icon = ({ src, alt, className }) => {
    return <img className={className} src={src} alt={alt} />;
};

Icon.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    className: PropTypes.string
};

export default Icon;
