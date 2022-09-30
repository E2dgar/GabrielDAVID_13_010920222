import { useSelector } from 'react-redux';
import Footer from '../../components/mollecules/footer';
import Form from '../../components/mollecules/form';
import MainNav from '../../components/mollecules/mainNav';
import './index.css';
import { Navigate } from 'react-router-dom';

const Login = () => {
    const loginIsLoading = useSelector((state) => state.auth.status);
    const loginSucceeded = useSelector((state) => state.auth.token);

    return (
        <>
            {loginSucceeded ? (
                <Navigate to="/profil" />
            ) : (
                <>
                    <MainNav />
                    <main className="bg-dark">
                        {loginIsLoading === 'loading' && <p>LOADING</p>}
                        <Form />
                    </main>
                    <Footer />
                </>
            )}
        </>
    );
};

export default Login;
