import { Link } from "react-router-dom"

export default function TopFixed({bgImage,title,content}){
    return(
        <section
        className="bg-dark text-white  d-flex justify-content-center align-items-center position-relative overflow-hidden"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '50px 20px',
          height: '450px',
        }}
      >
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', zIndex: 1 }}
        ></div>

        <div className="position-relative" style={{ zIndex: 2 }}>
          <h1 className="fw-bold display-5">{title}</h1>
          <p className="fs-5 text-center">
            <Link to="/" className="text-white text-decoration-none fw-semibold">
                Home
            </Link>
            <i className="bi bi-chevron-right mx-2 text-white"></i>
            {content}</p>
        </div>
      </section>
    )
}