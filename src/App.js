import './App.css';
import Login from './pages/login';
import Home from './pages/home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="*" element={<Home />} />
                    <Route path="/sign-in" element={<Login />} />
                    {/*<Route path='/auth' element={<Account />}/>*/}
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;
