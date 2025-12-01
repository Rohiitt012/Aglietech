import Link from 'next/link';
import React from 'react';
import {
  FaAngleDoubleRight,
  FaArrowRight,
  FaCheckCircle,
  FaPhone,
  FaStar,
} from 'react-icons/fa';

const SocialMediaMarketingArea = () => {
  return (
    <>
      {/* ===================== Top Banner Section ===================== */}
      <div className="service-area pd-top-0 pd-bottom-0" style={{ background: '#000', color: '#fff', padding: '15px 0' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h5 style={{ margin: 0, fontSize: '18px', fontWeight: '600' }}>
                Worldwide Clients * Award Winning Company * Affordable Packages *
              </h5>
            </div>
          </div>
        </div>
      </div>

      {/* ===================== Hero Section ===================== */}
      <div className="service-area pd-top-60 pd-bottom-60">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="mb-4" style={{ fontSize: '42px', fontWeight: '700', color: '#1a1a2e' }}>
                Best Social Media Management Company In India
              </h1>
              <p className="mb-4" style={{ fontSize: '16px', lineHeight: '1.8', color: '#333' }}>
                Are you searching for the best social media management services in India? RankON Technologies is a trusted social media management company with real results. We don't just "post." We manage, strategize, and grow your brand's presence across platforms like Instagram, Facebook, LinkedIn, Twitter, and YouTube, turning your social profiles into active sales channels.
              </p>
              <div className="row mb-4">
                <div className="col-md-3 mb-3">
                  <div className="text-center p-3" style={{ border: '1px solid #e0e0e0', borderRadius: '8px' }}>
                    <div style={{ fontSize: '24px', fontWeight: '700', color: '#246bfd' }}>5/5</div>
                    <div style={{ fontSize: '14px', color: '#666' }}>Clutch</div>
                    <div className="mt-2">
                      <FaStar style={{ color: '#ffc107', fontSize: '14px' }} />
                      <FaStar style={{ color: '#ffc107', fontSize: '14px' }} />
                      <FaStar style={{ color: '#ffc107', fontSize: '14px' }} />
                      <FaStar style={{ color: '#ffc107', fontSize: '14px' }} />
                      <FaStar style={{ color: '#ffc107', fontSize: '14px' }} />
                    </div>
                  </div>
                </div>
                <div className="col-md-3 mb-3">
                  <div className="text-center p-3" style={{ border: '1px solid #e0e0e0', borderRadius: '8px' }}>
                    <div style={{ fontSize: '18px', fontWeight: '700', color: '#246bfd' }}>Top Rated Plus</div>
                    <div style={{ fontSize: '14px', color: '#666' }}>Upwork</div>
                  </div>
                </div>
                <div className="col-md-3 mb-3">
                  <div className="text-center p-3" style={{ border: '1px solid #e0e0e0', borderRadius: '8px' }}>
                    <div style={{ fontSize: '24px', fontWeight: '700', color: '#246bfd' }}>4.9/5</div>
                    <div style={{ fontSize: '14px', color: '#666' }}>Google</div>
                    <div className="mt-2">
                      <FaStar style={{ color: '#ffc107', fontSize: '14px' }} />
                      <FaStar style={{ color: '#ffc107', fontSize: '14px' }} />
                      <FaStar style={{ color: '#ffc107', fontSize: '14px' }} />
                      <FaStar style={{ color: '#ffc107', fontSize: '14px' }} />
                      <FaStar style={{ color: '#ffc107', fontSize: '14px' }} />
                    </div>
                  </div>
                </div>
                <div className="col-md-3 mb-3">
                  <div className="text-center p-3" style={{ border: '1px solid #e0e0e0', borderRadius: '8px' }}>
                    <div style={{ fontSize: '18px', fontWeight: '700', color: '#246bfd' }}>Google Partner</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="p-4" style={{ background: '#fff', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}>
                <div className="mb-3">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <h6 style={{ margin: 0, fontWeight: '600' }}>Excellent rating</h6>
                    <div style={{ fontSize: '14px', color: '#666' }}>Based on 130 reviews</div>
                  </div>
                  <div className="mb-3">
                    <FaStar style={{ color: '#ffc107', fontSize: '20px' }} />
                    <FaStar style={{ color: '#ffc107', fontSize: '20px' }} />
                    <FaStar style={{ color: '#ffc107', fontSize: '20px' }} />
                    <FaStar style={{ color: '#ffc107', fontSize: '20px' }} />
                    <FaStar style={{ color: '#ffc107', fontSize: '20px' }} />
                  </div>
                  <p style={{ fontSize: '14px', color: '#333', lineHeight: '1.6' }}>
                    "Great customer service and very good results in terms of advertising campaigns! Knowledgeable and skilled..."
                  </p>
                  <div className="d-flex align-items-center mt-3">
                    <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#246bfd', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', marginRight: '10px' }}>C</div>
                    <div>
                      <div style={{ fontWeight: '600' }}>COSMIN LUNGU</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===================== Skyrocket Your Brand Section ===================== */}
      <div className="service-area pd-top-60 pd-bottom-60" style={{ background: '#f8f9fa' }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h3 className="mb-3" style={{ fontSize: '20px', fontWeight: '600', color: '#333' }}>
                Build Visibility, Earn Trust, Drive Sales with Best Social Media Management Services
              </h3>
              <h2 className="mb-4" style={{ fontSize: '36px', fontWeight: '700', color: '#1a1a2e' }}>
                Skyrocket Your Brand With Expert Social Media Management Company In India
              </h2>
              <p className="mb-4" style={{ fontSize: '16px', lineHeight: '1.8', color: '#333' }}>
                In a world where attention spans are short and the scroll never stops, your brand has just three seconds to stand out or be forgotten. That's where Rankon Technologies comes in. We help businesses not just exist on social media, but dominate it.
              </p>
            </div>
            <div className="col-lg-6">
              <div className="text-center">
                <div style={{ fontSize: '200px', opacity: '0.1', color: '#246bfd' }}>📱</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===================== Why Social Media Management Matters Section ===================== */}
      <div className="service-area pd-top-60 pd-bottom-60">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="text-center">
                <div style={{ fontSize: '200px', opacity: '0.1', color: '#246bfd' }}>💻</div>
              </div>
            </div>
            <div className="col-lg-6">
              <h2 className="mb-4" style={{ fontSize: '36px', fontWeight: '700', color: '#1a1a2e' }}>
                Why <span style={{ fontWeight: '700' }}>Social Media</span> Management Matters?
              </h2>
              <p className="mb-4" style={{ fontSize: '16px', lineHeight: '1.8', color: '#333' }}>
                Your customers are online, scrolling through Instagram, searching on Facebook, connecting on LinkedIn, and sharing on Twitter. But here's the catch: they won't notice you unless you stand out. That's where expert social media management comes in.
              </p>
              <p className="mb-4" style={{ fontSize: '16px', lineHeight: '1.8', color: '#333' }}>
                It's not just about posting pretty pictures or going viral; it's about building trust, authority, and ultimately, driving real business results. From brand awareness to lead generation, social media is the most powerful tool to scale your brand in 2026 —and <strong>Rankon Technologies helps you harness it strategically.</strong>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ===================== Why Hire RankoON Technologies Section ===================== */}
      <div className="service-area pd-top-60 pd-bottom-60" style={{ background: '#f8f9fa' }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="text-center">
                <div style={{ fontSize: '200px', opacity: '0.1', color: '#246bfd' }}>📱</div>
              </div>
            </div>
            <div className="col-lg-6">
              <h2 className="mb-4" style={{ fontSize: '36px', fontWeight: '700', color: '#1a1a2e' }}>
                Why Should You Hire RankoON Technologies As <strong>Your Social Media Management Company In India</strong>
              </h2>
              <p className="mb-4" style={{ fontSize: '16px', lineHeight: '1.8', color: '#333' }}>
                With 4.8 billion social media users, do you still think there could be any other place where you can find your target audience? Grab today's consumers on social media with the right social media management services!
              </p>
              <p className="mb-4" style={{ fontSize: '16px', lineHeight: '1.8', color: '#333' }}>
                With <strong>12+ years of experience</strong> and a portfolio that spans <strong>500+ successful clients globally</strong>, Rankon Technologies is one of India's most trusted digital growth partners. We've helped brands across India, the US, UK, Canada, Australia, UAE, and other parts of the world break through the noise and become leaders in their industries.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ===================== What You Get Section ===================== */}
      <div className="service-area pd-top-60 pd-bottom-60">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center mb-5">
              <h2 className="mb-4" style={{ fontSize: '36px', fontWeight: '700', color: '#1a1a2e' }}>
                What You Get With Rankon's Social Media Management Services
              </h2>
              <p className="mb-4" style={{ fontSize: '16px', lineHeight: '1.8', color: '#333', maxWidth: '800px', margin: '0 auto' }}>
                Every business is different, and so is our strategy. We build a <strong>customized roadmap</strong> that reflects your brand voice, speaks to your target audience, and focuses on <strong>revenue—not just reach</strong>.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 mb-4">
              <div className="p-4 text-center" style={{ border: '1px solid #e0e0e0', borderRadius: '12px', height: '100%' }}>
                <div style={{ fontSize: '48px', marginBottom: '20px' }}>🤝</div>
                <h4 className="mb-3" style={{ fontSize: '24px', fontWeight: '700', color: '#1a1a2e' }}>
                  End-to-End Social Media Strategy
                </h4>
                <p style={{ fontSize: '16px', color: '#666' }}>
                  From research to execution, we handle it all
                </p>
              </div>
            </div>
            <div className="col-lg-4 mb-4">
              <div className="p-4 text-center" style={{ border: '1px solid #e0e0e0', borderRadius: '12px', height: '100%' }}>
                <div style={{ fontSize: '48px', marginBottom: '20px' }}>📄</div>
                <h4 className="mb-3" style={{ fontSize: '24px', fontWeight: '700', color: '#1a1a2e' }}>
                  Content That Converts
                </h4>
                <p style={{ fontSize: '16px', color: '#666' }}>
                  Posts, stories, reels, and creatives designed to spark action
                </p>
              </div>
            </div>
            <div className="col-lg-4 mb-4">
              <div className="p-4 text-center" style={{ border: '1px solid #e0e0e0', borderRadius: '12px', height: '100%' }}>
                <div style={{ fontSize: '48px', marginBottom: '20px' }}>💻</div>
                <h4 className="mb-3" style={{ fontSize: '24px', fontWeight: '700', color: '#1a1a2e' }}>
                  Paid Ads That Work
                </h4>
                <p style={{ fontSize: '16px', color: '#666' }}>
                  Targeted ad campaigns for maximum ROI
                </p>
              </div>
            </div>
            <div className="col-lg-4 mb-4">
              <div className="p-4 text-center" style={{ border: '1px solid #e0e0e0', borderRadius: '12px', height: '100%' }}>
                <div style={{ fontSize: '48px', marginBottom: '20px' }}>👥</div>
                <h4 className="mb-3" style={{ fontSize: '24px', fontWeight: '700', color: '#1a1a2e' }}>
                  Engagement & Community Building
                </h4>
                <p style={{ fontSize: '16px', color: '#666' }}>
                  Turn followers into fans and fans into customers
                </p>
              </div>
            </div>
            <div className="col-lg-4 mb-4">
              <div className="p-4 text-center" style={{ border: '1px solid #e0e0e0', borderRadius: '12px', height: '100%' }}>
                <div style={{ fontSize: '48px', marginBottom: '20px' }}>📊</div>
                <h4 className="mb-3" style={{ fontSize: '24px', fontWeight: '700', color: '#1a1a2e' }}>
                  Advanced Analytics
                </h4>
                <p style={{ fontSize: '16px', color: '#666' }}>
                  Real-time performance tracking & monthly reports
                </p>
              </div>
            </div>
            <div className="col-lg-4 mb-4">
              <div className="p-4 text-center" style={{ border: '1px solid #e0e0e0', borderRadius: '12px', height: '100%' }}>
                <div style={{ fontSize: '48px', marginBottom: '20px' }}>🎯</div>
                <h4 className="mb-3" style={{ fontSize: '24px', fontWeight: '700', color: '#1a1a2e' }}>
                  Competitor & Trend Analysis
                </h4>
                <p style={{ fontSize: '16px', color: '#666' }}>
                  Stay ahead, not just in the game
                </p>
              </div>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-lg-12 text-center">
              <p className="mb-4" style={{ fontSize: '16px', lineHeight: '1.8', color: '#333' }}>
                From <strong>Instagram reels</strong> that go viral to <strong>LinkedIn campaigns</strong> that attract B2B leads—our work speaks for itself. And our clients agree.
              </p>
              <Link className="btn btn-base border-radius-5" href="/contact" style={{ backgroundColor: '#1a1a2e', color: '#fff', padding: '15px 40px', fontSize: '16px', fontWeight: '600' }}>
                Get Start Now <FaArrowRight style={{ marginLeft: '8px' }} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ===================== Social Media Advertising & Optimization Section ===================== */}
      <div className="service-area pd-top-60 pd-bottom-60" style={{ background: '#f8f9fa' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center mb-5">
              <h4 className="mb-3" style={{ fontSize: '24px', fontWeight: '600', color: '#333' }}>
                Social Media Advertising & Social Media Optimization
              </h4>
              <h2 className="mb-4" style={{ fontSize: '36px', fontWeight: '700', color: '#1a1a2e' }}>
                Count On <strong>Our Social Media Management Company</strong> To Get The Best Of Both Things
              </h2>
            </div>
          </div>
          <div className="row mb-5">
            <div className="col-lg-12">
              <p className="mb-4" style={{ fontSize: '16px', lineHeight: '1.8', color: '#333' }}>
                When it comes to social media management, there are two strategies you can choose from. The first one is <span style={{ color: '#dc3545', fontWeight: '600' }}>Social Media Advertising</span>, and the second one is <span style={{ color: '#dc3545', fontWeight: '600' }}>Social Media Optimization</span> and Handling. As a social media management company, we are familiar with both these strategies and have helped hundreds of our clients attain their goals.
              </p>
            </div>
          </div>
          <div className="row mb-5">
            <div className="col-lg-6">
              <h3 className="mb-4" style={{ fontSize: '28px', fontWeight: '700', color: '#1a1a2e' }}>
                Social Media Advertising
              </h3>
              <p className="mb-4" style={{ fontSize: '16px', lineHeight: '1.8', color: '#333' }}>
                The first strategy is Social Media Advertising. Paid social media marketing is undoubtedly a faster and more effective way to reach a broader audience in a short period. Pioneers like Facebook and Twitter are enabling businesses to advertise on their social media platforms. For instance, on Facebook, there are ads, and on Instagram, there are promoted tweets.
              </p>
              <p className="mb-4" style={{ fontSize: '16px', lineHeight: '1.8', color: '#333' }}>
                This strategy is used to reach a large audience to promote your products or services. It is often used by companies to generate leads or increase exposure for new products or services.
              </p>
            </div>
            <div className="col-lg-6">
              <div className="text-center">
                <div style={{ fontSize: '200px', opacity: '0.1', color: '#246bfd' }}>📢</div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="text-center">
                <div style={{ fontSize: '200px', opacity: '0.1', color: '#246bfd' }}>💻</div>
              </div>
            </div>
            <div className="col-lg-6">
              <h3 className="mb-4" style={{ fontSize: '28px', fontWeight: '700', color: '#1a1a2e' }}>
                Social Media Optimization and Handling
              </h3>
              <p className="mb-4" style={{ fontSize: '16px', lineHeight: '1.8', color: '#333' }}>
                Social Media Optimization and Handling is a concept that is about connecting with and engaging the audience to increase their knowledge about a product or service. The primary focus is to make social media content engaging and attractive to attract more visitors.
              </p>
              <p className="mb-4" style={{ fontSize: '16px', lineHeight: '1.8', color: '#333' }}>
                The best-kept secret of Rankon Technologies to make the social media optimization favorable to clients' businesses includes:
              </p>
              <ul className="single-list-inner style-check mb-4">
                <li><FaCheckCircle /> Strategic content planning and scheduling</li>
                <li><FaCheckCircle /> Platform-specific optimization techniques</li>
                <li><FaCheckCircle /> Community engagement and response management</li>
                <li><FaCheckCircle /> Performance tracking and analytics</li>
                <li><FaCheckCircle /> Trend monitoring and adaptation</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* ===================== Social Media Strategy & Planning Section ===================== */}
      <div className="service-area pd-top-60 pd-bottom-60">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center mb-5">
              <h2 className="mb-4" style={{ fontSize: '36px', fontWeight: '700', color: '#1a1a2e' }}>
                Let's Grow Your <strong>Brand</strong> Together With Right <strong>Social Media Management</strong> Company
              </h2>
              <p className="mb-4" style={{ fontSize: '16px', lineHeight: '1.8', color: '#333', maxWidth: '900px', margin: '0 auto' }}>
                Indeed, advertising on a social media account is a faster way to reach your target audience, outcompete your competitors, and generate leads and conversions. You can achieve this organically as well. As a social media management company, we are well-trained and experienced in helping businesses' social media accounts reach new heights in an organic way. Our trained social media specialists can help you make the most of social media accounts without having you to bear the advertising costs.
              </p>
              <p className="mb-5" style={{ fontSize: '18px', fontWeight: '600', color: '#246bfd' }}>
                Here's how we make this possible!
              </p>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h3 className="mb-4" style={{ fontSize: '32px', fontWeight: '700', color: '#1a1a2e' }}>
                Social Media Strategy & Planning
              </h3>
              <p className="mb-4" style={{ fontSize: '16px', lineHeight: '1.8', color: '#333' }}>
                A social media strategy is the foundation of effective social media management. If you are looking to manage or create your social media accounts, then you will need a comprehensive social media strategy. As a social media management company, we design strategies to help you achieve your business goals through your social channels. It is a plan that helps you identify which social networks you should be on, what content to share, and how to generate engagement. Moreover, our social media strategy is a living document, meaning it evolves as we grow as a business.
              </p>
              <Link className="btn btn-base border-radius-5" href="/contact" style={{ backgroundColor: '#1a1a2e', color: '#fff', padding: '15px 40px', fontSize: '16px', fontWeight: '600' }}>
                Let's Talk To Expert <FaArrowRight style={{ marginLeft: '8px' }} />
              </Link>
            </div>
            <div className="col-lg-6">
              <div className="text-center">
                <div style={{ fontSize: '200px', opacity: '0.1', color: '#246bfd' }}>📋</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===================== Designing Profile Section ===================== */}
      <div className="service-area pd-top-60 pd-bottom-60" style={{ background: '#f8f9fa' }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="text-center">
                <div style={{ fontSize: '200px', opacity: '0.1', color: '#246bfd' }}>👤</div>
              </div>
            </div>
            <div className="col-lg-6">
              <h2 className="mb-4" style={{ fontSize: '36px', fontWeight: '700', color: '#1a1a2e' }}>
                Designing Profile
              </h2>
              <p className="mb-4" style={{ fontSize: '16px', lineHeight: '1.8', color: '#333' }}>
                Social media platforms are overpopulated with businesses that don't have a profile. It's essential to have a profile because it will serve as your direct point of contact with the customer. Ideally, you want your social media profile to be the first thing people see when they search for your business on social media platforms. That's why it's crucial to have a well-designed profile.
              </p>
              <p className="mb-4" style={{ fontSize: '16px', lineHeight: '1.8', color: '#333' }}>
                As an experienced social media management company, we can confidently say that a well-designed profile will make your business stand out on social media platforms. A poorly designed profile can lead people to overlook your business and opt for a competitor.
              </p>
              <Link className="btn btn-base border-radius-5" href="/contact" style={{ backgroundColor: '#1a1a2e', color: '#fff', padding: '15px 40px', fontSize: '16px', fontWeight: '600' }}>
                Get a Quote <FaArrowRight style={{ marginLeft: '8px' }} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ===================== Content Creation Section ===================== */}
      <div className="service-area pd-top-60 pd-bottom-60">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h2 className="mb-4" style={{ fontSize: '36px', fontWeight: '700', color: '#1a1a2e' }}>
                Content Creation
              </h2>
              <p className="mb-4" style={{ fontSize: '16px', lineHeight: '1.8', color: '#333' }}>
                Content creation is one of the most vital tasks for the success of any social media campaign. It will not only help you to stay in touch with your followers and provide them with the latest news about your company, but also help you to generate more traffic to your website.
              </p>
              <p className="mb-4" style={{ fontSize: '16px', lineHeight: '1.8', color: '#333' }}>
                A well-crafted content strategy will help you drive more traffic and establish an online presence for your brand. To stay ahead in the fiercely competitive online world, you must stand out from the crowd and make a lasting impression on your target audience.
              </p>
              <Link className="btn btn-base border-radius-5" href="/contact" style={{ backgroundColor: '#1a1a2e', color: '#fff', padding: '15px 40px', fontSize: '16px', fontWeight: '600' }}>
                Contact Now <FaArrowRight style={{ marginLeft: '8px' }} />
              </Link>
            </div>
            <div className="col-lg-6">
              <div className="text-center">
                <div style={{ fontSize: '200px', opacity: '0.1', color: '#246bfd' }}>✍️</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===================== Scheduling & Posting Section ===================== */}
      <div className="service-area pd-top-60 pd-bottom-60" style={{ background: '#f8f9fa' }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="text-center">
                <div style={{ fontSize: '200px', opacity: '0.1', color: '#246bfd' }}>📅</div>
              </div>
            </div>
            <div className="col-lg-6">
              <h2 className="mb-4" style={{ fontSize: '36px', fontWeight: '700', color: '#1a1a2e' }}>
                Scheduling & Posting
              </h2>
              <p className="mb-4" style={{ fontSize: '16px', lineHeight: '1.8', color: '#333' }}>
                When you have a busy schedule, it becomes challenging to manage the social media tasks that you need to perform. If you have a business and you don't have enough time to dedicate to your social media accounts, then you need social media management services.
              </p>
              <p className="mb-4" style={{ fontSize: '16px', lineHeight: '1.8', color: '#333' }}>
                Our specialists will handle tasks such as posting, scheduling, and other related tasks. Not only will this help you to save a lot of time by doing this, but it will also enhance your visibility on social media.
              </p>
              <Link className="btn btn-base border-radius-5" href="/contact" style={{ backgroundColor: '#1a1a2e', color: '#fff', padding: '15px 40px', fontSize: '16px', fontWeight: '600' }}>
                Let's Talk To Expert <FaArrowRight style={{ marginLeft: '8px' }} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ===================== Inbound Engagement Monitoring Section ===================== */}
      <div className="service-area pd-top-60 pd-bottom-60">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h2 className="mb-4" style={{ fontSize: '36px', fontWeight: '700', color: '#1a1a2e' }}>
                Inbound Engagement Monitoring
              </h2>
              <p className="mb-4" style={{ fontSize: '16px', lineHeight: '1.8', color: '#333' }}>
                How do you measure the success of your social media marketing efforts? Quite simply, by tracking the engagement of your posts. It helps to find the best time for posting, understand what content resonates with your audience, and optimize your strategy for better results.
              </p>
              <p className="mb-4" style={{ fontSize: '16px', lineHeight: '1.8', color: '#333' }}>
                Our team monitors all interactions, comments, messages, and mentions across all platforms, ensuring timely responses and maintaining a positive brand image. We track metrics like likes, shares, comments, saves, and click-through rates to provide you with comprehensive insights.
              </p>
            </div>
            <div className="col-lg-6">
              <div className="text-center">
                <div style={{ fontSize: '200px', opacity: '0.1', color: '#246bfd' }}>📊</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===================== Influencer Management Section ===================== */}
      <div className="service-area pd-top-60 pd-bottom-60" style={{ background: '#f8f9fa' }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="text-center">
                <div style={{ fontSize: '200px', opacity: '0.1', color: '#246bfd' }}>🌟</div>
              </div>
            </div>
            <div className="col-lg-6">
              <h2 className="mb-4" style={{ fontSize: '36px', fontWeight: '700', color: '#1a1a2e' }}>
                Influencer Management
              </h2>
              <p className="mb-4" style={{ fontSize: '16px', lineHeight: '1.8', color: '#333' }}>
                The lifestyle filled with the glitz and glamor of influencers attracts everyone. If you want them to work in your favor, then you must know that influencer management is a spectacular way to grow your social media accounts by connecting with people who are already engaged with your target audience. As a social media management company, we will search and match your business with influencers who have a similar audience taste and can contribute to increasing brand awareness.
              </p>
              <Link className="btn btn-base border-radius-5" href="/contact" style={{ backgroundColor: '#1a1a2e', color: '#fff', padding: '15px 40px', fontSize: '16px', fontWeight: '600' }}>
                Contact Now <FaArrowRight style={{ marginLeft: '8px' }} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ===================== Social Media Training Section ===================== */}
      <div className="service-area pd-top-60 pd-bottom-60">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h2 className="mb-4" style={{ fontSize: '36px', fontWeight: '700', color: '#1a1a2e' }}>
                Social Media Training
              </h2>
              <p className="mb-4" style={{ fontSize: '16px', lineHeight: '1.8', color: '#333' }}>
                As a social media management company in India, we believe that true power is gained by sharing knowledge and by not hoarding it. That's why we offer comprehensive social media training programs to help your team understand the nuances of social media marketing and management.
              </p>
              <p className="mb-4" style={{ fontSize: '16px', lineHeight: '1.8', color: '#333' }}>
                Our training sessions cover everything from content creation and scheduling to analytics and paid advertising. We provide hands-on training with real-world examples and case studies to ensure your team can effectively manage your social media presence.
              </p>
            </div>
            <div className="col-lg-6">
              <div className="text-center">
                <div style={{ fontSize: '200px', opacity: '0.1', color: '#246bfd' }}>🎓</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===================== Service Details with Sidebar ===================== */}
      <div className="service-area pd-top-60 pd-bottom-60" style={{ background: '#f8f9fa' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="service-details-wrap">
                <h2 className="mb-4" style={{ fontSize: '32px', fontWeight: '700', color: '#1a1a2e' }}>
                  Comprehensive Social Media Management Solutions
                </h2>
                <p className="mb-4" style={{ fontSize: '16px', lineHeight: '1.8', color: '#333' }}>
                  Our social media management services are designed to help your business thrive in the digital landscape. We combine strategic planning, creative content, and data-driven insights to deliver results that matter.
                </p>
                <p className="mb-4" style={{ fontSize: '16px', lineHeight: '1.8', color: '#333' }}>
                  From initial strategy development to ongoing management and optimization, we handle every aspect of your social media presence. Our team of experts works closely with you to understand your business goals and create a customized approach that aligns with your brand voice and target audience.
                </p>
                <div className="row mb-4">
                  <div className="col-md-6 mb-3">
                    <div className="d-flex align-items-start">
                      <FaCheckCircle style={{ color: '#246bfd', fontSize: '20px', marginRight: '10px', marginTop: '4px' }} />
                      <div>
                        <h5 style={{ fontSize: '18px', fontWeight: '600', color: '#1a1a2e', marginBottom: '8px' }}>Platform Management</h5>
                        <p style={{ fontSize: '14px', color: '#666' }}>Complete management across all major social media platforms</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <div className="d-flex align-items-start">
                      <FaCheckCircle style={{ color: '#246bfd', fontSize: '20px', marginRight: '10px', marginTop: '4px' }} />
                      <div>
                        <h5 style={{ fontSize: '18px', fontWeight: '600', color: '#1a1a2e', marginBottom: '8px' }}>Content Strategy</h5>
                        <p style={{ fontSize: '14px', color: '#666' }}>Strategic content planning tailored to your audience</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <div className="d-flex align-items-start">
                      <FaCheckCircle style={{ color: '#246bfd', fontSize: '20px', marginRight: '10px', marginTop: '4px' }} />
                      <div>
                        <h5 style={{ fontSize: '18px', fontWeight: '600', color: '#1a1a2e', marginBottom: '8px' }}>Performance Analytics</h5>
                        <p style={{ fontSize: '14px', color: '#666' }}>Detailed reporting and insights for continuous improvement</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <div className="d-flex align-items-start">
                      <FaCheckCircle style={{ color: '#246bfd', fontSize: '20px', marginRight: '10px', marginTop: '4px' }} />
                      <div>
                        <h5 style={{ fontSize: '18px', fontWeight: '600', color: '#1a1a2e', marginBottom: '8px' }}>Community Engagement</h5>
                        <p style={{ fontSize: '14px', color: '#666' }}>Active engagement and response management</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="sidebar-area">
                <div className="widget widget-download mb-4">
                  <div className="widget-download-inner" style={{ background: '#fff', padding: '30px', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}>
                    <h4 className="mb-4" style={{ fontSize: '24px', fontWeight: '700', color: '#1a1a2e' }}>
                      Get Started Today
                    </h4>
                    <p className="mb-4" style={{ fontSize: '16px', color: '#666' }}>
                      Ready to transform your social media presence? Contact us today for a free consultation and discover how we can help your business grow.
                    </p>
                    <Link className="btn btn-base border-radius-5 w-100" href="/contact" style={{ backgroundColor: '#246bfd', color: '#fff', padding: '15px', fontSize: '16px', fontWeight: '600', textAlign: 'center', display: 'block' }}>
                      Contact Us Now <FaArrowRight style={{ marginLeft: '8px' }} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===================== Community Management Section ===================== */}
      <div className="service-area pd-top-60 pd-bottom-60" style={{ background: '#f8f9fa' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 mb-5">
              <h2 className="mb-4" style={{ fontSize: '36px', fontWeight: '700', color: '#1a1a2e', textAlign: 'center' }}>
                Community Management
              </h2>
              <p className="mb-5" style={{ fontSize: '16px', lineHeight: '1.8', color: '#333', textAlign: 'center', maxWidth: '900px', margin: '0 auto' }}>
                From the very beginning, we involve community members and take note of their needs and feedback. We engage with the community and develop a sense of belonging among the target audience. With such strong connections and bonds, we are readily able to convey our message.
              </p>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="text-center">
                <div style={{ fontSize: '200px', opacity: '0.1', color: '#246bfd' }}>👥</div>
              </div>
            </div>
            <div className="col-lg-6">
              <p className="mb-4" style={{ fontSize: '16px', lineHeight: '1.8', color: '#333' }}>
                Our skilled community management specialists also monitor key indicators, such as likes, comments, shares, and other relevant data. This gives us important insights into the success of our interaction and the growth of the online community. Last but not least, we may modify and improve our procedure in accordance with the data gathered to retain the audience we have accumulated.
              </p>
              <div className="row mt-4">
                <div className="col-md-6 mb-3">
                  <div className="d-flex align-items-start">
                    <FaCheckCircle style={{ color: '#246bfd', fontSize: '20px', marginRight: '10px', marginTop: '4px' }} />
                    <div>
                      <h5 style={{ fontSize: '18px', fontWeight: '600', color: '#1a1a2e', marginBottom: '8px' }}>Active Engagement</h5>
                      <p style={{ fontSize: '14px', color: '#666' }}>Real-time interaction with community members</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div className="d-flex align-items-start">
                    <FaCheckCircle style={{ color: '#246bfd', fontSize: '20px', marginRight: '10px', marginTop: '4px' }} />
                    <div>
                      <h5 style={{ fontSize: '18px', fontWeight: '600', color: '#1a1a2e', marginBottom: '8px' }}>Data Monitoring</h5>
                      <p style={{ fontSize: '14px', color: '#666' }}>Track likes, comments, shares, and engagement metrics</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div className="d-flex align-items-start">
                    <FaCheckCircle style={{ color: '#246bfd', fontSize: '20px', marginRight: '10px', marginTop: '4px' }} />
                    <div>
                      <h5 style={{ fontSize: '18px', fontWeight: '600', color: '#1a1a2e', marginBottom: '8px' }}>Community Growth</h5>
                      <p style={{ fontSize: '14px', color: '#666' }}>Build and nurture a loyal online community</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div className="d-flex align-items-start">
                    <FaCheckCircle style={{ color: '#246bfd', fontSize: '20px', marginRight: '10px', marginTop: '4px' }} />
                    <div>
                      <h5 style={{ fontSize: '18px', fontWeight: '600', color: '#1a1a2e', marginBottom: '8px' }}>Continuous Improvement</h5>
                      <p style={{ fontSize: '14px', color: '#666' }}>Optimize strategies based on data insights</p>
                    </div>
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
                      What social media platforms do you manage?
                    </button>
                  </h2>
                  <div id="faq1" className="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
                    <div className="accordion-body" style={{ fontSize: '16px', lineHeight: '1.8', color: '#333' }}>
                      We manage all major social media platforms including Facebook, Instagram, LinkedIn, Twitter, YouTube, Pinterest, TikTok, and more. Our team will help you identify which platforms are best for your business and create platform-specific strategies.
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
                      While every business is different, most clients start seeing improvements in engagement and reach within 2-3 months. Significant growth in followers and conversions typically occurs within 4-6 months of consistent, strategic management.
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
                      Do you provide content creation services?
                    </button>
                  </h2>
                  <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body" style={{ fontSize: '16px', lineHeight: '1.8', color: '#333' }}>
                      Yes, content creation is a core part of our services. We create all types of content including posts, stories, reels, videos, graphics, and more. All content is designed to align with your brand voice and engage your target audience.
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
                      How do you measure success?
                    </button>
                  </h2>
                  <div id="faq4" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body" style={{ fontSize: '16px', lineHeight: '1.8', color: '#333' }}>
                      We track a comprehensive set of metrics including engagement rate, follower growth, reach, impressions, click-through rates, conversions, and ROI. You'll receive monthly reports with detailed analytics and insights to help you understand your social media performance.
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
                      Can you help with paid advertising?
                    </button>
                  </h2>
                  <div id="faq5" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body" style={{ fontSize: '16px', lineHeight: '1.8', color: '#333' }}>
                      Absolutely! We offer comprehensive paid advertising services across all major social media platforms. Our team creates, manages, and optimizes ad campaigns to maximize your ROI and reach your target audience effectively.
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

export default SocialMediaMarketingArea;

