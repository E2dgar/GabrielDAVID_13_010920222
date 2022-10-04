import PropTypes from 'prop-types';
import './index.css';

/**
 * A icon component
 * @component
 * @returns {JSX.Element}
 */
export const Icon = ({ src, alt, className }) => {
    return <img className={className} src={src} alt={alt} />;
};

Icon.propTypes = {
    /**
     * Icon's src
     */
    src: PropTypes.string.isRequired,
    /**
     * Icon's alt
     */
    alt: PropTypes.string.isRequired,
    /**
     * Icon's className
     */
    className: PropTypes.string.isRequired
};

export default Icon;
