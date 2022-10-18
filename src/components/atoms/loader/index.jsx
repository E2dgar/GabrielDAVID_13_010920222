import PropTypes from 'prop-types';
import './index.css';

/**
 * A loader component
 * @component
 * @returns {JSX.Element}
 */
const Loader = ({ size }) => {
    return <div className={`lds-dual-ring ${size}`}></div>;
};

Loader.propTypes = {
    /**
     * Loader's size
     */
    size: PropTypes.string
};

export default Loader;
