import HeroSection from "./herosection.jsx"
import AboutSchool from "./about.jsx"
import WhyUs from "./whyus.jsx"
import ParentsTestimonials from "./parent.jsx"
import Toppers from "./Topper.jsx"
import Gallery from "./gallery.jsx"
import BackgroundSection from "./support.jsx"
import AcademicCarousel from '../academic/academic1/RelatedCourse.jsx'

export default function Home() {
    return ( 
        <>
            <HeroSection/>
            <AboutSchool/>
            <AcademicCarousel/>
            <WhyUs/>
            <ParentsTestimonials/>
            <Toppers/>
            <Gallery/>
            <BackgroundSection/>
        </>
    )
}