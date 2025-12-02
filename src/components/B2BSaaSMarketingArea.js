'use client'
import Link from 'next/link';
import React, { useState } from 'react';
import {
  FaAngleDoubleRight,
  FaArrowRight,
  FaCheckCircle,
  FaPhone,
  FaStar,
} from 'react-icons/fa';

const B2BSaaSMarketingArea = () => {
  const [activeTab, setActiveTab] = useState('ppc');

  return (
    <>
      {/* ===================== Hero Banner Section ===================== */}
      <div
        className="banner-area bg-relative banner-area-1 pd-bottom-60 bg-cover"
        style={{ 
          background: 'linear-gradient(135deg, #246bfd 0%, #1e5dd8 100%)',
          minHeight: '600px',
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="banner-inner">
                <h6 className="subtitle mb-3" style={{ color: '#fff', fontSize: '18px', fontWeight: '600' }}>
                  Supercharge Your B2B Brands
                </h6>
                <h2 className="title mb-4" style={{ color: '#fff', fontSize: '48px', fontWeight: '700' }}>
                  Top SaaS Marketing Agency To Scale Your Business
                </h2>
                <p className="content mb-4" style={{ color: '#fff', fontSize: '18px' }}>
                  We craft high-ROI marketing strategies tailored to every SaaS product—built for scale, speed, and sales
                </p>
                <Link className="btn btn-base border-radius-5" href="/contact" style={{ backgroundColor: '#1e3a8a', color: '#fff', padding: '15px 40px', fontSize: '16px', fontWeight: '600', textAlign: 'center', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                  GET FREE SAAS STRATEGY CALL
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="text-center">
                <img 
                  src="assets/img/service/7.png" 
                  alt="B2B SaaS Marketing" 
                  style={{ 
                    width: '100%', 
                    height: 'auto', 
                    maxWidth: '600px',
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

      {/* ===================== Company Introduction Section ===================== */}
      <div className="service-area pd-top-60 pd-bottom-60">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="text-center mb-4 mb-lg-0">
                <img 
                  src="assets/img/about/9.png" 
                  alt="B2B SaaS Marketing" 
                  style={{ 
                    width: '100%', 
                    height: 'auto', 
                    maxWidth: '600px',
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
            <div className="col-lg-6">
              <h2 className="mb-4" style={{ fontSize: '42px', fontWeight: '700' }}>
                Elevate Your Brands with The Finest B2B SaaS Marketing Agency
              </h2>
              <p className="mb-4">
                Webnox is a full-service global SaaS marketing company with 14+ years of experience in helping firms flourish and grow their businesses. We possess a deep understanding of the common marketing challenges faced by B2C and B2B SaaS businesses.
              </p>
              <h4 className="mb-3">SaaS Marketing Built for B2B Buyers</h4>
              <p className="mb-4">
                Our aim is to assist you in developing your business by enhancing lead generation, improving lead conversion, and crafting compelling content through our effective SaaS marketing services.
              </p>
              <p>
                Our team of expert inbound marketing, content, and marketing automation specialists collaborates with you to develop and execute a robust SaaS marketing strategy for your business. We take pride in being the only SaaS content agency that integrates growth marketing principles across marketing disciplines.
              </p>
              <Link className="btn btn-base border-radius-5 mt-4" href="tel:+919047941979" style={{ backgroundColor: '#1e3a8a', color: '#fff', padding: '15px 40px', fontSize: '16px', fontWeight: '600', textAlign: 'center', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                <FaPhone /> +91 90479 41979
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ===================== Strategic SaaS Marketing Services Section ===================== */}
      <div className="service-area pd-top-60 pd-bottom-60" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center mb-5">
                <h2>Our Strategic SaaS Marketing Services For Qualified B2B Leads</h2>
              </div>
              <div className="row mb-4">
                <div className="col-lg-12">
                  <div className="d-flex flex-wrap gap-3 justify-content-center">
                    <button
                      className={`btn ${activeTab === 'ppc' ? 'btn-primary' : 'btn-outline-primary'}`}
                      onClick={() => setActiveTab('ppc')}
                      style={{ borderRadius: '8px', padding: '12px 30px', fontWeight: '600' }}
                    >
                      SaaS PPC Marketing
                    </button>
                    <button
                      className={`btn ${activeTab === 'email' ? 'btn-primary' : 'btn-outline-primary'}`}
                      onClick={() => setActiveTab('email')}
                      style={{ borderRadius: '8px', padding: '12px 30px', fontWeight: '600' }}
                    >
                      SaaS Email Marketing
                    </button>
                    <button
                      className={`btn ${activeTab === 'inbound' ? 'btn-primary' : 'btn-outline-primary'}`}
                      onClick={() => setActiveTab('inbound')}
                      style={{ borderRadius: '8px', padding: '12px 30px', fontWeight: '600' }}
                    >
                      SaaS Inbound Marketing
                    </button>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  {activeTab === 'ppc' && (
                    <div>
                      <p className="mb-3">
                        A successful PPC campaign can generate sales-qualified leads immediately, unlike SEO or inbound marketing. Building and sustaining an audience is crucial for any SaaS business. PPC campaigns can generate traffic quickly, making them an essential component of your marketing strategy.
                      </p>
                      <p>
                        Our SaaS PPC team specializes in optimizing paid campaigns and creating high-converting landing pages to ensure your success in a competitive market. We leverage data-driven insights to maximize your ROI and drive qualified leads to your business.
                      </p>
                    </div>
                  )}
                  {activeTab === 'email' && (
                    <div>
                      <p className="mb-3">
                        Email marketing remains one of the most effective channels for B2B SaaS companies. Our email marketing services help you nurture leads, engage customers, and drive conversions through personalized, data-driven campaigns.
                      </p>
                      <p>
                        We create automated email sequences, segment your audience, and deliver targeted content that moves prospects through your sales funnel. Our email campaigns are designed to increase engagement, reduce churn, and boost your MRR.
                      </p>
                    </div>
                  )}
                  {activeTab === 'inbound' && (
                    <div>
                      <p className="mb-3">
                        Inbound marketing attracts customers through valuable content and experiences tailored to them. Our inbound marketing strategies help you build trust, establish authority, and generate qualified leads organically.
                      </p>
                      <p>
                        We create comprehensive content strategies, optimize your website for search engines, and leverage social media to attract and engage your target audience. Our inbound approach focuses on providing value first, which naturally leads to conversions.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===================== Versatile SaaS Applications Section ===================== */}
      <div className="service-area pd-top-60 pd-bottom-60" style={{ background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h2 className="mb-4" style={{ color: '#fff', fontSize: '36px', fontWeight: '700' }}>
                Versatile SaaS Applications for Every Industry's Unique Needs
              </h2>
              <div className="row mt-4">
                <div className="col-md-4 mb-4">
                  <div className="text-center">
                    <div className="bg-white p-3 rounded mb-2" style={{ minHeight: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <div style={{ fontSize: '48px' }}>👥</div>
                    </div>
                    <p style={{ color: '#fff', fontWeight: '600' }}>Social Networking</p>
                  </div>
                </div>
                <div className="col-md-4 mb-4">
                  <div className="text-center">
                    <div className="bg-white p-3 rounded mb-2" style={{ minHeight: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <div style={{ fontSize: '48px' }}>📊</div>
                    </div>
                    <p style={{ color: '#fff', fontWeight: '600' }}>Sales Marketing</p>
                  </div>
                </div>
                <div className="col-md-4 mb-4">
                  <div className="text-center">
                    <div className="bg-white p-3 rounded mb-2" style={{ minHeight: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <div style={{ fontSize: '48px' }}>🏦</div>
                    </div>
                    <p style={{ color: '#fff', fontWeight: '600' }}>Banking Service</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <h2 className="mb-4" style={{ color: '#fff', fontSize: '36px', fontWeight: '700' }}>
                Catalyzing Growth Across Sectors-
              </h2>
              <p style={{ color: '#fff', fontSize: '18px' }}>
                With extensive experience in delivering SaaS marketing solutions to clients in diverse industries, we adhere to best practices for every new project. Simultaneously, we acknowledge and cater to the distinct needs and objectives of each business we serve.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ===================== How We Empower Section ===================== */}
      <div className="service-area pd-top-60 pd-bottom-60">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center mb-5">
              <h6 className="text-primary mb-2" style={{ fontSize: '20px', fontWeight: '600' }}>How We Empower Your SaaS Growth?</h6>
              <h2 className="mb-4" style={{ fontSize: '48px', fontWeight: '700' }}>
                Premier B2B Marketing Company To Drive Leads
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 mb-4">
              <div className="p-4" style={{ boxShadow: '0 2px 10px rgba(0,0,0,0.1)', borderRadius: '12px' }}>
                <div className="mb-3">
                  <div className="text-primary" style={{ fontSize: '48px' }}>📢</div>
                </div>
                <h4 className="mb-3">Targeted campaigns</h4>
                <p>
                  We create marketing campaigns that target a group of consumers, taking into consideration demographics, industries, job roles, etc. Our targeted approach ensures that your marketing efforts reach the right audience at the right time, maximizing your conversion rates and ROI.
                </p>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="p-4" style={{ boxShadow: '0 2px 10px rgba(0,0,0,0.1)', borderRadius: '12px' }}>
                <div className="mb-3">
                  <div className="text-primary" style={{ fontSize: '48px' }}>💰</div>
                </div>
                <h4 className="mb-3">Flexible pricing</h4>
                <p>
                  Our B2B SaaS digital marketing solutions provide you with affordable services to fulfill your needs that suit your budget. We offer flexible pricing models that scale with your business, ensuring you get maximum value for your investment.
                </p>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="p-4" style={{ boxShadow: '0 2px 10px rgba(0,0,0,0.1)', borderRadius: '12px' }}>
                <div className="mb-3">
                  <div className="text-primary" style={{ fontSize: '48px' }}>📈</div>
                </div>
                <h4 className="mb-3">Data-driven strategies</h4>
                <p>
                  We create effective strategies like Raw User Behavior Data, Customer Churn Rate, Customer Lifetime Value, Customer Engagement Data, etc. Our data-driven approach ensures that every decision is backed by insights, leading to better results and higher ROI.
                </p>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="p-4" style={{ boxShadow: '0 2px 10px rgba(0,0,0,0.1)', borderRadius: '12px' }}>
                <div className="mb-3">
                  <div className="text-primary" style={{ fontSize: '48px' }}>🎯</div>
                </div>
                <h4 className="mb-3">Performance Analytics and Optimization</h4>
                <p>
                  Utilizing advanced analytics, we continuously monitor campaign performance, making data-backed adjustments to maximize ROI. Our optimization process ensures that your marketing efforts are always improving and delivering better results over time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===================== What Makes Us Different Section ===================== */}
      <div className="service-area pd-top-60 pd-bottom-60" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center mb-5">
              <h2 className="mb-4" style={{ fontSize: '48px', fontWeight: '700' }}>
                What Makes Us Our Service Different?
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-6 mb-4">
              <div className="p-4 bg-white rounded" style={{ boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
                <div className="mb-3">
                  <div className="text-primary" style={{ fontSize: '48px' }}>☁️</div>
                </div>
                <h4 className="mb-3">Deep SaaS & B2B Focus</h4>
                <p>We speak your buyers' language. Our team understands the unique challenges and opportunities in the B2B SaaS space, allowing us to create marketing strategies that resonate with your target audience.</p>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 mb-4">
              <div className="p-4 bg-white rounded" style={{ boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
                <div className="mb-3">
                  <div className="text-primary" style={{ fontSize: '48px' }}>⚡</div>
                </div>
                <h4 className="mb-3">Performance-Driven</h4>
                <p>We optimize for revenue, not just impressions. Every campaign we run is designed to drive measurable business results, focusing on metrics that matter most to your bottom line.</p>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 mb-4">
              <div className="p-4 bg-white rounded" style={{ boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
                <div className="mb-3">
                  <div className="text-primary" style={{ fontSize: '48px' }}>🔄</div>
                </div>
                <h4 className="mb-3">Full-Funnel Strategy</h4>
                <p>From awareness to onboarding. We create comprehensive marketing strategies that guide prospects through every stage of the buyer's journey, ensuring maximum conversion at each touchpoint.</p>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 mb-4">
              <div className="p-4 bg-white rounded" style={{ boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
                <div className="mb-3">
                  <div className="text-primary" style={{ fontSize: '48px' }}>👥</div>
                </div>
                <h4 className="mb-3">Plug-and-Play Team</h4>
                <p>Get a full-stack marketing team without hiring in-house. Our team of experts works as an extension of your business, providing all the marketing expertise you need without the overhead of full-time employees.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===================== SEO Services Section ===================== */}
      <div className="service-area pd-top-60 pd-bottom-60">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2 className="mb-4" style={{ fontSize: '42px', fontWeight: '700' }}>
                Result Guaranteed <span className="text-primary">SaaS SEO Services</span>
              </h2>
              <p className="mb-4">
                Search Engine Optimization (SEO) stands as the foremost source for attracting clients to software companies. SEO can generate up to 71% of organic traffic for SaaS businesses. However, only 13% of software companies prioritize SEO and content marketing, suggesting an opportunity for businesses to gain top Google rankings by investing in SEO.
              </p>
              <p className="mb-5">
                SEO is crucial for the success of any SaaS business, regardless of its size. SEO helps control rankings and website traffic, directly impacting online sales and revenue. Our SEO SaaS software services include:
              </p>
              <div className="row">
                <div className="col-lg-4 col-md-6 mb-4">
                  <div className="text-center p-4" style={{ boxShadow: '0 2px 10px rgba(0,0,0,0.1)', borderRadius: '12px' }}>
                    <div className="text-primary mb-3" style={{ fontSize: '48px' }}>🔍</div>
                    <h5>Keyword Research</h5>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                  <div className="text-center p-4" style={{ boxShadow: '0 2px 10px rgba(0,0,0,0.1)', borderRadius: '12px' }}>
                    <div className="text-primary mb-3" style={{ fontSize: '48px' }}>🏗️</div>
                    <h5>Site architecture</h5>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                  <div className="text-center p-4" style={{ boxShadow: '0 2px 10px rgba(0,0,0,0.1)', borderRadius: '12px' }}>
                    <div className="text-primary mb-3" style={{ fontSize: '48px' }}>📢</div>
                    <h5>On-page SEO</h5>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                  <div className="text-center p-4" style={{ boxShadow: '0 2px 10px rgba(0,0,0,0.1)', borderRadius: '12px', backgroundColor: '#f8f9fa' }}>
                    <div className="text-primary mb-3" style={{ fontSize: '48px' }}>🎯</div>
                    <h5>Off-page SEO</h5>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                  <div className="text-center p-4" style={{ boxShadow: '0 2px 10px rgba(0,0,0,0.1)', borderRadius: '12px' }}>
                    <div className="text-primary mb-3" style={{ fontSize: '48px' }}>💻</div>
                    <h5>Technical SEO</h5>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                  <div className="text-center p-4" style={{ boxShadow: '0 2px 10px rgba(0,0,0,0.1)', borderRadius: '12px' }}>
                    <div className="text-primary mb-3" style={{ fontSize: '48px' }}>📊</div>
                    <h5>SEO reporting</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===================== Client Testimonial Section ===================== */}
      <div className="service-area pd-top-60 pd-bottom-60" style={{ backgroundColor: '#f0f4ff' }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="text-center mb-4 mb-lg-0">
                <img 
                  src="assets/img/about/9.png" 
                  alt="Client Testimonial" 
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
            <div className="col-lg-6">
              <h6 className="text-primary mb-2" style={{ fontSize: '18px', fontWeight: '600' }}>
                Generated over 200+ qualified B2B leads and counting
              </h6>
              <h2 className="mb-4" style={{ fontSize: '42px', fontWeight: '700' }}>
                Client Testimonial
              </h2>
              <div className="p-4 rounded" style={{ backgroundColor: '#1a1a2e', color: '#fff' }}>
                <div className="mb-3">
                  <div className="d-flex align-items-center mb-2">
                    <div className="bg-white text-dark p-2 rounded me-2" style={{ fontSize: '24px', fontWeight: '700' }}>ee</div>
                    <div>
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} style={{ color: '#ffc107' }} />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="mb-3" style={{ fontSize: '18px' }}>
                  "Join the millions worldwide who have turned their dreams into reality with our support."
                </p>
                <p className="mb-0" style={{ fontWeight: '600' }}>Mathias Rivera</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===================== Accelerate Your B2B Brands Section ===================== */}
      <div className="service-area pd-top-60 pd-bottom-60">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="p-5 rounded" style={{ background: '#f8f9fa', color: '#1a1a2e', border: '1px solid #e0e0e0' }}>
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <h2 className="mb-4" style={{ fontSize: '36px', fontWeight: '700', color: '#1a1a2e' }}>
                      Accelerate Your B2B Brands With Our SaaS Marketing Expert
                    </h2>
                    <Link className="btn btn-primary border-radius-5" href="tel:+919047941979" style={{ backgroundColor: '#1e3a8a', color: '#fff', padding: '15px 40px', fontSize: '16px', fontWeight: '600', textAlign: 'center', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                      <FaPhone /> +91 90479 41979
                    </Link>
                  </div>
                  <div className="col-lg-6 text-center">
                    <div style={{ fontSize: '120px', opacity: '0.2', color: '#1a1a2e' }}>📱</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===================== Content Marketing Section ===================== */}
      <div className="service-area pd-top-60 pd-bottom-60" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2 className="mb-4" style={{ fontSize: '42px', fontWeight: '700' }}>
                <span className="text-primary">SaaS</span> Content Marketing
              </h2>
              <p className="mb-4">
                Content plays a pivotal role in SaaS marketing. However, it often takes time to yield results, posing challenges for many B2B SaaS companies. Compelling content is pivotal in drawing quality leads, which can eventually convert into valuable clients, especially for B2B product offerings. Substandard content can result in lost leads and difficulty in driving traffic to your website. We can assist you on various fronts:
              </p>
              <ul className="single-list-inner style-check mb-4">
                <li>
                  <FaCheckCircle /> Developing a SaaS content marketing strategy, including an editorial calendar and diverse content types.
                </li>
                <li>
                  <FaCheckCircle /> Crafting high-quality and engaging content suitable for all stages of your funnel, adaptable for multiple channels such as PPC, SEO, social media marketing, and email marketing.
                </li>
                <li>
                  <FaCheckCircle /> Creating high-converting landing pages to generate leads for future conversions through gated content.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* ===================== Innovative Service Section ===================== */}
      <div className="service-area pd-top-60 pd-bottom-60">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center mb-5">
              <h2 className="mb-4" style={{ fontSize: '42px', fontWeight: '700' }}>
                We Elevate Your SaaS Venture with Our Innovative Service
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 mb-4">
              <div className="text-center p-4" style={{ boxShadow: '0 2px 10px rgba(0,0,0,0.1)', borderRadius: '12px', minHeight: '300px' }}>
                <div className="mb-3">
                  <div style={{ fontSize: '64px' }}>🔍</div>
                </div>
                <h4 className="mb-3">SEO & Analytics</h4>
                <p>
                  Comprehensive SEO strategies and analytics to drive organic traffic and measure performance. We optimize your content, keywords, and technical aspects to improve search rankings.
                </p>
              </div>
            </div>
            <div className="col-lg-4 mb-4">
              <div className="text-center p-4" style={{ boxShadow: '0 2px 10px rgba(0,0,0,0.1)', borderRadius: '12px', minHeight: '300px' }}>
                <div className="mb-3">
                  <div style={{ fontSize: '64px' }}>📱</div>
                </div>
                <h4 className="mb-3">Social Media Marketing & PPC</h4>
                <p>
                  Strategic social media campaigns and pay-per-click advertising to reach your target audience and drive conversions. We create engaging content and optimize ad performance.
                </p>
              </div>
            </div>
            <div className="col-lg-4 mb-4">
              <div className="text-center p-4" style={{ boxShadow: '0 2px 10px rgba(0,0,0,0.1)', borderRadius: '12px', minHeight: '300px' }}>
                <div className="mb-3">
                  <div style={{ fontSize: '64px' }}>💻</div>
                </div>
                <h4 className="mb-3">Web Design & Development</h4>
                <p>
                  Custom web design and development solutions that align with your brand and business goals. We create responsive, user-friendly websites that convert visitors into customers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===================== Why Hire Us Section ===================== */}
      <div className="service-area pd-top-60 pd-bottom-60" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center mb-5">
              <h2 className="mb-4" style={{ fontSize: '42px', fontWeight: '700' }}>
                Why should you hire Webnox as your SaaS marketing company?
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 mb-4">
              <div className="p-4 bg-white rounded" style={{ boxShadow: '0 2px 10px rgba(0,0,0,0.1)', minHeight: '400px' }}>
                <div className="mb-3 text-center">
                  <img 
                    src="assets/img/service/7.png" 
                    alt="Increase MRR" 
                    style={{ 
                      width: '100%', 
                      height: '200px', 
                      objectFit: 'cover', 
                      borderRadius: '8px',
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
                <h4 className="mb-3">We increase your MRR</h4>
                <p>
                  Monthly Recurring Revenue is the most important metric for subscription business success. Our dedicated marketing team can boost MRR by generating more qualified leads for SaaS companies and services with recurring client bases.
                </p>
              </div>
            </div>
            <div className="col-lg-4 mb-4">
              <div className="p-4 bg-white rounded" style={{ boxShadow: '0 2px 10px rgba(0,0,0,0.1)', minHeight: '400px' }}>
                <div className="mb-3 text-center">
                  <img 
                    src="assets/img/about/9.png" 
                    alt="Dedicated Team" 
                    style={{ 
                      width: '100%', 
                      height: '200px', 
                      objectFit: 'cover', 
                      borderRadius: '8px',
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
                <h4 className="mb-3">Dedicated SaaS Team</h4>
                <p>
                  Webnox is a dedicated B2B SaaS development partner with years of experience as a B2B SaaS digital marketing agency. We use different strategies for every client, combining digital marketing best practices, development hacks, and significant information.
                </p>
              </div>
            </div>
            <div className="col-lg-4 mb-4">
              <div className="p-4 bg-white rounded" style={{ boxShadow: '0 2px 10px rgba(0,0,0,0.1)', minHeight: '400px' }}>
                <div className="mb-3 text-center">
                  <img 
                    src="assets/img/service/7.png" 
                    alt="Marketing Strategy" 
                    style={{ 
                      width: '100%', 
                      height: '200px', 
                      objectFit: 'cover', 
                      borderRadius: '8px',
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
                <h4 className="mb-3">Effective saas marketing strategy</h4>
                <p>
                  We are serious about SaaS marketing and helping SaaS companies. Webnox has a group of experienced virtual chief marketing officers with the expertise to deliver S.M.A.R.T. outcomes, recognizing that no two SaaS businesses are the same.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===================== Three Columns Section ===================== */}
      <div className="service-area pd-top-60 pd-bottom-60">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 mb-4">
              <div className="p-4" style={{ boxShadow: '0 2px 10px rgba(0,0,0,0.1)', borderRadius: '12px', minHeight: '400px' }}>
                <div className="mb-3 text-center">
                  <img 
                    src="assets/img/about/9.png" 
                    alt="Full Team Alignment" 
                    style={{ 
                      width: '100%', 
                      height: '200px', 
                      objectFit: 'cover', 
                      borderRadius: '8px',
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
                <h4 className="mb-3">Full team alignment</h4>
                <p>
                  Our marketing techniques can help you express your unique value proposition and attract new customers to your business. We work as part of your team for as long as it takes to get your marketing function working - then we change out when it's sustainable. Regardless of whether you're early stage, up and coming, or doubling down on Software-as-a-Service, we have the SaaS marketing knowledge and skill you need to get growing.
                </p>
              </div>
            </div>
            <div className="col-lg-4 mb-4">
              <div className="p-4" style={{ boxShadow: '0 2px 10px rgba(0,0,0,0.1)', borderRadius: '12px', minHeight: '400px' }}>
                <div className="mb-3 text-center">
                  <img 
                    src="assets/img/service/7.png" 
                    alt="Churn Rate Optimization" 
                    style={{ 
                      width: '100%', 
                      height: '200px', 
                      objectFit: 'cover', 
                      borderRadius: '8px',
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
                <h4 className="mb-3">Churn rate optimization</h4>
                <p>
                  Acquiring a new customer is considerably more expensive than retaining and selling to an existing one. We help you to reduce customer churn by engaging with your customer base in a strategic and timely fashion. Our retention strategies focus on understanding customer needs and delivering value that keeps them engaged.
                </p>
              </div>
            </div>
            <div className="col-lg-4 mb-4">
              <div className="p-4" style={{ boxShadow: '0 2px 10px rgba(0,0,0,0.1)', borderRadius: '12px', minHeight: '400px' }}>
                <div className="mb-3 text-center">
                  <img 
                    src="assets/img/about/9.png" 
                    alt="ROI Focused" 
                    style={{ 
                      width: '100%', 
                      height: '200px', 
                      objectFit: 'cover', 
                      borderRadius: '8px',
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
                <h4 className="mb-3">ROI Focused</h4>
                <p>
                  Get the highest ROI with Webnox's data-driven marketing strategy. Whether you're a small or big business, every dollar counts. Webnox's unique success metric is ROI - if you're not getting sales, we're not succeeding. We empower SaaS companies to scale quickly and acquire customers by devoting 100% of our efforts to digital marketing channels that deliver the highest ROI.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===================== Service Details with Sidebar ===================== */}
      <div className="service-area pd-top-60 pd-bottom-60">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-12">
              <div className="td-sidebar service-sidebar">
                <div className="widget widget_catagory">
                  <h5 className="widget-title">
                    <FaArrowRight /> All Service lists
                  </h5>
                  <ul className="catagory-items">
                    <li>
                      <Link href="/digital-marketing"> Digital Marketing</Link>
                    </li>
                    <li>
                      <Link href="/search-engine-optimization"> Search Engine Optimization</Link>
                    </li>
                    <li>
                      <Link href="/social-media-marketing"> Social Media Marketing</Link>
                    </li>
                    <li>
                      <Link href="/google-adwords"> Google Adwords</Link>
                    </li>
                    <li>
                      <Link href="/b2b-saas-marketing"> B2B marketing / SaaS Marketing</Link>
                    </li>
                    <li>
                      <Link href="/ecommerce-development"> Ecommerce Development</Link>
                    </li>
                    <li>
                      <Link href="/branding-service"> Branding Service</Link>
                    </li>
                    <li>
                      <Link href="/business-consulting"> Business Consulting</Link>
                    </li>
                    <li>
                      <Link href="/graphic-logo-design"> Graphic/Logo Design</Link>
                    </li>
                    <li>
                      <Link href="/wordpress-development"> Wordpress Development</Link>
                    </li>
                    <li>
                      <Link href="/ai-agent-development"> AI Agent Development</Link>
                    </li>
                    <li>
                      <Link href="/software-development"> Software Development</Link>
                    </li>
                    <li>
                      <Link href="/mobile-app-development"> Mobile App Development</Link>
                    </li>
                    <li>
                      <Link href="/saas-app-development"> SaaS App development</Link>
                    </li>
                    <li>
                      <Link href="/digital-transformation"> Digital Transformation</Link>
                    </li>
                  </ul>
                </div>
                <div className="widget widget_author text-center">
                  <div className="thumb">
                    <img 
                      src="assets/img/digital-transformation-side.jpg" 
                      alt="B2B SaaS Marketing" 
                      style={{ 
                        width: '100%', 
                        height: 'auto', 
                        maxWidth: '410px', 
                        maxHeight: '350px', 
                        objectFit: 'cover', 
                        borderRadius: '8px',
                        imageRendering: 'crisp-edges',
                        imageRendering: '-webkit-optimize-contrast',
                        imageRendering: 'optimizeQuality',
                        WebkitBackfaceVisibility: 'hidden',
                        backfaceVisibility: 'hidden',
                        transform: 'translateZ(0)',
                        willChange: 'transform',
                        filter: 'none',
                        objectPosition: 'center'
                      }} 
                    />
                  </div>
                  <div className="details">
                    <Link className="btn btn-base border-radius-5" href="/contact" style={{ backgroundColor: '#1e3a8a', color: '#fff', padding: '15px 40px', fontSize: '16px', fontWeight: '600', textAlign: 'center', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                      Discover our company +
                    </Link>
                  </div>
                </div>
                <div className="widget widget_download">
                  <h5 className="widget-title">
                    <FaArrowRight /> Download
                  </h5>
                  <ul>
                    <li>
                      <Link href="#">
                        {' '}
                        Company Profile <FaAngleDoubleRight />
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        {' '}
                        Zip File Download <FaAngleDoubleRight />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="blog-details-page-content">
                <div className="single-blog-inner mb-0">
                  <div className="thumb">
                    <img 
                      src="assets/img/digital-transformation-main.jpg" 
                      alt="B2B SaaS Marketing Services" 
                      style={{ 
                        width: '100%', 
                        height: 'auto', 
                        borderRadius: '8px',
                        imageRendering: 'crisp-edges',
                        imageRendering: '-webkit-optimize-contrast',
                        imageRendering: 'optimizeQuality',
                        WebkitBackfaceVisibility: 'hidden',
                        backfaceVisibility: 'hidden',
                        transform: 'translateZ(0)',
                        willChange: 'transform',
                        filter: 'none',
                        objectFit: 'cover',
                        objectPosition: 'center'
                      }} 
                    />
                  </div>
                  <div className="details">
                    <h4>Expert B2B SaaS Marketing Services</h4>
                    <p>
                      Our B2B SaaS marketing team specializes in creating comprehensive marketing strategies tailored to your unique business needs. We leverage data-driven insights and industry best practices to deliver results that drive growth and revenue.
                    </p>
                    <p>
                      With years of experience in the SaaS space, we understand the unique challenges and opportunities that B2B SaaS companies face. We create marketing strategies that not only attract leads but also convert them into loyal customers.
                    </p>
                    <h4 className="mt-4">Comprehensive SaaS Marketing Solutions</h4>
                    <p>
                      From lead generation to customer retention, we provide end-to-end marketing services that help your SaaS business grow. Our services include PPC marketing, email marketing, inbound marketing, SEO, content marketing, and more.
                    </p>
                    <p>
                      We ensure that every marketing campaign we run is optimized for performance, with a focus on metrics that matter most to your business. Our data-driven approach ensures that you get maximum ROI from your marketing investment.
                    </p>

                    <h5 className="mt-4 mb-3">Proven Results and Continuous Optimization</h5>
                    <p>
                      Our track record speaks for itself. We've helped numerous B2B SaaS companies achieve significant growth through our comprehensive marketing strategies. We don't just set up campaigns and walk away—we continuously monitor, analyze, and optimize every aspect of your marketing efforts to ensure sustained success.
                    </p>
                    <p>
                      Whether you're a startup looking to establish your presence or an established SaaS company aiming to scale, our team has the expertise and experience to deliver results. We work closely with you to understand your business goals, target audience, and competitive landscape, then craft customized marketing strategies that drive measurable outcomes.
                    </p>

                    <h5 className="mt-4 mb-3">Multi-Channel Marketing Excellence</h5>
                    <p>
                      We understand that successful SaaS marketing requires a cohesive approach across multiple channels. Our team excels at creating integrated marketing campaigns that work seamlessly across PPC, SEO, email, social media, and content marketing. This multi-channel strategy ensures that your brand message is consistent and reaches your target audience at every touchpoint in their buyer's journey.
                    </p>
                    <p>
                      By leveraging the strengths of each marketing channel and ensuring they work together harmoniously, we create a powerful marketing ecosystem that drives both short-term results and long-term growth. Our cross-channel analytics and reporting give you complete visibility into how each channel contributes to your overall marketing success.
                    </p>

                    <h5 className="mt-4 mb-3">Scalable Growth Strategies</h5>
                    <p>
                      As your SaaS business grows, your marketing needs evolve. We design marketing strategies that are built to scale with your business, whether you're targeting 100 new customers or 10,000. Our scalable approach means that as your revenue grows, your marketing infrastructure grows with it, ensuring consistent performance at every stage of your business journey.
                    </p>
                    <p>
                      We help you build marketing systems and processes that can handle increased volume without sacrificing quality or performance. From automated lead nurturing sequences to scalable content production workflows, we create marketing operations that support your growth ambitions and adapt to changing market conditions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===================== FAQs Section ===================== */}
      <div className="service-area pd-top-60 pd-bottom-60">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h2 className="mb-4" style={{ fontSize: '48px', fontWeight: '700', color: '#000' }}>FAQs</h2>
              <div className="faq-list">
                <div className="accordion accordion-inner" id="faqAccordion">
                  <div className="accordion-item mb-3" style={{ borderRadius: '12px', border: '1px solid #e0e0e0', overflow: 'hidden' }}>
                    <h2 className="accordion-header" id="faqHeadingOne">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faqCollapseOne"
                        aria-expanded="true"
                        aria-controls="faqCollapseOne"
                        style={{
                          backgroundColor: '#fff',
                          color: '#246bfd',
                          fontWeight: '600',
                          borderRadius: '12px',
                          border: 'none',
                          padding: '20px'
                        }}
                      >
                        What is B2B SaaS marketing and why is it important?
                      </button>
                    </h2>
                    <div
                      id="faqCollapseOne"
                      className="accordion-collapse collapse show"
                      aria-labelledby="faqHeadingOne"
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body" style={{ padding: '20px', backgroundColor: '#f8f9fa' }}>
                        B2B SaaS marketing is the practice of promoting software-as-a-service products to business customers. It's crucial because SaaS businesses operate on a subscription model, requiring consistent customer acquisition and retention. Effective marketing helps generate qualified leads, increase MRR (Monthly Recurring Revenue), reduce churn, and scale your business efficiently.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item mb-3" style={{ borderRadius: '12px', border: '1px solid #e0e0e0', overflow: 'hidden' }}>
                    <h2 className="accordion-header" id="faqHeadingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faqCollapseTwo"
                        aria-expanded="false"
                        aria-controls="faqCollapseTwo"
                        style={{ 
                          backgroundColor: '#fff', 
                          color: '#000', 
                          fontWeight: '600',
                          borderRadius: '12px',
                          border: 'none',
                          padding: '20px'
                        }}
                      >
                        How long does it take to see results from SaaS marketing campaigns?
                      </button>
                    </h2>
                    <div
                      id="faqCollapseTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="faqHeadingTwo"
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body" style={{ padding: '20px', backgroundColor: '#f8f9fa' }}>
                        Results vary depending on the marketing channel. PPC campaigns can generate leads immediately, while SEO and content marketing typically take 3-6 months to show significant results. Email marketing can show results within weeks. Our team works to optimize campaigns continuously to accelerate results and maximize ROI.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item mb-3" style={{ borderRadius: '12px', border: '1px solid #e0e0e0', overflow: 'hidden' }}>
                    <h2 className="accordion-header" id="faqHeadingThree">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faqCollapseThree"
                        aria-expanded="false"
                        aria-controls="faqCollapseThree"
                        style={{ 
                          backgroundColor: '#fff', 
                          color: '#000', 
                          fontWeight: '600',
                          borderRadius: '12px',
                          border: 'none',
                          padding: '20px'
                        }}
                      >
                        What metrics should B2B SaaS companies track?
                      </button>
                    </h2>
                    <div
                      id="faqCollapseThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="faqHeadingThree"
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body" style={{ padding: '20px', backgroundColor: '#f8f9fa' }}>
                        Key metrics include MRR (Monthly Recurring Revenue), CAC (Customer Acquisition Cost), LTV (Customer Lifetime Value), churn rate, lead conversion rate, and marketing ROI. We help you track these metrics and optimize your marketing efforts to improve them continuously.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item mb-3" style={{ borderRadius: '12px', border: '1px solid #e0e0e0', overflow: 'hidden' }}>
                    <h2 className="accordion-header" id="faqHeadingFour">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faqCollapseFour"
                        aria-expanded="false"
                        aria-controls="faqCollapseFour"
                        style={{ 
                          backgroundColor: '#fff', 
                          color: '#000', 
                          fontWeight: '600',
                          borderRadius: '12px',
                          border: 'none',
                          padding: '20px'
                        }}
                      >
                        How do you help reduce customer churn?
                      </button>
                    </h2>
                    <div
                      id="faqCollapseFour"
                      className="accordion-collapse collapse"
                      aria-labelledby="faqHeadingFour"
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body" style={{ padding: '20px', backgroundColor: '#f8f9fa' }}>
                        We help reduce churn through strategic customer engagement, personalized email campaigns, onboarding optimization, and retention-focused content marketing. We analyze customer behavior data to identify at-risk customers and implement targeted strategies to keep them engaged and satisfied.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item mb-3" style={{ borderRadius: '12px', border: '1px solid #e0e0e0', overflow: 'hidden' }}>
                    <h2 className="accordion-header" id="faqHeadingFive">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faqCollapseFive"
                        aria-expanded="false"
                        aria-controls="faqCollapseFive"
                        style={{ 
                          backgroundColor: '#fff', 
                          color: '#000', 
                          fontWeight: '600',
                          borderRadius: '12px',
                          border: 'none',
                          padding: '20px'
                        }}
                      >
                        What makes your SaaS marketing approach different?
                      </button>
                    </h2>
                    <div
                      id="faqCollapseFive"
                      className="accordion-collapse collapse"
                      aria-labelledby="faqHeadingFive"
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body" style={{ padding: '20px', backgroundColor: '#f8f9fa' }}>
                        Our approach is performance-driven, focusing on revenue and ROI rather than just impressions. We have deep SaaS and B2B expertise, use full-funnel strategies, and work as a plug-and-play team that integrates seamlessly with your business. We optimize for metrics that matter most to your bottom line.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="faq-illustration text-center">
                <img
                  src="assets/img/faq-illustration.jpg"
                  alt="FAQs Illustration"
                  style={{
                    width: '100%',
                    height: '100%',
                    minHeight: '600px',
                    maxWidth: '500px',
                    objectFit: 'contain',
                    backfaceVisibility: 'hidden',
                    transform: 'translateZ(0px)',
                    willChange: 'transform',
                    filter: 'none'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ===================== B2B SaaS Marketing Area End ===================== */}
    </>
  );
};

export default B2BSaaSMarketingArea;

