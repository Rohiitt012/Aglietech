import Link from 'next/link';
import React from 'react';
import {
  FaAngleDoubleRight,
  FaArrowRight,
  FaCheckCircle,
  FaPhone,
  FaStar,
  FaQuoteLeft,
  FaTrophy,
  FaHandshake,
  FaBullseye,
} from 'react-icons/fa';

const DigitalMarketingArea = () => {
  return (
    <>
      {/* ===================== Hero Section ===================== */}
      <div className="service-area pd-top-60 pd-bottom-60" style={{ background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)' }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="mb-4" style={{ fontSize: '42px', fontWeight: '700', color: '#fff' }}>
                Digital Marketing Agency in Coimbatore That Offers Guaranteed Growth
              </h1>
              <p className="mb-4" style={{ fontSize: '16px', lineHeight: '1.8', color: '#fff' }}>
                We are a leading digital marketing agency in Coimbatore, specializing in delivering comprehensive digital marketing solutions that drive real results. Our team of experienced professionals combines creativity, strategy, and cutting-edge technology to help businesses achieve their marketing goals and maximize their online presence.
              </p>
              <Link className="btn btn-base border-radius-5" href="/contact" style={{ backgroundColor: '#fff', color: '#1e3a8a', padding: '15px 40px', fontSize: '16px', fontWeight: '600' }}>
                Get Started
              </Link>
            </div>
            <div className="col-lg-6">
              <div className="text-center">
                <div style={{ fontSize: '200px', opacity: '0.3', color: '#fff' }}>📊</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===================== Trusted by Leading Brands Section ===================== */}
      <div className="service-area pd-top-60 pd-bottom-60" style={{ background: '#f8f9fa' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center mb-5">
              <h3 className="mb-4" style={{ fontSize: '24px', fontWeight: '600', color: '#1a1a2e' }}>
                Trusted by leading brands
              </h3>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="text-center p-4" style={{ background: '#fff', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}>
                <div style={{ fontSize: '32px', fontWeight: '700', color: '#3b82f6' }}>The Hindu</div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="text-center p-4" style={{ background: '#fff', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}>
                <div style={{ fontSize: '32px', fontWeight: '700', color: '#3b82f6' }}>GANGA</div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="text-center p-4" style={{ background: '#fff', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}>
                <div style={{ fontSize: '32px', fontWeight: '700', color: '#3b82f6' }}>Client 3</div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="text-center p-4" style={{ background: '#fff', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}>
                <div style={{ fontSize: '32px', fontWeight: '700', color: '#3b82f6' }}>Client 4</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===================== What Makes Us Unique Section ===================== */}
      <div className="service-area pd-top-60 pd-bottom-60">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center mb-5">
              <h2 className="mb-4" style={{ fontSize: '36px', fontWeight: '700', color: '#1a1a2e' }}>
                What Makes Us Unique?
              </h2>
            </div>
          </div>
          <div className="row align-items-center mb-5">
            <div className="col-lg-6">
              <div className="text-center">
                <div style={{ fontSize: '200px', opacity: '0.1', color: '#3b82f6' }}>📈</div>
              </div>
            </div>
            <div className="col-lg-6">
              <h3 className="mb-4" style={{ fontSize: '28px', fontWeight: '700', color: '#1a1a2e' }}>
                The Best Digital Marketing Solutions
              </h3>
              <p className="mb-4" style={{ fontSize: '16px', lineHeight: '1.8', color: '#333' }}>
                We offer comprehensive digital marketing solutions tailored to your business needs. Our data-driven approach ensures that every campaign delivers measurable results and drives sustainable growth for your business.
              </p>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h3 className="mb-4" style={{ fontSize: '28px', fontWeight: '700', color: '#1a1a2e' }}>
                Don't Know Where to Start? We'll Help You
              </h3>
              <p className="mb-4" style={{ fontSize: '16px', lineHeight: '1.8', color: '#333' }}>
                Not sure how to navigate the digital marketing landscape? Our expert team will guide you through every step, from strategy development to execution, ensuring you achieve your marketing objectives with confidence.
              </p>
            </div>
            <div className="col-lg-6">
              <div className="text-center">
                <div style={{ fontSize: '200px', opacity: '0.1', color: '#3b82f6' }}>💡</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===================== Our Special Digital Marketing Services Section ===================== */}
      <div className="service-area pd-top-60 pd-bottom-60" style={{ background: '#f8f9fa' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center mb-5">
              <h2 className="mb-4" style={{ fontSize: '36px', fontWeight: '700', color: '#1a1a2e' }}>
                Our Special Digital Marketing Services
              </h2>
              <p className="mb-5" style={{ fontSize: '16px', lineHeight: '1.8', color: '#333', maxWidth: '900px', margin: '0 auto' }}>
                We offer a comprehensive range of digital marketing services designed to help your business thrive in the digital landscape.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8 mb-4">
              <div className="row">
                <div className="col-md-6 mb-3">
                  <div className="d-flex align-items-start">
                    <FaCheckCircle style={{ color: '#3b82f6', fontSize: '24px', marginRight: '15px', marginTop: '4px' }} />
                    <div>
                      <h5 style={{ fontSize: '18px', fontWeight: '600', color: '#1a1a2e', marginBottom: '8px' }}>SEO Services</h5>
                      <p style={{ fontSize: '14px', color: '#666' }}>Improve your search engine rankings and drive organic traffic</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div className="d-flex align-items-start">
                    <FaCheckCircle style={{ color: '#3b82f6', fontSize: '24px', marginRight: '15px', marginTop: '4px' }} />
                    <div>
                      <h5 style={{ fontSize: '18px', fontWeight: '600', color: '#1a1a2e', marginBottom: '8px' }}>Social Media Marketing</h5>
                      <p style={{ fontSize: '14px', color: '#666' }}>Engage your audience and build brand presence on social platforms</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div className="d-flex align-items-start">
                    <FaCheckCircle style={{ color: '#3b82f6', fontSize: '24px', marginRight: '15px', marginTop: '4px' }} />
                    <div>
                      <h5 style={{ fontSize: '18px', fontWeight: '600', color: '#1a1a2e', marginBottom: '8px' }}>Content Marketing</h5>
                      <p style={{ fontSize: '14px', color: '#666' }}>Create valuable content that attracts and converts your audience</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div className="d-flex align-items-start">
                    <FaCheckCircle style={{ color: '#3b82f6', fontSize: '24px', marginRight: '15px', marginTop: '4px' }} />
                    <div>
                      <h5 style={{ fontSize: '18px', fontWeight: '600', color: '#1a1a2e', marginBottom: '8px' }}>Email Marketing</h5>
                      <p style={{ fontSize: '14px', color: '#666' }}>Nurture leads and maintain customer relationships through email</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div className="d-flex align-items-start">
                    <FaCheckCircle style={{ color: '#3b82f6', fontSize: '24px', marginRight: '15px', marginTop: '4px' }} />
                    <div>
                      <h5 style={{ fontSize: '18px', fontWeight: '600', color: '#1a1a2e', marginBottom: '8px' }}>PPC Management</h5>
                      <p style={{ fontSize: '14px', color: '#666' }}>Maximize ROI with strategic pay-per-click advertising campaigns</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div className="d-flex align-items-start">
                    <FaCheckCircle style={{ color: '#3b82f6', fontSize: '24px', marginRight: '15px', marginTop: '4px' }} />
                    <div>
                      <h5 style={{ fontSize: '18px', fontWeight: '600', color: '#1a1a2e', marginBottom: '8px' }}>Web Design & Development</h5>
                      <p style={{ fontSize: '14px', color: '#666' }}>Create stunning, user-friendly websites that convert visitors</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div className="d-flex align-items-start">
                    <FaCheckCircle style={{ color: '#3b82f6', fontSize: '24px', marginRight: '15px', marginTop: '4px' }} />
                    <div>
                      <h5 style={{ fontSize: '18px', fontWeight: '600', color: '#1a1a2e', marginBottom: '8px' }}>E-commerce Marketing</h5>
                      <p style={{ fontSize: '14px', color: '#666' }}>Drive sales and growth for your online store</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div className="d-flex align-items-start">
                    <FaCheckCircle style={{ color: '#3b82f6', fontSize: '24px', marginRight: '15px', marginTop: '4px' }} />
                    <div>
                      <h5 style={{ fontSize: '18px', fontWeight: '600', color: '#1a1a2e', marginBottom: '8px' }}>Online Reputation Management</h5>
                      <p style={{ fontSize: '14px', color: '#666' }}>Protect and enhance your brand's online reputation</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div className="d-flex align-items-start">
                    <FaCheckCircle style={{ color: '#3b82f6', fontSize: '24px', marginRight: '15px', marginTop: '4px' }} />
                    <div>
                      <h5 style={{ fontSize: '18px', fontWeight: '600', color: '#1a1a2e', marginBottom: '8px' }}>Local SEO</h5>
                      <p style={{ fontSize: '14px', color: '#666' }}>Dominate local search results and attract nearby customers</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div className="d-flex align-items-start">
                    <FaCheckCircle style={{ color: '#3b82f6', fontSize: '24px', marginRight: '15px', marginTop: '4px' }} />
                    <div>
                      <h5 style={{ fontSize: '18px', fontWeight: '600', color: '#1a1a2e', marginBottom: '8px' }}>App Store Optimization</h5>
                      <p style={{ fontSize: '14px', color: '#666' }}>Increase app visibility and downloads</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div className="d-flex align-items-start">
                    <FaCheckCircle style={{ color: '#3b82f6', fontSize: '24px', marginRight: '15px', marginTop: '4px' }} />
                    <div>
                      <h5 style={{ fontSize: '18px', fontWeight: '600', color: '#1a1a2e', marginBottom: '8px' }}>Video Marketing</h5>
                      <p style={{ fontSize: '14px', color: '#666' }}>Engage audiences with compelling video content</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div className="d-flex align-items-start">
                    <FaCheckCircle style={{ color: '#3b82f6', fontSize: '24px', marginRight: '15px', marginTop: '4px' }} />
                    <div>
                      <h5 style={{ fontSize: '18px', fontWeight: '600', color: '#1a1a2e', marginBottom: '8px' }}>Influencer Marketing</h5>
                      <p style={{ fontSize: '14px', color: '#666' }}>Leverage influencer partnerships to expand your reach</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="p-4" style={{ background: '#3b82f6', borderRadius: '12px', color: '#fff' }}>
                <h4 className="mb-4" style={{ fontSize: '24px', fontWeight: '700' }}>
                  Get a Free Quote
                </h4>
                <form>
                  <div className="mb-3">
                    <input type="text" className="form-control" placeholder="Name" style={{ padding: '12px', borderRadius: '8px', border: 'none' }} />
                  </div>
                  <div className="mb-3">
                    <input type="email" className="form-control" placeholder="Email" style={{ padding: '12px', borderRadius: '8px', border: 'none' }} />
                  </div>
                  <div className="mb-3">
                    <input type="tel" className="form-control" placeholder="Phone" style={{ padding: '12px', borderRadius: '8px', border: 'none' }} />
                  </div>
                  <div className="mb-3">
                    <input type="url" className="form-control" placeholder="Website" style={{ padding: '12px', borderRadius: '8px', border: 'none' }} />
                  </div>
                  <div className="mb-3">
                    <textarea className="form-control" rows="4" placeholder="Message" style={{ padding: '12px', borderRadius: '8px', border: 'none' }}></textarea>
                  </div>
                  <Link className="btn btn-base border-radius-5 w-100" href="/contact" style={{ backgroundColor: '#fff', color: '#3b82f6', padding: '12px', fontSize: '16px', fontWeight: '600', textAlign: 'center', display: 'block' }}>
                    Submit
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===================== Why Choose Us Section ===================== */}
      <div className="service-area pd-top-60 pd-bottom-60">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center mb-5">
              <h2 className="mb-4" style={{ fontSize: '36px', fontWeight: '700', color: '#1a1a2e' }}>
                Why Choose Us?
              </h2>
              <p className="mb-5" style={{ fontSize: '16px', lineHeight: '1.8', color: '#333', maxWidth: '900px', margin: '0 auto' }}>
                We stand out from the competition with our unique approach and commitment to delivering exceptional results.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 mb-4">
              <div className="p-4 text-center" style={{ background: '#f8f9fa', borderRadius: '12px', height: '100%' }}>
                <FaTrophy style={{ color: '#3b82f6', fontSize: '64px', marginBottom: '20px' }} />
                <h4 className="mb-3" style={{ fontSize: '24px', fontWeight: '700', color: '#1a1a2e' }}>
                  Award-Winning Team
                </h4>
                <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#333' }}>
                  Our team consists of industry experts and award-winning professionals who bring years of experience and proven track records to every project.
                </p>
              </div>
            </div>
            <div className="col-lg-4 mb-4">
              <div className="p-4 text-center" style={{ background: '#f8f9fa', borderRadius: '12px', height: '100%' }}>
                <FaHandshake style={{ color: '#3b82f6', fontSize: '64px', marginBottom: '20px' }} />
                <h4 className="mb-3" style={{ fontSize: '24px', fontWeight: '700', color: '#1a1a2e' }}>
                  Client-Centric Approach
                </h4>
                <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#333' }}>
                  We prioritize your success and work closely with you to understand your goals, challenges, and vision, ensuring our strategies align with your business objectives.
                </p>
              </div>
            </div>
            <div className="col-lg-4 mb-4">
              <div className="p-4 text-center" style={{ background: '#f8f9fa', borderRadius: '12px', height: '100%' }}>
                <FaBullseye style={{ color: '#3b82f6', fontSize: '64px', marginBottom: '20px' }} />
                <h4 className="mb-3" style={{ fontSize: '24px', fontWeight: '700', color: '#1a1a2e' }}>
                  Result-Oriented Strategies
                </h4>
                <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#333' }}>
                  Every strategy we develop is backed by data and focused on delivering measurable results that drive growth and maximize your return on investment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===================== How We Work Section ===================== */}
      <div className="service-area pd-top-60 pd-bottom-60" style={{ background: '#f8f9fa' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center mb-5">
              <h2 className="mb-4" style={{ fontSize: '36px', fontWeight: '700', color: '#1a1a2e' }}>
                How We Work
              </h2>
              <p className="mb-5" style={{ fontSize: '16px', lineHeight: '1.8', color: '#333', maxWidth: '900px', margin: '0 auto' }}>
                Our systematic approach ensures successful digital marketing campaigns that deliver results.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-2 col-md-4 col-sm-6 mb-4">
              <div className="text-center">
                <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: '#3b82f6', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '32px', fontWeight: '700', margin: '0 auto 15px' }}>1</div>
                <h5 style={{ fontSize: '18px', fontWeight: '700', color: '#1a1a2e', marginBottom: '10px' }}>Discovery & Analysis</h5>
                <p style={{ fontSize: '14px', color: '#666' }}>Understanding your business, goals, and target audience</p>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6 mb-4">
              <div className="text-center">
                <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: '#3b82f6', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '32px', fontWeight: '700', margin: '0 auto 15px' }}>2</div>
                <h5 style={{ fontSize: '18px', fontWeight: '700', color: '#1a1a2e', marginBottom: '10px' }}>Strategy & Planning</h5>
                <p style={{ fontSize: '14px', color: '#666' }}>Developing customized marketing strategies</p>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6 mb-4">
              <div className="text-center">
                <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: '#3b82f6', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '32px', fontWeight: '700', margin: '0 auto 15px' }}>3</div>
                <h5 style={{ fontSize: '18px', fontWeight: '700', color: '#1a1a2e', marginBottom: '10px' }}>Implementation & Execution</h5>
                <p style={{ fontSize: '14px', color: '#666' }}>Executing campaigns across all channels</p>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6 mb-4">
              <div className="text-center">
                <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: '#3b82f6', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '32px', fontWeight: '700', margin: '0 auto 15px' }}>4</div>
                <h5 style={{ fontSize: '18px', fontWeight: '700', color: '#1a1a2e', marginBottom: '10px' }}>Monitoring & Optimization</h5>
                <p style={{ fontSize: '14px', color: '#666' }}>Continuous monitoring and performance optimization</p>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6 mb-4">
              <div className="text-center">
                <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: '#3b82f6', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '32px', fontWeight: '700', margin: '0 auto 15px' }}>5</div>
                <h5 style={{ fontSize: '18px', fontWeight: '700', color: '#1a1a2e', marginBottom: '10px' }}>Reporting & Communication</h5>
                <p style={{ fontSize: '14px', color: '#666' }}>Regular reports and transparent communication</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===================== Success Stories Section ===================== */}
      <div className="service-area pd-top-60 pd-bottom-60">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center mb-5">
              <h2 className="mb-4" style={{ fontSize: '36px', fontWeight: '700', color: '#1a1a2e' }}>
                Our Success Stories
              </h2>
              <p className="mb-5" style={{ fontSize: '16px', lineHeight: '1.8', color: '#333', maxWidth: '900px', margin: '0 auto' }}>
                See how we've helped businesses achieve their digital marketing goals.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 mb-4">
              <div className="p-4" style={{ background: '#fff', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)', height: '100%' }}>
                <FaQuoteLeft style={{ color: '#3b82f6', fontSize: '32px', marginBottom: '15px' }} />
                <p className="mb-4" style={{ fontSize: '16px', lineHeight: '1.8', color: '#333', fontStyle: 'italic' }}>
                  "Working with this digital marketing agency has been a game-changer for our business. Their strategic approach and expertise have significantly increased our online visibility and sales."
                </p>
                <div className="d-flex align-items-center">
                  <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: '#3b82f6', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', marginRight: '15px' }}>JD</div>
                  <div>
                    <div style={{ fontWeight: '600', fontSize: '18px', color: '#1a1a2e' }}>John Doe</div>
                    <div style={{ fontSize: '14px', color: '#666' }}>CEO, ABC Company</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="p-4" style={{ background: '#fff', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)', height: '100%' }}>
                <FaQuoteLeft style={{ color: '#3b82f6', fontSize: '32px', marginBottom: '15px' }} />
                <p className="mb-4" style={{ fontSize: '16px', lineHeight: '1.8', color: '#333', fontStyle: 'italic' }}>
                  "The team's dedication and results-driven approach have exceeded our expectations. Our digital presence has grown tremendously, and we're seeing consistent ROI from their campaigns."
                </p>
                <div className="d-flex align-items-center">
                  <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: '#3b82f6', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', marginRight: '15px' }}>JS</div>
                  <div>
                    <div style={{ fontWeight: '600', fontSize: '18px', color: '#1a1a2e' }}>Jane Smith</div>
                    <div style={{ fontSize: '14px', color: '#666' }}>Marketing Director, XYZ Corp</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===================== FAQs Section ===================== */}
      <div className="service-area pd-top-60 pd-bottom-60" style={{ background: '#f8f9fa' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h2 className="mb-4" style={{ fontSize: '36px', fontWeight: '700', color: '#1a1a2e' }}>
                Frequently Asked Questions
              </h2>
              <div className="accordion" id="faqAccordion">
                <div className="accordion-item mb-3" style={{ border: '1px solid #e0e0e0', borderRadius: '8px' }}>
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq1"
                      style={{ backgroundColor: '#3b82f6', color: '#fff', fontWeight: '600' }}
                    >
                      What is digital marketing?
                    </button>
                  </h2>
                  <div id="faq1" className="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
                    <div className="accordion-body" style={{ fontSize: '16px', lineHeight: '1.8', color: '#333' }}>
                      Digital marketing encompasses all marketing efforts that use electronic devices or the internet. It includes various channels such as search engines, social media, email, websites, and other digital platforms to connect with current and prospective customers.
                    </div>
                  </div>
                </div>
                <div className="accordion-item mb-3" style={{ border: '1px solid #e0e0e0', borderRadius: '8px' }}>
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq2"
                      style={{ backgroundColor: '#f8f9fa', color: '#1a1a2e', fontWeight: '600' }}
                    >
                      How long does it take to see results?
                    </button>
                  </h2>
                  <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body" style={{ fontSize: '16px', lineHeight: '1.8', color: '#333' }}>
                      The timeline for seeing results varies depending on the type of digital marketing strategy. SEO typically takes 3-6 months, while PPC campaigns can show results within days. Social media marketing usually shows engagement improvements within 1-2 months.
                    </div>
                  </div>
                </div>
                <div className="accordion-item mb-3" style={{ border: '1px solid #e0e0e0', borderRadius: '8px' }}>
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq3"
                      style={{ backgroundColor: '#f8f9fa', color: '#1a1a2e', fontWeight: '600' }}
                    >
                      What is SEO?
                    </button>
                  </h2>
                  <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body" style={{ fontSize: '16px', lineHeight: '1.8', color: '#333' }}>
                      SEO (Search Engine Optimization) is the practice of optimizing your website to improve its visibility in search engine results pages. It involves various techniques to help your website rank higher for relevant keywords, driving organic traffic to your site.
                    </div>
                  </div>
                </div>
                <div className="accordion-item mb-3" style={{ border: '1px solid #e0e0e0', borderRadius: '8px' }}>
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq4"
                      style={{ backgroundColor: '#f8f9fa', color: '#1a1a2e', fontWeight: '600' }}
                    >
                      Do you offer custom packages?
                    </button>
                  </h2>
                  <div id="faq4" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body" style={{ fontSize: '16px', lineHeight: '1.8', color: '#333' }}>
                      Yes, we offer fully customized digital marketing packages tailored to your specific business needs, goals, and budget. Our team will work with you to create a package that addresses your unique requirements.
                    </div>
                  </div>
                </div>
                <div className="accordion-item mb-3" style={{ border: '1px solid #e0e0e0', borderRadius: '8px' }}>
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq5"
                      style={{ backgroundColor: '#f8f9fa', color: '#1a1a2e', fontWeight: '600' }}
                    >
                      What is your pricing model?
                    </button>
                  </h2>
                  <div id="faq5" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body" style={{ fontSize: '16px', lineHeight: '1.8', color: '#333' }}>
                      Our pricing is flexible and depends on the scope of services, campaign complexity, and your business requirements. We offer both monthly retainer packages and project-based pricing. Contact us for a customized quote.
                    </div>
                  </div>
                </div>
                <div className="accordion-item mb-3" style={{ border: '1px solid #e0e0e0', borderRadius: '8px' }}>
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq6"
                      style={{ backgroundColor: '#f8f9fa', color: '#1a1a2e', fontWeight: '600' }}
                    >
                      How do I get started?
                    </button>
                  </h2>
                  <div id="faq6" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body" style={{ fontSize: '16px', lineHeight: '1.8', color: '#333' }}>
                      Getting started is easy! Simply contact us through our website, phone, or email. We'll schedule a free consultation to discuss your business goals and create a customized digital marketing strategy for you.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="text-center">
                <img 
                  src="assets/img/faq-illustration.png" 
                  alt="FAQs Illustration" 
                  style={{ 
                    width: '100%', 
                    height: 'auto', 
                    maxWidth: '500px',
                    imageRendering: 'crisp-edges',
                    imageRendering: '-webkit-optimize-contrast',
                    imageRendering: 'optimizeQuality',
                    WebkitBackfaceVisibility: 'hidden',
                    backfaceVisibility: 'hidden',
                    transform: 'translateZ(0)',
                    willChange: 'transform',
                    filter: 'none'
                  }} 
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===================== CTA Section ===================== */}
      <div className="service-area pd-top-60 pd-bottom-60" style={{ background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="mb-4" style={{ fontSize: '36px', fontWeight: '700', color: '#fff' }}>
                Don't make them wait for you, go out there & promote your business.
              </h2>
              <Link className="btn btn-base border-radius-5" href="/contact" style={{ backgroundColor: '#fff', color: '#1e3a8a', padding: '15px 40px', fontSize: '16px', fontWeight: '600' }}>
                Get a Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ===================== Our Team Section ===================== */}
      <div className="service-area pd-top-60 pd-bottom-60">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center mb-5">
              <h2 className="mb-4" style={{ fontSize: '36px', fontWeight: '700', color: '#1a1a2e' }}>
                Our Team
              </h2>
              <p className="mb-5" style={{ fontSize: '16px', lineHeight: '1.8', color: '#333', maxWidth: '900px', margin: '0 auto' }}>
                Our diverse team of digital marketing experts works collaboratively to deliver exceptional results for our clients.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="text-center">
                <div style={{ fontSize: '200px', opacity: '0.1', color: '#3b82f6' }}>👥</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DigitalMarketingArea;

