import './index.css';
import Footer from '../../components/mollecules/footer';
import MainNav from '../../components/mollecules/mainNav';
import { Link } from 'react-router-dom';

const Page404 = () => {
    return (
        <>
            <MainNav />
            <main className="page404">
                <h1>La page que vous demandez n'existe pas.</h1>
                <Link to="/">retour à l'accueil</Link>
            </main>
            <Footer />
        </>
    );
};

export default Page404;
