export default function Parent({ParentTestimonial, title}) {
    const parents = [
        {
            img: require('../../../assets/parent1.jpg'),
            Name: "K. Rajesh Kumar",
            description1: "I’m Surya parents , We love Brammaas School because it provides the basic foundation to prepare our child surya for the challenges of the real world .",
            description2:"Lorem ipsum dolor sit abet,advising edit, vivas nibs dolor gravid at eleven",
        },
        {
            img: require('../../../assets/parent2.jpg'),
            Name: "Nivin paul isaac",
            description1: "I’m Surya parents , We love Brammaas School because it provides the basic foundation to prepare our child surya for the challenges of the real world .",
            description2:"Lorem ipsum dolor sit abet,advising edit, vivas nibs dolor gravid at eleven",
        },
        {
            img: require('../../../assets/parent3.jpg'),
            Name: "Janani iyer nivetha",
            description1: "I’m Surya parents , We love Brammaas School because it provides the basic foundation to prepare our child surya for the challenges of the real world .",
            description2:"Lorem ipsum dolor sit abet,advising edit, vivas nibs dolor gravid at eleven",
        }
    ]
    return (
    <div className="container-fluid py-2" style={{backgroundColor:"#FFF3E2"}}>
        <h3 className="fw-bold fs-1 text-center mb-5" style={{color:'#000863'}}>{title}</h3>
      <div className="container py-5">
        <div className="row g-5 p-5 shadow-sm" style={{
        backgroundImage: `url(${ParentTestimonial})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
        {parents.map((item, idx) => (
          <div className="col-12 col-md-6 col-lg-4 font-family " key={idx}>
            <div className="card text-center p-5  border-0 mb-sm-5 mb-2" style={{boxShadow: '0 2px 5px rgba(0, 0, 0, 0.4)'}} >
              <div style={{position:"relative", top: '-90px'}}>
                <img
                src={item.img}
                className="rounded-circle mx-auto mb-3"
                style={{ width: "100px", height: "100px", objectFit: "cover" }}
                alt="profile"
              />
              <h5 className="fw-bold">{item.Name}</h5>
              <p className="text-center fw-normal fs-6">{item.description1}</p>
              <p className="text-center fw-normal fs-6">
                {item.description2}
              </p>
              <div className="text-warning fs-5" style={{marginBottom:'-80px'}}>★ ★ ★ ★ ★</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
}