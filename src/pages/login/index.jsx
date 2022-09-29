import Footer from '../../components/mollecules/footer';
import Form from '../../components/mollecules/form';
import MainNav from '../../components/mollecules/mainNav';
import './index.css';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    return (
        <>
            <MainNav />
            <main className="bg-dark">
                <Form />
            </main>
            <Footer />
        </>
    );
};

export default Login;
