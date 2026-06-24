import React from 'react'
import './App.css'

function App() {
  const whatsappNumber = "+2348000000000"; // Placeholder
  const whatsappServiceMsg = encodeURIComponent("Hi Ewa Beauty, I would like to book a makeup service.");
  const whatsappShopMsg = encodeURIComponent("Hi Ewa Beauty, I would like to purchase some makeup tools.");
  
  const serviceLink = `https://wa.me/${whatsappNumber}?text=${whatsappServiceMsg}`;
  const shopLink = `https://wa.me/${whatsappNumber}?text=${whatsappShopMsg}`;

  return (
    <>
      <header className="header new-header">
        <div className="header-logo">Ewa Beauty</div>
        <nav className="header-nav">
          <a href="#">Home</a>
          <a href="#services">Services</a>
          <a href="#shop">Shop</a>
          <a href="#about">Our Story</a>
          <a href="#faq">FAQ</a>
        </nav>
        <div className="header-actions">
          <button style={{color: 'var(--text-dark)', display: 'flex', alignItems: 'center', background: 'transparent', border: 'none', cursor: 'pointer'}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          </button>
          <a href={serviceLink} target="_blank" rel="noopener noreferrer" style={{color: 'var(--text-dark)', display: 'flex', alignItems: 'center'}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
          </a>
        </div>
      </header>

      <section className="hero-split">
        <div className="hero-split-content">
          <div className="hero-overline">Premium Beauty</div>
          <h1 className="hero-headline">Flawless Glam Services & Premium Beauty Tools.</h1>
          
          <div className="hero-button-group" style={{display: 'flex', gap: '15px', marginBottom: 'var(--spacing-lg)'}}>
            <a href={serviceLink} target="_blank" rel="noopener noreferrer" className="btn-pill">
              Book a Service
            </a>
            <a href={shopLink} target="_blank" rel="noopener noreferrer" className="btn-pill outline">
              Shop Tools
            </a>
          </div>
          
          <div className="hero-description">
            Whether you are sitting in our chair for a flawless bridal glam or upgrading your kit with our luxury brushes, we are dedicated to celebrating your natural radiance.
          </div>
          
          <div className="hero-thumbnails">
            <img src="/cat_face.png" alt="Service Thumbnail" />
            <img src="/cat_eyes.png" alt="Tool Thumbnail" />
            <img src="/cat_lips.png" alt="Glam Thumbnail" />
          </div>
        </div>

        <div className="hero-split-image"></div>
      </section>

      <section className="photo-categories" id="services">
        <div className="text-center">
          <div className="section-subtitle">Our Expertise</div>
          <h2 className="section-title">Makeup Services</h2>
        </div>
        <div className="photo-category-grid">
          {[
            {name: 'Bridal Glam', price: 'Starting at ₦150,000', image: '/cat_face.png'},
            {name: 'Studio & Editorial', price: 'Starting at ₦40,000', image: '/cat_eyes.png'},
            {name: 'Event & Party', price: 'Starting at ₦50,000', image: '/cat_lips.png'}
          ].map((srv) => (
            <div className="photo-category-item" key={srv.name}>
              <img src={srv.image} alt={srv.name} className="photo-category-img" loading="lazy" />
              <div className="photo-category-overlay">
                <h3>{srv.name}</h3>
                <p style={{fontSize: '0.9rem', color: '#eee', margin: '5px 0', letterSpacing: '1px'}}>{srv.price}</p>
                <a href={serviceLink} className="btn-pill" style={{marginTop: '15px', padding: '10px 20px', fontSize: '0.9rem'}}>Book Now</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="products" id="shop" style={{backgroundColor: 'var(--white)', padding: 'var(--spacing-xxl) 0'}}>
        <div className="text-center">
          <div className="section-subtitle">Professional Quality</div>
          <h2 className="section-title">Shop Premium Tools</h2>
        </div>
        <div className="product-grid" style={{maxWidth: '800px'}}>
          {[
            {name: 'Pro 15-Piece Brush Set', price: '₦45,000', img: '/cat_skin.png'},
            {name: 'Flawless Blending Sponge', price: '₦8,500', img: '/thumb1.png'}
          ].map((tool, i) => (
            <div className="product-card" key={i}>
              <div className="product-image" style={{backgroundImage: `url(${tool.img})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '200px'}}>
              </div>
              <div className="product-rating">★★★★★</div>
              <h3 className="product-title" style={{fontSize: '1.1rem'}}>{tool.name}</h3>
              <div className="product-price">{tool.price}</div>
              <a href={shopLink} target="_blank" rel="noopener noreferrer" className="btn-pill outline" style={{width: '100%', padding: '10px', marginTop: '10px'}}>Order via WhatsApp</a>
            </div>
          ))}
        </div>
      </section>

      <section className="timeline-about" id="about">
        <div className="timeline-container">
          <div className="text-center">
            <div className="section-subtitle">Our Story</div>
            <h2 className="section-title">The Path to Flawless</h2>
          </div>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>The Vision</h3>
                <p>Born out of a need for a luxury makeup studio experience and high-end tools formulated specifically for melanin-rich skin.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>The Studio</h3>
                <p>We opened our doors to provide unparalleled bridal and editorial glam, focusing on heat-resistant, long-lasting techniques.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>The Tools</h3>
                <p>To help you recreate the magic at home, we launched our own line of professional-grade makeup tools and accessories.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="founder-section" id="founder">
        <div className="founder-container">
          <div className="founder-image-wrapper">
             <img src="/founder.png" alt="Founder" className="founder-image" loading="lazy" />
          </div>
          <div className="founder-content">
            <div className="section-subtitle">Meet The Founder</div>
            <h2 className="section-title" style={{marginBottom: '1rem', textAlign: 'left'}}>A Message to You</h2>
            <p className="founder-quote">"I started Ewa Beauty because I wanted to provide both an unforgettable service experience and the exact tools needed to maintain that luxury at home."</p>
            <p className="founder-bio">Whether I am doing your makeup for your big day, or you are using our Pro Brush set in your own vanity, my goal is to enhance your natural radiance without hiding what makes you beautiful. We celebrate you.</p>
            <div className="founder-signature">Toluwani M.</div>
          </div>
        </div>
      </section>

      <section className="faq-section" id="faq">
        <div className="text-center">
          <div className="section-subtitle">Got Questions?</div>
          <h2 className="section-title">Frequently Asked Questions</h2>
        </div>
        <div className="faq-container">
          {[
            {q: 'How far in advance should I book bridal makeup?', a: 'We recommend booking bridal services at least 3-6 months in advance to secure your wedding date.'},
            {q: 'Do you offer home service for makeup appointments?', a: 'Yes, we offer premium home service for bridal and special event glam within Lagos for an additional travel fee.'},
            {q: 'How do I order the makeup tools?', a: 'Simply click "Order via WhatsApp" on any product, and our team will process your payment and shipping details immediately!'},
            {q: 'Do you deliver tools outside Lagos?', a: 'Yes! We offer nationwide delivery for all our tools and accessories. Delivery times vary between 2-5 business days.'}
          ].map((faq, i) => (
            <div className="faq-item" key={i}>
              <h4 className="faq-question">{faq.q}</h4>
              <p className="faq-answer">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="footer" id="contact">
        <div className="header-logo" style={{marginBottom: '2rem'}}>Ewa Beauty</div>
        <nav className="footer-nav">
          <a href="#">Home</a>
          <a href="#services">Services</a>
          <a href="#shop">Shop</a>
          <a href="#about">About</a>
        </nav>
        <div style={{display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '2rem', color: 'var(--text-light)'}}>
          <a href="#" style={{color: 'inherit'}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
          </a>
          <a href="#" style={{color: 'inherit'}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
          </a>
          <a href={serviceLink} style={{color: 'inherit'}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
          </a>
        </div>
        <div className="footer-copy">
          &copy; {new Date().getFullYear()} Ewa Beauty Nigeria. All rights reserved.
        </div>
      </footer>
    </>
  )
}

export default App
