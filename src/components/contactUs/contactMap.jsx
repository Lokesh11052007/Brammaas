const ContactMap = () => {
  return (
    <>
      {/* Desktop & Tablet (≥576px) */}
      <div className="position-relative w-100 d-none d-sm-block" style={{ height: '100vh', marginBottom: '100px' }}>
        <iframe
          title="School Location Desktop"
          src="https://www.google.com/maps?q=5/222,+Railway+Station+Rd,+Gandhi+Nagar,+Gudiyatham,+Tamil+Nadu+632602&output=embed"
          className="position-absolute top-0 start-0 w-100 h-100 border-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

        <OverlayBox />
      </div>

      {/* Mobile (<576px) */}
      <div className="position-relative w-100 d-block d-sm-none" style={{ height: '60vh', marginBottom: '60px' }}>
        <iframe
          title="School Location Mobile"
          src="https://www.google.com/maps?q=5/222,+Railway+Station+Rd,+Gandhi+Nagar,+Gudiyatham,+Tamil+Nadu+632602&output=embed"
          className="position-absolute top-0 start-0 w-100 h-100 border-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

        <OverlayBox />
      </div>
    </>
  );
};

// ✅ Reusable Overlay Box component
const OverlayBox = () => (
  <div
    className="position-absolute top-0 start-0 bg-white shadow rounded p-3 mt-2 ms-2 w-auto"
    style={{ maxWidth: '320px', zIndex: 1000 }}
  >
    <h6 className="fw-bold mb-2 text-center">School Address</h6>
    <p className="mb-3 text-center small">
      5/222, Railway Station, Gandhi Nagar,<br />
      Gudiyatham, Tamil Nadu 632602
    </p>
    <div className="d-flex justify-content-center">
      <a
        href="https://www.google.com/maps/place/BRAMMAAS+VIDHYALAYA+CBSE+SENIOR+SECONDARY+RESIDENTIAL+SCHOOL/@12.9377755,78.9085187,20z/data=!4m6!3m5!1s0x3bad6cb51f7ee3e3:0x1dd5ded4a5427c14!8m2!3d12.9376696!4d78.9088433!16s%2Fg%2F11c5s64hn1?entry=ttu"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-primary btn-sm"
      >
        View Large Map
      </a>
    </div>
  </div>
);

export default ContactMap;
