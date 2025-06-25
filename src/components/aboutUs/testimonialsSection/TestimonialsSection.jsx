import VisionCard from './VisionCard.jsx'
import Parent from './Parents.jsx'
import BackgroundSection from './BackgroundSection.jsx' 
import ParentTestimonial from '../../../assets/PARENTS TESTIMONIALS.jpg'
export default function TestimonialsSection() {
    return (
        <>
        <VisionCard />
        <Parent 
        ParentTestimonial={ParentTestimonial}
        title={"PARENTS TESTIMONIALS"}
        />
        <BackgroundSection />
        </>
    )
}