
import { Link } from 'react-router-dom';


function AboutHeader({bgImage,title,content}) {
  return (
    <div
      className="position-relative text-white text-center"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '450px',
      }}
    >
      {/* Dark overlay */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
      ></div>

      {/* Centered content */}
      <div className="position-relative d-flex flex-column justify-content-center align-items-center h-100">
        <h2 className="mb-2 " style={{fontWeight:800, fontSize:"48px"}}>{title}</h2>
        <nav aria-label="breadcrumb" >
          <ol className="breadcrumb mb-0 fw-medium fs-5">
            <li className="breadcrumb-item">
              <Link to="/" className="text-white text-decoration-none fw-semibold">
                Home
              </Link>
            </li>
            <i className="bi bi-chevron-right mx-2 text-white"></i>
            <li className="breadcrumb-item active text-white" aria-current="page">
              {content}
            </li>
          </ol>
        </nav>
      </div>
    </div>
  );
};

export default AboutHeader;
