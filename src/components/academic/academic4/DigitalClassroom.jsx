import React from "react";
import classroomImage from "../../../assets/digital-classroom.jpg"; // replace with your actual image path

import RelatedCourse from "../academic1/RelatedCourse";


const DigitalClassroom = () => {
  return (
    <>
        
        <div className="px-5 py-5 w-100" style={{backgroundColor: '#FFF3E2'}}>
        <div className="row g-4">
          <div className="col-lg-5 col-md-12">
            <div className="d-flex flex-column px-4 py-4 w-100 fw-bold  rounded-5 border shadow" style={{fontSize: '20px', color: '#1e3a8a', backgroundColor: 'rgba(255, 255, 255, 0.9)', borderColor: '#e5e5e5'}}>
              <div className="align-self-start">
                Digital Classroom
              </div>
              <img
                src={classroomImage}
                className="img-fluid mt-3 rounded-3"
                style={{aspectRatio:1.13}}
                alt="DigitalClassroom"
              />
            </div>
          </div>
          <div className="col-lg-7 col-md-12">
            <div className="d-flex flex-column text-black" style={{fontSize: '15px', fontWeight: '500'}}>
              <div className="align-self-start" style={{fontSize: '20px'}}>
                Digital Classroom
              </div>
              <div className="align-self-start px-3 mt-3 text-white rounded" style={{fontSize: '14px', backgroundColor: '#f59e0b'}}>
                Enquiry
              </div>
              <div className="align-self-start mt-3" style={{fontSize: '18px', color: '#1e3a8a'}}>
                Description
              </div>
              <div className="mt-3 ms-3 lh-base">
                The digital classroom provides teachers the superpower to teach students effectively through
                its rich content. Students learn quickly when taught through embedded technologies and
                interactive classrooms.<br/> They offer students a platform to master all the concepts through
                3D animated videos. Brammaas’s Digital classroom enables students to visualize difficult
                concepts with ease.<br/> The rich content has over 6000 concepts with animated videos,
                interactive simulations, special keyword decks, glossaries, and quizzes.
              </div>
              <div className="mt-4 ms-3 fw-bold">
                Features:
              </div>
              <div className="mt-3 ms-3">
                <ul className="list-unstyled">
                    <li className="mb-2"><span className="fw-bold">* Simulations </span>- Virtual learning environments for students with help of 2D & 3D (interactive) simulations</li>
                    <li className="mb-2"><span className="fw-bold">*Animated Video's </span>- A strong visualization tool to comprehending complex concepts</li>
                    <li className="mb-2"><span className="fw-bold">* Quiz</span> - Lessons equipped with Quiz /worksheet after every topic</li>
                    <li className="mb-2"><span className="fw-bold">* Images </span>- Assist students to relate and recollect concepts, ideas, and learnings in a split second.</li>
                    <li className="mb-2"><span className="fw-bold">* Key Terms</span> - Quick references such as definitions, topic highlights, and terminologies used.</li>
                    <li className="mb-2"><span className="fw-bold">* Pre-requisites</span> - A background knowledge of the topic to facilitate the learning of a new topic.</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-4 ms-3 lh-lg text-black" style={{fontSize: '15px', fontWeight: '500'}}>
          <span className="fw-bold">  Tips for teachers to use the Digital Classroom effectively:<br/> </span>
           <span className="ms-2"> Our digital content is masterfully designed and offers a high level of engagement in the learning process.<br/></span>
            <span className="fw-bold ms-2"> * Be Prepared</span> – Get acquainted with the deliverables before a topic/period.<br/>
            <span className="fw-bold ms-2">* Plan</span> – Plan a session, pause, or mute the video when you feel there is a need to elucidate.<br/>
            <span className="fw-bold ms-2">* Resource utilization</span> – Try and use all the features available and give learning a new dimension – Assimilate, Analyze, and Apply. (Follow AAA)<br/>
            <span className="fw-bold ms-2">* Evaluate </span>– Use the Quiz to engage the students and evaluate their progress.
          </div>
        </div>
      </div>
        <RelatedCourse />
    </>
  );
};

export default DigitalClassroom;
