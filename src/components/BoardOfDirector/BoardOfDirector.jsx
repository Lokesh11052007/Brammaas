import bannerBg from "../../assets/RS_SCHOOL.jpg";
import TopFixed from "../top/TopFixed";
import PioneersPanel from './PioneersPanel.jsx'
import { motion } from 'framer-motion';

export default function BoardOfDirector() {
    return (
        
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        >
            <TopFixed
            bgImage={bannerBg}
            title={"BOARD OF DIRECTORS"}
            content={"Board Of Directors"}
            />
            <PioneersPanel />
        </motion.div>
        
    )
} 