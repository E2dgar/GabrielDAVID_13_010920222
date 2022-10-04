import './App.css';
import Login from './pages/login';
import Home from './pages/home';
import Profil from './pages/profil';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PrivateRoute from './components/privateRoute';
import { useDispatch } from 'react-redux';
import { rememberMe } from './features/auth/authSlice';
// import AuthWrapper from './components/authWrapper';
import { useEffect } from 'react';
import { getProfil } from './features/user/userSlice';

const App = () => {
    const dispatch = useDispatch();
    const token = localStorage.getItem('token');
    const isRemember = localStorage.getItem('isRemember');

    useEffect(() => {
        const handleTabClose = (e) => {
            e.preventDefault();

            if (!isRemember) {
                localStorage.removeItem('token');
            }
        };

        window.addEventListener('beforeunload', handleTabClose);

        return () => {
            window.removeEventListener('beforeunload', handleTabClose);
        };
    }, [isRemember]);

    useEffect(() => {
        if (token) {
            dispatch(rememberMe());
            dispatch(getProfil(JSON.stringify(token)));
        }
    });

    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    {/* <Route element={<AuthWrapper />}> */}
                    <Route path="/login" element={<Login />} />
                    {/* </Route> */}
                    <Route
                        path="/profil"
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
