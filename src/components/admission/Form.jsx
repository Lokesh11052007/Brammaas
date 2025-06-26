
import React, { useState } from 'react';
import overlayImg from '../../assets/brillient.png';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    gender: '',
    prevSchool: '',
    class: '',
    phone: '',
    city: '',
    message: '',
  });

  const handleChange = (field) => (e) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted!');
  };

  return (
    <section className="bg-white py-5">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Image */}
          <div className="col-12 col-lg-6 mb-4 mb-lg-0">
            <img
              src={overlayImg}
              alt="Admission Visual"
              className="img-fluid w-100 h-100"
              style={{
                maxHeight: '1500px',
                objectFit: 'cover',
                height: '100%',
              }}
            />
          </div>

          {/* Right Form */}
          <div className="col-12 col-lg-6">
            <div
              className="p-4 rounded border shadow-sm"
              style={{
                background: 'linear-gradient(to bottom right, #efcbaf, #f3edeb, #f7c2ac)',
                marginTop: '50px',
                padding: '5rem',
                minHeight: '550px',
              }}
            >
              <h2 className="text-center fw-bold mb-5 text-dark">
                TAKE THE FIRST STEP,<br />FILL THE DETAILS BELOW
              </h2>

              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  {/* Left Column */}
                  <div className="col-12 col-md-6">
                    {/* Name */}
                    <div className="position-relative mb-4 mb-md-5">
                      <input
                        type="text"
                        value={formData.name}
                        onChange={handleChange('name')}
                        className="form-control form-control-sm fs-6 p-2"
                        placeholder="Enter Student Name"
                        required
                      />
                      {!formData.name && (
                        <>
                          <span className="text-danger position-absolute d-none d-md-inline" style={{ top: '5px', right: '5px' }}>*</span>
                          <span className="text-danger position-absolute d-inline d-md-none" style={{ top: '5px', right: '5px' }}>*</span>
                        </>
                      )}
                    </div>

                    {/* Email */}
                    <div className="position-relative mb-4 mb-md-5">
                      <input
                        type="email"
                        value={formData.email}
                        onChange={handleChange('email')}
                        className="form-control form-control-sm fs-6 p-2"
                        placeholder="Enter Email"
                        required
                      />
                      {!formData.email && (
                        <>
                          <span className="text-danger position-absolute d-none d-md-inline" style={{ top: '5px', right: '5px' }}>*</span>
                          <span className="text-danger position-absolute d-inline d-md-none" style={{ top: '5px', right: '5px' }}>*</span>
                        </>
                      )}
                    </div>

                    {/* Gender */}
                    <div className="position-relative mb-4 mb-md-5">
                      <select
                        value={formData.gender}
                        onChange={handleChange('gender')}
                        className="form-select form-select-sm fs-6 p-2"
                        required
                      >
                        <option value="" disabled>Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                      </select>
                    </div>

                    <input
                      type="text"
                      value={formData.prevSchool}
                      onChange={handleChange('prevSchool')}
                      className="form-control form-control-sm fs-6 mt-3 p-2"
                      placeholder="Enter Previous School"
                    />
                  </div>

                  {/* Right Column */}
                  <div className="col-12 col-md-6">
                    {/* Class */}
                    <div className="position-relative mb-4 mb-md-5">
                      <select
                        value={formData.class}
                        onChange={handleChange('class')}
                        className="form-select form-select-sm fs-6 p-2"
                        required
                      >
                        <option value="" disabled>Select Class</option>
                        <option value="I">I</option>
                        <option value="II">II</option>
                        <option value="III">III</option>
                        <option value="IV">IV</option>
                        <option value="V">V</option>
                      </select>
                      {!formData.class && (
                        <>
                          <span className="text-danger position-absolute d-none d-md-inline" style={{ top: '5px', right: '5px' }}>*</span>
                          <span className="text-danger position-absolute d-inline d-md-none" style={{ top: '5px', right: '5px' }}>*</span>
                        </>
                      )}
                    </div>

                    {/* Phone */}
                    <div className="position-relative mb-4 mb-md-5">
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange('phone')}
                        className="form-control form-control-sm fs-6 p-2"
                        placeholder="Enter Mobile Number"
                        required
                      />
                      {!formData.phone && (
                        <>
                          <span className="text-danger position-absolute d-none d-md-inline" style={{ top: '5px', right: '5px' }}>*</span>
                          <span className="text-danger position-absolute d-inline d-md-none" style={{ top: '5px', right: '5px' }}>*</span>
                        </>
                      )}
                    </div>

                    {/* City */}
                    <div className="position-relative mb-4 mb-md-5">
                      <input
                        type="text"
                        value={formData.city}
                        onChange={handleChange('city')}
                        className="form-control form-control-sm fs-6 p-2"
                        placeholder="Enter City"
                        required
                      />
                    </div>

                    {/* Message */}
                    <textarea
                      value={formData.message}
                      onChange={handleChange('message')}
                      className="form-control form-control-sm fs-6 mt-3 p-2"
                      placeholder="Enter Your Message"
                      rows="1"
                      style={{ height: '42px', resize: 'none' }}
                    ></textarea>
                  </div>
                </div>

                <div className="text-center mt-4">
                  <button type="submit" className="btn btn-warning px-5 fw-bold">
                    Submit
                  </button>
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