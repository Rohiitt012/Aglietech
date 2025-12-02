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
  FaUsers,
  FaChartLine,
  FaFileAlt,
  FaMobileAlt,
  FaChartBar,
  FaPiggyBank,
} from 'react-icons/fa';

const EcommerceDevelopmentArea = () => {
  return (
    <>
      {/* ===================== Hero Section ===================== */}
      <div className="service-area pd-top-60 pd-bottom-60" style={{ background: '#f8f9fa' }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="mb-4" style={{ fontSize: '42px', fontWeight: '700', color: '#1a1a2e' }}>
                Empowering Creative Teams with <span style={{ color: '#3b82f6' }}>E-commerce Solutions</span>
              </h1>
              <p className="mb-4" style={{ fontSize: '16px', lineHeight: '1.8', color: '#333' }}>
                We provide comprehensive e-commerce development services that help businesses build powerful online stores, manage inventory efficiently, and drive sales growth. Our expert team combines creativity, technology, and strategic thinking to deliver exceptional e-commerce solutions.
              </p>
              <div className="d-flex gap-3">
                <Link className="btn btn-base border-radius-5" href="/contact" style={{ backgroundColor: '#1e3a8a', color: '#fff', padding: '15px 40px', fontSize: '16px', fontWeight: '600', textAlign: 'center', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                  Get Started
                </Link>
                <Link className="btn btn-base border-radius-5" href="/services" style={{ backgroundColor: '#1e3a8a', color: '#fff', padding: '15px 40px', fontSize: '16px', fontWeight: '600', textAlign: 'center', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                  Learn More
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="text-center">
                <img src="assets/img/bg/ecommerce-solutions-1.jpg" alt="Ecommerce Solutions" style={{ width: '100%', height: 'auto', maxWidth: '100%', objectFit: 'contain', borderRadius: '12px' }} />
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
                We are committed to delivering exceptional e-commerce solutions that drive growth and success for your business.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="text-center" style={{ background: '#f8f9fa', borderRadius: '12px', height: '100%', display: 'flex', flexDirection: 'column' }}>
                <img src="assets/img/collaborating-team-hero.jpg" alt="Team Collaboration" style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '12px 12px 0 0' }} />
                <div className="p-4" style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
                  <h4 className="mb-3" style={{ fontSize: '24px', fontWeight: '700', color: '#1a1a2e' }}>
                    Team Collaboration
                  </h4>
                  <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#333', margin: 0 }}>
                    Our collaborative approach ensures seamless communication and teamwork throughout the development process. We work closely with your team to understand your business needs, align on goals, and deliver solutions that exceed expectations.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="text-center" style={{ background: '#f8f9fa', borderRadius: '12px', height: '100%', display: 'flex', flexDirection: 'column' }}>
                <img src="assets/img/real-time-analytics.jpg" alt="Real-time Analytics" style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '12px 12px 0 0' }} />
                <div className="p-4" style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
                  <h4 className="mb-3" style={{ fontSize: '24px', fontWeight: '700', color: '#1a1a2e' }}>
                    Real-time Analytics
                  </h4>
                  <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#333', margin: 0 }}>
                    Get instant insights into your e-commerce performance with our comprehensive analytics and reporting tools. Track sales trends, monitor customer behavior, analyze conversion rates, and identify growth opportunities in real-time.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="text-center" style={{ background: '#f8f9fa', borderRadius: '12px', height: '100%', display: 'flex', flexDirection: 'column' }}>
                <img src="assets/img/third-box-image.jpg" alt="Project Management" style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '12px 12px 0 0' }} />
                <div className="p-4" style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
                  <h4 className="mb-3" style={{ fontSize: '24px', fontWeight: '700', color: '#1a1a2e' }}>
                    Project Management
                  </h4>
                  <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#333', margin: 0 }}>
                    Efficient project management ensures timely delivery and successful implementation of your e-commerce platform. Our experienced project managers use agile methodologies, detailed planning, and milestone tracking to keep your project on schedule and within budget.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="text-center" style={{ background: '#f8f9fa', borderRadius: '12px', height: '100%', display: 'flex', flexDirection: 'column' }}>
                <img src="assets/img/fourth-box-image.jpg" alt="Mobile Accessibility" style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '12px 12px 0 0' }} />
                <div className="p-4" style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
                  <h4 className="mb-3" style={{ fontSize: '24px', fontWeight: '700', color: '#1a1a2e' }}>
                    Mobile Accessibility
                  </h4>
                  <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#333', margin: 0 }}>
                    Access and manage your e-commerce store from anywhere with our fully responsive and mobile-optimized solutions. Our mobile-first approach ensures your store looks and functions perfectly on all devices, from smartphones to tablets.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="text-center" style={{ background: '#f8f9fa', borderRadius: '12px', height: '100%', display: 'flex', flexDirection: 'column' }}>
                <img src="assets/img/fifth-box-image.jpg" alt="Performance Tracking" style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '12px 12px 0 0' }} />
                <div className="p-4" style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
                  <h4 className="mb-3" style={{ fontSize: '24px', fontWeight: '700', color: '#1a1a2e' }}>
                    Performance Tracking
                  </h4>
                  <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#333', margin: 0 }}>
                    Monitor and track your e-commerce performance with detailed metrics and actionable insights. Our comprehensive tracking system captures key performance indicators including traffic sources, conversion rates, average order value, and revenue trends.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="text-center" style={{ background: '#f8f9fa', borderRadius: '12px', height: '100%', display: 'flex', flexDirection: 'column' }}>
                <img src="assets/img/sixth-box-image.jpg" alt="Cost Efficiency" style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '12px 12px 0 0' }} />
                <div className="p-4" style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
                  <h4 className="mb-3" style={{ fontSize: '24px', fontWeight: '700', color: '#1a1a2e' }}>
                    Cost Efficiency
                  </h4>
                  <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#333', margin: 0 }}>
                    Maximize your ROI with cost-effective e-commerce solutions that deliver exceptional value. We offer flexible pricing models, scalable infrastructure, and efficient development processes that reduce operational costs while maintaining high quality.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===================== Call to Action Banner ===================== */}
      <div className="service-area pd-top-60 pd-bottom-60" style={{ background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="mb-4" style={{ fontSize: '36px', fontWeight: '700', color: '#fff' }}>
                Ready to Get Started?
              </h2>
              <p className="mb-5" style={{ fontSize: '16px', lineHeight: '1.8', color: '#fff', maxWidth: '800px', margin: '0 auto' }}>
                Transform your business with our comprehensive e-commerce development services. Let's build something amazing together.
              </p>
              <Link className="btn btn-base border-radius-5" href="/contact" style={{ backgroundColor: '#1e3a8a', color: '#fff', padding: '15px 40px', fontSize: '16px', fontWeight: '600', textAlign: 'center', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                Sign Up Now
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ===================== E-commerce Marketplace Section ===================== */}
      <div className="service-area pd-top-60 pd-bottom-60">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h2 className="mb-4" style={{ fontSize: '36px', fontWeight: '700', color: '#1a1a2e' }}>
                Explore Our E-commerce Platform
              </h2>
              <p className="mb-4" style={{ fontSize: '16px', lineHeight: '1.8', color: '#333' }}>
                Build a powerful online marketplace that connects buyers and sellers seamlessly. Our e-commerce platform offers comprehensive features including product listings, shopping cart, payment integration, order management, and customer reviews.
              </p>
              <Link className="btn btn-base border-radius-5" href="/services" style={{ backgroundColor: '#1e3a8a', color: '#fff', padding: '15px 40px', fontSize: '16px', fontWeight: '600', textAlign: 'center', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                Learn More
              </Link>
            </div>
            <div className="col-lg-6">
              <div className="text-center">
                <img src="assets/img/marketplace-image.png" alt="Marketplace" style={{ width: '100%', height: 'auto', maxWidth: '100%', objectFit: 'contain', borderRadius: '12px' }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===================== Inventory Management Section ===================== */}
      <div className="service-area pd-top-60 pd-bottom-60" style={{ background: '#e3f2fd' }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="text-center">
                <img src="assets/img/inventory-image.webp" alt="Inventory Management" style={{ width: '100%', height: 'auto', maxWidth: '100%', objectFit: 'contain', borderRadius: '12px' }} />
              </div>
            </div>
            <div className="col-lg-6">
              <h2 className="mb-4" style={{ fontSize: '36px', fontWeight: '700', color: '#1a1a2e' }}>
                Manage Your Inventory Efficiently
              </h2>
              <p className="mb-4" style={{ fontSize: '16px', lineHeight: '1.8', color: '#333' }}>
                Streamline your inventory management with our comprehensive dashboard. Track products, manage stock levels, set up automated alerts, and generate detailed reports. Our system helps you maintain optimal inventory levels and reduce operational costs.
              </p>
              <Link className="btn btn-base border-radius-5" href="/services" style={{ backgroundColor: '#1e3a8a', color: '#fff', padding: '15px 40px', fontSize: '16px', fontWeight: '600', textAlign: 'center', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ===================== Communication Section ===================== */}
      <div className="service-area pd-top-60 pd-bottom-60">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h2 className="mb-4" style={{ fontSize: '36px', fontWeight: '700', color: '#1a1a2e' }}>
                Connect with Your Team
              </h2>
              <p className="mb-4" style={{ fontSize: '16px', lineHeight: '1.8', color: '#333' }}>
                Enhance collaboration with integrated communication tools. Our platform enables real-time messaging, file sharing, and team coordination, ensuring everyone stays connected and informed throughout the e-commerce development process.
              </p>
              <Link className="btn btn-base border-radius-5" href="/services" style={{ backgroundColor: '#1e3a8a', color: '#fff', padding: '15px 40px', fontSize: '16px', fontWeight: '600', textAlign: 'center', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                Learn More
              </Link>
            </div>
            <div className="col-lg-6">
              <div className="text-center">
                <img src="assets/img/connect-team-image.jpg" alt="Connect with Team" style={{ width: '100%', height: 'auto', maxWidth: '100%', objectFit: 'contain', borderRadius: '12px' }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===================== Mobile App Section ===================== */}
      <div className="service-area pd-top-60 pd-bottom-60" style={{ background: '#f3e5f5' }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="text-center">
                <img src="assets/img/mobile-app-image.jpg" alt="Mobile App" style={{ width: '100%', height: 'auto', maxWidth: '100%', objectFit: 'contain', borderRadius: '12px' }} />
              </div>
            </div>
            <div className="col-lg-6">
              <h2 className="mb-4" style={{ fontSize: '36px', fontWeight: '700', color: '#1a1a2e' }}>
                Your E-commerce, Your Way
              </h2>
              <p className="mb-4" style={{ fontSize: '16px', lineHeight: '1.8', color: '#333' }}>
                Access your e-commerce store on the go with our mobile app. Manage products, process orders, track sales, and communicate with customers from anywhere. Our mobile solution provides a seamless experience across all devices.
              </p>
              <Link className="btn btn-base border-radius-5" href="/services" style={{ backgroundColor: '#1e3a8a', color: '#fff', padding: '15px 40px', fontSize: '16px', fontWeight: '600', textAlign: 'center', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ===================== Analytics Section ===================== */}
      <div className="service-area pd-top-60 pd-bottom-60" style={{ background: '#e8f5e9' }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h2 className="mb-4" style={{ fontSize: '36px', fontWeight: '700', color: '#1a1a2e' }}>
                Gain Valuable Insights
              </h2>
              <p className="mb-4" style={{ fontSize: '16px', lineHeight: '1.8', color: '#333' }}>
                Make data-driven decisions with our comprehensive analytics dashboard. Track sales performance, monitor customer behavior, analyze product trends, and identify growth opportunities. Our analytics tools provide actionable insights to optimize your e-commerce strategy.
              </p>
              <Link className="btn btn-base border-radius-5" href="/services" style={{ backgroundColor: '#1e3a8a', color: '#fff', padding: '15px 40px', fontSize: '16px', fontWeight: '600', textAlign: 'center', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                Learn More
              </Link>
            </div>
            <div className="col-lg-6">
              <div className="text-center">
                <img src="assets/img/analytics-image.webp" alt="Analytics" style={{ width: '100%', height: 'auto', maxWidth: '100%', objectFit: 'contain', borderRadius: '12px' }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===================== Document Management Section ===================== */}
      <div className="service-area pd-top-60 pd-bottom-60" style={{ background: '#fff9c4' }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="text-center">
                <img src="assets/img/document-management-image.jpg" alt="Document Management" style={{ width: '100%', height: 'auto', maxWidth: '100%', objectFit: 'contain', borderRadius: '12px' }} />
              </div>
            </div>
            <div className="col-lg-6">
              <h2 className="mb-4" style={{ fontSize: '36px', fontWeight: '700', color: '#1a1a2e' }}>
                Organize Your Documents
              </h2>
              <p className="mb-4" style={{ fontSize: '16px', lineHeight: '1.8', color: '#333' }}>
                Keep all your e-commerce documents organized and accessible. Our document management system allows you to store, categorize, and retrieve invoices, contracts, product specifications, and other important files with ease.
              </p>
              <Link className="btn btn-base border-radius-5" href="/services" style={{ backgroundColor: '#1e3a8a', color: '#fff', padding: '15px 40px', fontSize: '16px', fontWeight: '600', textAlign: 'center', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ===================== View All Features Button ===================== */}
      <div className="service-area pd-top-60 pd-bottom-60">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <Link className="btn btn-base border-radius-5" href="/services" style={{ backgroundColor: '#1e3a8a', color: '#fff', padding: '15px 40px', fontSize: '16px', fontWeight: '600', textAlign: 'center', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                View All Features
              </Link>
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
                What Our Clients Say
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
                  "The e-commerce platform they built for us has transformed our business. Sales have increased significantly, and the user experience is exceptional."
                </p>
                <div className="d-flex align-items-center">
                  <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: '#3b82f6', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', marginRight: '15px' }}>JD</div>
                  <div>
                    <div style={{ fontWeight: '600', fontSize: '18px', color: '#1a1a2e' }}>John Doe</div>
                    <div style={{ fontSize: '14px', color: '#666' }}>CEO, Retail Solutions</div>
                  </div>
                </div>
                <Link href="/testimonials" style={{ color: '#3b82f6', fontSize: '14px', textDecoration: 'none' }}>Read More</Link>
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
                  "Outstanding service and support. The team understood our requirements perfectly and delivered a solution that exceeded our expectations."
                </p>
                <div className="d-flex align-items-center">
                  <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: '#3b82f6', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', marginRight: '15px' }}>SM</div>
                  <div>
                    <div style={{ fontWeight: '600', fontSize: '18px', color: '#1a1a2e' }}>Sarah Miller</div>
                    <div style={{ fontSize: '14px', color: '#666' }}>Founder, Fashion Hub</div>
                  </div>
                </div>
                <Link href="/testimonials" style={{ color: '#3b82f6', fontSize: '14px', textDecoration: 'none' }}>Read More</Link>
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
                  "The inventory management system is a game-changer. It has streamlined our operations and improved efficiency dramatically."
                </p>
                <div className="d-flex align-items-center">
                  <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: '#3b82f6', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', marginRight: '15px' }}>RW</div>
                  <div>
                    <div style={{ fontWeight: '600', fontSize: '18px', color: '#1a1a2e' }}>Robert Wilson</div>
                    <div style={{ fontSize: '14px', color: '#666' }}>Operations Manager, Tech Store</div>
                  </div>
                </div>
                <Link href="/testimonials" style={{ color: '#3b82f6', fontSize: '14px', textDecoration: 'none' }}>Read More</Link>
              </div>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-lg-12 text-center">
              <Link className="btn btn-base border-radius-5" href="/testimonials" style={{ backgroundColor: '#1e3a8a', color: '#fff', padding: '15px 40px', fontSize: '16px', fontWeight: '600', textAlign: 'center', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                View All Testimonials
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ===================== Partners/Integrations Section ===================== */}
      <div className="service-area pd-top-60 pd-bottom-60">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center mb-5">
              <h2 className="mb-4" style={{ fontSize: '36px', fontWeight: '700', color: '#1a1a2e' }}>
                Our Trusted Partners
              </h2>
              <p className="mb-5" style={{ fontSize: '16px', lineHeight: '1.8', color: '#333', maxWidth: '900px', margin: '0 auto' }}>
                Integrate with your favorite tools and platforms
              </p>
            </div>
          </div>
          <div style={{ overflow: 'hidden', width: '100%' }}>
            <Marquee direction="left" speed={30} gradient={false} pauseOnHover={false}>
              <div className="mx-3" style={{ display: 'inline-block', flexShrink: 0 }}>
                <div className="text-center p-4" style={{ background: '#f8f9fa', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)', whiteSpace: 'nowrap' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
                    <img src="assets/img/brand/adobe-logo.png" alt="Adobe" style={{ width: '40px', height: '40px', objectFit: 'contain', flexShrink: 0 }} />
                    <div style={{ fontSize: '32px', fontWeight: '700', color: '#3b82f6' }}>Adobe</div>
                  </div>
                </div>
              </div>
              <div className="mx-3" style={{ display: 'inline-block', flexShrink: 0 }}>
                <div className="text-center p-4" style={{ background: '#f8f9fa', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)', whiteSpace: 'nowrap' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
                    <img src="assets/img/brand/google-logo.png" alt="Google" style={{ width: 'auto', height: '32px', maxWidth: '100%', objectFit: 'contain', flexShrink: 0 }} />
                    <div style={{ fontSize: '32px', fontWeight: '700', color: '#3b82f6' }}>Google</div>
                  </div>
                </div>
              </div>
              <div className="mx-3" style={{ display: 'inline-block', flexShrink: 0 }}>
                <div className="text-center p-4" style={{ background: '#f8f9fa', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)', whiteSpace: 'nowrap' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
                    <img src="assets/img/brand/microsoft-logo.webp" alt="Microsoft" style={{ width: '40px', height: '40px', objectFit: 'contain', flexShrink: 0 }} />
                    <div style={{ fontSize: '32px', fontWeight: '700', color: '#3b82f6' }}>Microsoft</div>
                  </div>
                </div>
              </div>
              <div className="mx-3" style={{ display: 'inline-block', flexShrink: 0 }}>
                <div className="text-center p-4" style={{ background: '#f8f9fa', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)', whiteSpace: 'nowrap' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
                    <img src="assets/img/brand/shopify-logo.jpeg" alt="Shopify" style={{ width: '40px', height: '40px', objectFit: 'contain', flexShrink: 0 }} />
                    <div style={{ fontSize: '32px', fontWeight: '700', color: '#3b82f6' }}>Shopify</div>
                  </div>
                </div>
              </div>
              <div className="mx-3" style={{ display: 'inline-block', flexShrink: 0 }}>
                <div className="text-center p-4" style={{ background: '#f8f9fa', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)', whiteSpace: 'nowrap' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
                    <img src="assets/img/brand/woocommerce-logo.png" alt="WooCommerce" style={{ width: 'auto', height: '32px', maxWidth: '100%', objectFit: 'contain', flexShrink: 0 }} />
                    <div style={{ fontSize: '32px', fontWeight: '700', color: '#3b82f6' }}>WooCommerce</div>
                  </div>
                </div>
              </div>
            </Marquee>
          </div>
        </div>
      </div>

      {/* ===================== Final CTA Section ===================== */}
      <div className="service-area pd-top-60 pd-bottom-60" style={{ background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="mb-4" style={{ fontSize: '36px', fontWeight: '700', color: '#fff' }}>
                Success No Matter What
              </h2>
              <p className="mb-5" style={{ fontSize: '16px', lineHeight: '1.8', color: '#fff', maxWidth: '800px', margin: '0 auto' }}>
                We are committed to your success. Our comprehensive e-commerce solutions are designed to help you achieve your business goals and drive sustainable growth.
              </p>
              <Link className="btn btn-base border-radius-5" href="/contact" style={{ backgroundColor: '#3b82f6', color: '#fff', padding: '15px 40px', fontSize: '16px', fontWeight: '600' }}>
                See How We Deliver It
              </Link>
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
                      What is e-commerce development?
                    </button>
                  </h2>
                  <div id="faq1" className="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
                    <div className="accordion-body" style={{ fontSize: '16px', lineHeight: '1.8', color: '#333' }}>
                      E-commerce development involves creating and building online stores and marketplaces where businesses can sell products or services to customers over the internet. It includes website design, payment integration, inventory management, and order processing systems.
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
                      How long does it take to develop an e-commerce website?
                    </button>
                  </h2>
                  <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body" style={{ fontSize: '16px', lineHeight: '1.8', color: '#333' }}>
                      The development timeline depends on the complexity and scope of your project. A basic e-commerce site can take 4-6 weeks, while a more complex marketplace with custom features may take 3-6 months or more.
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
                      What payment gateways do you support?
                    </button>
                  </h2>
                  <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body" style={{ fontSize: '16px', lineHeight: '1.8', color: '#333' }}>
                      We support all major payment gateways including PayPal, Stripe, Square, Razorpay, and many others. We can integrate any payment gateway that meets your business requirements and geographic location.
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
                      Do you provide mobile app development for e-commerce?
                    </button>
                  </h2>
                  <div id="faq4" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body" style={{ fontSize: '16px', lineHeight: '1.8', color: '#333' }}>
                      Yes, we develop native and cross-platform mobile apps for iOS and Android. Our mobile apps are fully integrated with your e-commerce platform, providing a seamless shopping experience for your customers.
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
                      What ongoing support do you provide?
                    </button>
                  </h2>
                  <div id="faq5" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body" style={{ fontSize: '16px', lineHeight: '1.8', color: '#333' }}>
                      We provide comprehensive ongoing support including technical maintenance, security updates, feature enhancements, performance optimization, and 24/7 technical assistance to ensure your e-commerce platform runs smoothly.
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

      {/* Our Team Section */}
      <div className="service-area pd-top-20 pd-bottom-60">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center mb-3">
              <h2 className="mb-3" style={{ fontSize: '36px', fontWeight: '700', color: '#1a1a2e' }}>Our Team</h2>
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

export default EcommerceDevelopmentArea;

