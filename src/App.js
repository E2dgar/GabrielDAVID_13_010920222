import './App.css';
import Login from './pages/login';
import Home from './pages/home';
import Profil from './pages/profil';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PrivateRoute from './components/privateRoute';
import { useDispatch, useSelector } from 'react-redux';
import { rememberMe } from './features/auth/loginSlice';
import AuthWrapper from './components/authWrapper';
import { useEffect } from 'react';
import axios from 'axios';

import store from './redux/store';

/*axios.defaults.headers.common['Authorization'] = store.getState().token;*/

const App = () => {
    // const token = useSelector((state) => state.auth.token);

    // axios.interceptors.request.use((config) => {
    //     config.headers['Authorization'] = `Bearer ${token}`;
    //     return config;
    // });

    const dispatch = useDispatch();
    dispatch(rememberMe());

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
