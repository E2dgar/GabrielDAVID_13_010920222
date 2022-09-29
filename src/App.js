import './App.css';
import Login from './pages/login';
import Home from './pages/home';
import Account from './pages/account';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PrivateRoute from './components/privateRoute';
import { Provider } from 'react-redux';
import store from './redux/store';
import axiosInterceptorHeaders from './services/axios';
import AuthWrapper from './components/authWrapper';

/*axios.defaults.headers.common['Authorization'] = store.getState().token;*/

const App = () => {
    axiosInterceptorHeaders();

    return (
        <Provider store={store}>
            <div className="App">
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route element={<AuthWrapper />}>
                            <Route path="/sign-in" element={<Login />} />
                        </Route>
                        <Route
                            path="/account"
                            element={
                                <PrivateRoute>
                                    <Account />
                                </PrivateRoute>
                            }
                        />
                    </Routes>
                </BrowserRouter>
            </div>
        </Provider>
    );
};

export default App;
