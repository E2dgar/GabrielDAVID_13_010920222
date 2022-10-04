import { HeroContent } from '../heroContent';
import './index.css';

/**
 * Component for showing hero's section
 * @component
 * @returns {JSX.Element}
 */
export const Hero = () => {
    return (
        <section className="hero">
            <HeroContent />
        </section>
    );
};

export default Hero;
