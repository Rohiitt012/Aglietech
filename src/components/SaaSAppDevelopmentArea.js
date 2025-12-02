import Link from 'next/link';
import React from 'react';
import {
  FaAngleDoubleRight,
  FaArrowRight,
  FaCheckCircle,
  FaPhone,
  FaStar,
  FaQuoteLeft,
  FaGlobe,
  FaMobileAlt,
  FaPalette,
  FaDollarSign,
  FaUsers,
  FaClock,
  FaShieldAlt,
  FaHandshake,
  FaHeadset,
} from 'react-icons/fa';

const SaaSAppDevelopmentArea = () => {
  return (
    <>
      {/* ===================== Hero Section ===================== */}
      <div className="service-area pd-top-60 pd-bottom-60" style={{ background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)', position: 'relative', overflow: 'hidden' }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="mb-4" style={{ fontSize: '42px', fontWeight: '700', color: '#fff' }}>
                Smart Development Company
              </h1>
              <p className="mb-4" style={{ fontSize: '16px', lineHeight: '1.8', color: '#fff' }}>
                A team of experienced developers and designers dedicated to creating innovative and user-friendly solutions.
              </p>
              <div className="d-flex gap-3 mb-4">
                <div className="p-3" style={{ background: 'rgba(255,255,255,0.1)', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.2)' }}>
                  <FaGlobe style={{ color: '#3b82f6', fontSize: '24px', marginBottom: '10px' }} />
                  <div style={{ color: '#fff', fontSize: '14px', fontWeight: '600' }}>Web Development</div>
                </div>
                <div className="p-3" style={{ background: 'rgba(255,255,255,0.1)', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.2)' }}>
                  <FaMobileAlt style={{ color: '#3b82f6', fontSize: '24px', marginBottom: '10px' }} />
                  <div style={{ color: '#fff', fontSize: '14px', fontWeight: '600' }}>Mobile App Development</div>
                </div>
                <div className="p-3" style={{ background: 'rgba(255,255,255,0.1)', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.2)' }}>
                  <FaPalette style={{ color: '#3b82f6', fontSize: '24px', marginBottom: '10px' }} />
                  <div style={{ color: '#fff', fontSize: '14px', fontWeight: '600' }}>UI/UX Design</div>
                </div>
              </div>
              <Link className="btn btn-base border-radius-5" href="/contact" style={{ backgroundColor: '#1e3a8a', color: '#fff', padding: '15px 40px', fontSize: '16px', fontWeight: '600', textAlign: 'center', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                Get a Quote
              </Link>
            </div>
            <div className="col-lg-6">
              <div className="text-center">
                <div style={{ fontSize: '200px', opacity: '0.2', color: '#3b82f6' }}>💻</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===================== All Kinds of Application Development Programs Section ===================== */}
      <div className="service-area pd-top-60 pd-bottom-60">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center mb-5">
              <h2 className="mb-4" style={{ fontSize: '36px', fontWeight: '700', color: '#1a1a2e' }}>
                All Kinds of Application Development Programs
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <p className="mb-4" style={{ fontSize: '16px', lineHeight: '1.8', color: '#333' }}>
                We offer comprehensive application development services covering web development, mobile app development, custom software solutions, and more. Our team specializes in creating scalable, secure, and high-performance applications that meet your business needs.
              </p>
              <p className="mb-4" style={{ fontSize: '16px', lineHeight: '1.8', color: '#333' }}>
                Whether you need a web application, mobile app, or enterprise software solution, we have the expertise to deliver. Our development programs are designed to help businesses of all sizes achieve their digital transformation goals.
              </p>
              <p className="mb-4" style={{ fontSize: '16px', lineHeight: '1.8', color: '#333' }}>
                From initial concept to final deployment, we provide end-to-end development services. Our approach combines cutting-edge technology, best practices, and industry expertise to ensure your application is built to the highest standards.
              </p>
              <div className="text-center">
                <Link className="btn btn-base border-radius-5" href="/services" style={{ backgroundColor: '#1e3a8a', color: '#fff', padding: '15px 40px', fontSize: '16px', fontWeight: '600', textAlign: 'center', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                  View All Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===================== Why Choose Our Web & Mobile Application Development Section ===================== */}
      <div className="service-area pd-top-60 pd-bottom-60" style={{ background: '#f8f9fa' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center mb-5">
              <h2 className="mb-4" style={{ fontSize: '36px', fontWeight: '700', color: '#1a1a2e' }}>
                Why Choose Our Web & Mobile Application Development?
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="p-4" style={{ background: '#fff', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)', height: '100%', border: '1px solid #e0e7ff' }}>
                <FaDollarSign style={{ color: '#3b82f6', fontSize: '48px', marginBottom: '20px' }} />
                <h4 className="mb-3" style={{ fontSize: '24px', fontWeight: '700', color: '#1a1a2e' }}>
                  Cost-Effective
                </h4>
                <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#333' }}>
                  We offer competitive pricing without compromising on quality, ensuring you get the best value for your investment.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="p-4" style={{ background: '#fff', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)', height: '100%', border: '1px solid #e0e7ff' }}>
                <FaUsers style={{ color: '#3b82f6', fontSize: '48px', marginBottom: '20px' }} />
                <h4 className="mb-3" style={{ fontSize: '24px', fontWeight: '700', color: '#1a1a2e' }}>
                  Expert Team
                </h4>
                <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#333' }}>
                  Our team comprises highly skilled and experienced developers, designers, and project managers.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="p-4" style={{ background: '#fff', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)', height: '100%', border: '1px solid #e0e7ff' }}>
                <FaClock style={{ color: '#3b82f6', fontSize: '48px', marginBottom: '20px' }} />
                <h4 className="mb-3" style={{ fontSize: '24px', fontWeight: '700', color: '#1a1a2e' }}>
                  Timely Delivery
                </h4>
                <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#333' }}>
                  We understand the importance of deadlines and are committed to delivering projects on time.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="p-4" style={{ background: '#fff', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)', height: '100%', border: '1px solid #e0e7ff' }}>
                <FaShieldAlt style={{ color: '#3b82f6', fontSize: '48px', marginBottom: '20px' }} />
                <h4 className="mb-3" style={{ fontSize: '24px', fontWeight: '700', color: '#1a1a2e' }}>
                  Quality Assurance
                </h4>
                <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#333' }}>
                  Rigorous testing and quality checks are integrated into every stage of our development process.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="p-4" style={{ background: '#fff', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)', height: '100%', border: '1px solid #e0e7ff' }}>
                <FaHandshake style={{ color: '#3b82f6', fontSize: '48px', marginBottom: '20px' }} />
                <h4 className="mb-3" style={{ fontSize: '24px', fontWeight: '700', color: '#1a1a2e' }}>
                  Client-Centric Approach
                </h4>
                <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#333' }}>
                  Your satisfaction is our priority. We work closely with you to understand your vision.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="p-4" style={{ background: '#fff', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)', height: '100%', border: '1px solid #e0e7ff' }}>
                <FaHeadset style={{ color: '#3b82f6', fontSize: '48px', marginBottom: '20px' }} />
                <h4 className="mb-3" style={{ fontSize: '24px', fontWeight: '700', color: '#1a1a2e' }}>
                  Post-Launch Support
                </h4>
                <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#333' }}>
                  Our commitment doesn't end with deployment. We provide ongoing support and maintenance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===================== #1 SaaS Application Development Company Section ===================== */}
      <div className="service-area pd-top-60 pd-bottom-60" style={{ background: '#f8f9fa' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center mb-5">
              <h1 className="mb-4" style={{ fontSize: '42px', fontWeight: '700', color: '#1a1a2e' }}>
                #1 SaaS Application Development Company
              </h1>
              <p className="mb-4" style={{ fontSize: '16px', lineHeight: '1.8', color: '#333', maxWidth: '1000px', margin: '0 auto' }}>
                We develop SaaS apps for web, Android, and other platforms. Our SaaS development services include attractive UI/UX, smooth performance, high-speed cloud server connectivity, and end-to-end encrypted security services. Our development process includes Idea Discussion, Requirements Execution, UX/UI design, Frontend & Backend development, Quality assurance testing, product launch, and support. Our experienced project team includes a project manager, business analyst, senior developers, UI/UX designer, and QA engineer. Our development cost is simply awesome. Hire us for exclusive benefits.
              </p>
              <Link className="btn btn-base border-radius-5" href="/contact" style={{ backgroundColor: '#1e3a8a', color: '#fff', padding: '15px 40px', fontSize: '16px', fontWeight: '600', textAlign: 'center', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                GET STARTED
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ===================== Technologies We Use Section ===================== */}
      <div className="service-area pd-top-60 pd-bottom-60">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center mb-5">
              <h2 className="mb-4" style={{ fontSize: '36px', fontWeight: '700', color: '#1a1a2e' }}>
                Technologies We Use
              </h2>
              <p className="mb-5" style={{ fontSize: '16px', lineHeight: '1.8', color: '#333', maxWidth: '900px', margin: '0 auto' }}>
                Here is the list of all the technology stacks that are used by us to develop and maintain a product/company.
              </p>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-2 col-md-4 col-sm-6 mb-4">
              <div className="p-4 text-center" style={{ background: '#fff', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)', height: '100%' }}>
                <div style={{ fontSize: '64px', marginBottom: '15px' }}>🐍</div>
                <h5 style={{ fontSize: '18px', fontWeight: '700', color: '#1a1a2e' }}>Python</h5>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6 mb-4">
              <div className="p-4 text-center" style={{ background: '#fff', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)', height: '100%' }}>
                <div style={{ fontSize: '64px', marginBottom: '15px' }}>🐬</div>
                <h5 style={{ fontSize: '18px', fontWeight: '700', color: '#1a1a2e' }}>MySQL</h5>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6 mb-4">
              <div className="p-4 text-center" style={{ background: '#fff', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)', height: '100%' }}>
                <div style={{ fontSize: '64px', marginBottom: '15px' }}>📱</div>
                <h5 style={{ fontSize: '18px', fontWeight: '700', color: '#1a1a2e' }}>Flutter</h5>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6 mb-4">
              <div className="p-4 text-center" style={{ background: '#fff', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)', height: '100%' }}>
                <div style={{ fontSize: '64px', marginBottom: '15px' }}>🅰️</div>
                <h5 style={{ fontSize: '18px', fontWeight: '700', color: '#1a1a2e' }}>Angular</h5>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6 mb-4">
              <div className="p-4 text-center" style={{ background: '#fff', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)', height: '100%' }}>
                <div style={{ fontSize: '64px', marginBottom: '15px' }}>🤖</div>
                <h5 style={{ fontSize: '18px', fontWeight: '700', color: '#1a1a2e' }}>Android</h5>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===================== Services Offered by Our SaaS Application Development Company Section ===================== */}
      <div className="service-area pd-top-60 pd-bottom-60" style={{ background: '#e3f2fd' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 mb-5">
              <h2 className="mb-4" style={{ fontSize: '36px', fontWeight: '700', color: '#1a1a2e' }}>
                Services Offered by Our SaaS Application Development Company
              </h2>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="text-center">
                <div style={{ fontSize: '200px', opacity: '0.2', color: '#3b82f6' }}>💻</div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row">
                <div className="col-lg-12 mb-4">
                  <div className="p-4" style={{ background: '#fff', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)', height: '100%' }}>
                    <h4 className="mb-3" style={{ fontSize: '24px', fontWeight: '700', color: '#3b82f6' }}>
                      SaaS Application Consulting
                    </h4>
                    <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#333' }}>
                      Our group of experienced SaaS app consultants will help you identify the suitable development lifecycle, right technology, cloud hosting platform to create your project.
                    </p>
                  </div>
                </div>
                <div className="col-lg-12 mb-4">
                  <div className="p-4" style={{ background: '#fff', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)', height: '100%' }}>
                    <h4 className="mb-3" style={{ fontSize: '24px', fontWeight: '700', color: '#3b82f6' }}>
                      SaaS Based Product Development
                    </h4>
                    <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#333' }}>
                      Our SaaS developers are experienced in a wide range of technologies and produce high-quality code, while our PMO uses mature KPIs to ensure engineers' highest productivity.
                    </p>
                  </div>
                </div>
                <div className="col-lg-12 mb-4">
                  <div className="p-4" style={{ background: '#fff', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)', height: '100%' }}>
                    <h4 className="mb-3" style={{ fontSize: '24px', fontWeight: '700', color: '#3b82f6' }}>
                      SaaS Application Design
                    </h4>
                    <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#333' }}>
                      Our UX designers classify workflows and customer journey mapping in their design strategy for a better revenue, engagement and experience.
                    </p>
                  </div>
                </div>
                <div className="col-lg-12 mb-4">
                  <div className="p-4" style={{ background: '#fff', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)', height: '100%' }}>
                    <h4 className="mb-3" style={{ fontSize: '24px', fontWeight: '700', color: '#3b82f6' }}>
                      SaaS Application Optimization
                    </h4>
                    <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#333' }}>
                      SaaS optimization encompasses a wide range of activities including performance tuning, scalability improvements, cost optimization, and user experience enhancements to ensure your SaaS application runs efficiently and effectively.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===================== Why Webnox For Your SaaS Application Development Section ===================== */}
      <div className="service-area pd-top-60 pd-bottom-60">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center mb-5">
              <h2 className="mb-4" style={{ fontSize: '36px', fontWeight: '700', color: '#1a1a2e' }}>
                Why Webnox For Your SaaS Application Development?
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="p-4" style={{ background: '#fff', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)', height: '100%', border: '1px solid #e0e7ff' }}>
                <div className="mb-3" style={{ fontSize: '48px' }}>📈</div>
                <h4 className="mb-3" style={{ fontSize: '24px', fontWeight: '700', color: '#3b82f6' }}>
                  Cost-Effective
                </h4>
                <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#333' }}>
                  Software as a Service (SaaS) will reduce your expenses by more than 50% by decreasing the total cost of ownership of your software infrastructure.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="p-4" style={{ background: '#fff', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)', height: '100%', border: '1px solid #e0e7ff' }}>
                <div className="mb-3" style={{ fontSize: '48px' }}>🔒</div>
                <h4 className="mb-3" style={{ fontSize: '24px', fontWeight: '700', color: '#3b82f6' }}>
                  Data Security
                </h4>
                <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#333' }}>
                  Whether it is data management or data recovery, SaaS solutions can keep an organization's business information safer than on-premise software.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="p-4" style={{ background: '#fff', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)', height: '100%', border: '1px solid #e0e7ff' }}>
                <div className="mb-3" style={{ fontSize: '48px' }}>📊</div>
                <h4 className="mb-3" style={{ fontSize: '24px', fontWeight: '700', color: '#3b82f6' }}>
                  Scalability and Accessibility
                </h4>
                <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#333' }}>
                  Its capacity to smoothly expand resources for developing business with minimal friction also you can access them from anywhere in the world given their web-based use.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="p-4" style={{ background: '#fff', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)', height: '100%', border: '1px solid #e0e7ff' }}>
                <div className="mb-3" style={{ fontSize: '48px' }}>⚡</div>
                <h4 className="mb-3" style={{ fontSize: '24px', fontWeight: '700', color: '#3b82f6' }}>
                  Simple and quick Implementation
                </h4>
                <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#333' }}>
                  SaaS offers an Easy and quick deployment process, allowing businesses to get up and running faster than traditional software implementations.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="p-4" style={{ background: '#fff', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)', height: '100%', border: '1px solid #e0e7ff' }}>
                <div className="mb-3" style={{ fontSize: '48px' }}>👥</div>
                <h4 className="mb-3" style={{ fontSize: '24px', fontWeight: '700', color: '#3b82f6' }}>
                  Easy Adoption
                </h4>
                <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#333' }}>
                  Employee adoption of new technology and innovation can be hard, but SaaS applications are designed with user-friendly interfaces that make adoption seamless and intuitive.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="p-4" style={{ background: '#fff', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)', height: '100%', border: '1px solid #e0e7ff' }}>
                <div className="mb-3" style={{ fontSize: '48px' }}>🔄</div>
                <h4 className="mb-3" style={{ fontSize: '24px', fontWeight: '700', color: '#3b82f6' }}>
                  Continuous Updates
                </h4>
                <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#333' }}>
                  SaaS applications receive regular updates and improvements automatically, ensuring you always have access to the latest features and security enhancements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===================== We are an End-to-End SaaS Development Company Section ===================== */}
      <div className="service-area pd-top-60 pd-bottom-60" style={{ background: '#f8f9fa' }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h2 className="mb-4" style={{ fontSize: '36px', fontWeight: '700', color: '#1a1a2e' }}>
                We are an End-to-End SaaS Development Company in India
              </h2>
              <p className="mb-4" style={{ fontSize: '16px', lineHeight: '1.8', color: '#333' }}>
                Webnox Technologies has an expert SaaS development team who are experienced in the technologies needed to develop SaaS applications for your business. We have worked with 300+ startups and firms and helped them raise millions of dollars by creating SaaS products. We convey scalable SaaS solutions with optimized UI/UX design.
              </p>
              <p className="mb-4" style={{ fontSize: '16px', lineHeight: '1.8', color: '#333' }}>
                With our end-to-end SaaS development approach, we execute all the necessary components for a successful SaaS solution such as mobile applications, web applications, cloud hosting, APIs, and efficient data storage. When you choose Webnox, you get trust in a brand, India's top Saas Application development team having 15+ years of experience. We are specialists in SaaS-based products and helping companies in the journey of digital transformation by developing their thoughts into high-performing SaaS solutions.
              </p>
              <Link className="btn btn-base border-radius-5" href="/contact" style={{ backgroundColor: '#1e3a8a', color: '#fff', padding: '15px 40px', fontSize: '16px', fontWeight: '600', textAlign: 'center', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                GET PROPOSAL
              </Link>
            </div>
            <div className="col-lg-6">
              <div className="text-center">
                <div style={{ fontSize: '200px', opacity: '0.1', color: '#3b82f6' }}>💼</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===================== End-to-End Mobile Application Development Company Section ===================== */}
      <div className="service-area pd-top-60 pd-bottom-60">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h2 className="mb-4" style={{ fontSize: '36px', fontWeight: '700', color: '#1a1a2e' }}>
                We are an end-to-end Mobile Application Development Company
              </h2>
              <p className="mb-4" style={{ fontSize: '16px', lineHeight: '1.8', color: '#333' }}>
                As a comprehensive mobile application development company, we provide end-to-end services from initial concept and design to development, testing, deployment, and ongoing maintenance. Our team of skilled developers specializes in both native and cross-platform mobile app development, ensuring your application performs flawlessly on iOS, Android, and other platforms.
              </p>
              <p className="mb-4" style={{ fontSize: '16px', lineHeight: '1.8', color: '#333' }}>
                We understand that mobile applications are crucial for business success in today's digital landscape. That's why we combine technical expertise with creative design to deliver mobile solutions that not only meet your business objectives but also provide exceptional user experiences. Our commitment to quality and innovation ensures that your mobile app stands out in the competitive market.
              </p>
              <Link className="btn btn-base border-radius-5" href="/services" style={{ backgroundColor: '#3b82f6', color: '#fff', padding: '15px 40px', fontSize: '16px', fontWeight: '600' }}>
                Learn More
              </Link>
            </div>
            <div className="col-lg-6">
              <div className="text-center">
                <div style={{ fontSize: '200px', opacity: '0.1', color: '#3b82f6' }}>📱</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===================== Testimonials Section ===================== */}
      <div className="service-area pd-top-60 pd-bottom-60" style={{ background: '#f8f9fa' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center mb-5">
              <h2 className="mb-4" style={{ fontSize: '36px', fontWeight: '700', color: '#1a1a2e' }}>
                Testimonials
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 mb-4">
              <div className="p-4" style={{ background: '#fff', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)', height: '100%' }}>
                <div className="mb-3">
                  <FaStar style={{ color: '#ffc107', fontSize: '20px' }} />
                  <FaStar style={{ color: '#ffc107', fontSize: '20px' }} />
                  <FaStar style={{ color: '#ffc107', fontSize: '20px' }} />
                  <FaStar style={{ color: '#ffc107', fontSize: '20px' }} />
                  <FaStar style={{ color: '#ffc107', fontSize: '20px' }} />
                </div>
                <p className="mb-4" style={{ fontSize: '16px', lineHeight: '1.8', color: '#333', fontStyle: 'italic' }}>
                  "The team delivered an exceptional mobile application that exceeded our expectations. Their expertise and professionalism are unmatched."
                </p>
                <div className="d-flex align-items-center">
                  <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: '#3b82f6', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', marginRight: '15px' }}>JD</div>
                  <div>
                    <div style={{ fontWeight: '600', fontSize: '18px', color: '#1a1a2e' }}>John Doe</div>
                    <div style={{ fontSize: '14px', color: '#666' }}>CEO, Tech Solutions</div>
                  </div>
                </div>
                <Link href="/testimonials" style={{ color: '#3b82f6', fontSize: '14px', textDecoration: 'none', marginTop: '10px', display: 'block' }}>Read More</Link>
              </div>
            </div>
            <div className="col-lg-4 mb-4">
              <div className="p-4" style={{ background: '#fff', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)', height: '100%' }}>
                <div className="mb-3">
                  <FaStar style={{ color: '#ffc107', fontSize: '20px' }} />
                  <FaStar style={{ color: '#ffc107', fontSize: '20px' }} />
                  <FaStar style={{ color: '#ffc107', fontSize: '20px' }} />
                  <FaStar style={{ color: '#ffc107', fontSize: '20px' }} />
                  <FaStar style={{ color: '#ffc107', fontSize: '20px' }} />
                </div>
                <p className="mb-4" style={{ fontSize: '16px', lineHeight: '1.8', color: '#333', fontStyle: 'italic' }}>
                  "Outstanding service from start to finish. The web application they built has transformed our business operations."
                </p>
                <div className="d-flex align-items-center">
                  <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: '#3b82f6', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', marginRight: '15px' }}>SM</div>
                  <div>
                    <div style={{ fontWeight: '600', fontSize: '18px', color: '#1a1a2e' }}>Sarah Miller</div>
                    <div style={{ fontSize: '14px', color: '#666' }}>Founder, Digital Ventures</div>
                  </div>
                </div>
                <Link href="/testimonials" style={{ color: '#3b82f6', fontSize: '14px', textDecoration: 'none', marginTop: '10px', display: 'block' }}>Read More</Link>
              </div>
            </div>
            <div className="col-lg-4 mb-4">
              <div className="p-4" style={{ background: '#fff', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)', height: '100%' }}>
                <div className="mb-3">
                  <FaStar style={{ color: '#ffc107', fontSize: '20px' }} />
                  <FaStar style={{ color: '#ffc107', fontSize: '20px' }} />
                  <FaStar style={{ color: '#ffc107', fontSize: '20px' }} />
                  <FaStar style={{ color: '#ffc107', fontSize: '20px' }} />
                  <FaStar style={{ color: '#ffc107', fontSize: '20px' }} />
                </div>
                <p className="mb-4" style={{ fontSize: '16px', lineHeight: '1.8', color: '#333', fontStyle: 'italic' }}>
                  "Professional, reliable, and results-driven. They delivered our SaaS application on time and within budget."
                </p>
                <div className="d-flex align-items-center">
                  <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: '#3b82f6', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', marginRight: '15px' }}>RW</div>
                  <div>
                    <div style={{ fontWeight: '600', fontSize: '18px', color: '#1a1a2e' }}>Robert Wilson</div>
                    <div style={{ fontSize: '14px', color: '#666' }}>CTO, Cloud Solutions</div>
                  </div>
                </div>
                <Link href="/testimonials" style={{ color: '#3b82f6', fontSize: '14px', textDecoration: 'none', marginTop: '10px', display: 'block' }}>Read More</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===================== Our Portfolio Section ===================== */}
      <div className="service-area pd-top-60 pd-bottom-60">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center mb-5">
              <h2 className="mb-4" style={{ fontSize: '36px', fontWeight: '700', color: '#1a1a2e' }}>
                Our Portfolio
              </h2>
              <p className="mb-5" style={{ fontSize: '16px', lineHeight: '1.8', color: '#333', maxWidth: '900px', margin: '0 auto' }}>
                Explore our successful projects and see how we've helped businesses achieve their goals.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="p-4 text-center" style={{ background: '#f8f9fa', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)', height: '100%' }}>
                <div style={{ fontSize: '64px', marginBottom: '20px' }}>🛒</div>
                <h5 style={{ fontSize: '18px', fontWeight: '700', color: '#1a1a2e', marginBottom: '10px' }}>E-commerce Platform</h5>
                <p style={{ fontSize: '14px', color: '#666' }}>Full-featured online store</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="p-4 text-center" style={{ background: '#f8f9fa', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)', height: '100%' }}>
                <div style={{ fontSize: '64px', marginBottom: '20px' }}>📱</div>
                <h5 style={{ fontSize: '18px', fontWeight: '700', color: '#1a1a2e', marginBottom: '10px' }}>Mobile App</h5>
                <p style={{ fontSize: '14px', color: '#666' }}>iOS & Android application</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="p-4 text-center" style={{ background: '#f8f9fa', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)', height: '100%' }}>
                <div style={{ fontSize: '64px', marginBottom: '20px' }}>💼</div>
                <h5 style={{ fontSize: '18px', fontWeight: '700', color: '#1a1a2e', marginBottom: '10px' }}>SaaS Platform</h5>
                <p style={{ fontSize: '14px', color: '#666' }}>Cloud-based solution</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="p-4 text-center" style={{ background: '#f8f9fa', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)', height: '100%' }}>
                <div style={{ fontSize: '64px', marginBottom: '20px' }}>🌐</div>
                <h5 style={{ fontSize: '18px', fontWeight: '700', color: '#1a1a2e', marginBottom: '10px' }}>Web Application</h5>
                <p style={{ fontSize: '14px', color: '#666' }}>Enterprise web solution</p>
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
                      What is SaaS application development?
                    </button>
                  </h2>
                  <div id="faq1" className="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
                    <div className="accordion-body" style={{ fontSize: '16px', lineHeight: '1.8', color: '#333' }}>
                      SaaS (Software as a Service) application development involves creating cloud-based software applications that users can access via the internet. These applications are hosted on remote servers and can be accessed from any device with an internet connection, eliminating the need for local installation.
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
                      How long does it take to develop a SaaS application?
                    </button>
                  </h2>
                  <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body" style={{ fontSize: '16px', lineHeight: '1.8', color: '#333' }}>
                      The development timeline for a SaaS application depends on its complexity and features. A basic SaaS application can take 3-4 months, while more complex enterprise solutions may take 6-12 months or more. We provide detailed timelines during the initial consultation.
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
                      What technologies do you use for SaaS development?
                    </button>
                  </h2>
                  <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body" style={{ fontSize: '16px', lineHeight: '1.8', color: '#333' }}>
                      We use modern technologies and frameworks including React, Node.js, Python, AWS, Azure, Docker, Kubernetes, and more. Our technology stack is chosen based on your specific requirements to ensure optimal performance and scalability.
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
                      Do you provide cloud hosting and infrastructure?
                    </button>
                  </h2>
                  <div id="faq4" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body" style={{ fontSize: '16px', lineHeight: '1.8', color: '#333' }}>
                      Yes, we provide comprehensive cloud hosting and infrastructure services. We can set up and manage your SaaS application on leading cloud platforms like AWS, Azure, or Google Cloud, ensuring scalability, security, and reliability.
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
                      What kind of support do you offer after launch?
                    </button>
                  </h2>
                  <div id="faq5" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body" style={{ fontSize: '16px', lineHeight: '1.8', color: '#333' }}>
                      We offer comprehensive post-launch support including bug fixes, security updates, feature enhancements, performance optimization, and 24/7 technical assistance. Our support packages are tailored to meet your specific needs.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="text-center">
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

      {/* ===================== Final CTA Section ===================== */}
      <div className="service-area pd-top-60 pd-bottom-60" style={{ background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="mb-4" style={{ fontSize: '36px', fontWeight: '700', color: '#fff' }}>
                Get a Free Consultation
              </h2>
              <p className="mb-5" style={{ fontSize: '16px', lineHeight: '1.8', color: '#fff', maxWidth: '800px', margin: '0 auto' }}>
                Ready to transform your business with a custom SaaS application? Contact us today for a free consultation and discover how we can help you achieve your goals.
              </p>
              <Link className="btn btn-base border-radius-5" href="/contact" style={{ backgroundColor: '#1e3a8a', color: '#fff', padding: '15px 40px', fontSize: '16px', fontWeight: '600', textAlign: 'center', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SaaSAppDevelopmentArea;

