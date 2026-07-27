'use client'

const Highlights = () => {
  return (
    <section id="highlights" className="highlight_section">
      <style jsx>{`
        .highlight_section {
          position: relative;
          padding: 0;
          overflow: hidden;
        }
        
        .highlight_section .parallax {
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
          background-image: url('/images/highlights/highlight.webp');
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
          background-repeat: no-repeat;
        }

        .highlight_section .container-fluid {
          position: relative;
          z-index: 2;
          width: 100%;
          padding-right: 15px;
          padding-left: 15px;
          margin: 0 auto;
        }

        .highlight_section .heading {
          color: #d3be8a;
          font-family: "Montserrat", sans-serif;
          font-size: 46px;
          font-weight: 500;
          line-height: 56px;
          text-transform: uppercase;
          letter-spacing: .02em;
          margin-bottom: 50px; /* Increased from 30px */
        }

        .highlight_section ul {
          padding-left: 0;
          list-style: none;
          margin: 0;
        }

        .highlight_section ul li {
          letter-spacing: 1px;
          font-weight: 400;
          font-size: 18px;
          line-height: 32px; /* Increased from 28px */
          margin-bottom: 28px; /* Increased from 20px */
          color: #f4ebe4;
          font-family: "Poppins", sans-serif;
          position: relative;
          padding-left: 50px; /* Increased from 44px */
        }

        .highlight_section ul li:before {
          content: '✓';
          position: absolute;
          left: 0;
          top: 0;
          color: #f4ebe4;
          font-size: 20px;
          font-weight: 300;
        }

        .box_left, .box_right {
          padding: 8% 8%; /* Increased top/bottom from 5% to 8% */
        }

        .box_right {
          border-left: 1px solid #ffffff3b;
        }

        @media (max-width: 991px) {
          .highlight_section .heading {
            font-size: 32px;
            line-height: 40px;
          }
          .box_left, .box_right {
            padding: 40px 20px;
          }
          .box_right {
            border-left: none;
            border-top: 1px solid #ffffff3b;
          }
          .highlight_section ul li {
            font-size: 16px;
            line-height: 26px;
          }
        }
      `}</style>

      {/* Parallax Background with fixed attachment for layer effect */}
      <div className="parallax"></div>

      <div className="container-fluid max-w-[1300px] mx-auto relative z-10 py-[70px]">
        <h2 className="heading text-center" data-aos="fade-up" data-aos-duration="1000">
          PROJECT HIGHLIGHTS & USPS
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border border-white/20 rounded-[20px] mt-10" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200" style={{ position: 'relative' }}>
          
          {/* Corner Accents */}
          <div style={{ position: 'absolute', top: -1, left: -1, width: '24px', height: '24px', borderTop: '1.5px solid #d3be8a', borderLeft: '1.5px solid #d3be8a', borderTopLeftRadius: '20px' }}></div>
          <div style={{ position: 'absolute', top: -1, right: -1, width: '24px', height: '24px', borderTop: '1.5px solid #d3be8a', borderRight: '1.5px solid #d3be8a', borderTopRightRadius: '20px' }}></div>
          <div style={{ position: 'absolute', bottom: -1, left: -1, width: '24px', height: '24px', borderBottom: '1.5px solid #d3be8a', borderLeft: '1.5px solid #d3be8a', borderBottomLeftRadius: '20px' }}></div>
          <div style={{ position: 'absolute', bottom: -1, right: -1, width: '24px', height: '24px', borderBottom: '1.5px solid #d3be8a', borderRight: '1.5px solid #d3be8a', borderBottomRightRadius: '20px' }}></div>

          {/* Item 1 */}
          <div className="p-10 border-b lg:border-b border-white/20 lg:border-r flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ background: '#d3be8a' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9 22 9 12 15 12 15 22"></polyline>
              </svg>
            </div>
            <h3 className="text-[#d3be8a] font-bold text-[15px] uppercase tracking-wider mb-3">INTEGRATED GREEN TOWNSHIP</h3>
            <p className="text-white/80 text-[14px] leading-relaxed">Spread Over 92 Acres in the Heart of OMR</p>
          </div>

          {/* Item 2 */}
          <div className="p-10 border-b lg:border-b border-white/20 lg:border-r flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ background: '#d3be8a' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect>
                <line x1="9" y1="22" x2="15" y2="22"></line>
                <line x1="12" y1="18" x2="12" y2="22"></line>
              </svg>
            </div>
            <h3 className="text-[#d3be8a] font-bold text-[15px] uppercase tracking-wider mb-3">ON-CAMPUS PSBB SCHOOL</h3>
            <p className="text-white/80 text-[14px] leading-relaxed">Home to the Prestigious PSBB School Inside Township</p>
          </div>

          {/* Item 3 */}
          <div className="p-10 border-b lg:border-b border-white/20 flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ background: '#d3be8a' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 3v18"></path>
                <path d="M12 3l4 4"></path>
                <path d="M12 3L8 7"></path>
              </svg>
            </div>
            <h3 className="text-[#d3be8a] font-bold text-[15px] uppercase tracking-wider mb-3">EXCLUSIVE SPORTS FACILITY</h3>
            <p className="text-white/80 text-[14px] leading-relaxed">First-of-its-Kind with Gym, Skating, Futsal &amp; Cricket</p>
          </div>

          {/* Item 4 */}
          <div className="p-10 border-b md:border-b-0 lg:border-r border-white/20 flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ background: '#d3be8a' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"></path>
              </svg>
            </div>
            <h3 className="text-[#d3be8a] font-bold text-[15px] uppercase tracking-wider mb-3">POLLUTION-FREE LIVING</h3>
            <p className="text-white/80 text-[14px] leading-relaxed">Replete with Potable Water &amp; Lush Manicured Parks</p>
          </div>

          {/* Item 5 */}
          <div className="p-10 border-b md:border-b-0 lg:border-r border-white/20 flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ background: '#d3be8a' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
              </svg>
            </div>
            <h3 className="text-[#d3be8a] font-bold text-[15px] uppercase tracking-wider mb-3">PRIME OMR CONNECTIVITY</h3>
            <p className="text-white/80 text-[14px] leading-relaxed">Minutes from SIPCOT IT Park &amp; ECR IT Corridor</p>
          </div>

          {/* Item 6 */}
          <div className="p-10 flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ background: '#d3be8a' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                <line x1="8" y1="21" x2="16" y2="21"></line>
                <line x1="12" y1="17" x2="12" y2="21"></line>
              </svg>
            </div>
            <h3 className="text-[#d3be8a] font-bold text-[15px] uppercase tracking-wider mb-3">EVERYDAY CONVENIENCES</h3>
            <p className="text-white/80 text-[14px] leading-relaxed">On-site Supermarket, Salon, Creche &amp; Apollo Health Clinic</p>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Highlights
