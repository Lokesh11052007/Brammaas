import bannerBg from "../../assets/RS_SCHOOL.jpg";
import InfrastructureSection from './InfrastructureSection'
import TopFixed from '../top/TopFixed'

export default function Infrastructure() {
    return ( 
        <>
        <TopFixed
        bgImage={bannerBg}
        title={"INFRASTRUCTURE"}
        content={"Infrastructure"}
        />
        <InfrastructureSection />
        </>
    )
}