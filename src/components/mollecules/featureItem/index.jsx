import PropTypes from 'prop-types';
import './index.css';
import Icon from '../../atoms/icon';
import H3 from '../../atoms/title/h3';

/**
 * Component for showing a Feature Item
 * @component
 * @returns {JSX.Element}
 */
export const FeatureItem = ({ src, alt, titleContent, textContent }) => {
    return (
        <div className="feature-item">
            <Icon className="feature-icon" src={src} alt={alt} />
            <H3 className="feature-item-title">{titleContent}</H3>
            <p>{textContent}</p>
        </div>
    );
};

FeatureItem.propTypes = {
    /**
     * FeatureItem's src
     */
    src: PropTypes.string.isRequired,
    /**
     * FeatureItem's alt
     */
    alt: PropTypes.string.isRequired,
    /**
     * FeatureItem's titleContent
     */
    titleContent: PropTypes.string.isRequired,
    /**
     * FeatureItem's textContent
     */
    textContent: PropTypes.string.isRequired
};

export default FeatureItem;
