import React from 'react';
import Header from '../header.jsx'
import Footer from '../Footer.jsx';
import RelatedCourse from './RelatedCourse.jsx'
function AcademicsPage() {
  return (
    <div className="overflow-hidden bg-white">
        <Header />

      {/* Main Content Section */}
      <div className="px-5 py-5 w-100" style={{backgroundColor: '#FFF3E2'}}>
        <div className="row g-4">
          <div className="col-lg-5 col-md-12">
            <div className="d-flex flex-column px-4 py-4 w-100 fw-bold  rounded-5 border shadow" style={{fontSize: '20px', color: '#1e3a8a', backgroundColor: 'rgba(255, 255, 255, 0.9)', borderColor: '#e5e5e5'}}>
              <div className="align-self-start">
                Counselling
              </div>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/f790ffdc42e937bf6c8cc7462a90ed67ba497665?placeholderIfAbsent=true"
                className="img-fluid mt-3 rounded-3"
                style={{aspectRatio: '1.13'}}
                alt="Counselling"
              />
            </div>
          </div>
          <div className="col-lg-7 col-md-12">
            <div className="d-flex flex-column text-black" style={{fontSize: '16px', fontWeight: '500'}}>
              <div className="align-self-start" style={{fontSize: '20px'}}>
                Counselling
              </div>
              <div className="align-self-start px-3 mt-3 text-white rounded" style={{fontSize: '14px', backgroundColor: '#f59e0b'}}>
                Enquiry
              </div>
              <div className="align-self-start mt-3" style={{fontSize: '18px', color: '#1e3a8a'}}>
                Description
              </div>
              <div className="mt-3 ms-3">
                A team of experienced counsellors dedicated to ensure the emotional health and happiness
                <br /> of students at the Brammaas Group of Educational Institutions. We encourage them to
                <br />
                approach us for any problem that they are facing- academic, emotional or social – without
                <br /> hesitation. Speak your mind
              </div>
              <div className="mt-2 ms-3">
                We are here to help you unburden yourself. Talk to us with all your mind and heart without any external pressure. We value your trust
              </div>
              <div className="mt-3 ms-3">
                Don't worry. We know what it means to share a secret. You can count on us for complete confidentiality. No judgments
              </div>
              <div className="mt-3 ms-3">
                It is important for us that you feel positive about life. We promise to help you understand yourself and the world without assumptions.
              </div>
              <div className="mt-2 ms-3">
                Give your child the Learning advantage <br />
                Our videos and concept cards are designed to help children strengthen their fundamental concepts at their own pace. Your learning isn't complete, till you have solved a lot of questions of the concepts learnt. Right feedbacks from the questions help us grasp the concepts effectively. Measure your progress, see detailed solutions to make your concepts rock solid. <br />
                Take a weekend tests, mock tests or create your own! Right from previous year papers to complete test series, we've got you the best resources to practice. No need to flip pages or find books to practice the best questions. We have compiled everything for your ease along with detailed solutions. Get advanced reports for all the tests that help you improve your performance, ranking, speed and accuracy.
              </div>
            </div>
          </div>
        </div>
      </div>

      <RelatedCourse />
      <Footer />.
    </div>
  );
}

export default AcademicsPage;
