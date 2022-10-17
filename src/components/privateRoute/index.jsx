import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

/**
 * Private route component
 * @component
 * @returns {JSX.Element}
 */
const PrivateRoute = ({ children }) => {
    const isAuthorized = useSelector(
        (state) => state.auth.status === 'succeeded'
    );

    if (!isAuthorized) {
        return <Navigate to="/" />;
    }

    return children;
};

export default PrivateRoute;
