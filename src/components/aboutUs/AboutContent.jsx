import aboutSchool from '../../assets/aboutSchool.jpg'

export default function AboutContent() {
    return (
        <div
            className="container-fluid px-4 py-5"
            style={{ backgroundColor: "#FFF3E2", transform: 'scale(1.01)' }}
        >
            <div className="container px-2 py-5">
                <div className="row align-items-center g-5">
                    {/* Image Column */}
                    <div className="col-12 col-md-6">
                        <img src={aboutSchool} alt="School" className="img-fluid rounded-4 w-100" />
                    </div>

                    {/* Text Column */}
                    <div className="col-12 col-md-6 text-center text-md-start">
                        <h3 className="fs-4 fw-medium" style={{ color: "#000863" }}>
                            OUR STORY
                        </h3>
                        <h3 className="fs-3 fw-semibold mt-3" style={{ color: "#000863" }}>
                            ABOUT OUR SCHOOL
                        </h3>
                        <p className="fw-normal fs-3 mt-3 lh-base">
                            Brammaas Vidhyalaya CBSE Senior Secondary School
                        </p>
                        <p className="fw-medium fs-6 lh-lg">
                            A monolithic and dynamic academic institution founded by Ln. R. P. Senthil, a visionary
                            from Gudiyattam, Vellore district in Tamil Nadu. He pioneered the Brammaas group of schools,
                            renowned for exceptional educational quality and holistic development.
                        </p>
                        <p className="fw-medium fs-6 lh-lg">
                            With a mission to educate and build young minds for innovative achievements in science and
                            technology, his vision grew into multiple academic ventures. His ultimate aim remains to bring
                            quality education to rural areas — a privilege once limited to urban regions.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
