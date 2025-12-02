import Link from 'next/link';
import React from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';


const CaseStudyAreaOne = () => {
  return (
    <>
      {/*================== case-study area start ==================*/}
      <div className="case-study-area bg-relative pd-top-110">
        <img
          className="animate-img-1 top_image_bounce"
          src="assets/img/banner/2.png"
          alt="img"
        />
        <div className="container">
          <div className="section-title text-center">
            <h6 className="sub-title">GALLERY HERE</h6>
            <h2 className="title">
              Leading The <span>Digital</span> Revolution
            </h2>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-case-study-inner">
                <div className="thumb">
                  <img src="assets/img/case-study/case-study-1.jpg" alt="img" />
                </div>
                <div className="details">
                  <h5>
                    <Link href="/case-study-details">Tecnology Farms</Link>
                  </h5>
                  <Link className="cat" href="#">
                    Las vegas
                  </Link>
                  <Link className="right-arrow" href="#">
                    <FaAngleDoubleRight />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-case-study-inner">
                <div className="thumb">
                  <img src="assets/img/case-study/case-study-2.webp" alt="img" style={{ width: '100%', height: 'auto', objectFit: 'cover' }} />
                </div>
                <div className="details">
                  <h5>
                    <Link href="/case-study-details">Tecnology Farms</Link>
                  </h5>
                  <Link className="cat" href="#">
                    Las vegas
                  </Link>
                  <Link className="right-arrow" href="#">
                    <FaAngleDoubleRight />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-case-study-inner">
                <div className="thumb">
                  <img src="assets/img/case-study/case-study-3.jpg" alt="img" style={{ width: '100%', height: 'auto', objectFit: 'cover' }} />
                </div>
                <div className="details">
                  <h5>
                    <Link href="/case-study-details">Tecnology Farms</Link>
                  </h5>
                  <Link className="cat" href="#">
                    Las vegas
                  </Link>
                  <Link className="right-arrow" href="#">
                    <FaAngleDoubleRight />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ================== case-study area end ==================*/}
    </>
  );
};

export default CaseStudyAreaOne;
