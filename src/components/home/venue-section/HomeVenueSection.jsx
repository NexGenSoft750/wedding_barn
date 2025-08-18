import ReadySetIDo from './ReadySetIDo';
import OfferToAustin from './OfferToAustin';
import WhyChooseUs from './WhyChooseUs';
import HeroSection from './HeroSection';

function HomeVenueSection() {
    return (
        <section className="container">
            <HeroSection />
            <WhyChooseUs />
            <OfferToAustin />
            <ReadySetIDo />
        </section>
    )
}

export default HomeVenueSection;