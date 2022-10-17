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
    const loginState = useSelector((state) => state.auth.authStatus);
    // const loginSucceeded = useSelector((state) => state.auth.token);
    // useEffect(() => {
    //     console.log('state', loginState);
    //     if (loginState === 'succeeded') {
    //         <Navigate to="/profil" />;
    //     }
    // }, [loginState]);

    return (
        <>
            {loginState === 'succeeded' ? (
                <Navigate to="/profil" />
            ) : (
                <>
                    <MainNav />
                    <main className="bg-dark">
                        {loginState === 'loading' && <p>LOADING</p>}
                        <Form />
                    </main>
                    <Footer />
                </>
            )}
        </>
    );
};

export default Login;
