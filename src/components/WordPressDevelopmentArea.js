import Link from 'next/link';
import React from 'react';
import {
  FaAngleDoubleRight,
  FaArrowRight,
  FaCheckCircle,
  FaPhone,
} from 'react-icons/fa';

const WordPressDevelopmentArea = () => {
  return (
    <>
      {/* ===================== Hero Banner Section ===================== */}
      <div
        className="banner-area bg-relative banner-area-1 pd-bottom-60 bg-cover"
        style={{ 
          background: 'linear-gradient(to right, #1a1a2e, #16213e)',
          minHeight: '600px',
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="banner-inner">
                <h2 className="title mb-4" style={{ color: '#fff', fontSize: '42px', fontWeight: '700' }}>
                  WordPress Website Designing And Website Development Company India
                </h2>
                <p className="content mb-4" style={{ color: '#fff', fontSize: '16px' }}>
                  With our expertise and proven techniques, we create custom, high-performance WordPress websites that engage users, drive traffic, and generate valuable leads for your business.
                </p>
                <Link className="btn btn-base border-radius-5" href="/contact" style={{ backgroundColor: '#fff', color: '#000', padding: '15px 40px', fontSize: '16px', fontWeight: '600' }}>
                  START YOUR PROJECT
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="text-center">
                <div style={{ fontSize: '200px', color: '#246bfd', opacity: '0.3' }}>W</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===================== WordPress Company Section ===================== */}
      <div className="service-area pd-top-60 pd-bottom-60">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h2 className="mb-4">WordPress Development Company India – Coimbatore</h2>
              <p className="mb-4">
                25% of websites in the world, now using the WordPress platform for their CMS websites. Because of easy navigation and SEO friendly options, we work with WordPress platforms that allow you to easily manage the content and modifying your website images.
              </p>
              <h4 className="mb-3">Benefits of using WordPress development services</h4>
              <ul className="single-list-inner style-check mb-4">
                <li>
                  <FaCheckCircle /> It enables website owners to focus more on content development.
                </li>
                <li>
                  <FaCheckCircle /> Provides an uncomplicated and unique design that fits your business.
                </li>
                <li>
                  <FaCheckCircle /> Search engine friendly design and optimization.
                </li>
                <li>
                  <FaCheckCircle /> Fully customizable, controllable and easy to use applications.
                </li>
              </ul>
              <h4 className="mb-3">How WordPress websites so friendly with SEO than you think?</h4>
              <p>
                As we said earlier, WordPress platform is dominating the WWW. Top marketers in the world have seen huge visibility on search engine result pages for WordPress websites. Webnox Technologies conducted tests showing WordPress websites get more clicks, impressions, and better visibility on Google compared to normal bootstrapped websites. Powerful SEO plugins like all in SEO, Yoast, WP SEO, etc. are available for WordPress.
              </p>
            </div>
            <div className="col-lg-6">
              <div className="text-center">
                <img 
                  src="assets/img/wordpress-development-intro.jpg" 
                  alt="WordPress Development" 
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

      {/* ===================== Turn Your Passion Section ===================== */}
      <div className="service-area pd-top-60 pd-bottom-60" style={{ background: 'linear-gradient(135deg, #246bfd 0%, #1e5dd8 100%)' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="mb-3" style={{ color: '#fff', fontSize: '48px', fontWeight: '700' }}>
                Turn Your Passion into Success
              </h2>
              <p className="mb-0" style={{ color: '#fff', fontSize: '18px' }}>
                We design & build brands, campaigns, digital projects for businesses large & small
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ===================== Why Choose Cards Section ===================== */}
      <div className="service-area pd-top-60 pd-bottom-60">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="single-service-inner style-hover-base h-100 p-4" style={{ boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
                <div className="thumb mb-3">
                  <div className="icon text-primary" style={{ fontSize: '48px' }}>💻</div>
                </div>
                <h4>Why choose (Webnox Technologies + wordpress web design)?</h4>
                <p>We offer affordable WordPress web design and development services company in India, located in Coimbatore. The blend of Webnox and WordPress will give you unbelievable results that shine on your website.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="single-service-inner style-hover-base h-100 p-4" style={{ boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
                <div className="thumb mb-3">
                  <div className="icon text-primary" style={{ fontSize: '48px' }}>🛒</div>
                </div>
                <h4>Can you integrate shopping cart with WordPress platform?</h4>
                <p>Yes, we can. WooCommerce is a powerful and extendable e-commerce website plugin for WordPress, which we recommend over other plugins. We set up your Products, Payment gateway information, customer history, etc.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="single-service-inner style-hover-base h-100 p-4" style={{ boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
                <div className="thumb mb-3">
                  <div className="icon text-primary" style={{ fontSize: '48px' }}>⚙️</div>
                </div>
                <h4>WordPress Website Customization</h4>
                <p>We are experts at capturing your business needs. Customizing the WordPress websites in terms of user-friendliness, search engine friendliness. We do customize your images and themes to suit your business goal and achieve high traffic.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===================== Things We Do Best Section ===================== */}
      <div className="service-area pd-top-60 pd-bottom-60" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center mb-5">
                <h2>Things We Do Best In WordPress CMS Platform</h2>
              </div>
              <div className="row">
                <div className="col-lg-4 col-md-6 mb-4">
                  <div className="single-service-inner style-hover-base h-100 p-4" style={{ boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
                    <div className="thumb mb-3">
                      <div className="icon text-primary" style={{ fontSize: '48px' }}>🎨</div>
                    </div>
                    <h4>WordPress Web Design</h4>
                    <p>We will bring you the most creative website that works well on other devices with cross browser compatibility. We design websites from the scratch and our unique design will fit for any kind of small business and works well on search engines.</p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                  <div className="single-service-inner style-hover-base h-100 p-4" style={{ boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
                    <div className="thumb mb-3">
                      <div className="icon text-primary" style={{ fontSize: '48px' }}>🛒</div>
                    </div>
                    <h4>Ecommerce Customization</h4>
                    <p>We customize and install new plugins and setup your WordPress developed e-commerce store based on your industry niche. The first impression makes the user decide whether to purchase the product or not.</p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                  <div className="single-service-inner style-hover-base h-100 p-4" style={{ boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
                    <div className="thumb mb-3">
                      <div className="icon text-primary" style={{ fontSize: '48px' }}>🔍</div>
                    </div>
                    <h4>WordPress SEO</h4>
                    <p>WordPress is best platform to implement search engine optimization services for your website. There are plenty of open source SEO tools available for optimizing your website. Websites implemented by WordPress works well on SERP also.</p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                  <div className="single-service-inner style-hover-base h-100 p-4" style={{ boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
                    <div className="thumb mb-3">
                      <div className="icon text-primary" style={{ fontSize: '48px' }}>🎨</div>
                    </div>
                    <h4>Theme Customization</h4>
                    <p>Does the professional WordPress themes did not meet your business requirement? We are here to help you to customize your WordPress themes. Our WordPress theme customization services are based on the business niche.</p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                  <div className="single-service-inner style-hover-base h-100 p-4" style={{ boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
                    <div className="thumb mb-3">
                      <div className="icon text-primary" style={{ fontSize: '48px' }}>💻</div>
                    </div>
                    <h4>WordPress Web Development</h4>
                    <p>We plan, design, code and customize your WordPress websites according to your business needs. We have qualified WordPress professionals who can modify or create the plugins with their experience.</p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                  <div className="single-service-inner style-hover-base h-100 p-4" style={{ boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
                    <div className="thumb mb-3">
                      <div className="icon text-primary" style={{ fontSize: '48px' }}>🔄</div>
                    </div>
                    <h4>WordPress Migration</h4>
                    <p>We migrate your WordPress files to your hosting partner without losing any data. We do all types of WordPress migration services such as moving database files, reconfiguring and moving the images, pages, etc.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===================== Why Us Section ===================== */}
      <div className="service-area pd-top-60 pd-bottom-60">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h2 className="mb-3" style={{ fontSize: '48px', fontWeight: '700' }}>WHY US?</h2>
              <div className="border-start border-primary border-3 ps-3 mb-4" style={{ height: '4px', width: '100px', backgroundColor: '#246bfd' }}></div>
              <h5 className="mb-5" style={{ color: '#737588' }}>SOME REASONS TO WORK TOGETHER</h5>
              <Link className="btn btn-base border-radius-5" href="tel:+919786557739" style={{ padding: '15px 30px', fontSize: '16px', fontWeight: '600' }}>
                <FaPhone /> CALL US @ +91 9786557739
              </Link>
            </div>
            <div className="col-lg-6">
              <div className="mb-4">
                <h4 className="text-primary mb-2" style={{ fontSize: '24px', fontWeight: '700' }}>01. WordPress SEO</h4>
                <p>We support and maintain your entire website right from its launch. Our maintenance services include monitoring websites and site speed, quick fixes on database and pages, content update, etc.</p>
              </div>
              <div className="mb-4">
                <h4 className="text-primary mb-2" style={{ fontSize: '24px', fontWeight: '700' }}>02. 100% Responsive</h4>
                <p>Our web design supports different screen sizes of smartphones and browsers. By optimizing web layouts and frames, CSS style sheets are good to build your mobile responsive website.</p>
              </div>
              <div className="mb-4">
                <h4 className="text-primary mb-2" style={{ fontSize: '24px', fontWeight: '700' }}>03. Flexible Team</h4>
                <p>We are soft spoken, 24/7 working strong team with unity and thrive to meet customer requirements. Satisfying the client is our main goal. Maintaining this kind of team flexibility is our superpower.</p>
              </div>
              <div className="mb-4">
                <h4 className="text-primary mb-2" style={{ fontSize: '24px', fontWeight: '700' }}>04. Competitive Price</h4>
                <p>Our highly competitive pricing structure saves you from the huge costs and you can utilize the resource on other areas. We track all our competitor price through our price tracking tool.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===================== About Section ===================== */}
      <div className="service-area pd-top-60 pd-bottom-60" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h2 className="mb-3" style={{ fontSize: '36px', fontWeight: '700' }}>
                We are 100% scalable WordPress website Development Company in india with talented, experienced workforce to deliver the tailor-made solutions.
              </h2>
              <div className="border-start border-primary border-3 ps-3 mb-4" style={{ height: '4px', width: '100px', backgroundColor: '#246bfd' }}></div>
              <p className="mb-4">
                We are Dedicated WordPress web developers in Coimbatore. And we offer WordPress maintenance to any complex web development. Hiring our wordpress programmers and designers will save you huge amount of time and money for theme migration, installation, wordpress seo, support and maintenance.
              </p>
              <Link className="btn btn-base border-radius-5" href="/contact" style={{ padding: '15px 40px', fontSize: '16px', fontWeight: '600' }}>
                START YOUR PROJECT
              </Link>
            </div>
            <div className="col-lg-6">
              <h4 className="mb-4" style={{ fontSize: '28px', fontWeight: '700' }}>What We Do In WordPress Platform</h4>
              <ul className="single-list-inner style-check">
                <li>
                  <FaCheckCircle /> WordPress theme customization
                </li>
                <li>
                  <FaCheckCircle /> WordPress website designing
                </li>
                <li>
                  <FaCheckCircle /> WordPress Ecommerce development - Woocommerce
                </li>
                <li>
                  <FaCheckCircle /> WordPress Web Development
                </li>
                <li>
                  <FaCheckCircle /> WordPress conversion from HTML, PSD, PNG images
                </li>
                <li>
                  <FaCheckCircle /> WordPress redesigning
                </li>
              </ul>
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
                      alt="WordPress Development" 
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
                      src="assets/img/wordpress-development-main.jpg" 
                      alt="WordPress Development Services" 
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
                    <h4>Expert WordPress Development Services</h4>
                    <p>
                      Our WordPress development team specializes in creating custom, high-performance websites that are tailored to your business needs. We leverage the power of WordPress to deliver solutions that are not only visually appealing but also highly functional and SEO-friendly.
                    </p>
                    <p>
                      With years of experience in WordPress development, we understand the platform's capabilities and limitations. We create solutions that maximize WordPress's strengths while addressing any challenges through custom development and optimization.
                    </p>
                    <h4 className="mt-4">Comprehensive WordPress Solutions</h4>
                    <p>
                      From simple blogs to complex e-commerce platforms, we have the expertise to build WordPress websites that meet your specific requirements. Our services include theme customization, plugin development, performance optimization, and ongoing maintenance.
                    </p>
                    <p>
                      We ensure that every WordPress website we build is responsive, fast, secure, and optimized for search engines. Our focus on quality and attention to detail ensures that your website not only looks great but also performs exceptionally well.
                    </p>

                    <h5 className="mt-4 mb-3">Custom WordPress Development</h5>
                    <p>
                      Our team of experienced WordPress developers creates custom solutions tailored to your unique business needs. Whether you need a simple blog, a corporate website, or a complex e-commerce platform, we have the expertise to deliver exactly what you need. We work closely with you to understand your goals and create a website that not only meets but exceeds your expectations.
                    </p>
                    <p>
                      We specialize in custom theme development, plugin creation, and full-stack WordPress solutions. Our developers are well-versed in PHP, JavaScript, CSS, and WordPress best practices, ensuring that your website is built with clean, maintainable code that follows industry standards.
                    </p>

                    <h5 className="mt-4 mb-3">WordPress Theme Customization</h5>
                    <p>
                      Don't let pre-built themes limit your vision. Our WordPress theme customization services allow you to transform any theme into a unique representation of your brand. We modify layouts, colors, fonts, and functionality to match your exact requirements, ensuring your website stands out from the competition.
                    </p>
                    <p>
                      We work with both free and premium WordPress themes, customizing them to align with your brand identity and business goals. Our customization process includes responsive design adjustments, performance optimization, and SEO-friendly modifications that help your website rank better in search engines.
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
                        What is WordPress development and why do I need it?
                      </button>
                    </h2>
                    <div
                      id="faqCollapseOne"
                      className="accordion-collapse collapse show"
                      aria-labelledby="faqHeadingOne"
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body" style={{ padding: '20px', backgroundColor: '#f8f9fa' }}>
                        WordPress development involves creating, customizing, and maintaining websites using the WordPress CMS platform. You need it to build a professional, SEO-friendly, and easy-to-manage website that can grow with your business. WordPress powers 25% of all websites globally due to its flexibility, user-friendly interface, and extensive customization options.
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
                        How long does it take to develop a WordPress website?
                      </button>
                    </h2>
                    <div
                      id="faqCollapseTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="faqHeadingTwo"
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body" style={{ padding: '20px', backgroundColor: '#f8f9fa' }}>
                        The timeline depends on the complexity and requirements of your website. A simple blog or business website typically takes 2-4 weeks, while an e-commerce site with custom features may take 4-8 weeks. Complex custom WordPress solutions can take 8-12 weeks. We provide detailed timelines after understanding your specific requirements.
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
                        Can you integrate e-commerce functionality with WordPress?
                      </button>
                    </h2>
                    <div
                      id="faqCollapseThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="faqHeadingThree"
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body" style={{ padding: '20px', backgroundColor: '#f8f9fa' }}>
                        Yes, absolutely! We specialize in WooCommerce integration, which is the most powerful and extendable e-commerce plugin for WordPress. We can set up your product catalog, payment gateways, shopping cart, customer accounts, order management, and inventory tracking. WooCommerce is highly customizable and perfect for businesses of all sizes.
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
                        Why is WordPress better for SEO than other platforms?
                      </button>
                    </h2>
                    <div
                      id="faqCollapseFour"
                      className="accordion-collapse collapse"
                      aria-labelledby="faqHeadingFour"
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body" style={{ padding: '20px', backgroundColor: '#f8f9fa' }}>
                        WordPress is inherently SEO-friendly with clean code structure, semantic HTML, and fast loading times. It offers powerful SEO plugins like Yoast SEO, All in One SEO, and Rank Math that help optimize content, meta tags, sitemaps, and schema markup. Studies show WordPress websites get better visibility, more clicks, and higher rankings on Google compared to other platforms. We optimize every WordPress site we build for maximum search engine performance.
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
                        Do you provide WordPress maintenance and support services?
                      </button>
                    </h2>
                    <div
                      id="faqCollapseFive"
                      className="accordion-collapse collapse"
                      aria-labelledby="faqHeadingFive"
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body" style={{ padding: '20px', backgroundColor: '#f8f9fa' }}>
                        Yes, we offer comprehensive WordPress maintenance and support services. Our maintenance includes regular updates for WordPress core, themes, and plugins, security monitoring, database optimization, site speed monitoring, quick fixes, content updates, backup management, and 24/7 technical support. We ensure your website remains secure, fast, and up-to-date from the day it launches.
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
      {/* ===================== WordPress Development Area End ===================== */}
    </>
  );
};

export default WordPressDevelopmentArea;

