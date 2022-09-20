import Button from '../../atoms/button';
import Panel from '../../atoms/panel';
import Paragraph from '../../atoms/paragraph';
import H3 from '../../atoms/title/h3';
import './index.css';

export const Card = () => {
    return (
        <Panel className="account">
            <div className="account-content-wrapper">
                <H3 className="account-title">data</H3>
                <Paragraph className="account-amount">data</Paragraph>

                <Paragraph className="account-amount-description">
                    data
                </Paragraph>
            </div>
            <div className="account-content-wrapper cta">
                <Button
                    className="large-primary-button"
                    label="View Transations"
                />
            </div>
        </Panel>
    );
};

export default Card;
