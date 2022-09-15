import Panel from '../../atoms/panel';
import Paragraph from '../../atoms/paragraph';
import './index.css';

export const HeroContent = () => {
    return (
        <Panel className="hero-content">
            <Paragraph className="subtitle">No fees.</Paragraph>
            <Paragraph className="subtitle">No minimum deposit.</Paragraph>
            <Paragraph className="subtitle">High interest rates.</Paragraph>
            <Paragraph>
                Open a savings account with Argent Bank today!
            </Paragraph>
        </Panel>
    );
};

export default HeroContent;
