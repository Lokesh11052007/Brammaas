import React from 'react';
import './admin.css';
import overlayImg from '../../assets/brillient.png';

const Form = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted!');
  };

  return (
    <section className="admission-wrapper">
      <div className="admission-container">
        {/* Left Image Section */}
        <div className="admission-image">
          <img src={overlayImg} alt="Admission Visual" />
        </div>
        


        {/* Right Form Section */}
        <div className="admission-form-box">
          <h2>TAKE THE FIRST STEP,<br />FILL THE DETAILS BELOW</h2>
          <form className="form-fields" onSubmit={handleSubmit}>

            <div className="form-columns">
              {/* LEFT COLUMN */}
              <div className="form-column">
                <div className="form-group placeholder-wrapper">
                  <input id="studentName" name="studentName" type="text" placeholder="Enter Student Name" required />
                  <span className="red-star1">*</span>
                </div>

                <div className="form-group placeholder-wrapper">
                  <input id="email" name="email" type="email" placeholder="Enter Email Id" required />
                  <span className="red-star2">*</span>
                </div>

                <div className="form-group">
                  <select name="gender" id="gender" required>
                    <option value="">Select Gender </option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>

                <div className="form-group">
                  <input id="previousSchool" name="previousSchool" type="text" placeholder="Enter Previous School" />
                </div>
              </div>

              {/* RIGHT COLUMN */}
              <div className="form-column">
                <div className="form-group placeholder-wrapper">
                  <select name="class" id="class" required>
                    <option value="">Class</option>
                    <option value="I">I</option>
                    <option value="II">II</option>
                    <option value="III">III</option>
                    <option value="IV">IV</option>
                    <option value="V">V</option>
                  </select>
                  <span className="red-star3">*</span>
                </div>

                <div className="form-group placeholder-wrapper">
                  <input id="mobile" name="mobile" type="tel" placeholder="Enter Mobile Number" required />
                  <span className="red-star4">*</span>
                </div>

                <div className="form-group">
                  <input id="city" name="city" type="text" placeholder="Enter City" required />
                </div>

                <div className="form-group">
                  <textarea id="message" name="message" placeholder="Enter Your Message"  />
                </div>
              </div>
            </div>

            <div className="form-submit">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Form;
