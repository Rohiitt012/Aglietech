import Link from 'next/link';
import React from 'react';
import {
  FaAngleDoubleRight,
  FaArrowRight,
  FaCheckCircle,
  FaPhone,
  FaStar,
} from 'react-icons/fa';

const WebDevelopmentArea = () => {
  return (
    <>
      {/* ===================== Hero Section ===================== */}
      <div className="service-area pd-top-60 pd-bottom-60">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h3 className="mb-3" style={{ fontSize: '24px', fontWeight: '700', color: '#28a745' }}>
                Top Award Winning Company & Affordable Rates
              </h3>
              <h1 className="mb-4" style={{ fontSize: '42px', fontWeight: '700', color: '#1a1a2e' }}>
                Website Development Services for Boosting Your Brand & Achieving Your Goals
              </h1>
              <p className="mb-4" style={{ fontSize: '16px', lineHeight: '1.8', color: '#333' }}>
                We are a leading web development company that provides comprehensive website development services to help businesses establish a strong online presence. Our team of experienced developers and designers work together to create custom websites that are not only visually appealing but also functional, responsive, and optimized for search engines.
              </p>
              <Link className="btn btn-base border-radius-5" href="/contact" style={{ backgroundColor: '#1e3a8a', color: '#fff', padding: '15px 40px', fontSize: '16px', fontWeight: '600', textAlign: 'center', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                Get a Quote
              </Link>
            </div>
            <div className="col-lg-6">
              <div className="text-center">
                <div style={{ fontSize: '200px', opacity: '0.1', color: '#246bfd' }}>💻</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===================== Social Proof/Reviews Section ===================== */}
      <div className="service-area pd-top-60 pd-bottom-60" style={{ background: '#f8f9fa' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center mb-5">
              <h2 className="mb-4" style={{ fontSize: '36px', fontWeight: '700', color: '#1a1a2e' }}>
                Our Background Reviews
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3 mb-4">
              <div className="text-center p-4" style={{ background: '#fff', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}>
                <div className="mb-3">
                  <div style={{ fontSize: '32px', fontWeight: '700', color: '#246bfd' }}>Clutch</div>
                </div>
                <div className="mb-2">
                  <FaStar style={{ color: '#ffc107', fontSize: '20px' }} />
                  <FaStar style={{ color: '#ffc107', fontSize: '20px' }} />
                  <FaStar style={{ color: '#ffc107', fontSize: '20px' }} />
                  <FaStar style={{ color: '#ffc107', fontSize: '20px' }} />
                  <FaStar style={{ color: '#ffc107', fontSize: '20px' }} />
                </div>
                <div style={{ fontSize: '14px', color: '#666' }}>5.0 Rating</div>
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <div className="text-center p-4" style={{ background: '#fff', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}>
                <div className="mb-3">
                  <div style={{ fontSize: '32px', fontWeight: '700', color: '#246bfd' }}>Upwork</div>
                </div>
                <div className="mb-2">
                  <FaStar style={{ color: '#ffc107', fontSize: '20px' }} />
                  <FaStar style={{ color: '#ffc107', fontSize: '20px' }} />
                  <FaStar style={{ color: '#ffc107', fontSize: '20px' }} />
                  <FaStar style={{ color: '#ffc107', fontSize: '20px' }} />
                  <FaStar style={{ color: '#ffc107', fontSize: '20px' }} />
                </div>
                <div style={{ fontSize: '14px', color: '#666' }}>5.0 Rating</div>
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <div className="text-center p-4" style={{ background: '#fff', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}>
                <div className="mb-3">
                  <div style={{ fontSize: '32px', fontWeight: '700', color: '#246bfd' }}>Google Reviews</div>
                </div>
                <div className="mb-2">
                  <FaStar style={{ color: '#ffc107', fontSize: '20px' }} />
                  <FaStar style={{ color: '#ffc107', fontSize: '20px' }} />
                  <FaStar style={{ color: '#ffc107', fontSize: '20px' }} />
                  <FaStar style={{ color: '#ffc107', fontSize: '20px' }} />
                  <FaStar style={{ color: '#ffc107', fontSize: '20px' }} />
                </div>
                <div style={{ fontSize: '14px', color: '#666' }}>5.0 Rating</div>
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <div className="text-center p-4" style={{ background: '#fff', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}>
                <div className="mb-3">
                  <div style={{ fontSize: '32px', fontWeight: '700', color: '#246bfd' }}>Google Partner</div>
                </div>
                <div style={{ fontSize: '14px', color: '#666' }}>Certified Partner</div>
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
              <h2 className="mb-3" style={{ fontSize: '36px', fontWeight: '700', color: '#1a1a2e' }}>
                Why Choose Us for Your Website Development Needs?
              </h2>
              <h4 className="mb-4" style={{ fontSize: '24px', fontWeight: '600', color: '#333' }}>
                Dedicated & Experienced Team for Best Website Development Services
              </h4>
              <p className="mb-5" style={{ fontSize: '16px', lineHeight: '1.8', color: '#333', maxWidth: '900px', margin: '0 auto' }}>
                We are committed to delivering exceptional website development services that help businesses achieve their online goals. Our team of skilled professionals works closely with clients to understand their unique requirements and deliver customized solutions that exceed expectations.
              </p>
              <Link className="btn btn-base border-radius-5" href="/contact" style={{ backgroundColor: '#1e3a8a', color: '#fff', padding: '15px 40px', fontSize: '16px', fontWeight: '600', textAlign: 'center', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                Get a Quote
              </Link>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-lg-4 mb-4">
              <div className="p-4 text-center" style={{ background: '#f8f9fa', borderRadius: '12px', height: '100%' }}>
                <div style={{ fontSize: '64px', marginBottom: '20px' }}>👤</div>
                <h4 className="mb-3" style={{ fontSize: '24px', fontWeight: '700', color: '#1a1a2e' }}>
                  Dedicated Project Manager
                </h4>
                <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#333' }}>
                  We assign a dedicated project manager to each project to ensure smooth communication and timely delivery.
                </p>
              </div>
            </div>
            <div className="col-lg-4 mb-4">
              <div className="p-4 text-center" style={{ background: '#f8f9fa', borderRadius: '12px', height: '100%' }}>
                <div style={{ fontSize: '64px', marginBottom: '20px' }}>🛡️</div>
                <h4 className="mb-3" style={{ fontSize: '24px', fontWeight: '700', color: '#1a1a2e' }}>
                  100% Client Satisfaction
                </h4>
                <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#333' }}>
                  Our top priority is client satisfaction, and we go the extra mile to exceed your expectations.
                </p>
              </div>
            </div>
            <div className="col-lg-4 mb-4">
              <div className="p-4 text-center" style={{ background: '#f8f9fa', borderRadius: '12px', height: '100%' }}>
                <div style={{ fontSize: '64px', marginBottom: '20px' }}>✅</div>
                <h4 className="mb-3" style={{ fontSize: '24px', fontWeight: '700', color: '#1a1a2e' }}>
                  Quality Assurance
                </h4>
                <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#333' }}>
                  We follow a rigorous quality assurance process to deliver bug-free and high-performing websites.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===================== Pricing Section ===================== */}
      <div className="service-area pd-top-60 pd-bottom-60" style={{ background: '#f8f9fa' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center mb-5">
              <h2 className="mb-3" style={{ fontSize: '36px', fontWeight: '700', color: '#1a1a2e' }}>
                Our Website Development Packages
              </h2>
              <h4 className="mb-5" style={{ fontSize: '24px', fontWeight: '600', color: '#333' }}>
                Choose the right package for your business
              </h4>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 mb-4">
              <div className="p-4" style={{ background: '#fff', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)', height: '100%' }}>
                <div className="text-center mb-4" style={{ background: '#1a1a2e', color: '#fff', padding: '20px', borderRadius: '8px' }}>
                  <h3 className="mb-2" style={{ fontSize: '32px', fontWeight: '700' }}>Basic Package</h3>
                  <div style={{ fontSize: '48px', fontWeight: '700' }}>$199</div>
                </div>
                <ul className="list-unstyled mb-4">
                  <li className="mb-3"><FaCheckCircle style={{ color: '#28a745', marginRight: '10px' }} />1 Page Website</li>
                  <li className="mb-3"><FaCheckCircle style={{ color: '#28a745', marginRight: '10px' }} />Responsive Design</li>
                  <li className="mb-3"><FaCheckCircle style={{ color: '#28a745', marginRight: '10px' }} />SEO Friendly</li>
                  <li className="mb-3"><FaCheckCircle style={{ color: '#28a745', marginRight: '10px' }} />Contact Form</li>
                  <li className="mb-3"><FaCheckCircle style={{ color: '#28a745', marginRight: '10px' }} />Social Media Integration</li>
                  <li className="mb-3"><FaCheckCircle style={{ color: '#28a745', marginRight: '10px' }} />Basic Security</li>
                  <li className="mb-3"><FaCheckCircle style={{ color: '#28a745', marginRight: '10px' }} />1 Month Free Support</li>
                  <li className="mb-3"><FaCheckCircle style={{ color: '#28a745', marginRight: '10px' }} />Basic Analytics</li>
                </ul>
                <Link className="btn btn-base border-radius-5 w-100" href="/contact" style={{ backgroundColor: '#1e3a8a', color: '#fff', padding: '15px 40px', fontSize: '16px', fontWeight: '600', textAlign: 'center', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                  Get Started
                </Link>
              </div>
            </div>
            <div className="col-lg-4 mb-4">
              <div className="p-4" style={{ background: '#fff', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)', height: '100%', border: '3px solid #ffc107' }}>
                <div className="text-center mb-4" style={{ background: '#1a1a2e', color: '#fff', padding: '20px', borderRadius: '8px' }}>
                  <h3 className="mb-2" style={{ fontSize: '32px', fontWeight: '700' }}>Standard Package</h3>
                  <div style={{ fontSize: '48px', fontWeight: '700' }}>$499</div>
                </div>
                <ul className="list-unstyled mb-4">
                  <li className="mb-3"><FaCheckCircle style={{ color: '#28a745', marginRight: '10px' }} />5 Page Website</li>
                  <li className="mb-3"><FaCheckCircle style={{ color: '#28a745', marginRight: '10px' }} />Responsive Design</li>
                  <li className="mb-3"><FaCheckCircle style={{ color: '#28a745', marginRight: '10px' }} />SEO Friendly</li>
                  <li className="mb-3"><FaCheckCircle style={{ color: '#28a745', marginRight: '10px' }} />Contact Form</li>
                  <li className="mb-3"><FaCheckCircle style={{ color: '#28a745', marginRight: '10px' }} />Social Media Integration</li>
                  <li className="mb-3"><FaCheckCircle style={{ color: '#28a745', marginRight: '10px' }} />Advanced Security</li>
                  <li className="mb-3"><FaCheckCircle style={{ color: '#28a745', marginRight: '10px' }} />3 Months Free Support</li>
                  <li className="mb-3"><FaCheckCircle style={{ color: '#28a745', marginRight: '10px' }} />Advanced Analytics</li>
                  <li className="mb-3"><FaCheckCircle style={{ color: '#28a745', marginRight: '10px' }} />Blog Integration</li>
                </ul>
                <Link className="btn btn-base border-radius-5 w-100" href="/contact" style={{ backgroundColor: '#1e3a8a', color: '#fff', padding: '15px 40px', fontSize: '16px', fontWeight: '600', textAlign: 'center', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                  Get Started
                </Link>
              </div>
            </div>
            <div className="col-lg-4 mb-4">
              <div className="p-4" style={{ background: '#fff', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)', height: '100%' }}>
                <div className="text-center mb-4" style={{ background: '#1a1a2e', color: '#fff', padding: '20px', borderRadius: '8px' }}>
                  <h3 className="mb-2" style={{ fontSize: '32px', fontWeight: '700' }}>Premium Package</h3>
                  <div style={{ fontSize: '48px', fontWeight: '700' }}>$999</div>
                </div>
                <ul className="list-unstyled mb-4">
                  <li className="mb-3"><FaCheckCircle style={{ color: '#28a745', marginRight: '10px' }} />10 Page Website</li>
                  <li className="mb-3"><FaCheckCircle style={{ color: '#28a745', marginRight: '10px' }} />Responsive Design</li>
                  <li className="mb-3"><FaCheckCircle style={{ color: '#28a745', marginRight: '10px' }} />SEO Friendly</li>
                  <li className="mb-3"><FaCheckCircle style={{ color: '#28a745', marginRight: '10px' }} />Contact Form</li>
                  <li className="mb-3"><FaCheckCircle style={{ color: '#28a745', marginRight: '10px' }} />Social Media Integration</li>
                  <li className="mb-3"><FaCheckCircle style={{ color: '#28a745', marginRight: '10px' }} />Premium Security</li>
                  <li className="mb-3"><FaCheckCircle style={{ color: '#28a745', marginRight: '10px' }} />6 Months Free Support</li>
                  <li className="mb-3"><FaCheckCircle style={{ color: '#28a745', marginRight: '10px' }} />Premium Analytics</li>
                  <li className="mb-3"><FaCheckCircle style={{ color: '#28a745', marginRight: '10px' }} />Blog Integration</li>
                  <li className="mb-3"><FaCheckCircle style={{ color: '#28a745', marginRight: '10px' }} />E-commerce Functionality</li>
                </ul>
                <Link className="btn btn-base border-radius-5 w-100" href="/contact" style={{ backgroundColor: '#1e3a8a', color: '#fff', padding: '15px 40px', fontSize: '16px', fontWeight: '600', textAlign: 'center', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===================== Our Services Section ===================== */}
      <div className="service-area pd-top-60 pd-bottom-60">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center mb-5">
              <h2 className="mb-3" style={{ fontSize: '36px', fontWeight: '700', color: '#1a1a2e' }}>
                Our Website Development Services
              </h2>
              <h4 className="mb-5" style={{ fontSize: '24px', fontWeight: '600', color: '#333' }}>
                We provide a wide range of services to help you achieve your business goals
              </h4>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="p-4" style={{ background: 'linear-gradient(135deg, #ffc107 0%, #ff9800 100%)', borderRadius: '12px', height: '100%' }}>
                <div className="text-center mb-4">
                  <div style={{ fontSize: '64px' }}>💻</div>
                </div>
                <h4 className="mb-4" style={{ fontSize: '24px', fontWeight: '700', color: '#1a1a2e' }}>
                  Web Design & Development
                </h4>
                <ul className="list-unstyled">
                  <li className="mb-2"><FaCheckCircle style={{ color: '#1a1a2e', marginRight: '10px' }} />Custom Website Design</li>
                  <li className="mb-2"><FaCheckCircle style={{ color: '#1a1a2e', marginRight: '10px' }} />Responsive Web Design</li>
                  <li className="mb-2"><FaCheckCircle style={{ color: '#1a1a2e', marginRight: '10px' }} />E-commerce Website Development</li>
                  <li className="mb-2"><FaCheckCircle style={{ color: '#1a1a2e', marginRight: '10px' }} />Website Redesign</li>
                  <li className="mb-2"><FaCheckCircle style={{ color: '#1a1a2e', marginRight: '10px' }} />Website Maintenance</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="p-4" style={{ background: 'linear-gradient(135deg, #ffc107 0%, #ff9800 100%)', borderRadius: '12px', height: '100%' }}>
                <div className="text-center mb-4">
                  <div style={{ fontSize: '64px' }}>📊</div>
                </div>
                <h4 className="mb-4" style={{ fontSize: '24px', fontWeight: '700', color: '#1a1a2e' }}>
                  Digital Marketing
                </h4>
                <ul className="list-unstyled">
                  <li className="mb-2"><FaCheckCircle style={{ color: '#1a1a2e', marginRight: '10px' }} />Search Engine Optimization (SEO)</li>
                  <li className="mb-2"><FaCheckCircle style={{ color: '#1a1a2e', marginRight: '10px' }} />Social Media Marketing (SMM)</li>
                  <li className="mb-2"><FaCheckCircle style={{ color: '#1a1a2e', marginRight: '10px' }} />Content Marketing</li>
                  <li className="mb-2"><FaCheckCircle style={{ color: '#1a1a2e', marginRight: '10px' }} />Email Marketing</li>
                  <li className="mb-2"><FaCheckCircle style={{ color: '#1a1a2e', marginRight: '10px' }} />Pay-Per-Click (PPC) Advertising</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="p-4" style={{ background: 'linear-gradient(135deg, #ffc107 0%, #ff9800 100%)', borderRadius: '12px', height: '100%' }}>
                <div className="text-center mb-4">
                  <div style={{ fontSize: '64px' }}>🛒</div>
                </div>
                <h4 className="mb-4" style={{ fontSize: '24px', fontWeight: '700', color: '#1a1a2e' }}>
                  E-commerce Solutions
                </h4>
                <ul className="list-unstyled">
                  <li className="mb-2"><FaCheckCircle style={{ color: '#1a1a2e', marginRight: '10px' }} />Online Store Development</li>
                  <li className="mb-2"><FaCheckCircle style={{ color: '#1a1a2e', marginRight: '10px' }} />Payment Gateway Integration</li>
                  <li className="mb-2"><FaCheckCircle style={{ color: '#1a1a2e', marginRight: '10px' }} />Product Catalog Management</li>
                  <li className="mb-2"><FaCheckCircle style={{ color: '#1a1a2e', marginRight: '10px' }} />Shopping Cart Development</li>
                  <li className="mb-2"><FaCheckCircle style={{ color: '#1a1a2e', marginRight: '10px' }} />Order Management System</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="p-4" style={{ background: 'linear-gradient(135deg, #ffc107 0%, #ff9800 100%)', borderRadius: '12px', height: '100%' }}>
                <div className="text-center mb-4">
                  <div style={{ fontSize: '64px' }}>☁️</div>
                </div>
                <h4 className="mb-4" style={{ fontSize: '24px', fontWeight: '700', color: '#1a1a2e' }}>
                  Website Hosting
                </h4>
                <ul className="list-unstyled">
                  <li className="mb-2"><FaCheckCircle style={{ color: '#1a1a2e', marginRight: '10px' }} />Shared Hosting</li>
                  <li className="mb-2"><FaCheckCircle style={{ color: '#1a1a2e', marginRight: '10px' }} />VPS Hosting</li>
                  <li className="mb-2"><FaCheckCircle style={{ color: '#1a1a2e', marginRight: '10px' }} />Dedicated Hosting</li>
                  <li className="mb-2"><FaCheckCircle style={{ color: '#1a1a2e', marginRight: '10px' }} />Cloud Hosting</li>
                  <li className="mb-2"><FaCheckCircle style={{ color: '#1a1a2e', marginRight: '10px' }} />Domain Registration</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="p-4" style={{ background: 'linear-gradient(135deg, #ffc107 0%, #ff9800 100%)', borderRadius: '12px', height: '100%' }}>
                <div className="text-center mb-4">
                  <div style={{ fontSize: '64px' }}>📱</div>
                </div>
                <h4 className="mb-4" style={{ fontSize: '24px', fontWeight: '700', color: '#1a1a2e' }}>
                  Mobile App Development
                </h4>
                <ul className="list-unstyled">
                  <li className="mb-2"><FaCheckCircle style={{ color: '#1a1a2e', marginRight: '10px' }} />iOS App Development</li>
                  <li className="mb-2"><FaCheckCircle style={{ color: '#1a1a2e', marginRight: '10px' }} />Android App Development</li>
                  <li className="mb-2"><FaCheckCircle style={{ color: '#1a1a2e', marginRight: '10px' }} />Hybrid App Development</li>
                  <li className="mb-2"><FaCheckCircle style={{ color: '#1a1a2e', marginRight: '10px' }} />Cross-Platform App Development</li>
                  <li className="mb-2"><FaCheckCircle style={{ color: '#1a1a2e', marginRight: '10px' }} />App Store Optimization (ASO)</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="p-4" style={{ background: 'linear-gradient(135deg, #ffc107 0%, #ff9800 100%)', borderRadius: '12px', height: '100%' }}>
                <div className="text-center mb-4">
                  <div style={{ fontSize: '64px' }}>🎨</div>
                </div>
                <h4 className="mb-4" style={{ fontSize: '24px', fontWeight: '700', color: '#1a1a2e' }}>
                  Graphic Design
                </h4>
                <ul className="list-unstyled">
                  <li className="mb-2"><FaCheckCircle style={{ color: '#1a1a2e', marginRight: '10px' }} />Logo Design</li>
                  <li className="mb-2"><FaCheckCircle style={{ color: '#1a1a2e', marginRight: '10px' }} />Branding & Identity</li>
                  <li className="mb-2"><FaCheckCircle style={{ color: '#1a1a2e', marginRight: '10px' }} />Brochure Design</li>
                  <li className="mb-2"><FaCheckCircle style={{ color: '#1a1a2e', marginRight: '10px' }} />Flyer Design</li>
                  <li className="mb-2"><FaCheckCircle style={{ color: '#1a1a2e', marginRight: '10px' }} />Social Media Graphics</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===================== How We Work Section ===================== */}
      <div className="service-area pd-top-60 pd-bottom-60" style={{ background: '#f8f9fa' }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h2 className="mb-4" style={{ fontSize: '36px', fontWeight: '700', color: '#1a1a2e' }}>
                How We Work
              </h2>
              <h4 className="mb-4" style={{ fontSize: '24px', fontWeight: '600', color: '#333' }}>
                Our Website Development Process
              </h4>
              <p className="mb-4" style={{ fontSize: '16px', lineHeight: '1.8', color: '#333' }}>
                Our website development process is designed to ensure that we deliver high-quality websites that meet your business needs. We follow a systematic approach that includes planning, design, development, testing, and deployment. Our team works closely with you throughout the process to ensure that your vision is realized.
              </p>
              <Link className="btn btn-base border-radius-5" href="/contact" style={{ backgroundColor: '#1e3a8a', color: '#fff', padding: '15px 40px', fontSize: '16px', fontWeight: '600', textAlign: 'center', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                Get a Quote
              </Link>
            </div>
            <div className="col-lg-6">
              <div className="text-center">
                <div style={{ fontSize: '200px', opacity: '0.1', color: '#246bfd' }}>🔧</div>
              </div>
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
                      style={{ backgroundColor: '#246bfd', color: '#fff', fontWeight: '600' }}
                    >
                      What is website development?
                    </button>
                  </h2>
                  <div id="faq1" className="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
                    <div className="accordion-body" style={{ fontSize: '16px', lineHeight: '1.8', color: '#333' }}>
                      Website development is the process of creating and building websites. It involves various aspects including web design, web content development, client-side/server-side scripting, and network security configuration.
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
                      How long does it take to develop a website?
                    </button>
                  </h2>
                  <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body" style={{ fontSize: '16px', lineHeight: '1.8', color: '#333' }}>
                      The time required to develop a website depends on the complexity and scope of the project. A simple website can take 2-4 weeks, while a more complex e-commerce site may take 2-3 months or more.
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
                      Do you provide website maintenance services?
                    </button>
                  </h2>
                  <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body" style={{ fontSize: '16px', lineHeight: '1.8', color: '#333' }}>
                      Yes, we offer comprehensive website maintenance services including regular updates, security patches, content updates, and technical support to keep your website running smoothly.
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
                      Will my website be mobile-friendly?
                    </button>
                  </h2>
                  <div id="faq4" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body" style={{ fontSize: '16px', lineHeight: '1.8', color: '#333' }}>
                      Absolutely! All our websites are built with responsive design, ensuring they look and function perfectly on all devices including smartphones, tablets, and desktops.
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
                      Do you offer e-commerce website development?
                    </button>
                  </h2>
                  <div id="faq5" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body" style={{ fontSize: '16px', lineHeight: '1.8', color: '#333' }}>
                      Yes, we specialize in e-commerce website development. We can create fully functional online stores with shopping carts, payment gateway integration, inventory management, and more.
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
    </>
  );
};

export default WebDevelopmentArea;

