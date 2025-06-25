
import img1 from "../../../assets/online.jpg";
import img2 from "../../../assets/child.jpg";
import img3 from "../../../assets/robot.jpg";
import img4 from "../../../assets/group.jpg";
import img5 from "../../../assets/hifive.jpg";
import img6 from "../../../assets/yoga.jpg";
import img7 from "../../../assets/madam.jpg";
import img8 from "../../../assets/school.jpg";
import img9 from "../../../assets/girl.png";
import next from "../../../assets/next.png";
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function AllCourses() {
  const navigate = useNavigate();
  const link = "/";
  const link1 = "/DigitalClassroom";
  const link3 = "/academic_page_3"

  const academic = [
    {
      title: "Brammaas IAS Academy",
      description: "Brammaas IAS Academy ( Unit of Brammaas Group of Schools) has been",
      images: img1,
      add : link,
    },
    {
      title: "KG's",
      description: "Brammaas Group of Schools offers Quality and Holistic education in the",
      images: img2,
      add : link,
    },
    {
      title: "Primary World of Tech For",
      description: "Brammaas offers smart and exceptional quality education aiming to nurture",
      images: img3,
      add : link,
    },
    {
      title: "Secondary & Senior Secondary",
      description: "Brammaas IAS Academy ( Unit of Brammaas Group of Schools) has been",
      images: img4,
      add : link,
    },
    {
      title: "Partnering with Parents",
      description: "Brammaas Group of Schools offers Quality and Holistic education in the",
      images: img5,
      add : link,
    },
    {
      title: "Brammaas Programme",
      description: "Brammaas offers smart and exceptional quality education aiming to nurture",
      images: img6,
      add : link3,
    },
    {
      title: "Digital Classroom",
      description: "Brammaas IAS Academy ( Unit of Brammaas Group of Schools) has been",
      images: img7,
      add : link1,
    },
    {
      title: "Brammaas LEAD",
      description: "Brammaas Group of Schools offers Quality and Holistic education in the",
      images: img8,
      add : link,
    },
    {
      title: "Counselling",
      description: "Brammaas offers smart and exceptional quality education aiming to nurture",
      images: img9,
      add : link,
    }
  ];

  return (
    <>
     <motion.div
      initial={{ opacity: 0, y: 50 }}    // start state
      animate={{ opacity: 1, y: 0 }}     // end state
      exit={{ opacity: 0, y: -50 }}      // when navigating away
      transition={{ duration: 0.4 }}
    >

      <div className="container-fluid py-5" style={{backgroundColor: '#FFF3E2E5'}}>
      <div className="container">
        <h4 className="mb-4 fw-bold fs-2 font-family" style={{color: '#000C92'}} >ALL COURSES</h4>
        <div className="row g-4 justify-content-center  px-3">
          {academic.map((item, idx) => (
            <div className="col-12 col-sm-6 col-md-4" key={idx}>
              <div className={`bg-white rounded-4 shadow-sm p-3 h-100 hover-scale  `}>
                <img
                  src={item.images}
                  alt={item.title}
                  className={`img-fluid rounded-3 mb-3 custom-img${idx}`}
                  style={{ height: '250px', objectFit: 'cover' }}
                />
                <h5>{item.title}</h5>
                <p className="mt-4">{item.description}</p>
                <button className="btn text-white d-flex align-items-center mx-auto"
                style={{ backgroundColor: '#FFA500', borderRadius: '8px' }} 
                onClick={()=>navigate(item.add)}
                >
                View More <img src={next} alt="next" width="20" className="ms-2" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

      
      </motion.div>
    </>
  );
}


