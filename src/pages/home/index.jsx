import LogoLink from '../../components/atoms/link/logoLink';
import Footer from '../../components/mollecules/footer';
import Hero from '../../components/mollecules/hero';
import SignInNav from '../../components/mollecules/signInNav';
import Features from '../../components/mollecules/featuresSection';
import './index.css';

const Home = () => {
    return (
        <>
            <nav className="main-nav">
                <LogoLink />
                <SignInNav />
            </nav>
            <main>
                <Hero />
                <Features />
            </main>
            <Footer />
        </>
    );
};

export default Home;
