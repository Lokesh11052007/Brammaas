import AboutHeader from './AboutHeader.jsx'
import AboutContent from './AboutContent.jsx'
import FeaturesSection from './featuresSection/FeaturesSection.jsx'
import TestimonialsSection from './testimonialsSection/TestimonialsSection.jsx'
import aboutBanner from '../../assets/aboutUsTop.jpg';
export default function AboutUs() {
    return (
        <>
        <AboutHeader
        bgImage={aboutBanner}
        title={"ABOUT US"}
        content={"About Us"}
        />
        <AboutContent />
        <FeaturesSection />
        <TestimonialsSection />
        </>
    )
}