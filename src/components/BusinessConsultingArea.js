import Link from 'next/link';
import React from 'react';
import {
  FaAngleDoubleRight,
  FaArrowRight,
  FaCheckCircle,
  FaPhone,
  FaStar,
} from 'react-icons/fa';

const BusinessConsultingArea = () => {
  return (
    <>
      {/* ===================== Hero Section ===================== */}
      <div className="service-area pd-top-60 pd-bottom-60">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="mb-4" style={{ fontSize: '42px', fontWeight: '700', color: '#1a1a2e' }}>
                Unlock The Power Of B2B SEO Services With Best B2B SEO Agency In India
              </h1>
              <p className="mb-4" style={{ fontSize: '16px', lineHeight: '1.8', color: '#333' }}>
                RankON Technologies is a leading B2B SEO agency in India, specializing in crafting tailored SEO strategies that drive organic traffic, boost search engine rankings, and generate high-quality leads for your business. Our expert team understands the unique challenges of the B2B landscape, delivering measurable results that fuel your growth.
              </p>
              <div className="d-flex gap-3 mb-4">
                <Link className="btn btn-base border-radius-5" href="/contact" style={{ backgroundColor: '#ffc107', color: '#1a1a2e', padding: '15px 40px', fontSize: '16px', fontWeight: '600' }}>
                  Get a Quote
                </Link>
                <Link className="btn btn-base border-radius-5" href="tel:+919047941979" style={{ backgroundColor: '#28a745', color: '#fff', padding: '15px 40px', fontSize: '16px', fontWeight: '600' }}>
                  <FaPhone /> Call Now
                </Link>
              </div>
              <div className="d-flex align-items-center">
                <span style={{ fontSize: '18px', fontWeight: '600', color: '#246bfd', marginRight: '10px' }}>Google</span>
                <div style={{ fontSize: '24px', fontWeight: '700', color: '#1a1a2e', marginRight: '10px' }}>5.0</div>
                <FaStar style={{ color: '#ffc107', fontSize: '20px' }} />
                <FaStar style={{ color: '#ffc107', fontSize: '20px' }} />
                <FaStar style={{ color: '#ffc107', fontSize: '20px' }} />
                <FaStar style={{ color: '#ffc107', fontSize: '20px' }} />
                <FaStar style={{ color: '#ffc107', fontSize: '20px' }} />
                <span style={{ fontSize: '14px', color: '#666', marginLeft: '10px' }}>Rated 5.0 by 500+ Clients on Google</span>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="text-center">
                <div style={{ fontSize: '200px', opacity: '0.1', color: '#246bfd' }}>🤝</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===================== Why Choose RankON Section ===================== */}
      <div className="service-area pd-top-60 pd-bottom-60" style={{ background: '#f8f9fa' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 mb-5">
              <h2 className="mb-4" style={{ fontSize: '36px', fontWeight: '700', color: '#1a1a2e', textAlign: 'center' }}>
                Why Choose RankON Technologies for B2B SEO?
              </h2>
              <p className="mb-5" style={{ fontSize: '16px', lineHeight: '1.8', color: '#333', textAlign: 'center', maxWidth: '900px', margin: '0 auto' }}>
                In the competitive B2B market, visibility is key. Our B2B SEO services are designed to put your brand in front of the right audience at the right time. We focus on long-term strategies that deliver sustainable growth and a strong return on investment.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 mb-4">
              <div className="p-4" style={{ background: '#ffc107', borderRadius: '12px', height: '100%' }}>
                <div style={{ fontSize: '64px', marginBottom: '20px' }}>🎯</div>
                <h3 className="mb-3" style={{ fontSize: '24px', fontWeight: '700', color: '#1a1a2e' }}>
                  Tailored Strategies
                </h3>
                <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#1a1a2e' }}>
                  We develop customized SEO strategies that align with your specific business goals and target audience.
                </p>
              </div>
            </div>
            <div className="col-lg-4 mb-4">
              <div className="p-4" style={{ background: '#ffc107', borderRadius: '12px', height: '100%' }}>
                <div style={{ fontSize: '64px', marginBottom: '20px' }}>📊</div>
                <h3 className="mb-3" style={{ fontSize: '24px', fontWeight: '700', color: '#1a1a2e' }}>
                  Data-Driven Approach
                </h3>
                <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#1a1a2e' }}>
                  Our decisions are backed by in-depth research and analytics, ensuring optimal performance and continuous improvement.
                </p>
              </div>
            </div>
            <div className="col-lg-4 mb-4">
              <div className="p-4" style={{ background: '#ffc107', borderRadius: '12px', height: '100%' }}>
                <div style={{ fontSize: '64px', marginBottom: '20px' }}>👥</div>
                <h3 className="mb-3" style={{ fontSize: '24px', fontWeight: '700', color: '#1a1a2e' }}>
                  Experienced Team
                </h3>
                <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#1a1a2e' }}>
                  Our team of SEO specialists has extensive experience in the B2B sector, delivering proven results for diverse clients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===================== Comprehensive B2B SEO Services Section ===================== */}
      <div className="service-area pd-top-60 pd-bottom-60" style={{ background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center mb-5">
              <h2 className="mb-4" style={{ fontSize: '36px', fontWeight: '700', color: '#fff' }}>
                Our Comprehensive B2B SEO Services
              </h2>
              <p className="mb-5" style={{ fontSize: '16px', lineHeight: '1.8', color: '#fff', maxWidth: '900px', margin: '0 auto' }}>
                We offer a full suite of B2B SEO services designed to cover every aspect of your online presence, from technical optimization to content creation and link building.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="p-4" style={{ background: '#fff', borderRadius: '12px', height: '100%' }}>
                <div style={{ fontSize: '48px', marginBottom: '15px' }}>🔍</div>
                <h4 className="mb-3" style={{ fontSize: '22px', fontWeight: '700', color: '#1a1a2e' }}>
                  Keyword Research & Strategy
                </h4>
                <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#333' }}>
                  Identifying high-value keywords that attract qualified B2B leads.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="p-4" style={{ background: '#fff', borderRadius: '12px', height: '100%' }}>
                <div style={{ fontSize: '48px', marginBottom: '15px' }}>📄</div>
                <h4 className="mb-3" style={{ fontSize: '22px', fontWeight: '700', color: '#1a1a2e' }}>
                  On-Page SEO Optimization
                </h4>
                <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#333' }}>
                  Optimizing website content, meta tags, and structure for search engines.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="p-4" style={{ background: '#fff', borderRadius: '12px', height: '100%' }}>
                <div style={{ fontSize: '48px', marginBottom: '15px' }}>⚙️</div>
                <h4 className="mb-3" style={{ fontSize: '22px', fontWeight: '700', color: '#1a1a2e' }}>
                  Technical SEO Audit & Fixes
                </h4>
                <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#333' }}>
                  Ensuring your website's technical foundation is solid for optimal crawling and indexing.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="p-4" style={{ background: '#fff', borderRadius: '12px', height: '100%' }}>
                <div style={{ fontSize: '48px', marginBottom: '15px' }}>✍️</div>
                <h4 className="mb-3" style={{ fontSize: '22px', fontWeight: '700', color: '#1a1a2e' }}>
                  Content Marketing for B2B
                </h4>
                <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#333' }}>
                  Creating valuable, industry-specific content that engages and converts.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="p-4" style={{ background: '#fff', borderRadius: '12px', height: '100%' }}>
                <div style={{ fontSize: '48px', marginBottom: '15px' }}>🔗</div>
                <h4 className="mb-3" style={{ fontSize: '22px', fontWeight: '700', color: '#1a1a2e' }}>
                  Link Building & Outreach
                </h4>
                <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#333' }}>
                  Building high-quality backlinks to improve domain authority and rankings.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="p-4" style={{ background: '#fff', borderRadius: '12px', height: '100%' }}>
                <div style={{ fontSize: '48px', marginBottom: '15px' }}>📍</div>
                <h4 className="mb-3" style={{ fontSize: '22px', fontWeight: '700', color: '#1a1a2e' }}>
                  Local SEO for B2B
                </h4>
                <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#333' }}>
                  Optimizing for local searches to connect with nearby B2B clients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===================== B2B SEO Process Section ===================== */}
      <div className="service-area pd-top-60 pd-bottom-60" style={{ background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center mb-5">
              <h2 className="mb-4" style={{ fontSize: '36px', fontWeight: '700', color: '#fff' }}>
                Our B2B SEO Process
              </h2>
              <p className="mb-5" style={{ fontSize: '16px', lineHeight: '1.8', color: '#fff', maxWidth: '900px', margin: '0 auto' }}>
                Our systematic approach ensures transparency, efficiency, and measurable results at every stage of your B2B SEO journey.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="p-4 text-center" style={{ background: '#fff', borderRadius: '12px', height: '100%' }}>
                <div style={{ fontSize: '48px', marginBottom: '15px' }}>🔍</div>
                <h4 className="mb-3" style={{ fontSize: '22px', fontWeight: '700', color: '#1a1a2e' }}>
                  Discovery & Analysis
                </h4>
                <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#333' }}>
                  In-depth analysis of your current SEO performance, competitors, and target audience.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="p-4 text-center" style={{ background: '#fff', borderRadius: '12px', height: '100%' }}>
                <div style={{ fontSize: '48px', marginBottom: '15px' }}>💡</div>
                <h4 className="mb-3" style={{ fontSize: '22px', fontWeight: '700', color: '#1a1a2e' }}>
                  Strategy Development
                </h4>
                <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#333' }}>
                  Crafting a tailored SEO strategy with clear objectives and actionable plans.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="p-4 text-center" style={{ background: '#fff', borderRadius: '12px', height: '100%' }}>
                <div style={{ fontSize: '48px', marginBottom: '15px' }}>⚙️</div>
                <h4 className="mb-3" style={{ fontSize: '22px', fontWeight: '700', color: '#1a1a2e' }}>
                  Implementation & Optimization
                </h4>
                <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#333' }}>
                  Executing the strategy, optimizing on-page and off-page elements, and technical fixes.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="p-4 text-center" style={{ background: '#fff', borderRadius: '12px', height: '100%' }}>
                <div style={{ fontSize: '48px', marginBottom: '15px' }}>📊</div>
                <h4 className="mb-3" style={{ fontSize: '22px', fontWeight: '700', color: '#1a1a2e' }}>
                  Monitoring & Reporting
                </h4>
                <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#333' }}>
                  Continuous monitoring of performance, detailed reporting, and strategic adjustments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===================== Why Partner Section ===================== */}
      <div className="service-area pd-top-60 pd-bottom-60" style={{ background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center mb-5">
              <h2 className="mb-4" style={{ fontSize: '36px', fontWeight: '700', color: '#fff' }}>
                Why Partner with RankON Technologies?
              </h2>
              <p className="mb-5" style={{ fontSize: '16px', lineHeight: '1.8', color: '#fff', maxWidth: '900px', margin: '0 auto' }}>
                Choosing the right B2B SEO agency is crucial for your success. Here's what sets us apart:
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 mb-4">
              <div className="p-4 text-center" style={{ background: '#fff', borderRadius: '12px', height: '100%' }}>
                <div style={{ fontSize: '48px', marginBottom: '15px' }}>🏆</div>
                <h4 className="mb-3" style={{ fontSize: '22px', fontWeight: '700', color: '#1a1a2e' }}>
                  Proven Track Record
                </h4>
                <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#333' }}>
                  A history of delivering exceptional results and driving significant ROI for B2B clients.
                </p>
              </div>
            </div>
            <div className="col-lg-4 mb-4">
              <div className="p-4 text-center" style={{ background: '#fff', borderRadius: '12px', height: '100%' }}>
                <div style={{ fontSize: '48px', marginBottom: '15px' }}>🤝</div>
                <h4 className="mb-3" style={{ fontSize: '22px', fontWeight: '700', color: '#1a1a2e' }}>
                  Client-Centric Approach
                </h4>
                <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#333' }}>
                  We prioritize your business goals, offering personalized service and transparent communication.
                </p>
              </div>
            </div>
            <div className="col-lg-4 mb-4">
              <div className="p-4 text-center" style={{ background: '#fff', borderRadius: '12px', height: '100%' }}>
                <div style={{ fontSize: '48px', marginBottom: '15px' }}>🚀</div>
                <h4 className="mb-3" style={{ fontSize: '22px', fontWeight: '700', color: '#1a1a2e' }}>
                  Cutting-Edge Techniques
                </h4>
                <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#333' }}>
                  Staying ahead of algorithm changes and leveraging the latest SEO tools and strategies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===================== Ready to Elevate Section ===================== */}
      <div className="service-area pd-top-60 pd-bottom-60" style={{ background: '#f8f9fa' }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h2 className="mb-4" style={{ fontSize: '36px', fontWeight: '700', color: '#1a1a2e' }}>
                Ready to Elevate Your B2B Brand?
              </h2>
              <p className="mb-4" style={{ fontSize: '16px', lineHeight: '1.8', color: '#333' }}>
                Contact us today for a free consultation and discover how our B2B SEO services can transform your online presence.
              </p>
              <Link className="btn btn-base border-radius-5" href="/contact" style={{ backgroundColor: '#ffc107', color: '#1a1a2e', padding: '15px 40px', fontSize: '16px', fontWeight: '600' }}>
                Get a Free Consultation
              </Link>
            </div>
            <div className="col-lg-6">
              <div className="text-center">
                <div style={{ fontSize: '200px', opacity: '0.1', color: '#246bfd' }}>📈</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===================== Expertise Across Industries Section ===================== */}
      <div className="service-area pd-top-60 pd-bottom-60" style={{ background: '#f8f9fa' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center mb-5">
              <h2 className="mb-4" style={{ fontSize: '36px', fontWeight: '700', color: '#1a1a2e' }}>
                Our Expertise Across Industries
              </h2>
              <p className="mb-5" style={{ fontSize: '16px', lineHeight: '1.8', color: '#333', maxWidth: '900px', margin: '0 auto' }}>
                We have successfully partnered with B2B clients across a diverse range of industries, helping them achieve their digital marketing goals.
              </p>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="text-center">
                <div style={{ fontSize: '200px', opacity: '0.1', color: '#246bfd' }}>🏭</div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row">
                <div className="col-md-6 mb-3">
                  <div className="d-flex align-items-start">
                    <FaCheckCircle style={{ color: '#246bfd', fontSize: '20px', marginRight: '10px', marginTop: '4px' }} />
                    <div>
                      <h5 style={{ fontSize: '18px', fontWeight: '600', color: '#1a1a2e' }}>Technology & Software</h5>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div className="d-flex align-items-start">
                    <FaCheckCircle style={{ color: '#246bfd', fontSize: '20px', marginRight: '10px', marginTop: '4px' }} />
                    <div>
                      <h5 style={{ fontSize: '18px', fontWeight: '600', color: '#1a1a2e' }}>Manufacturing</h5>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div className="d-flex align-items-start">
                    <FaCheckCircle style={{ color: '#246bfd', fontSize: '20px', marginRight: '10px', marginTop: '4px' }} />
                    <div>
                      <h5 style={{ fontSize: '18px', fontWeight: '600', color: '#1a1a2e' }}>Healthcare</h5>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div className="d-flex align-items-start">
                    <FaCheckCircle style={{ color: '#246bfd', fontSize: '20px', marginRight: '10px', marginTop: '4px' }} />
                    <div>
                      <h5 style={{ fontSize: '18px', fontWeight: '600', color: '#1a1a2e' }}>Financial Services</h5>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div className="d-flex align-items-start">
                    <FaCheckCircle style={{ color: '#246bfd', fontSize: '20px', marginRight: '10px', marginTop: '4px' }} />
                    <div>
                      <h5 style={{ fontSize: '18px', fontWeight: '600', color: '#1a1a2e' }}>Education</h5>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div className="d-flex align-items-start">
                    <FaCheckCircle style={{ color: '#246bfd', fontSize: '20px', marginRight: '10px', marginTop: '4px' }} />
                    <div>
                      <h5 style={{ fontSize: '18px', fontWeight: '600', color: '#1a1a2e' }}>Logistics & Supply Chain</h5>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div className="d-flex align-items-start">
                    <FaCheckCircle style={{ color: '#246bfd', fontSize: '20px', marginRight: '10px', marginTop: '4px' }} />
                    <div>
                      <h5 style={{ fontSize: '18px', fontWeight: '600', color: '#1a1a2e' }}>Professional Services</h5>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div className="d-flex align-items-start">
                    <FaCheckCircle style={{ color: '#246bfd', fontSize: '20px', marginRight: '10px', marginTop: '4px' }} />
                    <div>
                      <h5 style={{ fontSize: '18px', fontWeight: '600', color: '#1a1a2e' }}>E-commerce (B2B)</h5>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div className="d-flex align-items-start">
                    <FaCheckCircle style={{ color: '#246bfd', fontSize: '20px', marginRight: '10px', marginTop: '4px' }} />
                    <div>
                      <h5 style={{ fontSize: '18px', fontWeight: '600', color: '#1a1a2e' }}>Real Estate</h5>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div className="d-flex align-items-start">
                    <FaCheckCircle style={{ color: '#246bfd', fontSize: '20px', marginRight: '10px', marginTop: '4px' }} />
                    <div>
                      <h5 style={{ fontSize: '18px', fontWeight: '600', color: '#1a1a2e' }}>Automotive</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===================== Client Testimonials Section ===================== */}
      <div className="service-area pd-top-60 pd-bottom-60">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center mb-5">
              <h2 className="mb-4" style={{ fontSize: '36px', fontWeight: '700', color: '#1a1a2e' }}>
                What Our Clients Say
              </h2>
              <p className="mb-5" style={{ fontSize: '16px', lineHeight: '1.8', color: '#333', maxWidth: '900px', margin: '0 auto' }}>
                Don't just take our word for it. Hear from our satisfied B2B clients who have experienced significant growth with our SEO services.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="p-4" style={{ background: '#fff', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)', height: '100%' }}>
                <div className="mb-3">
                  <FaStar style={{ color: '#ffc107', fontSize: '20px' }} />
                  <FaStar style={{ color: '#ffc107', fontSize: '20px' }} />
                  <FaStar style={{ color: '#ffc107', fontSize: '20px' }} />
                  <FaStar style={{ color: '#ffc107', fontSize: '20px' }} />
                  <FaStar style={{ color: '#ffc107', fontSize: '20px' }} />
                </div>
                <p className="mb-4" style={{ fontSize: '16px', lineHeight: '1.8', color: '#333', fontStyle: 'italic' }}>
                  "RankON Technologies transformed our online presence. Their B2B SEO strategies brought us high-quality leads and a significant increase in organic traffic. Highly recommended!"
                </p>
                <div>
                  <div style={{ fontWeight: '600', fontSize: '18px', color: '#1a1a2e' }}>John Doe</div>
                  <div style={{ fontSize: '14px', color: '#666' }}>Marketing Director, Tech Solutions Inc.</div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="text-center">
                <div style={{ fontSize: '200px', opacity: '0.1', color: '#246bfd' }}>💼</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===================== Final CTA Section ===================== */}
      <div className="service-area pd-top-60 pd-bottom-60" style={{ background: '#f8f9fa' }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="text-center">
                <div style={{ fontSize: '200px', opacity: '0.1', color: '#246bfd' }}>📊</div>
              </div>
            </div>
            <div className="col-lg-6">
              <h2 className="mb-4" style={{ fontSize: '36px', fontWeight: '700', color: '#1a1a2e' }}>
                Ready to Boost Your B2B Leads?
              </h2>
              <p className="mb-4" style={{ fontSize: '16px', lineHeight: '1.8', color: '#333' }}>
                Let's discuss your B2B SEO needs and create a strategy that drives real business growth.
              </p>
              <Link className="btn btn-base border-radius-5" href="/contact" style={{ backgroundColor: '#ffc107', color: '#1a1a2e', padding: '15px 40px', fontSize: '16px', fontWeight: '600' }}>
                Get a Free Consultation
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
              <h2 className="mb-3" style={{ fontSize: '36px', fontWeight: '700', color: '#1a1a2e' }}>
                Frequently Asked Questions
              </h2>
              <p className="mb-4" style={{ fontSize: '16px', color: '#666' }}>
                Common questions about our B2B SEO services.
              </p>
              <div className="accordion" id="faqAccordion">
                <div className="accordion-item mb-3" style={{ border: '1px solid #e0e0e0', borderRadius: '8px' }}>
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq1"
                      style={{ backgroundColor: '#246bfd', color: '#fff', fontWeight: '600' }}
                    >
                      What is B2B SEO?
                    </button>
                  </h2>
                  <div id="faq1" className="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
                    <div className="accordion-body" style={{ fontSize: '16px', lineHeight: '1.8', color: '#333' }}>
                      B2B SEO (Business-to-Business Search Engine Optimization) is a specialized approach to SEO that focuses on targeting other businesses rather than individual consumers. It involves strategies tailored to longer sales cycles, industry-specific keywords, and content that addresses business needs and challenges.
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
                      How long does it take to see results from B2B SEO?
                    </button>
                  </h2>
                  <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body" style={{ fontSize: '16px', lineHeight: '1.8', color: '#333' }}>
                      B2B SEO typically takes 3-6 months to show significant results, as it involves building authority and trust in competitive business markets. However, initial improvements in technical SEO and on-page optimization may be visible within 1-2 months.
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
                      What makes B2B SEO different from B2C SEO?
                    </button>
                  </h2>
                  <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body" style={{ fontSize: '16px', lineHeight: '1.8', color: '#333' }}>
                      B2B SEO focuses on longer sales cycles, industry-specific terminology, and content that addresses business pain points. It typically targets higher-value keywords, requires more technical content, and emphasizes building authority in specific industries or niches.
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
                      Do you offer custom B2B SEO packages?
                    </button>
                  </h2>
                  <div id="faq4" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body" style={{ fontSize: '16px', lineHeight: '1.8', color: '#333' }}>
                      Yes, we offer fully customized B2B SEO packages tailored to your specific business needs, industry, and goals. Our team will work with you to create a package that addresses your unique challenges and objectives.
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
                      How do you measure the success of B2B SEO campaigns?
                    </button>
                  </h2>
                  <div id="faq5" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body" style={{ fontSize: '16px', lineHeight: '1.8', color: '#333' }}>
                      We measure success through various metrics including keyword rankings, organic traffic growth, lead generation, conversion rates, domain authority, and ROI. You'll receive monthly reports with detailed analytics showing your campaign's performance.
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
    </>
  );
};

export default BusinessConsultingArea;

