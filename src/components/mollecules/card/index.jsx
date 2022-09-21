import Button from '../../atoms/button';
import Panel from '../../atoms/panel';
import Paragraph from '../../atoms/paragraph';
import H3 from '../../atoms/title/h3';
import './index.css';

export const Card = ({ heading, balance, balanceLabel }) => {
    return (
        <Panel className="account">
            <div className="account-content-wrapper">
                <H3 className="account-title">{heading}</H3>
                <Paragraph className="account-amount">{balance}</Paragraph>

                <Paragraph className="account-amount-description">
                    {balanceLabel}
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
