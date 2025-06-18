
import aboutSchool from '../../assets/aboutSchool.jpg'

export default function AboutContent() {
    return (
        <div className="container-fluid px-4 py-5" style={{backgroundColor: "#FFF3E2",  transform: 'scale(1.01)'}}>
            <div className="container d-flex px-2 py-5 gap-5">
                <div className='mt-2'>
                    <img src={aboutSchool} alt="School" className='rounded-4' />
                </div>
                <div>
                    <h3 className='fs-4 fw-medium' style={{color: "#000863"}}>OUR STORY</h3>
                    <h3 className='fs-3 fw-semibold mt-4' style={{color: "#000863"}}>ABOUT OUR SCHOOL</h3>
                    <p className='fw-normal fs-3 mt-4 lh-base'>Brammaas Vidhyalaya CBSE Senior <br /> Secondary School</p>
                    <p className='fw-medium fs-6 lh-lg'>A Monalith and dynamic academic  institution was started by, Ln. R. P. Senthil <br/>
                        who has came long way in poineering what he is today with the Brammaas <br/>
                        group of schools, Known but for its extraordinary education quality and <br/>
                        holistic development hailing from the coastal town of Gudiyattam, Vellore <br/>
                        district in Tamil Nadu. Ln. R.P. Sendhil began his dream of venturing into new  <br/>
                        space of education with a significant vision to educate and build young <br/>
                        minds towards innovative achievements in science and technology. The <br/>
                        scope of his vision expanded in multitudinous folds, contributing ever since to <br/>
                        the growth of his academic ventures. The ultimate aim of the founder is to <br/>
                        bring quality education to the rural area so far enjoyed by the urban people.</p> <br/>
                </div>
            </div>
        </div>
    )
}