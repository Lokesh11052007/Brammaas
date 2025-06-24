import bannerBg from "../../assets/RS_SCHOOL.jpg";
import TopFixed from "../top/TopFixed";
import PioneersPanel from './PioneersPanel.jsx'
export default function BoardOfDirector() {
    return (
        <>
        <TopFixed
        bgImage={bannerBg}
        title={"BOARD OF DIRECTORS"}
        content={"Board Of Directors"}
        />
        <PioneersPanel />
        </>
    )
} 