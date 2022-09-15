import Icon from '../../atoms/icon';
import H3 from '../../atoms/title/h3';
import './index.css';

export const FeatureItem = ({ src, alt, titleContent, textContent }) => {
    return (
        <div className="feature-item">
            <Icon className="feature-icon" src={src} alt={alt} />
            <H3 className="feature-item-title">{titleContent}</H3>
            <p>{textContent}</p>
        </div>
    );
};

export default FeatureItem;
