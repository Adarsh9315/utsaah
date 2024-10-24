"use client"
import React, { useEffect, useState } from "react";
import logo from "../../../public/img/logo2.png";
import Image from "next/image";
import Link from "next/link";
const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      if (scrollY > viewportHeight * 0.3) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <header>
      <div className="header-area ">
        <div className="header-top_area">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xl-6 col-md-12 col-lg-8">
                <div className="short_contact_list">
                  <ul>
                    <li>
                      <a href="#">
                        {" "}
                        <i className="fa fa-phone"></i> +91 9136255955
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        {" "}
                        <i className="fa fa-envelope"></i>
                        contact@utsaahfoundation.org
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-6 col-md-6 col-lg-4">
                <div className="social_media_links d-none d-lg-block">
                  <a href="#">
                    <i className="fa fa-facebook"></i>
                  </a>
                  <a href="#">
                    <i className="fa fa-pinterest-p"></i>
                  </a>
                  <a href="#">
                    <i className="fa fa-linkedin"></i>
                  </a>
                  <a href="#">
                    <i className="fa fa-twitter"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="sticky-header" className={`main-header-area ${isSticky ? 'sticky' : ''}`}>
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-xl-3 col-lg-3">
                <div className="logo">
                  <a href="index.html">
                    <Image src={logo} alt="logo" objectFit="contain" />
                  </a>
                </div>
              </div>
              <div className="col-xl-9 col-lg-9">
                <div className="main-menu">
                  <nav>
                    <ul id="navigation">
                      <li>
                        <Link href="/">home</Link>
                      </li>
                      <li>
                        <Link href="/about-us">About</Link>
                      </li>
                      <li>
                        <Link href="/causes">Causes</Link>
                      </li>
                      {/* <li>
                        <a href="#">
                          blog <i className="ti-angle-down"></i>
                        </a>
                        <ul className="submenu">
                          <li>
                            <Link href="/blog">blog</Link>
                          </li>
                          <li>
                            <Link href="/single-blog">single-blog</Link>
                          </li>
                        </ul>
                      </li> */}
                      {/* <li>
                        <a href="#">
                          pages <i className="ti-angle-down"></i>
                        </a>
                        <ul className="submenu">
                          <li>
                            <Link href="/element">elements</Link>
                          </li>
                          <li>
                            <Link href="/cause">Cause</Link>
                          </li>
                        </ul>
                      </li> */}
                      <li>
                        <a href="/contact-us">Contact</a>
                      </li>
                    </ul>
                  </nav>
                  <div className="Appointment">
                    <div className="book_btn d-none d-lg-block">
                      <a data-scroll-nav="1" href="#">
                        Make a Donate
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="mobile_menu d-block d-lg-none"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
