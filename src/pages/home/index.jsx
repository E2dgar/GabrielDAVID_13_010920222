import Footer from '../../components/mollecules/footer';
import Hero from '../../components/mollecules/hero';
import Features from '../../components/mollecules/featuresSection';
import './index.css';
import MainNav from '../../components/mollecules/mainNav';

const Home = () => {
    return (
        <>
            <MainNav />
            <main>
                <Hero />
                <Features />
            </main>
            <Footer />
        </>
    );
};

export default Home;
