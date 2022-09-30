import { Outlet, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const AuthWrapper = () => {
    return !!useSelector((state) => state.auth.token) ? (
        <Navigate to="/profil" replace />
    ) : (
        <Outlet />
    );
};

export default AuthWrapper;
