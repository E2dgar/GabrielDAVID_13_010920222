import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ children }) => {
    const authUser = useSelector((state) => state.auth.token);

    if (!authUser) {
        return <Navigate to="/sign-in" />;
    }

    return children;
};

export default PrivateRoute;
