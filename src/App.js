import './App.css';
import Login from './pages/login';
import Home from './pages/home';
import Profil from './pages/profil';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PrivateRoute from './components/privateRoute';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { rememberMe, logout } from './features/auth/authSlice';
import {
    rememberState,
    storageLogout
} from './features/rememberMe/rememberMeSlice';
import { userLogout } from './features/user/userSlice';

const App = () => {
    const dispatch = useDispatch();
    const token = localStorage.getItem('token');
    // const isRemember = localStorage.getItem('isRemember');
    const isRemember = useSelector((state) => state.remember.rememberMe);
    console.log('remem', isRemember);
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
            dispatch(rememberState());
            dispatch(rememberMe());
        }
    });

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
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;
