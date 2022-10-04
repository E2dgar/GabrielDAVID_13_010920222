import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

/**
 * Private route component
 * @component
 * @returns {JSX.Element}
 */
const PrivateRoute = ({ children }) => {
    const token = useSelector((state) => state.auth.token);

    if (!token) {
        return <Navigate to="/login" />;
    }

    return children;
};

export default PrivateRoute;
