import './index.css';
import FeatureItem from '../../mollecules/featureItem';

const Features = () => {
    const staticData = [
        {
            title: 'priority',
            icon: 'chat',
            titleContent: 'You are our #1 priority',
            textContent:
                'Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.'
        },
        {
            title: 'rates',
            icon: 'money',
            titleContent: 'More savings means higher rates',
            textContent:
                'The more you save with us, the higher your interest rate will be !'
        },
        {
            title: 'security',
            icon: 'security',
            titleContent: 'Security you can trust',
            textContent:
                'We use top of the line encryption to make sure your data and money is always safe.'
        }
    ];
    return (
        <section className="features">
            <h2 className="sr-only">Features</h2>

            {staticData.map((item) => (
                <FeatureItem
                    key={`${item.title}-item`}
                    src={`/assets/img/icon-${item.icon}.png`}
                    alt={`${item.icon} icon`}
                    titleContent={item.titleContent}
                    textContent={item.textContent}
                />
            ))}
        </section>
    );
};

export default Features;
