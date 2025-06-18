
import Header from '../header.jsx'
import Footer from '../Footer.jsx';
import RelatedCourse from '../academic/RelatedCourse.jsx'
import imgSir from '../../assets/sir.jpg'

function AcademicsPage3() {
  return (
    <>
      <Header />
     <div className="px-5 py-5 w-100" style={{backgroundColor: '#FFF3E2E5'}}>
        <div className="row g-4">
          <div className="col-lg-5 col-md-12">
            <div className="d-flex flex-column px-4 py-4 w-100 fw-bold  rounded-5 border shadow" style={{fontSize: '20px', color: '#1e3a8a', backgroundColor: 'rgba(255, 255, 255, 0.9)', borderColor: '#e5e5e5'}}>
              <div className="align-self-start">
                Brammaas Programme
              </div>
              <img
                src={imgSir}
                className="img-fluid mt-3 rounded-3"
                style={{aspectRatio: '1.13'}}
                alt="Brammaas Programme"
              />
            </div>
          </div>
          <div className="col-lg-7 col-md-12">
            <div className="d-flex flex-column text-black" style={{fontSize: '15px', fontWeight: '500'}}>
              <div className="align-self-start" style={{fontSize: '20px'}}>
                Brammaas Programme
              </div>
              <div className="align-self-start px-3 mt-3 text-white rounded" style={{fontSize: '14px', backgroundColor: '#f59e0b'}}>
                Enquiry
              </div>
              <div className="align-self-start mt-3" style={{fontSize: '18px', color: '#1e3a8a'}}>
                Description
              </div>
              <div className="mt-3 ms-3">
               We conducts the following examinations throughout the academic year:
              </div>
              <div className="mt-2 ms-5">
                  Weekly JEE test <br/>
                  Weekly Online CDF (Concepts, Definitions and Formulae) test  <br/>
                  Periodic Assessments  <br/>
                  Term-wise Summative Assessment<br/>
              </div>
              <div className="mt-4 ms-3">
              <span className='fw-bold'> Zero Error Policy <br/></span>
              There is a popular saying that to err is human.But there is also another which challenge it- Practice makes one perfect.
               The consequences that errors can have on focus and determination are
              Far-reaching. Brammaas Group of Schools put in best efforts to eliminate them as much as 
              possible by adopting a zero-error plan.
              </div>
              <div className="mt-4 ms-3">
                Our faculty takes the time to list out different kinds of errors students make in their tests. An hour
                is dedicated for them to identify where they had gone wrong and practice the right methods to
                rectify them. Depending upon the nature of error, we compose questions of increasing levels 
                around the same. Further counseling and training is provided in case of any ambiguity. 
                This will not just effectively stop the error from recurring but will also make the entire error
                category dormant.<br/>
              </div>
              
            </div>
          </div>
        </div>
      </div>
      <RelatedCourse  />
      <Footer />
    </>
  );
}

export default AcademicsPage3;
