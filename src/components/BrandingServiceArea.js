import Link from 'next/link';
import React from 'react';
import {
  FaAngleDoubleRight,
  FaArrowRight,
  FaCheckCircle,
  FaPhone,
  FaStar,
  FaQuoteLeft,
  FaPalette,
  FaBullhorn,
  FaLightbulb,
  FaShieldAlt,
  FaUsers,
  FaChartLine,
  FaRocket,
  FaAward,
  FaHandshake,
  FaClock,
  FaGlobe,
} from 'react-icons/fa';

const BrandingServiceArea = () => {
  return (
    <>
      {/* ===================== Hero Section ===================== */}
      <div className="service-area pd-top-60 pd-bottom-60" style={{ background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)', position: 'relative', overflow: 'hidden' }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="mb-4" style={{ fontSize: '42px', fontWeight: '700', color: '#fff' }}>
                Branding Agency in Coimbatore
              </h1>
              <p className="mb-4" style={{ fontSize: '16px', lineHeight: '1.8', color: '#fff' }}>
                We are a leading branding agency in Coimbatore, specializing in creating powerful brand identities that resonate with your target audience. Our team of creative professionals combines strategic thinking with innovative design to help businesses establish a strong and memorable brand presence.
              </p>
              <div className="d-flex gap-3">
                <Link className="btn btn-base border-radius-5" href="/contact" style={{ backgroundColor: '#fff', color: '#1e3a8a', padding: '15px 40px', fontSize: '16px', fontWeight: '600' }}>
                  Get Started
                </Link>
                <Link className="btn btn-base border-radius-5" href="/services" style={{ backgroundColor: 'transparent', color: '#fff', border: '2px solid #fff', padding: '15px 40px', fontSize: '16px', fontWeight: '600' }}>
                  Learn More
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="text-center">
                <div style={{ fontSize: '200px', opacity: '0.3', color: '#fff' }}>🎨</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===================== What We Do Section ===================== */}
      <div className="service-area pd-top-60 pd-bottom-60">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center mb-5">
              <h2 className="mb-4" style={{ fontSize: '36px', fontWeight: '700', color: '#1a1a2e' }}>
                What We Do
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 mb-4">
              <div className="p-4 text-center" style={{ background: '#f8f9fa', borderRadius: '12px', height: '100%' }}>
                <div style={{ fontSize: '64px', marginBottom: '20px' }}>🎯</div>
                <h4 className="mb-3" style={{ fontSize: '24px', fontWeight: '700', color: '#1a1a2e' }}>
                  Brand Strategy
                </h4>
                <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#333' }}>
                  We develop comprehensive brand strategies that define your brand's purpose, values, and positioning in the market.
                </p>
              </div>
            </div>
            <div className="col-lg-4 mb-4">
              <div className="p-4 text-center" style={{ background: '#f8f9fa', borderRadius: '12px', height: '100%' }}>
                <div style={{ fontSize: '64px', marginBottom: '20px' }}>💼</div>
                <h4 className="mb-3" style={{ fontSize: '24px', fontWeight: '700', color: '#1a1a2e' }}>
                  Brand Identity Design
                </h4>
                <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#333' }}>
                  Create a unique visual identity that reflects your brand's personality and connects with your audience.
                </p>
              </div>
            </div>
            <div className="col-lg-4 mb-4">
              <div className="p-4 text-center" style={{ background: '#f8f9fa', borderRadius: '12px', height: '100%' }}>
                <div style={{ fontSize: '64px', marginBottom: '20px' }}>💻</div>
                <h4 className="mb-3" style={{ fontSize: '24px', fontWeight: '700', color: '#1a1a2e' }}>
                  Digital Branding
                </h4>
                <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#333' }}>
                  Extend your brand presence across digital platforms with consistent and engaging brand experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===================== Our Services Section ===================== */}
      <div className="service-area pd-top-60 pd-bottom-60" style={{ background: '#f8f9fa' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center mb-5">
              <h2 className="mb-4" style={{ fontSize: '36px', fontWeight: '700', color: '#1a1a2e' }}>
                Our Services
              </h2>
              <p className="mb-5" style={{ fontSize: '16px', lineHeight: '1.8', color: '#333', maxWidth: '900px', margin: '0 auto' }}>
                We offer a comprehensive range of branding services to help your business stand out and succeed.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="p-4 text-center" style={{ background: '#fff', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)', height: '100%' }}>
                <FaPalette style={{ color: '#3b82f6', fontSize: '48px', marginBottom: '20px' }} />
                <h5 className="mb-3" style={{ fontSize: '20px', fontWeight: '700', color: '#1a1a2e' }}>
                  Logo Design
                </h5>
                <p style={{ fontSize: '14px', lineHeight: '1.8', color: '#666' }}>
                  Create memorable logos that represent your brand's essence and values.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="p-4 text-center" style={{ background: '#fff', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)', height: '100%' }}>
                <FaShieldAlt style={{ color: '#3b82f6', fontSize: '48px', marginBottom: '20px' }} />
                <h5 className="mb-3" style={{ fontSize: '20px', fontWeight: '700', color: '#1a1a2e' }}>
                  Brand Identity
                </h5>
                <p style={{ fontSize: '14px', lineHeight: '1.8', color: '#666' }}>
                  Develop complete brand identity systems including colors, typography, and guidelines.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="p-4 text-center" style={{ background: '#fff', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)', height: '100%' }}>
                <FaBullhorn style={{ color: '#3b82f6', fontSize: '48px', marginBottom: '20px' }} />
                <h5 className="mb-3" style={{ fontSize: '20px', fontWeight: '700', color: '#1a1a2e' }}>
                  Brand Strategy
                </h5>
                <p style={{ fontSize: '14px', lineHeight: '1.8', color: '#666' }}>
                  Strategic planning to position your brand effectively in the market.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="p-4 text-center" style={{ background: '#fff', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)', height: '100%' }}>
                <FaUsers style={{ color: '#3b82f6', fontSize: '48px', marginBottom: '20px' }} />
                <h5 className="mb-3" style={{ fontSize: '20px', fontWeight: '700', color: '#1a1a2e' }}>
                  Brand Positioning
                </h5>
                <p style={{ fontSize: '14px', lineHeight: '1.8', color: '#666' }}>
                  Define your unique position in the competitive landscape.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="p-4 text-center" style={{ background: '#fff', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)', height: '100%' }}>
                <FaChartLine style={{ color: '#3b82f6', fontSize: '48px', marginBottom: '20px' }} />
                <h5 className="mb-3" style={{ fontSize: '20px', fontWeight: '700', color: '#1a1a2e' }}>
                  Brand Guidelines
                </h5>
                <p style={{ fontSize: '14px', lineHeight: '1.8', color: '#666' }}>
                  Create comprehensive brand guidelines to maintain consistency.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="p-4 text-center" style={{ background: '#fff', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)', height: '100%' }}>
                <FaRocket style={{ color: '#3b82f6', fontSize: '48px', marginBottom: '20px' }} />
                <h5 className="mb-3" style={{ fontSize: '20px', fontWeight: '700', color: '#1a1a2e' }}>
                  Brand Launch
                </h5>
                <p style={{ fontSize: '14px', lineHeight: '1.8', color: '#666' }}>
                  Execute successful brand launches that create maximum impact.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="p-4 text-center" style={{ background: '#fff', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)', height: '100%' }}>
                <FaLightbulb style={{ color: '#3b82f6', fontSize: '48px', marginBottom: '20px' }} />
                <h5 className="mb-3" style={{ fontSize: '20px', fontWeight: '700', color: '#1a1a2e' }}>
                  Rebranding
                </h5>
                <p style={{ fontSize: '14px', lineHeight: '1.8', color: '#666' }}>
                  Transform and modernize your existing brand for better market appeal.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="p-4 text-center" style={{ background: '#fff', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)', height: '100%' }}>
                <FaGlobe style={{ color: '#3b82f6', fontSize: '48px', marginBottom: '20px' }} />
                <h5 className="mb-3" style={{ fontSize: '20px', fontWeight: '700', color: '#1a1a2e' }}>
                  Brand Management
                </h5>
                <p style={{ fontSize: '14px', lineHeight: '1.8', color: '#666' }}>
                  Ongoing brand management to maintain and strengthen your brand presence.
                </p>
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
                We are committed to delivering exceptional branding solutions that help your business thrive.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="p-4 text-center" style={{ background: '#f8f9fa', borderRadius: '12px', height: '100%' }}>
                <FaAward style={{ color: '#3b82f6', fontSize: '48px', marginBottom: '20px' }} />
                <h5 className="mb-3" style={{ fontSize: '20px', fontWeight: '700', color: '#1a1a2e' }}>
                  Award-Winning Team
                </h5>
                <p style={{ fontSize: '14px', lineHeight: '1.8', color: '#666' }}>
                  Our creative team has won numerous awards for excellence in branding and design.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="p-4 text-center" style={{ background: '#f8f9fa', borderRadius: '12px', height: '100%' }}>
                <FaHandshake style={{ color: '#3b82f6', fontSize: '48px', marginBottom: '20px' }} />
                <h5 className="mb-3" style={{ fontSize: '20px', fontWeight: '700', color: '#1a1a2e' }}>
                  Client-Centric
                </h5>
                <p style={{ fontSize: '14px', lineHeight: '1.8', color: '#666' }}>
                  We prioritize your vision and work closely with you throughout the branding process.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="p-4 text-center" style={{ background: '#f8f9fa', borderRadius: '12px', height: '100%' }}>
                <FaClock style={{ color: '#3b82f6', fontSize: '48px', marginBottom: '20px' }} />
                <h5 className="mb-3" style={{ fontSize: '20px', fontWeight: '700', color: '#1a1a2e' }}>
                  Timely Delivery
                </h5>
                <p style={{ fontSize: '14px', lineHeight: '1.8', color: '#666' }}>
                  We respect deadlines and deliver projects on time without compromising quality.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="p-4 text-center" style={{ background: '#f8f9fa', borderRadius: '12px', height: '100%' }}>
                <FaShieldAlt style={{ color: '#3b82f6', fontSize: '48px', marginBottom: '20px' }} />
                <h5 className="mb-3" style={{ fontSize: '20px', fontWeight: '700', color: '#1a1a2e' }}>
                  Quality Assurance
                </h5>
                <p style={{ fontSize: '14px', lineHeight: '1.8', color: '#666' }}>
                  Every project undergoes rigorous quality checks to ensure excellence.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="p-4 text-center" style={{ background: '#f8f9fa', borderRadius: '12px', height: '100%' }}>
                <FaUsers style={{ color: '#3b82f6', fontSize: '48px', marginBottom: '20px' }} />
                <h5 className="mb-3" style={{ fontSize: '20px', fontWeight: '700', color: '#1a1a2e' }}>
                  Experienced Team
                </h5>
                <p style={{ fontSize: '14px', lineHeight: '1.8', color: '#666' }}>
                  Our team brings years of experience in branding and design across various industries.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="p-4 text-center" style={{ background: '#f8f9fa', borderRadius: '12px', height: '100%' }}>
                <FaChartLine style={{ color: '#3b82f6', fontSize: '48px', marginBottom: '20px' }} />
                <h5 className="mb-3" style={{ fontSize: '20px', fontWeight: '700', color: '#1a1a2e' }}>
                  Strategic Approach
                </h5>
                <p style={{ fontSize: '14px', lineHeight: '1.8', color: '#666' }}>
                  We combine creativity with strategic thinking to deliver results-driven branding.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="p-4 text-center" style={{ background: '#f8f9fa', borderRadius: '12px', height: '100%' }}>
                <FaLightbulb style={{ color: '#3b82f6', fontSize: '48px', marginBottom: '20px' }} />
                <h5 className="mb-3" style={{ fontSize: '20px', fontWeight: '700', color: '#1a1a2e' }}>
                  Innovative Solutions
                </h5>
                <p style={{ fontSize: '14px', lineHeight: '1.8', color: '#666' }}>
                  We stay ahead of trends and use innovative approaches to create unique brands.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="p-4 text-center" style={{ background: '#f8f9fa', borderRadius: '12px', height: '100%' }}>
                <FaGlobe style={{ color: '#3b82f6', fontSize: '48px', marginBottom: '20px' }} />
                <h5 className="mb-3" style={{ fontSize: '20px', fontWeight: '700', color: '#1a1a2e' }}>
                  Global Reach
                </h5>
                <p style={{ fontSize: '14px', lineHeight: '1.8', color: '#666' }}>
                  We help brands establish a strong presence both locally and globally.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===================== Interested To Get Our Featured Services Section ===================== */}
      <div className="service-area pd-top-60 pd-bottom-60" style={{ background: '#f8f9fa' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="mb-4" style={{ fontSize: '36px', fontWeight: '700', color: '#1a1a2e' }}>
                Interested To Get Our Featured Services
              </h2>
              <p className="mb-5" style={{ fontSize: '16px', lineHeight: '1.8', color: '#333', maxWidth: '800px', margin: '0 auto' }}>
                Let's work together to create a powerful brand that drives your business forward.
              </p>
              <Link className="btn btn-base border-radius-5" href="/contact" style={{ backgroundColor: '#3b82f6', color: '#fff', padding: '15px 40px', fontSize: '16px', fontWeight: '600' }}>
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ===================== FAQs Section ===================== */}
      <div className="service-area pd-top-60 pd-bottom-60">
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
                      What is branding?
                    </button>
                  </h2>
                  <div id="faq1" className="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
                    <div className="accordion-body" style={{ fontSize: '16px', lineHeight: '1.8', color: '#333' }}>
                      Branding is the process of creating a unique identity and image for your business in the minds of your customers. It encompasses your logo, colors, typography, messaging, and overall brand experience that differentiates you from competitors.
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
                      How long does the branding process take?
                    </button>
                  </h2>
                  <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body" style={{ fontSize: '16px', lineHeight: '1.8', color: '#333' }}>
                      The branding process typically takes 4-8 weeks, depending on the scope and complexity of the project. This includes research, strategy development, design, and refinement phases.
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
                      What is included in a brand identity package?
                    </button>
                  </h2>
                  <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body" style={{ fontSize: '16px', lineHeight: '1.8', color: '#333' }}>
                      A complete brand identity package typically includes logo design, color palette, typography selection, brand guidelines document, business card design, letterhead, and digital assets for various applications.
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
                      Do you provide rebranding services?
                    </button>
                  </h2>
                  <div id="faq4" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body" style={{ fontSize: '16px', lineHeight: '1.8', color: '#333' }}>
                      Yes, we specialize in rebranding services for businesses looking to modernize their brand, reposition themselves in the market, or refresh their visual identity while maintaining brand recognition.
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
                      What is the cost of branding services?
                    </button>
                  </h2>
                  <div id="faq5" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body" style={{ fontSize: '16px', lineHeight: '1.8', color: '#333' }}>
                      The cost of branding services varies based on the scope of work, complexity, and specific requirements. We offer customized packages to fit different budgets. Contact us for a detailed quote tailored to your needs.
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

      {/* ===================== Our Team Section ===================== */}
      <div className="service-area pd-top-60 pd-bottom-60" style={{ background: '#f8f9fa' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center mb-5">
              <h2 className="mb-4" style={{ fontSize: '36px', fontWeight: '700', color: '#1a1a2e' }}>
                Our Team
              </h2>
              <p className="mb-5" style={{ fontSize: '16px', lineHeight: '1.8', color: '#333', maxWidth: '900px', margin: '0 auto' }}>
                Meet the creative minds behind our successful branding projects.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="p-4 text-center" style={{ background: '#fff', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}>
                <div style={{ width: '120px', height: '120px', borderRadius: '50%', background: '#3b82f6', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '48px', fontWeight: '700', margin: '0 auto 20px' }}>JD</div>
                <h5 style={{ fontSize: '20px', fontWeight: '700', color: '#1a1a2e', marginBottom: '10px' }}>John Doe</h5>
                <p style={{ fontSize: '14px', color: '#666' }}>Creative Director</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="p-4 text-center" style={{ background: '#fff', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}>
                <div style={{ width: '120px', height: '120px', borderRadius: '50%', background: '#3b82f6', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '48px', fontWeight: '700', margin: '0 auto 20px' }}>SM</div>
                <h5 style={{ fontSize: '20px', fontWeight: '700', color: '#1a1a2e', marginBottom: '10px' }}>Sarah Miller</h5>
                <p style={{ fontSize: '14px', color: '#666' }}>Brand Strategist</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="p-4 text-center" style={{ background: '#fff', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}>
                <div style={{ width: '120px', height: '120px', borderRadius: '50%', background: '#3b82f6', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '48px', fontWeight: '700', margin: '0 auto 20px' }}>MJ</div>
                <h5 style={{ fontSize: '20px', fontWeight: '700', color: '#1a1a2e', marginBottom: '10px' }}>Mike Johnson</h5>
                <p style={{ fontSize: '14px', color: '#666' }}>Graphic Designer</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="p-4 text-center" style={{ background: '#fff', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}>
                <div style={{ width: '120px', height: '120px', borderRadius: '50%', background: '#3b82f6', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '48px', fontWeight: '700', margin: '0 auto 20px' }}>EW</div>
                <h5 style={{ fontSize: '20px', fontWeight: '700', color: '#1a1a2e', marginBottom: '10px' }}>Emily Wilson</h5>
                <p style={{ fontSize: '14px', color: '#666' }}>UI/UX Designer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BrandingServiceArea;
