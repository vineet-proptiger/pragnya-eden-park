'use client'
import React, { useState, useEffect } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import { logoImages } from '../lib/images'

const Navbar = ({ setIsOpen }) => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        :root {
          --secondary_font: var(--font-jost), Montserrat, sans-serif;
        }

        .header_style2 {
          position: fixed;
          top: 30px;
          left: 0;
          width: 100%;
          z-index: 50;
          transition: all 0.5s ease;
        }

        .header_style2.sticky {
          top: 0;
        }

        .header_style2 .container-fluid {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          padding: 0 15px;
        }

        .header_style2 .header_navigation2 {
          display: flex;
          justify-content: center;
          align-items: center;
          list-style-type: none;
          width: 100%;
          height: 92px;
          padding: 0;
          margin: 0;
          background-color: transparent;
          border-radius: 0;
          box-shadow: none;
          transition: width 1.2s cubic-bezier(0.58, 0, 0.01, 1), 
                      border-radius 1.48s cubic-bezier(0.58, 0, 0.01, 1);
        }

        .header_style2.sticky .header_navigation2 {
          width: 250px;
          border-radius: 5px;
          background-color: transparent;
          box-shadow: none;
          transition: width 1.2s cubic-bezier(0.58, 0, 0.01, 1), 
                      border-radius 1.48s cubic-bezier(0.58, 0, 0.01, 1);
        }

        .header_style2 .header_navigation2 li {
          flex-basis: 12.5%;
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: hidden;
          opacity: 0;
          animation: 1.48s cubic-bezier(0.58, 0, 0.01, 1) 0.28s 1 normal forwards running Navbar_scale-in;
        }

        .header_style2.sticky .header_navigation2 li {
          animation: 1.2s cubic-bezier(0.58, 0, 0.01, 1) 0s 1 normal forwards running Navbar_scale-out;
        }

        .header_style2 .header_navigation2 li.navbar-logo {
          opacity: 1;
          flex-basis: auto;
          animation: none !important;
          padding: 10px 20px;
          border-radius: 8px;
          transition: background-color 0.5s ease, box-shadow 0.5s ease;
        }

        .header_style2.sticky .header_navigation2 li.navbar-logo {
          animation: none !important;
          opacity: 1;
          flex-basis: auto;
          background-color: #fff;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
          margin-top: -10px;
          padding-top: 20px;
          border-radius: 0 0 12px 12px;
        }

        .header_style2 .header_navigation2 li a {
          color: #fff;
          font-size: 14px;
          padding: 0px 15px;
          line-height: 1.5em;
          text-decoration: none;
          font-family: var(--secondary_font);
          font-weight: 400;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          white-space: nowrap;
          transition: color 0.3s ease;
        }
        
        .header_style2 .header_navigation2 li a:hover {
          color: #C9A96E;
        }

        /* Phone Button styling in Nav */
        .header_style2 .header_navigation2 li a.phone-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          background: rgba(255, 255, 255, 0.1);
          padding: 8px 16px;
          border-radius: 50px;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .header_style2 .header_navigation2 li a.phone-btn:hover {
          background: rgba(201, 169, 110, 0.9);
          color: #fff;
          border-color: rgba(201, 169, 110, 0.9);
        }

        .nav-logo {
          height: 58px;
          width: auto;
          display: block;
          object-fit: contain;
          transition: transform 0.3s ease;
        }

        .header_style2.sticky .nav-logo {
          transform: scale(1.05);
        }

        .mob_nav_trigger {
          display: none;
        }

        @media (max-width: 991px) {
          .header_style2 {
            top: 0;
            padding: 12px 0;
            background: #fff;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
          }
          .header_style2.sticky {
            background: #fff;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
            padding: 12px 0;
          }
          
          .header_style2 .header_navigation2 li.nav-item {
            display: none;
          }
          
          .header_style2 .header_navigation2,
          .header_style2.sticky .header_navigation2 {
            width: 100% !important;
            height: auto;
            background: transparent !important;
            box-shadow: none !important;
            border-radius: 0;
            justify-content: flex-start !important;
          }
          
          .header_style2 .header_navigation2 li.navbar-logo,
          .header_style2.sticky .header_navigation2 li.navbar-logo {
            padding: 0;
            background: transparent !important;
            box-shadow: none !important;
            margin: 0 !important;
            border-radius: 0;
          }
          
          .nav-logo {
            height: 42px;
          }
          
          .mob_nav_trigger {
            position: absolute;
            right: 20px;
            top: 50%;
            transform: translateY(-50%);
            color: #111;
            width: 44px;
            height: 44px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            z-index: 60;
            transition: all 0.3s ease;
            background: transparent;
            border-radius: 0;
          }
          
          .header_style2.sticky .mob_nav_trigger {
            background: #c9a65a;
            color: #000242;
          }
        }

        /* Fullscreen Popup Menu */
        .popup_menu {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 9999;
          visibility: hidden;
          opacity: 0;
          transition: all 0.4s ease;
        }
        .popup_menu.open {
          visibility: visible;
          opacity: 1;
        }
        .popup_menu .overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.8);
          backdrop-filter: blur(5px);
        }
        .popup_menu .menu_container {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          text-align: center;
          width: 100%;
        }
        .popup_menu .close_btn {
          position: absolute;
          top: 30px;
          right: 40px;
          color: #fff;
          font-size: 16px;
          font-family: var(--secondary_font);
          text-transform: uppercase;
          cursor: pointer;
          letter-spacing: 2px;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .popup_menu ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .popup_menu ul li {
          margin: 20px 0;
        }
        .popup_menu ul li a {
          color: #fff;
          font-size: 28px;
          font-family: var(--secondary_font);
          text-transform: uppercase;
          text-decoration: none;
          letter-spacing: 2px;
          transition: color 0.3s;
        }
        .popup_menu ul li a:hover {
          color: #C9A96E;
        }

        @keyframes Navbar_scale-in {
          0% { flex-basis: 7%; opacity: 0; }
          100% { flex-basis: 12.5%; opacity: 1; }
        }
        
        @keyframes Navbar_scale-out {
          0% { flex-basis: 12.5%; opacity: 1; }
          100% { flex-basis: 0; opacity: 0; margin: 0; padding: 0; }
        }
      `}} />

      {/* Main Navbar */}
      <div className={`header_style2 ${scrolled ? 'sticky' : ''}`}>
        <div className="container-fluid">
          <ul className="header_navigation2">
            <li className="nav-item"><a href="#overview">Overview</a></li>
            <li className="nav-item"><a href="#projects">Projects</a></li>
            <li className="nav-item"><a href="#highlights">Highlights</a></li>
            <li className="nav-item"><a href="#amenities">Amenities</a></li>
            
            <li className="navbar-logo">
              <a href="#" className="navbar-brand">
                <img src={logoImages.tarc} alt="Pragnya Eden Park" className="nav-logo" />
              </a>
            </li>
            
            <li className="nav-item"><a href="#location">Location</a></li>
            <li className="nav-item"><a href="#masterplan">Floor Plan</a></li>
            <li className="nav-item"><a href="tel:9718344024" className="phone-btn"><Phone size={14}/> 9718344024</a></li>
          </ul>
        </div>

        {/* Hamburger Menu Trigger */}
        <div 
          className={`mob_nav_trigger ${mobileOpen ? 'open' : ''}`}
          onClick={() => setMobileOpen(true)}
        >
          <Menu size={22} />
        </div>
      </div>

      {/* Fullscreen Popup Menu (for mobile or sticky state) */}
      <div className={`popup_menu ${mobileOpen ? 'open' : ''}`}>
        <div className="overlay" onClick={() => setMobileOpen(false)}></div>
        <div className="close_btn" onClick={() => setMobileOpen(false)}>
          <span>Close</span> <X size={24} />
        </div>
        <div className="menu_container">
          <ul>
            <li><a href="#overview" onClick={() => setMobileOpen(false)}>Overview</a></li>
            <li><a href="#projects" onClick={() => setMobileOpen(false)}>Projects</a></li>
            <li><a href="#highlights" onClick={() => setMobileOpen(false)}>Highlights</a></li>
            <li><a href="#amenities" onClick={() => setMobileOpen(false)}>Amenities</a></li>
            <li><a href="#location" onClick={() => setMobileOpen(false)}>Location</a></li>
            <li><a href="#masterplan" onClick={() => setMobileOpen(false)}>Floor Plan</a></li>
            <li style={{ marginTop: '40px' }}>
              <a href="tel:9718344024" style={{ color: '#C9A96E', fontSize: '20px' }}>
                <Phone size={20} style={{ display: 'inline', marginRight: '8px' }}/> 9718344024
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Navbar
