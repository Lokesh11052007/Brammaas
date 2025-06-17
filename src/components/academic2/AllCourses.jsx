import Header from "../header";
import Footer from "../Footer";
import img1 from "../../assets/online.jpg";
import img2 from "../../assets/child.jpg";
import img3 from "../../assets/robot.jpg";
import img4 from "../../assets/group.jpg";
import img5 from "../../assets/hifive.jpg";
import img6 from "../../assets/yoga.jpg";
import img7 from "../../assets/madam.jpg";
import img8 from "../../assets/school.jpg";
import img9 from "../../assets/girl.png";
import next from "../../assets/next.png";

export default function AllCourses() {
  const academic = [
    {
      title: "Brammaas IAS Academy",
      description: "Brammaas IAS Academy ( Unit of Brammaas Group of Schools) has been",
      images: img1
    },
    {
      title: "KG's",
      description: "Brammaas Group of Schools offers Quality and Holistic education in the",
      images: img2
    },
    {
      title: "Primary World of Tech For",
      description: "Brammaas offers smart and exceptional quality education aiming to nurture",
      images: img3
    },
    {
      title: "Secondary & Senior Secondary",
      description: "Brammaas IAS Academy ( Unit of Brammaas Group of Schools) has been",
      images: img4
    },
    {
      title: "Partnering with Parents",
      description: "Brammaas Group of Schools offers Quality and Holistic education in the",
      images: img5
    },
    {
      title: "Brammaas Programme",
      description: "Brammaas offers smart and exceptional quality education aiming to nurture",
      images: img6
    },
    {
      title: "Digital Classroom",
      description: "Brammaas IAS Academy ( Unit of Brammaas Group of Schools) has been",
      images: img7
    },
    {
      title: "Brammaas LEAD",
      description: "Brammaas Group of Schools offers Quality and Holistic education in the",
      images: img8
    },
    {
      title: "Counselling",
      description: "Brammaas offers smart and exceptional quality education aiming to nurture",
      images: img9
    }
  ];

  return (
    <>
      <Header />

      <div className="container-fluid py-5 bg-cream-90">
      <div className="container">
        <h4 className="mb-4 course-h4" >ALL COURSES</h4>
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
                <button className="btn btn-courses w-30">
                  View More <img src={next} alt="next" width="20" className="ms-2" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

      <Footer />
    </>
  );
}
