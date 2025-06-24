import TopFixed from '../top/TopFixed.jsx';
import TopScorers from './List.jsx';
import bannerBg from "../../assets/RS_SCHOOL.jpg";
export default function Toppers() {
    return ( 
        <>
        <TopFixed
        bgImage={bannerBg}
        title={"TOPPERS"}
        content={"Toppers"}
        />
        <TopScorers />
        </>
    )
}