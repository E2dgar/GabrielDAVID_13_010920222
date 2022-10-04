import PropTypes from 'prop-types';
import './index.css';
import Button from '../../atoms/button';
import Panel from '../../atoms/panel';
import Paragraph from '../../atoms/paragraph';
import H3 from '../../atoms/title/h3';
/**
 * Component for showing a card
 * @component
 * @returns {JSX.Element}
 */
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

Card.propTypes = {
    /**
     * Card heading
     */
    heading: PropTypes.string.isRequired,
    /**
     * Card's balance
     */
    balance: PropTypes.string.isRequired,
    /**
     * Card's balanceLabel
     */
    balanceLabel: PropTypes.string.isRequired
};

export default Card;
