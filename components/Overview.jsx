'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { overviewImage } from '../lib/images'

const Overview = ({ setIsOpen }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
  <section
    id="overview"
    className="about_us about-us-section"
  >
    <style jsx>{`
      .about-us-section {
        box-sizing: border-box;
        padding: 70px 0px;
        position: relative;
        background: #f4ebe4;
        overflow: hidden;
      }
      .logoicon {
        width: 25%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        opacity: 0.15;
        z-index: 0;
        pointer-events: none;
      }
      .icon_logo_anim {
        animation: logoAnim 20s linear infinite;
        width: 100%;
        height: auto;
      }
      @keyframes logoAnim {
        100% {
          transform: rotate(360deg);
        }
      }
      .inner-section {
        position: relative;
        z-index: 1;
        padding-right: 30px;
      }
      .heading {
        color: #000242;
        font-family: "Montserrat", sans-serif;
        font-size: 46px;
        font-weight: 500;
        line-height: 56px;
        text-transform: uppercase;
        letter-spacing: .02em;
        margin-bottom: 30px;
      }
      .about-us-section p {
        text-align: left;
        margin-bottom: 25px;
        color: #000242;
        font-family: "Poppins", sans-serif;
        font-size: 17px;
        line-height: 1.8;
      }
      .about-us-section p.boldp {
        margin-top: 35px;
        font-weight: 500;
        font-size: 19px;
        margin-bottom: 25px;
      }
      .about-us-section ul {
        padding-left: 0;
        list-style-type: none;
        margin-bottom: 45px;
        color: #000242;
        font-family: "Poppins", sans-serif;
        font-size: 17px;
        line-height: 1.8;
      }
      .about-us-section ul li {
        position: relative;
        padding-left: 24px;
        margin-bottom: 14px;
      }
      .about-us-section ul li:before {
        content: '';
        position: absolute;
        left: 0;
        top: 12px;
        width: 6px;
        height: 6px;
        background-color: #000242;
        border-radius: 50%;
      }
      .theme_btn1 {
        padding: 15px 32px;
        background: #000242;
        color: #FFF;
        line-height: 1;
        position: relative;
        text-decoration: none;
        font-weight: 600;
        text-transform: uppercase;
        display: inline-block;
        font-size: 15px;
        transition: all 0.3s ease;
        cursor: pointer;
        letter-spacing: 0.5px;
      }
      .theme_btn1:hover {
        background: #d3be8a;
        color: #000242;
      }
      .image_caption_wrap img {
        width: 100%;
        height: auto;
        border-radius: 10px;
      }
      @media (max-width: 991px) {
        .inner-section {
          padding-right: 0;
          margin-bottom: 40px;
        }
        .heading {
          font-size: 32px;
          line-height: 40px;
        }
        .logoicon {
          width: 50%;
        }
      }
    `}</style>

    {/* Background Logo Icon from Theoryza */}
    <div className="logoicon hidden md:block">
      <img src="https://theoryza.co.in/img/logo/oryza-o.png?ver17" alt="Icon" className="icon_logo_anim" />
    </div>

    <div className="container mx-auto px-4 sm:px-8 max-w-[1300px] relative z-10">
      <div className="flex flex-col lg:flex-row items-center">
        
        {/* Left Side: Text Content */}
        <div className="w-full lg:w-7/12 pr-0 lg:pr-8">
          <div className="inner-section" data-aos="fade-up" data-aos-duration="1000">
            <h2 className="heading" data-aos="fade-up" data-aos-duration="1000" style={{ marginBottom: '25px' }}>Overview</h2>
            
            <p data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100" style={{ fontSize: '18px', color: '#333', textAlign: 'justify', marginBottom: '20px' }}>
              Pragnya Eden Park Siruseri, is an integrated township located in the heart of OMR. Spread over 92 acres, this green-haven is both pollution-free and replete with potable water.
              {!isExpanded && <span style={{ color: '#000242', fontWeight: 600, cursor: 'pointer', marginLeft: '5px' }} onClick={() => setIsExpanded(true)}>... Read more</span>}
              {isExpanded && <span> Home to the prestigious PSBB School, Pragnya Eden Park also boasts of a first-of-its-kind sports facility with - gym, skating, futsal, cricket and more. Other highlights include - a well stocked supermarket, salon, creche and Apollo Health Clinic. <span style={{ color: '#000242', fontWeight: 600, cursor: 'pointer' }} onClick={() => setIsExpanded(false)}>Read less</span></span>}
            </p>
            
            <p className="boldp" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="150" style={{ fontSize: '18px', fontWeight: '700', color: '#333', marginBottom: '40px' }}>
              Register Your Interest Today to Access Exclusive Offers, Pricing & Priority Unit Selection.
            </p>
            
            {/* Info Boxes */}
            <div 
              className="flex flex-col md:flex-row border border-[#d3be8a] rounded-2xl overflow-hidden" 
              data-aos="fade-up" 
              data-aos-duration="1000" 
              data-aos-delay="200"
            >
              <div className="w-full md:w-1/2 p-4 md:p-5 border-b md:border-b-0 md:border-r border-[#d3be8a] flex flex-col justify-center">
                <p style={{ color: '#999', fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '6px' }}>Township Area:</p>
                <h3 style={{ color: '#000', fontSize: '15px', fontWeight: '700', textTransform: 'uppercase' }}>92 ACRE INTEGRATED<br/>GREEN TOWNSHIP</h3>
              </div>
              <div className="w-full md:w-1/2 p-4 md:p-5 flex flex-col justify-center">
                <p style={{ color: '#999', fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '6px' }}>Project Size &amp; Status:</p>
                <h3 style={{ color: '#000', fontSize: '15px', fontWeight: '700', textTransform: 'uppercase' }}>14 ACRES RESIDENTIAL<br/>UNDER CONSTRUCTION (G+20)</h3>
              </div>
            </div>

          </div>
        </div>

        {/* Right Side: Image */}
        <div className="hidden lg:block w-full lg:w-5/12 mt-10 lg:mt-0" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="100">
          <div className="image_caption_wrap relative">
            <Image 
              src={overviewImage} 
              alt="Pragnya Eden Park Overview" 
              width={600}
              height={800}
              className="w-full h-auto rounded-lg shadow-lg"
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>

      </div>
    </div>
  </section>
  )
}

export default Overview
