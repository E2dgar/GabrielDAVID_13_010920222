import { useSelector } from 'react-redux';
import Footer from '../../components/mollecules/footer';
import Form from '../../components/mollecules/forms/login';
import MainNav from '../../components/mollecules/mainNav';
import './index.css';
import { Navigate } from 'react-router-dom';
import { useEffect } from 'react';

/**
 * Component for showing Login page
 * @component
 * @returns {JSX.Element}
 */
const Login = () => {
    const loginState = useSelector((state) => state.auth.status);

    return (
        <>
            {loginState === 'succeeded' ? (
                <Navigate to="/profil" />
            ) : (
                <>
                    <MainNav />
                    <main className="bg-dark">
                        <Form />
                    </main>
                    <Footer />
                </>
            )}
        </>
    );
};

export default Login;
