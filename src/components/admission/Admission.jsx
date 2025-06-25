import Form from './Form.jsx';
import Banners from'./banners.jsx';
import adminImage from '../../assets/admin.jpg';
import TopFixed from '../top/TopFixed.jsx';
import { motion } from 'framer-motion';
function Admission() {
  return (
     <motion.div
      initial={{ opacity: 0, y: 50 }}    // start state
      animate={{ opacity: 1, y: 0 }}     // end state
      exit={{ opacity: 0, y: -50 }}      // when navigating away
      transition={{ duration: 0.4 }}
    >
      <TopFixed
      bgImage={adminImage}
      title={"ADMISSION ENQUIRY"}
      content={"Admission Enquiry"}
      />
      <Form/>
      <Banners/>
      
    </motion.div>
  );
}

export default Admission;
