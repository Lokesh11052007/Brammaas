import aboutSchool from '../../assets/aboutSchool.jpg';

export default function AboutContent() {
    return (
        <div className="container-fluid px-4 py-5" style={{ backgroundColor: "#FFF3E2", transform: 'scale(1.01)' }}>
            <div className="container px-2 py-5">
                <div className="row g-5 align-items-center">
                    {/* Left Column - Image */}
                    <div className="col-12 col-lg-6 text-center text-lg-start">
                        <img
                            src={aboutSchool}
                            alt="School"
                            className="img-fluid rounded-4 shadow-sm"
                        />
                    </div>

                    {/* Right Column - Text Content */}
                    <div className="col-12 col-lg-6">
                        <h3 className="fs-4 fw-medium text-primary-emphasis">OUR STORY</h3>
                        <h2 className="fs-3 fw-semibold mt-3 text-primary-emphasis">ABOUT OUR SCHOOL</h2>
                        <p className="fw-normal fs-4 mt-4">Brammaas Vidhyalaya CBSE Senior Secondary School</p>
                        <p className="fw-medium fs-6 lh-lg">
                            A monolithic and dynamic academic institution was started by Ln. R. P. Senthil,
                            who has come a long way in pioneering what he is today with the Brammaas
                            group of schools, known for its extraordinary education quality and
                            holistic development. Hailing from the coastal town of Gudiyattam, Vellore
                            district in Tamil Nadu, Ln. R.P. Senthil began his dream of venturing into the
                            space of education with a significant vision to educate and build young
                            minds towards innovative achievements in science and technology.
                            His vision expanded immensely, contributing continuously to the
                            growth of his academic ventures. The ultimate aim of the founder is to
                            bring quality education to rural areas, previously only enjoyed by urban populations.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
