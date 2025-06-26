
import img from '../../assets/student.jpg'
import GalleryImage from './GalleryImage.jsx';
import { motion } from 'framer-motion';
import TopFixed from '../top/TopFixed.jsx';

function Gallery() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}    // start state
      animate={{ opacity: 1, y: 0 }}     // end state
      exit={{ opacity: 0, y: -50 }}      // when navigating away
      transition={{ duration: 0.4 }}
    >

      <TopFixed 
      bgImage={img}
      title={"GALLERY"}
      content={"Gallery"}
      />
      <GalleryImage/>
 
    </motion.div>
  );
}

export default Gallery;