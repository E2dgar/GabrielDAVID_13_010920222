import './App.css';
import Login from './pages/login';
import Home from './pages/home';
import Profil from './pages/profil';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PrivateRoute from './components/privateRoute';
import { useDispatch } from 'react-redux';
import { rememberMe } from './features/auth/authSlice';
import AuthWrapper from './components/authWrapper';

import auth from './features/auth/authSlice';

import { useEffect } from 'react';
import { getProfil } from './features/user/userSlice';

/*axios.defaults.headers.common['Authorization'] = store.getState().token;*/

const App = () => {
    const dispatch = useDispatch();
    const token = localStorage.getItem('token');
    const isRemember = localStorage.getItem('isRemember');

    useEffect(() => {
        const handleTabClose = (e) => {
            e.preventDefault();
            console.log('r', isRemember);
            if (!isRemember) {
                // localStorage.removeItem('token');
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
    //const token = useSelector((state) => state.auth.token);

    // axios.interceptors.request.use((config) => {
    //     config.headers['Authorization'] = `Bearer ${token}`;
    //     return config;
    // });

    /*const dispatch = useDispatch();
    dispatch(rememberMe());*/

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
