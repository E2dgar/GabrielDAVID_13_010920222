import './index.css';

const Loader = ({ size }) => {
    return <div className={`lds-dual-ring ${size}`}></div>;
};

export default Loader;
