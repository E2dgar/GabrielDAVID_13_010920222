import './index.css';

export const Paragraph = ({ children, className }) => {
    return <p className={`paragraph ${className}`}>{children}</p>;
};

export default Paragraph;
