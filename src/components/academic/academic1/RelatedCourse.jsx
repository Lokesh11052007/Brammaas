import React, { useRef } from 'react';
import leftArrow from '../../../assets/Leftarror.png';
import rightArrow from '../../../assets/Rightarror.png'
import next from '../../../assets/next.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { useNavigate } from 'react-router-dom';

const academics = [
  {
      title: "Brammaas IAS Academy",
      description: "Brammaas IAS Academy ( Unit of Brammaas Group of Schools) has been",
      images: require('../../../assets/online.jpg')
    },
    {
      title: "KG's",
      description: "Brammaas Group of Schools offers Quality and Holistic education in the",
      images: require('../../../assets/child.jpg')
    },
    {
      title: "Primary World of Tech For",
      description: "Brammaas offers smart and exceptional quality education aiming to nurture",
      images: require('../../../assets/robot.jpg')
    },
    {
      title: "Secondary & Senior Secondary",
      description: "Brammaas IAS Academy ( Unit of Brammaas Group of Schools) has been",
      images: require('../../../assets/group.jpg')
    },
    {
      title: "Partnering with Parents",
      description: "Brammaas Group of Schools offers Quality and Holistic education in the",
      images: require('../../../assets/hifive.jpg')
    },
    {
      title: "Brammaas Programme",
      description: "Brammaas offers smart and exceptional quality education aiming to nurture",
      images: require('../../../assets/yoga.jpg')
    },
    {
      title: "Digital Classroom",
      description: "Brammaas IAS Academy ( Unit of Brammaas Group of Schools) has been",
      images: require('../../../assets/madam.jpg')
    },
    {
      title: "Brammaas LEAD",
      description: "Brammaas Group of Schools offers Quality and Holistic education in the",
      images: require('../../../assets/school.jpg')
    },
    {
      title: "Counselling",
      description: "Brammaas offers smart and exceptional quality education aiming to nurture",
      images: require('../../../assets/girl.png')
    }
];

const RelatedCourse = () => {
  const navigate = useNavigate();
  const link = "/AllCourses";
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="container-fluid position-relative mt-5 p-4" style={{backgroundColor:"#FFF3E2"}}>
      <h2 className=" course-h4 mb-4 fw-bold ms-lg-5" style={{color:'#000C92'}}>ALL RELATED COURSES</h2>
      <div className='container position-relative'>
        <img
  ref={prevRef}
  src={rightArrow}
  alt="Previous"
  className="d-none d-md-block position-absolute top-50 translate-middle-y"
  width="30"
  height="30"
  style={{ cursor: 'pointer', zIndex: 10 }} // cursor & zIndex still need inline
/>

{/* Right Arrow */}
<img
  ref={nextRef}
  src={leftArrow}
  alt="Next"
  className="d-none d-md-block position-absolute top-50 end-0 translate-middle-y"
  width="30"
  height="30"
  style={{ cursor: 'pointer', zIndex: 10 }}
/>

      <Swiper
        modules={[Navigation]}
        slidesPerView={3}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        breakpoints={{
          0: { slidesPerView: 1 },
          576: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          992: { slidesPerView: 3 },
        }}
        
      >
        {academics.map((item, idx) => (
          <SwiperSlide key={idx}>
           
              <div className="card  rounded-4 border-0 p-3 ms-md-5  hover-scale" style={{ width: '100%', maxWidth: '350px', backgroundColor: '#fff' }}>
      <img
        src={item.images}
        alt="Course"
        className="card-img-top rounded-3"
        style={{ height: '250px', objectFit: 'cover' }}
      />

      <div className="card-body">
        <h5 className="card-title fw-bold">{item.title}</h5>
        <p className="card-text">
          {item.description}
        </p>

        <button className="btn text-white d-flex align-items-center mx-auto"
         style={{ backgroundColor: '#FFA500', borderRadius: '8px' }} 
        >
          View More
          <img src={next} alt="next" className="ms-2" width="20" />
        </button>
      </div>
    </div>
            
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
      <div className='d-flex justify-content-end me-5'>
        <button className="btn text-white  rounded-3"
         style={{ backgroundColor: '#FFA500' }} 
         onClick={() => navigate(link)}>
          View All
          <img src={next} alt="next" className="ms-2" width="20" />
        </button>
      </div>
    </div>
  );
};

export default RelatedCourse;
  