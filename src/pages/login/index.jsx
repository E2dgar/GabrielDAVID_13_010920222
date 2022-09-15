import Footer from '../../components/mollecules/footer';
import Form from '../../components/mollecules/form';
import MainNav from '../../components/mollecules/mainNav';
import './index.css';

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
