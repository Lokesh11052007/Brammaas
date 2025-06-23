import React from "react";
import classroomImg from "../../assets/classroom.jpg";
import buildingImg from "../../assets/RS_SCHOOL.jpg";
import libraryImg from "../../assets/library.jpg";
import labImg from "../../assets/lab.jpg";
import sportsImg from "../../assets/sports day.jpg";
import busImg from "../../assets/bus.jpg";
const InfrastructureSection = () => {
  return (
    
    <div className="container-fluid py-5  align-items-center  " style={{ background:' #FFF3E2E5' }}>
      {/* Classroom Section */}
      <div className="container ml-2">
      <div className="container row align-items-center rounded shadow mb-5 ml-5 bg-white " >
        <div className="col-md-5 mb-3 mt-3 mb-md-2">
          <img src={classroomImg} alt="Classroom" className="img-fluid rounded shadow " />
        </div>
        <div className="col-md-6" style={{fontFamily:'sans-serif'}}>
          <h2 className="fw-bold text-primary">Classroom</h2>
          <p>
            Step into a space where tradition meets transformation. Here,
            learning goes beyond chalk and talk — powered by smart boards,
            tablets, and immersive digital tools. Every session is a journey,
            every topic an experience.
          </p>
          <p>
            Our classrooms are designed to ignite curiosity, foster creativity,
            and build future-ready minds.
          </p>
          <p>
            <strong>Learn differently. Think boldly. Achieve greatly.</strong>
          </p>
        </div>
      </div></div>

      {/* Building Section */}
            <div className="container ">
      <div className="container row align-items-center rounded shadow mb-5 ml-5 bg-white  flex-md-row-reverse">
        <div className="col-md-6  py-3 mb-3 mt-3 mb-md-0 ">
          <img src={buildingImg} alt="Building" className="img-fluid rounded shadow" />
        </div>
        <div className="col-md-6">
          <h2 className="fw-bold text-primary">Building</h2>
          <p>
            Step into a space where comfort meets innovation. Our fully
            air-conditioned classrooms ensure a cool and focused environment for
            every lesson.
          </p>
          <ul>
            <li>Centrally Air-Conditioned Classrooms</li>
            <li>RO Drinking Water Facility</li>
            <li>24x7 Power Backup</li>
            <li>State-of-the-Art Learning Spaces</li>
          </ul>
          <p>A perfect blend of comfort, technology, and learning.</p>
        </div>
      </div></div>

      {/* Library Section */}
       <div className="container ">
      <div className="container row align-items-center rounded shadow mb-5 ml-5 bg-white" >
        <div className="col-md-6 mb-3 mt-3 py-3 mb-md-0">
          <img src={libraryImg} alt="Library" className="img-fluid rounded shadow" />
        </div>
        <div className="col-md-6" >
          <h2 className="fw-bold text-primary">Library</h2>
          <p>
            Step into Brammaas School Library, where a rich collection of
            encyclopedias, illustrated dictionaries, and popular science series like
            "Tell Me Why" awaits curious minds.
          </p>
          <p>
            With classic and contemporary literature in Tamil, English, and Hindi,
            plus a range of educational CDs and subscriptions to leading journals,
            the library keeps students inspired and informed.
          </p>
          <p>
            More than just books — it’s a vibrant space where learning comes alive every day.
          </p>
        </div>
      </div></div>
        {/* curricular */}
         <div className="container ">
       <div className="container row align-items-center rounded shadow mb-5 ml-5 bg-white  flex-md-row-reverse ">
        <div className="col-md-6 mb-5  mb-md-0 py-3 ">
          <img src={buildingImg} alt="Building" className="img-fluid rounded shadow" />
        </div>
        <div className="col-md-6">
          <h2 className="fw-bold text-primary">Co-Curricular Activities</h2>
          <p>
            We blend learning with fun through co-curricular activities that unlock every student’s potential:
          </p>
          <ul>
            <li>Speak up loud and clear with debates and public speaking</li>
            <li>Paint, create, and express yourself in art and craft sessions</li>
            <li>Crack the code of numbers in Science and Math clubs</li>
            <li>Spin stories, pen poems, and craft essays in literary activities</li>
            <li>Celebrate culture and heritage with vibrant festivals</li>
          </ul>
        </div>
      </div></div>
        {/* Laboratries */}
      <div className="container ">
      <div className="container row align-items-center rounded shadow mb-5 ml-5 bg-white " >
        <div className="col-md-6 mb-3 mt-3 py-3 mb-md-0">
          <img src={labImg} alt="Lib" className="img-fluid rounded shadow" />
        </div>
        <div className="col-md-6" >
          <h2 className="fw-bold text-primary">Library</h2>
          <p>
            At Brammass School, our Science, Math, and 
            Computer laboratories are fully equipped to turn
             classroom concepts into real-world understanding.
          </p>
          <p>
            From hands-on experiments in science, practical activities 
            in math, to skill-building in coding and technology — each lab fosters curiosity and critical thinking.
          </p>
          <p>
            Here, students don't just study — they discover, create, and grow.
          </p>
        </div>
      </div></div>

{/* sports */}
<div className="container ml-2">
      <div className="container row align-items-center rounded shadow mb-5 ml-5 bg-white  flex-md-row-reverse" >
        <div className="col-md-5 mb-3 mt-3 mb-md-2 ">
          <img src={sportsImg} alt="Classroom" className="img-fluid rounded shadow" />
        </div>
        <div className="col-md-6" style={{fontFamily:'sans-serif'}}>
          <h2 className="fw-bold text-primary">Sports</h2>
          <p>
            At Brammass School, we believe in shaping more than just athletes 
            — we build character, resilience, and leadership through sport.
          </p>
          <p>
            Students selected for our school teams in Basketball, Football, 
            Cricket, and other disciplines receive focused training and dedicated practice time.
          </p>
          <p>
            With every game, they grow stronger — not just in skill, but in confidence and team spirit.
          </p>
        </div>
      </div></div>


      {/* transport */}

      <div className="container ml-2">
      <div className="container row align-items-center rounded shadow mb-5 ml-5 bg-white " >
        <div className="col-md-5 mb-3 mt-3 mb-md-2 ">
          <img src={busImg} alt="Classroom" className="img-fluid rounded shadow w-100" />
        </div>
        <div className="col-md-6" style={{fontFamily:'sans-serif'}}>
          <h2 className="fw-bold text-primary">Transport</h2>
         <ul>
          <li>Mobile-enabled buses for smooth communication on the go.</li>
          <li>A caring female attendant and conductor accompany every bus ride.</li>
          <li>24/7 CCTV coverage ensures constant vigilance.</li>
          <li>Real-time GPRS tracking for peace of mind.</li>
         </ul>
         <p>At Brammass, we make every journey safe, secure, and comfortable for your child.</p>
        </div>
      </div></div>
    </div>


    
  );
};

export default InfrastructureSection;
