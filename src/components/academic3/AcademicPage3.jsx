
import Header from '../header.jsx'
import Footer from '../Footer.jsx';
import RelatedCourse from '../academic/RelatedCourse.jsx'
import imgSir from '../../assets/sir.jpg'

function AcademicsPage3() {
  return (
    <div className="overflow-hidden bg-white">
        <Header />

      {/* Main Content Section */}
      <div className="px-5 py-5 w-100 font-family" style={{backgroundColor: '#FFF3E2'}}>
        <div className="row g-4">
          <div className="col-lg-5 col-md-12">
            <div className="d-flex flex-column px-4 py-4 w-100 fw-bold  rounded-5 border shadow" style={{fontSize: '17px',fontWeight:700, color: '#000C92', backgroundColor: 'rgba(255, 255, 255, 0.9)', borderColor: '#e5e5e5'}}>
              <div className="align-self-start">
                Brammaas Programme
              </div>
              <img
                src={imgSir}
                className="img-fluid mt-3 rounded-3"
                style={{aspectRatio: '1.13'}}
                alt="Counselling"
              />
            </div>
          </div>
          <div className="col-lg-7 col-md-12">
            <div className="d-flex flex-column text-black" style={{fontWeight: '500'}}>
              <div className="align-self-start" style={{fontSize: '20px'}}>
                Brammaas Programme
              </div>
              <div className="align-self-start px-3 mt-3 text-white rounded" style={{fontSize: '13px', backgroundColor: '#f59e0b'}}>
                Enquiry
              </div>
              <div className="align-self-start mt-3" style={{fontSize: '17px', color: '#000863'}}>
                Description
              </div>
              <div className="mt-3 ms-3" style={{fontSize: '15px'}}>
               We conducts the following examinations throughout the academic year:
              </div>
              <ul className='list-unstyled mt-1 ms-5' style={{fontSize: '15px'}}>
                <li>Weekly JEE test</li>
                <li>Weekly Online CDF (Concepts, Definitions and Formulae) test </li>
                <li> Periodic Assessments</li>
                <li> Term-wise Summative Assessment</li>
              </ul>
              <div className="mt-3 ms-3" style={{fontSize: '15px'}}>
                Zero Error Policy<br/>
                There is a popular saying that to err is human. But there is also another which challenge it- Practice<br/>
                makes one perfect. The consequences that errors can have on focus and determination are<br/>
                Far-reaching. Brammaas Group of Schools put in best efforts to eliminate them as much as<br/>
                possible by adopting a zero-error plan.
              </div>
              <div className="mt-3 ms-3" style={{fontSize: '15px'}}>
                Our faculty takes the time to list out different kinds of errors students make in their tests. An hour
is dedicated for them to identify where they had gone wrong and practice the right methods to
rectify them. Depending upon the nature of error, we compose questions of increasing levels 
around the same. Further counseling and training is provided in case of any ambiguity. 
This will not just effectively stop the error from recurring but will also make the entire error
category dormant.
              </div>
            </div>
          </div>
        </div>
      </div>

      <RelatedCourse />
      <Footer />
    </div>
  );
}

export default AcademicsPage3;
