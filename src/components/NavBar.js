'use client'
import React, { useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import Link from 'next/link';

const NavBar = () => {
  const [active, setActive] = useState(false);
  const [searchShow, setSearchShow] = useState(false);
  const menuActive = () => {
    setActive(!active);
  };
  const searchActive = () => {
    setSearchShow(!searchShow);
  };

  // Control sidebar navigation for mega menu
  useEffect(() => {
    const items = document.querySelectorAll('.menu-item-has-children > a');

    const handleClick = (event) => {
      event.preventDefault(); // Prevent default link behavior
      const subMenu = event.currentTarget.parentElement.querySelector('.sub-menu');
      if (subMenu) {
        subMenu.classList.toggle('active');
        event.currentTarget.classList.toggle('open');
      }
    };

    items.forEach(item => {
      item.addEventListener('click', handleClick);
    });

    // Cleanup function to remove event listeners
    return () => {
      items.forEach(item => {
        item.removeEventListener('click', handleClick);
      });
    };
  }, []);


  return (
    <>
      {/* search popup start*/}
      <div
        className={searchShow ? 'td-search-popup active' : 'td-search-popup '}
        id="td-search-popup"
      >
        <form action="/" className="search-form">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Search....."
            />
          </div>
          <button type="submit" className="submit-btn">
            <FaSearch />
          </button>
        </form>
      </div>
      {/* search popup end*/}
      <div
        onClick={searchActive}
        className={searchShow ? 'body-overlay active' : 'body-overlay'}
        id="body-overlay"
      ></div>
      {/* navbar start */}
      <nav className="navbar navbar-area navbar-area_1 navbar-expand-lg">
        <div className="container nav-container navbar-bg">
          <div className="responsive-mobile-menu">
            <button
              onClick={menuActive}
              className={
                active
                  ? 'menu toggle-btn d-block d-lg-none open'
                  : 'menu toggle-btn d-block d-lg-none'
              }
              data-target="#itech_main_menu"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="icon-left" />
              <span className="icon-right" />
            </button>
          </div>
          <div className="logo">
            <Link href="/index-1">
              <img src="assets/img/logo.png" alt="img" />
            </Link>
          </div>
          <div className="nav-right-part nav-right-part-mobile">
            <span className="search-bar-btn" onClick={searchActive}>
              <FaSearch />
            </span>
          </div>
          <div
            className={
              active
                ? 'collapse navbar-collapse sopen'
                : 'collapse navbar-collapse'
            }
            id="itech_main_menu"
          >
            <ul className="navbar-nav menu-open text-lg-end">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li className="menu-item-has-children mega-menu">
                <Link href="#">Service</Link>
                <div className="sub-menu">
                  <div className="row">
                    <div className="mb-lg-4 col-lg-4 col-xl-4">
                      <ul>
                        <li>
                          <Link href="/digital-marketing">Digital Marketing</Link>
                        </li>
                        <li>
                          <Link href="/search-engine-optimization">Search Engine Optimization</Link>
                        </li>
                        <li>
                          <Link href="/social-media-marketing">Social Media Marketing</Link>
                        </li>
                        <li>
                          <Link href="/google-adwords">Google Adwords</Link>
                        </li>
                        <li>
                          <Link href="/b2b-saas-marketing">B2B marketing / SaaS Marketing</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="mb-lg-4 col-lg-4 col-xl-4">
                      <ul>
                        <li>
                          <Link href="/ecommerce-development">Ecommerce Development</Link>
                        </li>
                        <li>
                          <Link href="/branding-service">Branding Service</Link>
                        </li>
                        <li>
                          <Link href="/business-consulting">Business Consulting</Link>
                        </li>
                        <li>
                          <Link href="/graphic-logo-design">Graphic/Logo Design</Link>
                        </li>
                        <li>
                          <Link href="/wordpress-development">Wordpress Development</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="mb-lg-4 col-lg-4 col-xl-4">
                      <ul>
                        <li>
                          <Link href="/ai-agent-development">AI Agent Development</Link>
                        </li>
                        <li>
                          <Link href="/software-development">Software Development</Link>
                        </li>
                        <li>
                          <Link href="/mobile-app-development">Mobile App Development</Link>
                        </li>
                        <li>
                          <Link href="/saas-app-development">SaaS App development</Link>
                        </li>
                        <li>
                          <Link href="/digital-transformation">Digital Transformation</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <Link href="/about">Pages</Link>
              </li>
              <li>
                <Link href="/project">Project</Link>
              </li>

              <li>
                <Link href="/blog">Blog</Link>
              </li>
              <li>
                <Link href="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className="nav-right-part nav-right-part-desktop align-self-center">
            <a className="navbar-phone" href="tel:">
              <span className="icon">
                <img src="assets/img/icon/1.png" alt="img" />
              </span>
              <span>Need help?</span>
              <h5>(808) 555-0111</h5>
            </a>
          </div>
        </div>
      </nav>
      {/* navbar end */}
    </>
  );
};

export default NavBar;
