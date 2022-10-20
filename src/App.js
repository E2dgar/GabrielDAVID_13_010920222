import './App.css';
import Login from './pages/login';
import Home from './pages/home';
import Profil from './pages/profil';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import PrivateRoute from './components/privateRoute';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { rememberMe, logout } from './features/auth/authSlice';
import {
    rememberState,
    storageLogout
} from './features/rememberMe/rememberMeSlice';
import { userLogout } from './features/user/userSlice';
import Page404 from './pages/404';

const App = () => {
    const dispatch = useDispatch();

    const token = localStorage.getItem('token');
    const isRemember = useSelector((state) => state.remember.rememberMe);

    useEffect(() => {
        const handleTabClose = (e) => {
            e.preventDefault();

            if (!isRemember) {
                dispatch(storageLogout());
                dispatch(logout());
                dispatch(userLogout());
            }
        };

        window.addEventListener('beforeunload', handleTabClose);

        return () => {
            window.removeEventListener('beforeunload', handleTabClose);
        };
    }, [isRemember, dispatch]);

    useEffect(() => {
        if (token) {
            /*Check if token has expired*/
            const tokenExpiration =
                JSON.parse(atob(token.split('.')[1])).exp * 1000;

            if (tokenExpiration < Date.now()) {
                /*Clear localStorage and abort rememberMe */
                dispatch(storageLogout());
                return;
            }

            dispatch(rememberState());
            dispatch(rememberMe());
        }
    }, [token, dispatch]);

    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route
                        path="/profile"
                        element={
                            <PrivateRoute>
                                <Profil />
                            </PrivateRoute>
                        }
                    />
                    <Route path="*" element={<Page404 />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;
