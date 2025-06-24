import React from 'react';

import overlayImg from '../../assets/brillient.png';

const Form = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted!');
  };

  return (
    <section className="py-5 bg-white">
  <div className="container">
    <div className="row g-4">
      {/* Left Image */}
      <div className="col-lg-6 d-flex align-items-center justify-content-center">
        <img src={overlayImg} alt="Admission Visual" className="img-fluid" />
      </div>

      {/* Right Form */}
      <div className="col-lg-6">
        <div
          className="p-4 rounded-4 border border-white"
          style={{
            background: 'linear-gradient(to bottom right, #efcbaf, #f3edeb, #f7c2ac)',
            marginTop: '30px',
          }}
        >
          <h2 className="text-center fw-bold mb-4">
            TAKE THE FIRST STEP,<br />FILL THE DETAILS BELOW
          </h2>

          <form onSubmit={handleSubmit}>
            <div className="row g-3">
              <div className="col-md-6">
                <input type="text" className="form-control" placeholder="Enter Student Name" required />
              </div>
              <div className="col-md-6">
                <input type="tel" className="form-control" placeholder="Enter Mobile Number" required />
              </div>
              <div className="col-md-6">
                <input type="email" className="form-control" placeholder="Enter Email Id" required />
              </div>
              <div className="col-md-6">
                <select className="form-select" required>
                  <option value="">Class</option>
                  <option value="I">I</option>
                  <option value="II">II</option>
                  <option value="III">III</option>
                </select>
              </div>
              <div className="col-md-6">
                <input type="text" className="form-control" placeholder="Enter City" />
              </div>
              <div className="col-md-6">
                <select className="form-select" required>
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
              <div className="col-12">
                <textarea className="form-control" placeholder="Enter Your Message" rows={2}></textarea>
              </div>
              <div className="text-center mt-3">
                <button className="btn btn-warning text-white fw-bold px-4 py-2" type="submit">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>

  );
};

export default Form;
