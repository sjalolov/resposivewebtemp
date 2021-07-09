import React from "react";
import './style.css';

const Portfolio = () => (

    <body>
{/* Nav-Bar Section */}
       <section id="nav-bar" class="container">
         <header class="nav-bar">
           <div class="brand"><a href="#hero"><h1>Portfolio Temp</h1></a></div>
           <div class="nav-list">
            <div class="hamburger">
              <div class="bar"></div>
             </div>
             <ul>
               <li><a href="#about">About</a></li>
               <li><a href="#services">services</a></li>
               <li><a href="#hire">Hire Me</a></li>
             </ul>
           </div>
         </header>
       </section>
{/* End of Nav-Bar Section */}
{/* Hero Section */}
       <section id="hero" class="hero container">
         <div class="hero-info">
           <h1 class="hero-info-heading">I Design Your Dream</h1>
           <p class="hero-info-subheading">I am a web designer</p>
           <a href="/some/valid/uri" type="button" class="hero-info-button">Portfolio</a>
         </div>
       </section>
{/* End of Hero Section */}
{/* About Section */}
       <section id="about" class="about container">
         <div class="about-info">
           <h1 class="about-info-heading">About Me</h1>
           <p class="about-info-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi suscipit quidem ullam voluptates repellendus explicabo placeat, expedita ratione saepe eaque dolorum sed deleniti, odit numquam, nostrum tempore quos corrupti rem.</p>
           <a href="/some/valid/uri" type="button" class="about-info-button">Download Resume</a>
         </div>
         <div class="about-img">
           <div class="about-img-wrapper">
             <img src="https://i.postimg.cc/8CCskXxs/triangle-nodes.jpg" alt=""/>
           </div>
         </div>
       </section>
{/* End of About Section */}
{/* Services Section */}
  <section id="services" class="services container">
    <div class="services-header">
      <h1 class="services-header-heading">services</h1>
      <p class="services-header-desc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni temporibus, omnis illum ipsa reiciendis illo eos odio possimus voluptatibus architecto.</p>
    </div>
    <div class="services-info">
      <div class="service">
        <div class="service-card">
          <div class="service-front">
            <i class="fa fa-palette"></i>
            <h1 class="service-front-heading">Web Design</h1>
          </div>
          <div class="service-back">
            <h1 class="service-back-heading">Web Design</h1>
            <p class="service-back-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum aut dolor voluptatem incidunt placeat impedit laboriosam quam consequatur quasi nihil libero ad, quaerat, alias illum excepturi. Iste quo repellendus consequuntur asperiores dignissimos, quaerat obcaecati officiis repudiandae fugit tenetur nulla impedit!</p>
          </div>
        </div>
      </div>
      <div class="service">
        <div class="service-card">
          <div class="service-front">
            <i class="fa fa-laptop-code"></i>
            <h1 class="service-front-heading">Font End Dev</h1>
          </div>
          <div class="service-back">
            <h1 class="service-back-heading">Front End Dev</h1>
            <p class="service-back-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum aut dolor voluptatem incidunt placeat impedit laboriosam quam consequatur quasi nihil libero ad, quaerat, alias illum excepturi. Iste quo repellendus consequuntur asperiores dignissimos, quaerat obcaecati officiis repudiandae fugit tenetur nulla impedit!</p>
          </div>
        </div>
      </div>
      <div class="service">
        <div class="service-card">
          <div class="service-front">
            <i class="fa fa-building"></i>
            <h1 class="service-front-heading">Branding</h1>
          </div>
          <div class="service-back">
            <h1 class="service-back-heading">Branding</h1>
            <p class="service-back-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum aut dolor voluptatem incidunt placeat impedit laboriosam quam consequatur quasi nihil libero ad, quaerat, alias illum excepturi. Iste quo repellendus consequuntur asperiores dignissimos, quaerat obcaecati officiis repudiandae fugit tenetur nulla impedit!</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* <!-- Hire Section  --> */}
  <section id="hire" class="hire container">
    <h1 class="hire-heading">Hire me to build your dream website</h1>
    <a href="/some/valid/uri" type="button" class="hire-button">Hire Me !!</a>
  </section>
  {/* <!-- End Hire Section  --> */}

  {/* <!-- Footer section  --> */}
  <footer id="footer" class="footer container">
    <div class="footer-contact">
      <h1 class="footer-contact-heading">Contact With Me</h1>
      <p class="footer-contact-info">Email: yourname@gamil.com</p>
      <p class="footer-contact-info">Mobile: 234 234 2342</p>
    </div>
    <div class="footer-social-follow">
      <h1 class="footer-social-follow-heading">Follow Me</h1>
      <div class="footer-social-icon">
        <a href="/some/valid/uri"><i class="fab fa-facebook"></i></a>
        <a href="/some/valid/uri"><i class="fab fa-instagram-square"></i></a>
        <a href="/some/valid/uri"><i class="fab fa-behance-square"></i></a>
        <a href="/some/valid/uri"><i class="fab fa-dribbble-square"></i></a>
      </div>
    </div>
  </footer>
  {/* <!-- End Footer section  --> */}
  <script src="./app.js"></script>
     </body>

);
  
  export default Portfolio;