'use client'
import Link from 'next/link';
import React from 'react';
import Marquee from 'react-fast-marquee';
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
      <div className="service-area pd-top-20 pd-bottom-60" style={{ background: '#f8f9fa', minHeight: '600px' }}>
        <div className="container">
          <div className="row align-items-center" style={{ minHeight: '500px' }}>
            <div className="col-lg-6">
              <h1 className="mb-3" style={{ fontSize: '36px', fontWeight: '700' }}>
                <span style={{ color: '#3b82f6' }}>Digital Marketing</span>{' '}
                <span style={{ color: '#000' }}>Agency in Coimbatore That Offers Guaranteed Growth</span>
              </h1>
              <p className="mb-3" style={{ fontSize: '16px', lineHeight: '1.8', color: '#000' }}>
                We are a leading digital marketing agency in Coimbatore, specializing in delivering comprehensive digital marketing solutions that drive real results. Our team of experienced professionals combines creativity, strategy, and cutting-edge technology to help businesses achieve their marketing goals and maximize their online presence.
              </p>
              <Link className="btn btn-base border-radius-5" href="/contact" style={{ backgroundColor: '#1e3a8a', color: '#fff', padding: '15px 40px', fontSize: '16px', fontWeight: '600', textAlign: 'center', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                Get Started
              </Link>
            </div>
            <div className="col-lg-6">
              <div className="text-center" style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src="assets/img/bg/featured-image-2.jpg" alt="featured" style={{ width: '100%', height: 'auto', maxWidth: '100%', objectFit: 'contain', borderRadius: '12px', marginTop: '30px' }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===================== Trusted by Leading Brands Section ===================== */}
      <div className="service-area pd-top-20 pd-bottom-60" style={{ background: '#f8f9fa' }}>
        <div className="container">
          <div className="row">
              <div className="col-lg-12 text-center mb-3">
              <h3 className="mb-3" style={{ fontSize: '24px', fontWeight: '600', color: '#1a1a2e' }}>
                Trusted by leading brands
              </h3>
            </div>
          </div>
          <div style={{ overflow: 'hidden', width: '100%' }}>
            <Marquee direction="left" speed={40} gradient={false} pauseOnHover={false}>
              <div className="p-3 mx-3" style={{ background: '#fff', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)', display: 'flex', alignItems: 'center', gap: '10px', minWidth: '200px', flexShrink: 0 }}>
                <img src="assets/img/brand/webfx-logo.png" alt="WebFX" style={{ width: '40px', height: '40px', objectFit: 'cover', borderRadius: '8px', flexShrink: 0 }} />
                <div style={{ fontSize: '20px', fontWeight: '700', color: '#3b82f6', whiteSpace: 'nowrap' }}>WebFX</div>
              </div>
              <div className="p-3 mx-3" style={{ background: '#fff', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)', display: 'flex', alignItems: 'center', gap: '10px', minWidth: '200px', flexShrink: 0 }}>
                <img src="assets/img/brand/brick-marketing-logo.png" alt="Brick Marketing" style={{ width: '40px', height: '40px', objectFit: 'cover', borderRadius: '8px', flexShrink: 0 }} />
                <div style={{ fontSize: '20px', fontWeight: '700', color: '#3b82f6', whiteSpace: 'nowrap' }}>Brick Marketing</div>
              </div>
              <div className="p-3 mx-3" style={{ background: '#fff', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)', display: 'flex', alignItems: 'center', gap: '10px', minWidth: '200px', flexShrink: 0 }}>
                <img src="assets/img/brand/sephora-logo.png" alt="SEPHORA" style={{ width: '40px', height: '40px', objectFit: 'cover', borderRadius: '8px', flexShrink: 0 }} />
                <div style={{ fontSize: '20px', fontWeight: '700', color: '#3b82f6', whiteSpace: 'nowrap' }}>SEPHORA</div>
              </div>
              <div className="p-3 mx-3" style={{ background: '#fff', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)', display: 'flex', alignItems: 'center', gap: '10px', minWidth: '200px', flexShrink: 0 }}>
                <img src="assets/img/brand/nike-logo.jpg" alt="NIKE" style={{ width: '40px', height: '40px', objectFit: 'cover', borderRadius: '8px', flexShrink: 0 }} />
                <div style={{ fontSize: '20px', fontWeight: '700', color: '#3b82f6', whiteSpace: 'nowrap' }}>NIKE</div>
              </div>
              <div className="p-3 mx-3" style={{ background: '#fff', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)', display: 'flex', alignItems: 'center', gap: '10px', minWidth: '200px', flexShrink: 0 }}>
                <img src="assets/img/brand/smartsites-logo.webp" alt="smartsites" style={{ width: '40px', height: '40px', objectFit: 'cover', borderRadius: '8px', flexShrink: 0 }} />
                <div style={{ fontSize: '20px', fontWeight: '700', color: '#3b82f6', whiteSpace: 'nowrap' }}>smartsites</div>
              </div>
            </Marquee>
          </div>
        </div>
      </div>

      {/* ===================== What Makes Us Unique Section ===================== */}
      <div className="service-area pd-top-20 pd-bottom-60">
        <div className="container">
          <div className="row">
              <div className="col-lg-12 text-center mb-3">
              <h2 className="mb-3" style={{ fontSize: '36px', fontWeight: '700', color: '#1a1a2e' }}>
                What Makes Us Unique?
              </h2>
            </div>
          </div>
          <div className="row align-items-center mb-3">
            <div className="col-lg-6">
              <div className="text-center">
                <img src="assets/img/bg/chart-bg.webp" alt="chart" style={{ width: '100%', height: 'auto', maxWidth: '100%', objectFit: 'contain', borderRadius: '12px' }} />
              </div>
            </div>
            <div className="col-lg-6">
              <h3 className="mb-3" style={{ fontSize: '28px', fontWeight: '700', color: '#1a1a2e' }}>
                The Best Digital Marketing Solutions
              </h3>
              <p className="mb-3" style={{ fontSize: '16px', lineHeight: '1.8', color: '#333' }}>
                We offer comprehensive digital marketing solutions tailored to your business needs. Our data-driven approach ensures that every campaign delivers measurable results and drives sustainable growth for your business.
              </p>
              <p className="mb-3" style={{ fontSize: '16px', lineHeight: '1.8', color: '#333' }}>
                We stand out with our customer-focused approach, modern web solutions, and reliable support. Our team builds fast, secure, and fully responsive websites tailored to your business goals. With transparent communication, timely delivery, and quality-driven work, we ensure your online presence grows stronger and performs better than competitors.
              </p>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h3 className="mb-3" style={{ fontSize: '28px', fontWeight: '700', color: '#1a1a2e' }}>
                Don't Know Where to Start? We'll Help You
              </h3>
              <p className="mb-3" style={{ fontSize: '16px', lineHeight: '1.8', color: '#333' }}>
                Not sure how to navigate the digital marketing landscape? Our expert team will guide you through every step, from strategy development to execution, ensuring you achieve your marketing objectives with confidence.
              </p>
              <p className="mb-3" style={{ fontSize: '16px', lineHeight: '1.8', color: '#333' }}>
                Starting your online journey can feel confusing, but we make it simple. From planning your website to designing, developing, and launching it, our expert team guides you step-by-step. We help you choose the right strategy so your business grows faster with a powerful, user-friendly digital presence.
              </p>
            </div>
            <div className="col-lg-6">
              <div className="text-center">
                <img src="assets/img/bg/digital-marketing-bg.jpg" alt="digital marketing" style={{ width: '100%', height: 'auto', maxWidth: '100%', objectFit: 'contain', borderRadius: '12px' }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===================== Why Choose Us Section ===================== */}
      <div className="service-area pd-top-20 pd-bottom-60">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="text-center">
                <img src="assets/img/what-is-digital-marketing.jpg" alt="Why Choose Us" style={{ width: '100%', height: 'auto', maxWidth: '100%', objectFit: 'contain', borderRadius: '12px' }} />
              </div>
            </div>
            <div className="col-lg-6">
              <h2 className="mb-3" style={{ fontSize: '36px', fontWeight: '700', color: '#1a1a2e' }}>
                Why Choose Us?
              </h2>
              <p className="mb-3" style={{ fontSize: '16px', lineHeight: '1.8', color: '#333' }}>
                We provide high-quality, results-driven digital solutions designed to grow your business. Our team focuses on speed, security, and user-friendly design to deliver a powerful online presence. With transparent communication and timely delivery, we ensure your website performs better, ranks higher, and helps you achieve long-term success.
              </p>
              <p className="mb-3" style={{ fontSize: '16px', lineHeight: '1.8', color: '#333' }}>
                We provide high-quality, results-driven digital solutions designed to grow your business. Our team focuses on speed, security, and user-friendly design to deliver a powerful online presence. With transparent communication and timely delivery, we ensure your website performs better, ranks higher, and drives consistent traffic. Our experienced professionals use modern tools, clean code, and strategic SEO practices to help you build long-term digital success and stay ahead of your competitors.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ===================== What Sets Us Apart Section ===================== */}
      <div className="service-area pd-top-20 pd-bottom-60" style={{ background: '#f8f9fa' }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h2 className="mb-3" style={{ fontSize: '36px', fontWeight: '700', color: '#1a1a2e' }}>
                What Sets Us Apart
              </h2>
              <p className="mb-3" style={{ fontSize: '16px', lineHeight: '1.8', color: '#333' }}>
                Our work is built around innovation, performance, and customer satisfaction. We combine modern design, clean coding, and strategic SEO practices to create websites that attract and convert customers. With dedicated support and detail-oriented execution, we help your brand stand out and stay ahead in a competitive digital world.
              </p>
              <p className="mb-3" style={{ fontSize: '16px', lineHeight: '1.8', color: '#333' }}>
                Our work is built around innovation, performance, and customer satisfaction. We combine modern design, clean coding, and strategic SEO practices to create websites that attract and convert customers. With dedicated support and detail-oriented execution, we help your brand stand out and stay ahead in a competitive digital world. We focus on fast loading speed, mobile responsiveness, and long-term digital growth, ensuring your online presence remains strong, effective, and future-ready.
              </p>
            </div>
            <div className="col-lg-6">
              <div className="text-center">
                <img src="assets/img/what-sets-us-apart.jpg" alt="What Sets Us Apart" style={{ width: '100%', height: 'auto', maxWidth: '100%', objectFit: 'contain', borderRadius: '12px' }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===================== Why Clients Trust Us Section ===================== */}
      <div className="service-area pd-top-20 pd-bottom-60">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="text-center">
                <img src="assets/img/why-clients-trust-us.webp" alt="Why Clients Trust Us" style={{ width: '100%', height: 'auto', maxWidth: '100%', objectFit: 'contain', borderRadius: '12px' }} />
              </div>
            </div>
            <div className="col-lg-6">
              <h2 className="mb-3" style={{ fontSize: '36px', fontWeight: '700', color: '#1a1a2e' }}>
                Why Clients Trust Us
              </h2>
              <p className="mb-3" style={{ fontSize: '16px', lineHeight: '1.8', color: '#333' }}>
                Clients trust us for our commitment to quality, reliability, and measurable results. We deliver responsive, secure, and SEO-optimized websites tailored to your business needs. Our professional approach, continuous support, and focus on long-term growth ensure your digital presence stays strong and consistently delivers value.
              </p>
              <p className="mb-3" style={{ fontSize: '16px', lineHeight: '1.8', color: '#333' }}>
                Clients trust us for our commitment to quality, reliability, and measurable results. We deliver responsive, secure, and SEO-optimized websites tailored to your business needs. Our professional approach, continuous support, and focus on long-term growth ensure your digital presence stays strong and consistently delivers value. We believe in transparency, timely communication, and delivering work that exceeds expectations. With proven strategies, clean development, and a customer-first mindset, we help businesses build trust, gain visibility, and achieve sustainable online success.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ===================== Digital Marketing Factors Section ===================== */}
      <div className="service-area pd-top-40 pd-bottom-60" style={{ background: '#f8f9fa', color: '#1a1a2e' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center mb-4">
              <h2 className="mb-3" style={{ fontSize: '36px', fontWeight: '700' }}>
                <span style={{ color: '#3b82f6' }}>Digital Marketing Factors</span>{' '}
                <span style={{ color: '#1a1a2e' }}>We Care For Are</span>
              </h2>
              <p className="mb-4" style={{ fontSize: '16px', lineHeight: '1.8', color: '#333', maxWidth: '900px', margin: '0 auto' }}>
                At our digital marketing agency, we follow industry best practices to provide long-term results to our clients. Several key factors influence your digital marketing success and our comprehensive services help you to improve your:
              </p>
            </div>
          </div>
          <style dangerouslySetInnerHTML={{__html: `
            .dm-factor-heading {
              transition: color 0.3s ease;
              cursor: pointer;
            }
            .dm-factor-heading:hover {
              color: #3b82f6 !important;
            }
          `}} />
          <div className="row">
            <div className="col-lg-6 mb-4">
              <div className="mb-4">
                <h4 className="dm-factor-heading" style={{ fontSize: '20px', fontWeight: '700', color: '#1a1a2e', marginBottom: '10px' }}>Content Marketing</h4>
                <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#333', margin: 0 }}>We create high-quality, relevant, and engaging content that provides value to your audience and drives conversions. Our content strategy helps build brand authority and customer trust.</p>
              </div>
              <div className="mb-4">
                <h4 className="dm-factor-heading" style={{ fontSize: '20px', fontWeight: '700', color: '#1a1a2e', marginBottom: '10px' }}>Social Media Marketing</h4>
                <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#333', margin: 0 }}>We develop strategic social media campaigns across multiple platforms to engage your audience, build brand awareness, and drive traffic to your website.</p>
              </div>
              <div className="mb-4">
                <h4 className="dm-factor-heading" style={{ fontSize: '20px', fontWeight: '700', color: '#1a1a2e', marginBottom: '10px' }}>Email Marketing</h4>
                <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#333', margin: 0 }}>We design personalized email campaigns that nurture leads, retain customers, and drive sales. Our email marketing strategies help you maintain direct communication with your audience.</p>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="mb-4">
                <h4 className="dm-factor-heading" style={{ fontSize: '20px', fontWeight: '700', color: '#1a1a2e', marginBottom: '10px' }}>PPC Advertising</h4>
                <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#333', margin: 0 }}>We manage targeted pay-per-click campaigns on Google, Facebook, and other platforms to drive instant traffic, generate leads, and maximize your return on investment.</p>
              </div>
              <div className="mb-4">
                <h4 className="dm-factor-heading" style={{ fontSize: '20px', fontWeight: '700', color: '#1a1a2e', marginBottom: '10px' }}>Analytics & Reporting</h4>
                <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#333', margin: 0 }}>We provide comprehensive analytics and detailed reporting to track your campaign performance, measure ROI, and make data-driven decisions for continuous improvement.</p>
              </div>
              <div className="mb-4">
                <h4 className="dm-factor-heading" style={{ fontSize: '20px', fontWeight: '700', color: '#1a1a2e', marginBottom: '10px' }}>Conversion Rate Optimization</h4>
                <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#333', margin: 0 }}>We optimize your website and landing pages to improve user experience, increase conversions, and maximize the value of your existing traffic through A/B testing and strategic improvements.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===================== Our Special Digital Marketing Services Section ===================== */}
      <div className="service-area pd-top-20 pd-bottom-60" style={{ background: '#f8f9fa' }}>
        <div className="container">
          <div className="row">
              <div className="col-lg-12 text-center mb-3">
              <h2 className="mb-3" style={{ fontSize: '36px', fontWeight: '700' }}>
                <span style={{ color: '#1a1a2e' }}>Our Special </span>
                <span style={{ color: '#3b82f6' }}>Digital Marketing Services</span>
              </h2>
              <p className="mb-3" style={{ fontSize: '16px', lineHeight: '1.8', color: '#333', maxWidth: '900px', margin: '0 auto' }}>
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
                  <Link className="btn btn-base border-radius-5 w-100" href="/contact" style={{ backgroundColor: '#1e3a8a', color: '#fff', padding: '15px 40px', fontSize: '16px', fontWeight: '600', textAlign: 'center', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                    Submit
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===================== Why Choose Us Section ===================== */}
      <div className="service-area pd-top-20 pd-bottom-60">
        <div className="container">
          <div className="row">
              <div className="col-lg-12 text-center mb-3">
              <h2 className="mb-3" style={{ fontSize: '36px', fontWeight: '700', color: '#1a1a2e' }}>
                Why Choose Us?
              </h2>
              <p className="mb-3" style={{ fontSize: '16px', lineHeight: '1.8', color: '#333', maxWidth: '900px', margin: '0 auto' }}>
                We stand out from the competition with our unique approach and commitment to delivering exceptional results.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 mb-4">
              <div className="text-center" style={{ background: '#f8f9fa', borderRadius: '12px', height: '100%', display: 'flex', flexDirection: 'column' }}>
                <img src="assets/img/award-icon.jpg" alt="Award" style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '12px 12px 0 0' }} />
                <div className="p-4">
                  <h4 className="mb-3" style={{ fontSize: '24px', fontWeight: '700', color: '#1a1a2e' }}>
                    Award-Winning Team
                  </h4>
                  <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#333' }}>
                    Our team consists of industry experts and award-winning professionals who bring years of experience and proven track records to every project.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-4">
              <div className="text-center" style={{ background: '#f8f9fa', borderRadius: '12px', height: '100%', display: 'flex', flexDirection: 'column' }}>
                <img src="assets/img/handshake-icon.png" alt="Handshake" style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '12px 12px 0 0' }} />
                <div className="p-4">
                  <h4 className="mb-3" style={{ fontSize: '24px', fontWeight: '700', color: '#1a1a2e' }}>
                    Client-Centric Approach
                  </h4>
                  <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#333' }}>
                    We prioritize your success and work closely with you to understand your goals, challenges, and vision, ensuring our strategies align with your business objectives.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-4">
              <div className="text-center" style={{ background: '#f8f9fa', borderRadius: '12px', height: '100%', display: 'flex', flexDirection: 'column' }}>
                <img src="assets/img/idea-concept.jpg" alt="Idea Concept" style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '12px 12px 0 0' }} />
                <div className="p-4">
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
      </div>

      {/* ===================== How We Work Section ===================== */}
      <div className="service-area pd-top-20 pd-bottom-60" style={{ background: '#f8f9fa' }}>
        <div className="container">
          <div className="row">
              <div className="col-lg-12 text-center mb-3">
              <h2 className="mb-3" style={{ fontSize: '36px', fontWeight: '700', color: '#1a1a2e' }}>
                How We Work
              </h2>
              <p className="mb-3" style={{ fontSize: '16px', lineHeight: '1.8', color: '#333', maxWidth: '900px', margin: '0 auto' }}>
                Our systematic approach ensures successful digital marketing campaigns that deliver results.
              </p>
            </div>
          </div>
          <style dangerouslySetInnerHTML={{__html: `
            .step-box-connector {
              position: absolute;
              top: 50%;
              right: -15px;
              width: 30px;
              height: 3px;
              background: #3b82f6;
              z-index: 1;
              transform: translateY(-50%);
            }
            @media (max-width: 991px) {
              .step-box-connector {
                display: none;
              }
            }
          `}} />
          <div className="row" style={{ alignItems: 'stretch' }}>
            <div className="col-lg mb-4 position-relative" style={{ flex: '1 1 0', minWidth: '200px' }}>
              <div className="text-center" style={{ background: '#fff', borderRadius: '12px', padding: '20px', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)' }}>
                <div>
                  <h5 style={{ fontSize: '18px', fontWeight: '700', color: '#1a1a2e', marginBottom: '15px' }}>Discovery & Analysis</h5>
                  <p style={{ fontSize: '14px', color: '#666', margin: 0, lineHeight: '1.6' }}>We start by understanding your business, goals, target audience, and existing online presence. This comprehensive analysis helps us identify opportunities and create a strategic foundation for your digital marketing success.</p>
                </div>
              </div>
              <div className="step-box-connector"></div>
            </div>
            <div className="col-lg mb-4 position-relative" style={{ flex: '1 1 0', minWidth: '200px' }}>
              <div className="text-center" style={{ background: '#fff', borderRadius: '12px', padding: '20px', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)' }}>
                <div>
                  <h5 style={{ fontSize: '18px', fontWeight: '700', color: '#1a1a2e', marginBottom: '15px' }}>Strategy & Planning</h5>
                  <p style={{ fontSize: '14px', color: '#666', margin: 0, lineHeight: '1.6' }}>Based on our analysis, we develop customized marketing strategies tailored to your business needs. Our planning includes channel selection, budget allocation, timeline, and KPIs to ensure measurable results.</p>
                </div>
              </div>
              <div className="step-box-connector"></div>
            </div>
            <div className="col-lg mb-4 position-relative" style={{ flex: '1 1 0', minWidth: '200px' }}>
              <div className="text-center" style={{ background: '#fff', borderRadius: '12px', padding: '20px', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)' }}>
                <div>
                  <h5 style={{ fontSize: '18px', fontWeight: '700', color: '#1a1a2e', marginBottom: '15px' }}>Implementation & Execution</h5>
                  <p style={{ fontSize: '14px', color: '#666', margin: 0, lineHeight: '1.6' }}>We execute campaigns across all selected channels including SEO, PPC, social media, email marketing, and content creation. Our team ensures consistent messaging and brand alignment throughout all touchpoints.</p>
                </div>
              </div>
              <div className="step-box-connector"></div>
            </div>
            <div className="col-lg mb-4 position-relative" style={{ flex: '1 1 0', minWidth: '200px' }}>
              <div className="text-center" style={{ background: '#fff', borderRadius: '12px', padding: '20px', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)' }}>
                <div>
                  <h5 style={{ fontSize: '18px', fontWeight: '700', color: '#1a1a2e', marginBottom: '15px' }}>Monitoring & Optimization</h5>
                  <p style={{ fontSize: '14px', color: '#666', margin: 0, lineHeight: '1.6' }}>We continuously monitor campaign performance using advanced analytics tools. Our team tracks key metrics, identifies areas for improvement, and optimizes strategies in real-time to maximize ROI and achieve better results.</p>
                </div>
              </div>
              <div className="step-box-connector"></div>
            </div>
            <div className="col-lg mb-4 position-relative" style={{ flex: '1 1 0', minWidth: '200px' }}>
              <div className="text-center" style={{ background: '#fff', borderRadius: '12px', padding: '20px', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)' }}>
                <div>
                  <h5 style={{ fontSize: '18px', fontWeight: '700', color: '#1a1a2e', marginBottom: '15px' }}>Reporting & Communication</h5>
                  <p style={{ fontSize: '14px', color: '#666', margin: 0, lineHeight: '1.6' }}>We provide regular detailed reports with insights, performance metrics, and recommendations. Our transparent communication ensures you stay informed about campaign progress and can make data-driven decisions for your business growth.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===================== Success Stories Section ===================== */}
      <div className="service-area pd-top-20 pd-bottom-60">
        <div className="container">
          <div className="row">
              <div className="col-lg-12 text-center mb-3">
              <h2 className="mb-3" style={{ fontSize: '36px', fontWeight: '700', color: '#1a1a2e' }}>
                Our Success Stories
              </h2>
              <p className="mb-3" style={{ fontSize: '16px', lineHeight: '1.8', color: '#333', maxWidth: '900px', margin: '0 auto' }}>
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
      <div className="service-area pd-top-20 pd-bottom-60" style={{ background: '#f8f9fa' }}>
        <div className="container">
          <div className="row align-items-stretch">
            <div className="col-lg-6">
              <h2 className="mb-3" style={{ fontSize: '36px', fontWeight: '700', color: '#1a1a2e' }}>
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
              <div className="text-center" style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img 
                  src="assets/img/faq-illustration.jpg" 
                  alt="FAQs Illustration" 
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    minHeight: '600px',
                    maxWidth: '500px',
                    objectFit: 'contain',
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
              <Link className="btn btn-base border-radius-5" href="/contact" style={{ backgroundColor: '#1e3a8a', color: '#fff', padding: '15px 40px', fontSize: '16px', fontWeight: '600', textAlign: 'center', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                Get a Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ===================== Our Team Section ===================== */}
      <div className="service-area pd-top-20 pd-bottom-60">
        <div className="container">
          <div className="row">
              <div className="col-lg-12 text-center mb-3">
              <h2 className="mb-3" style={{ fontSize: '36px', fontWeight: '700', color: '#1a1a2e' }}>
                Our Team
              </h2>
              <p className="mb-3" style={{ fontSize: '16px', lineHeight: '1.8', color: '#333', maxWidth: '900px', margin: '0 auto' }}>
                Our diverse team of digital marketing experts works collaboratively to deliver exceptional results for our clients.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="text-center">
                <img src="assets/img/team-silhouette.avif" alt="Our Team" style={{ width: '100%', height: '400px', maxWidth: '100%', objectFit: 'cover', borderRadius: '12px' }} />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="text-center">
                <img src="assets/img/our-team.jpg" alt="Our Team" style={{ width: '100%', height: '400px', maxWidth: '100%', objectFit: 'cover', borderRadius: '12px' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DigitalMarketingArea;


