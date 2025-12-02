import Link from 'next/link';
import React from 'react';
import { FaCalendarAlt, FaRegComments, FaRegUser } from 'react-icons/fa';

const BlogAreaOne = () => {
  return (
    <>
      {/*===================== Blog Area One start =====================*/}
      <div className="blog-area  pd-bottom-90">
        <div className="container">
          <div className="section-title text-center">
            <h6 className="sub-title">New Blog</h6>
            <h2 className="title">
              Best new to get our <span>Blog</span>
            </h2>
          </div>
          <div className="row">
            <div className="col-lg" style={{ flex: '0 0 25%', maxWidth: '25%' }}>
              <div className="single-blog-list">
                <div className="thumb">
                  <img src="assets/img/blog/blog-4.webp" alt="img" style={{ width: '100%', height: '350px', objectFit: 'cover' }} />
                </div>
                <div className="details">
                  <p className="date mb-3">
                    <FaCalendarAlt />
                    October 19, 2023
                  </p>
                  <h5>
                    <Link href="/blog-details">
                      Transforming businesses, one pixel at a time
                    </Link>
                  </h5>
                  <div className="meta">
                    <div className="row">
                      <div className="col-6">
                        <p>
                          <FaRegUser />
                          Sam Curren
                        </p>
                      </div>
                      <div className="col-6 text-end">
                        <p>
                          <FaRegComments />
                          Sam Curren
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg" style={{ flex: '0 0 25%', maxWidth: '25%' }}>
              <div className="single-blog-list">
                <div className="thumb">
                  <img src="assets/img/blog/blog-5.jpg" alt="img" style={{ width: '100%', height: '350px', objectFit: 'cover' }} />
                </div>
                <div className="details">
                  <p className="date mb-3">
                    <FaCalendarAlt />
                    June 19, 2023
                  </p>
                  <h5>
                    <Link href="/blog-details">
                      The Importance of a Strong Digital for Strategy
                    </Link>
                  </h5>
                  <div className="meta">
                    <div className="row">
                      <div className="col-6">
                        <p>
                          <FaRegUser />
                          Sam Curren
                        </p>
                      </div>
                      <div className="col-6 text-end">
                        <p>
                          <FaRegComments />
                          Sam Curren
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg" style={{ flex: '0 0 25%', maxWidth: '25%' }}>
              <div className="single-blog-list">
                <div className="thumb">
                  <img src="assets/img/blog/blog-6.webp" alt="img" style={{ width: '100%', height: '350px', objectFit: 'cover' }} />
                </div>
                <div className="details">
                  <p className="date mb-3">
                    <FaCalendarAlt />
                    October 19, 2023
                  </p>
                  <h5>
                    <Link href="/blog-details">
                      Creating Engaging Content: A Guide for Digital
                    </Link>
                  </h5>
                  <div className="meta">
                    <div className="row">
                      <div className="col-6">
                        <p>
                          <FaRegUser />
                          Sam Curren
                        </p>
                      </div>
                      <div className="col-6 text-end">
                        <p>
                          <FaRegComments />
                          Sam Curren
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg" style={{ flex: '0 0 25%', maxWidth: '25%' }}>
              <div className="single-blog-list">
                <div className="thumb">
                  <img src="assets/img/blog/blog-7.webp" alt="img" style={{ width: '100%', height: '350px', objectFit: 'cover' }} />
                </div>
                <div className="details">
                  <p className="date mb-3">
                    <FaCalendarAlt />
                    November 15, 2023
                  </p>
                  <h5>
                    <Link href="/blog-details">
                      Digital Innovation: Transforming Business Landscapes
                    </Link>
                  </h5>
                  <div className="meta">
                    <div className="row">
                      <div className="col-6">
                        <p>
                          <FaRegUser />
                          Sam Curren
                        </p>
                      </div>
                      <div className="col-6 text-end">
                        <p>
                          <FaRegComments />
                          Sam Curren
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ===================== BlogAreaOne End =====================*/}
    </>
  );
};

export default BlogAreaOne;
