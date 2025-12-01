import Link from 'next/link';
import React from 'react';
import {
  FaAngleDoubleRight,
  FaArrowRight,
  FaCheckCircle,
} from 'react-icons/fa';

const DigitalTransformationArea = () => {
  return (
    <>
      {/* ===================== Hero Banner Section ===================== */}
      <div
        className="banner-area bg-relative banner-area-1 pd-bottom-60 bg-cover"
        style={{ 
          background: 'linear-gradient(to right, #ffb366, #66b3ff)',
          minHeight: '600px',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="banner-inner text-center">
                <h2 className="title mb-4" style={{ color: '#000' }}>
                  Holistic Digital Transformation Services And Consulting For All Sectors
                </h2>
                <p className="content mb-4" style={{ color: '#000' }}>
                  Helping businesses to transform from traditional business models to digital with modern strategies and solutions – "Innovation is the spark, digital transformation is the flame"
                </p>
                <Link className="btn btn-base border-radius-5" href="/contact">
                  STEP INTO THE DIGITAL FUTURE
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===================== Innovative Company Section ===================== */}
      <div className="service-area pd-top-60 pd-bottom-60">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center mb-5">
                <h2>Innovative Digital Transformation Company Offers Expert Solutions Across India</h2>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <p className="mb-4">
                    Webnox's digital transformation service in India transforms and modernizes business across all industries to achieve specific sector goals in the current digital world. With 14+ years of experience in the IT field, we skillfully integrate digital transformation technologies into your business to digitalize your operations and enhance your customer experience, we drive real changes for sustainable growth and success.
                  </p>
                  <p className="mb-4">
                    Our comprehensive approach combines strategic consulting, cutting-edge technology implementation, and continuous optimization to ensure your business stays ahead of the competition. We understand that every business is unique, which is why we create customized solutions that align with your specific goals, industry requirements, and budget constraints.
                  </p>
                  <p className="mb-4">
                    From initial assessment to full-scale implementation and ongoing support, our team of experts works closely with you to ensure a smooth transition to digital operations. We focus on delivering measurable results that drive revenue growth, improve operational efficiency, and enhance customer satisfaction.
                  </p>
                </div>
                <div className="col-lg-6">
                  <div className="border-start border-primary border-4 ps-4 mb-4">
                    <h5 className="mb-3">Key Benefits:</h5>
                    <ul className="single-list-inner style-check mb-3">
                      <li>
                        <FaCheckCircle /> Forward-thinking approaches with <strong>future proof decisions</strong> for your business
                      </li>
                      <li>
                        <FaCheckCircle /> Tailored digital transformation strategies with <strong>cutting edge technologies</strong>
                      </li>
                      <li>
                        <FaCheckCircle /> Unlock <strong>growth opportunities</strong> with innovative digital transformation solutions
                      </li>
                      <li>
                        <FaCheckCircle /> <strong>Scalable solutions</strong> that grow with your business needs
                      </li>
                      <li>
                        <FaCheckCircle /> <strong>24/7 support</strong> and maintenance for uninterrupted operations
                      </li>
                      <li>
                        <FaCheckCircle /> <strong>ROI-focused</strong> implementations with measurable results
                      </li>
                    </ul>
                  </div>
                  <div className="p-4 bg-light rounded">
                    <h5 className="mb-3">Why Choose Us?</h5>
                    <p className="mb-2">
                      <strong>14+ Years Experience:</strong> Proven track record in delivering successful digital transformation projects across various industries.
                    </p>
                    <p className="mb-2">
                      <strong>Expert Team:</strong> Certified professionals with deep expertise in modern technologies and best practices.
                    </p>
                    <p className="mb-0">
                      <strong>Client-Centric Approach:</strong> We prioritize your business goals and work as an extension of your team.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===================== Service Frameworks Section ===================== */}
      <div className="service-area pd-top-120 pd-bottom-90 bg-gray">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center mb-5">
                <h2>Our Digital Transformation Service Frameworks For Future-Ready Businesses</h2>
                <p className="mt-3 mb-0">
                  Our comprehensive framework approach ensures that every aspect of your digital transformation journey is carefully planned, executed, and optimized for maximum impact. We combine strategic thinking with practical implementation to deliver results that matter.
                </p>
              </div>
              <div className="row">
                <div className="col-lg-4 col-md-6 mb-4">
                  <div className="single-service-inner style-hover-base h-100 p-4" style={{ boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
                    <div className="thumb mb-3">
                      <h3 className="text-primary" style={{ fontSize: '48px', fontWeight: '700', marginBottom: '10px' }}>01</h3>
                    </div>
                    <h4>Digital Strategy & Consulting</h4>
                    <p>We help businesses develop a comprehensive digital strategy that aligns with their goals and market trends.</p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                  <div className="single-service-inner style-hover-base h-100 p-4" style={{ boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
                    <div className="thumb mb-3">
                      <h3 className="text-primary" style={{ fontSize: '48px', fontWeight: '700', marginBottom: '10px' }}>02</h3>
                    </div>
                    <h4>Technology Modernization</h4>
                    <p>Upgrading legacy systems and infrastructure to modern, scalable, and secure technologies.</p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                  <div className="single-service-inner style-hover-base h-100 p-4" style={{ boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
                    <div className="thumb mb-3">
                      <h3 className="text-primary" style={{ fontSize: '48px', fontWeight: '700', marginBottom: '10px' }}>03</h3>
                    </div>
                    <h4>Process Automation</h4>
                    <p>Implementing automation tools and workflows to streamline operations and improve efficiency.</p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                  <div className="single-service-inner style-hover-base h-100 p-4" style={{ boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
                    <div className="thumb mb-3">
                      <h3 className="text-primary" style={{ fontSize: '48px', fontWeight: '700', marginBottom: '10px' }}>04</h3>
                    </div>
                    <h4>Data Analytics & AI</h4>
                    <p>Leveraging data insights and artificial intelligence to drive informed decision-making and innovation.</p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                  <div className="single-service-inner style-hover-base h-100 p-4" style={{ boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
                    <div className="thumb mb-3">
                      <h3 className="text-primary" style={{ fontSize: '48px', fontWeight: '700', marginBottom: '10px' }}>05</h3>
                    </div>
                    <h4>Customer Experience (CX) Transformation</h4>
                    <p>Redesigning customer journeys and touchpoints to enhance satisfaction and loyalty.</p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                  <div className="single-service-inner style-hover-base h-100 p-4" style={{ boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
                    <div className="thumb mb-3">
                      <h3 className="text-primary" style={{ fontSize: '48px', fontWeight: '700', marginBottom: '10px' }}>06</h3>
                    </div>
                    <h4>Cybersecurity & Risk Management</h4>
                    <p>Ensuring robust security measures and risk mitigation strategies for digital assets.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===================== Why Choose Section ===================== */}
      <div className="service-area pd-top-60 pd-bottom-60">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center mb-5">
                <h2>Why Choose Webnox – Digital Transformation Company</h2>
                <p className="mt-3 mb-0">
                  We are not just a service provider; we are your strategic partner in digital transformation. Our commitment to excellence, combined with our deep industry knowledge and technical expertise, makes us the ideal choice for businesses looking to thrive in the digital age.
                </p>
              </div>
              <div className="row">
                <div className="col-lg-6 col-md-6 mb-4">
                  <div className="single-service-inner style-hover-base h-100 p-4">
                    <div className="thumb mb-3">
                      <div className="icon text-primary" style={{ fontSize: '48px' }}>👥</div>
                    </div>
                    <h4>Building Longterm Partnerships</h4>
                    <p>We prioritize collaboration and long-term relationships, ensuring that we grow together with our clients.</p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 mb-4">
                  <div className="single-service-inner style-hover-base h-100 p-4">
                    <div className="thumb mb-3">
                      <div className="icon text-primary" style={{ fontSize: '48px' }}>⚡</div>
                    </div>
                    <h4>Cutting Edge Digital Transformation Technologies</h4>
                    <p>We use the latest technologies to ensure your business process is flexible, and efficient in the long term</p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 mb-4">
                  <div className="single-service-inner style-hover-base h-100 p-4">
                    <div className="thumb mb-3">
                      <div className="icon text-primary" style={{ fontSize: '48px' }}>🎯</div>
                    </div>
                    <h4>Customized Digital Transformation Strategies</h4>
                    <p>We create tailored strategies that align with your business goals to ensure effective digital adoption.</p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 mb-4">
                  <div className="single-service-inner style-hover-base h-100 p-4">
                    <div className="thumb mb-3">
                      <div className="icon text-primary" style={{ fontSize: '48px' }}>💼</div>
                    </div>
                    <h4>Your Dedicated IT Dream Team</h4>
                    <p>Easily approach our collaborative team to handle diverse IT challenges and projects seamlessly</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===================== Components Section ===================== */}
      <div className="service-area pd-top-120 pd-bottom-90 bg-gray">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center mb-5">
                <h2>Components Of Digital Transformation Services For Modern Enterprises</h2>
                <p className="mt-3 mb-0">
                  Our digital transformation services encompass a wide range of cutting-edge technologies and methodologies. Each component is carefully selected and integrated to create a cohesive, powerful solution that drives your business forward.
                </p>
              </div>
              <div className="row">
                <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
                  <div className="single-service-inner style-hover-base text-center h-100 p-4">
                    <div className="thumb mb-3">
                      <div className="icon text-primary" style={{ fontSize: '48px' }}>🤖</div>
                    </div>
                    <h5>AI & Machine Learning</h5>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
                  <div className="single-service-inner style-hover-base text-center h-100 p-4">
                    <div className="thumb mb-3">
                      <div className="icon text-primary" style={{ fontSize: '48px' }}>🏠</div>
                    </div>
                    <h5>Internet of Things</h5>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
                  <div className="single-service-inner style-hover-base text-center h-100 p-4">
                    <div className="thumb mb-3">
                      <div className="icon text-primary" style={{ fontSize: '48px' }}>📊</div>
                    </div>
                    <h5>Big Data & Analytics</h5>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
                  <div className="single-service-inner style-hover-base text-center h-100 p-4">
                    <div className="thumb mb-3">
                      <div className="icon text-primary" style={{ fontSize: '48px' }}>🥽</div>
                    </div>
                    <h5>Augmented & Virtual Reality</h5>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
                  <div className="single-service-inner style-hover-base text-center h-100 p-4">
                    <div className="thumb mb-3">
                      <div className="icon text-primary" style={{ fontSize: '48px' }}>☁️</div>
                    </div>
                    <h5>Cloud Migration</h5>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
                  <div className="single-service-inner style-hover-base text-center h-100 p-4">
                    <div className="thumb mb-3">
                      <div className="icon text-primary" style={{ fontSize: '48px' }}>🔄</div>
                    </div>
                    <h5>Agile Transformation</h5>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
                  <div className="single-service-inner style-hover-base text-center h-100 p-4">
                    <div className="thumb mb-3">
                      <div className="icon text-primary" style={{ fontSize: '48px' }}>🌐</div>
                    </div>
                    <h5>Cultural Transformation</h5>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
                  <div className="single-service-inner style-hover-base text-center h-100 p-4">
                    <div className="thumb mb-3">
                      <div className="icon text-primary" style={{ fontSize: '48px' }}>📱</div>
                    </div>
                    <h5>Application Modernization</h5>
                  </div>
                </div>
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
                      alt="Digital Transformation" 
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
                    <Link className="btn btn-base border-radius-5" href="/contact">
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
                      alt="Digital Transformation Services" 
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
                    <h4>Proven Expertise That Drives Results</h4>
                    <p>
                      With years of experience in the digital business, our consultants bring valuable insights and proven methodologies. We have successfully completed hundreds of digital transformation projects, helping businesses of all sizes achieve their goals and stay competitive in today's fast-paced market.
                    </p>
                    <p>
                      Our team combines technical expertise with business acumen, ensuring that every solution we deliver not only meets technical requirements but also drives real business value. We understand that technology is a means to an end, and our focus is always on helping you achieve your strategic objectives.
                    </p>
                    <h4 className="mt-4">Industry-Specific Expertise</h4>
                    <p>
                      Our team has worked across various industries, ensuring we deliver solutions tailored to your unique market demands. We understand the specific challenges, regulations, and opportunities in each sector, allowing us to provide insights and solutions that are truly relevant to your business context.
                    </p>
                    <p>
                      From understanding compliance requirements in financial services to optimizing supply chains in manufacturing, our industry knowledge enables us to deliver solutions that work in the real world. We don't just implement technology; we transform your business in ways that make sense for your industry.
                    </p>
                    <h4 className="mt-4">Comprehensive Support & Maintenance</h4>
                    <p>
                      Our relationship with clients doesn't end after implementation. We provide ongoing support, maintenance, and optimization services to ensure your digital solutions continue to perform at their best. Our dedicated support team is available 24/7 to address any issues and help you maximize the value of your digital investments.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===================== Industries Section ===================== */}
      <div className="service-area pd-top-60 pd-bottom-60">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center mb-5">
                <h2>Tailored Digital Transformation Solutions Across All Industries</h2>
                <p className="mt-3 mb-4">
                  Webnox Technologies specializes in delivering cutting-edge digital transformation solutions tailored to businesses across various industries. We focus on providing scalable, innovative, user-centric, and highly efficient strategies that align with your unique goals. From automation to modernization, we empower businesses to excel in today's competitive digital landscape.
                </p>
                <p className="mb-5">
                  Each industry has its own unique challenges, regulations, and opportunities. Our industry-specific expertise allows us to understand these nuances and deliver solutions that are not just technically sound, but also aligned with industry best practices and compliance requirements. Whether you're in finance, healthcare, retail, or manufacturing, we have the knowledge and experience to transform your business effectively.
                </p>
              </div>
              <div className="row">
                <div className="col-lg-2 col-md-4 col-sm-6 mb-4">
                  <div className="single-service-inner style-hover-base text-center h-100 p-4">
                    <div className="thumb mb-3">
                      <div className="icon text-primary" style={{ fontSize: '48px' }}>👥</div>
                    </div>
                    <h5>Financial Sectors</h5>
                  </div>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-6 mb-4">
                  <div className="single-service-inner style-hover-base text-center h-100 p-4">
                    <div className="thumb mb-3">
                      <div className="icon text-primary" style={{ fontSize: '48px' }}>🏗️</div>
                    </div>
                    <h5>Construction</h5>
                  </div>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-6 mb-4">
                  <div className="single-service-inner style-hover-base text-center h-100 p-4">
                    <div className="thumb mb-3">
                      <div className="icon text-primary" style={{ fontSize: '48px' }}>🏭</div>
                    </div>
                    <h5>Manufacturing Industry</h5>
                  </div>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-6 mb-4">
                  <div className="single-service-inner style-hover-base text-center h-100 p-4">
                    <div className="thumb mb-3">
                      <div className="icon text-primary" style={{ fontSize: '48px' }}>☂️</div>
                    </div>
                    <h5>Insurance</h5>
                  </div>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-6 mb-4">
                  <div className="single-service-inner style-hover-base text-center h-100 p-4">
                    <div className="thumb mb-3">
                      <div className="icon text-primary" style={{ fontSize: '48px' }}>🛒</div>
                    </div>
                    <h5>Retail Industry & E-commerce</h5>
                  </div>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-6 mb-4">
                  <div className="single-service-inner style-hover-base text-center h-100 p-4">
                    <div className="thumb mb-3">
                      <div className="icon text-primary" style={{ fontSize: '48px' }}>🏦</div>
                    </div>
                    <h5>Banking</h5>
                  </div>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-6 mb-4">
                  <div className="single-service-inner style-hover-base text-center h-100 p-4">
                    <div className="thumb mb-3">
                      <div className="icon text-primary" style={{ fontSize: '48px' }}>⚙️</div>
                    </div>
                    <h5>Automotive</h5>
                  </div>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-6 mb-4">
                  <div className="single-service-inner style-hover-base text-center h-100 p-4">
                    <div className="thumb mb-3">
                      <div className="icon text-primary" style={{ fontSize: '48px' }}>💬</div>
                    </div>
                    <h5>Media & Technology</h5>
                  </div>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-6 mb-4">
                  <div className="single-service-inner style-hover-base text-center h-100 p-4">
                    <div className="thumb mb-3">
                      <div className="icon text-primary" style={{ fontSize: '48px' }}>ℹ️</div>
                    </div>
                    <h5>Information Services</h5>
                  </div>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-6 mb-4">
                  <div className="single-service-inner style-hover-base text-center h-100 p-4">
                    <div className="thumb mb-3">
                      <div className="icon text-primary" style={{ fontSize: '48px' }}>🧳</div>
                    </div>
                    <h5>Travel & Hospitality</h5>
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
                        What are digital transformation services?
                      </button>
                    </h2>
                    <div
                      id="faqCollapseOne"
                      className="accordion-collapse collapse show"
                      aria-labelledby="faqHeadingOne"
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body" style={{ padding: '20px', backgroundColor: '#f8f9fa' }}>
                        Digital transformation services help businesses integrate digital technology into all areas of their operations, fundamentally changing how they operate and deliver value to customers. These services include strategy development, technology implementation, process automation, data analytics, and customer experience enhancement.
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
                        What are the 5 Ps of digital transformation?
                      </button>
                    </h2>
                    <div
                      id="faqCollapseTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="faqHeadingTwo"
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body" style={{ padding: '20px', backgroundColor: '#f8f9fa' }}>
                        The 5 Ps of digital transformation are: People (developing digital skills and culture), Processes (streamlining and automating workflows), Platforms (implementing the right technology infrastructure), Partners (collaborating with technology providers), and Performance (measuring and optimizing results).
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
                        What is the importance of digital transformation?
                      </button>
                    </h2>
                    <div
                      id="faqCollapseThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="faqHeadingThree"
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body" style={{ padding: '20px', backgroundColor: '#f8f9fa' }}>
                        Digital transformation is crucial for businesses to stay competitive, improve operational efficiency, enhance customer experiences, enable data-driven decision-making, increase agility, and drive innovation. It helps organizations adapt to changing market conditions and meet evolving customer expectations in the digital age.
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
                        How does digital transformation improve customer experience?
                      </button>
                    </h2>
                    <div
                      id="faqCollapseFour"
                      className="accordion-collapse collapse"
                      aria-labelledby="faqHeadingFour"
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body" style={{ padding: '20px', backgroundColor: '#f8f9fa' }}>
                        Digital transformation improves customer experience by enabling personalized interactions, providing seamless omnichannel experiences, reducing response times, offering self-service options, leveraging data analytics to understand customer needs, and creating more intuitive and user-friendly interfaces across all touchpoints.
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
                        What are the main challenges in digital transformation?
                      </button>
                    </h2>
                    <div
                      id="faqCollapseFive"
                      className="accordion-collapse collapse"
                      aria-labelledby="faqHeadingFive"
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body" style={{ padding: '20px', backgroundColor: '#f8f9fa' }}>
                        The main challenges include resistance to change from employees, legacy system integration, budget constraints, lack of digital skills, data security concerns, choosing the right technologies, managing cultural transformation, and ensuring alignment between technology and business goals. Our expert team helps you navigate these challenges effectively.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="faq-illustration text-center">
                <img 
                  src="assets/img/faq-illustration.png" 
                  alt="FAQs Illustration" 
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
      {/* ===================== Digital Transformation Area End ===================== */}
    </>
  );
};

export default DigitalTransformationArea;
