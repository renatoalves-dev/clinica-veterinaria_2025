import React from 'react'


const Footer = () => {


  return (

<div>
    <br></br>
    <footer class="footer">
      <div class="container">
          <div class="row">
              <div class="col-lg-4 footer-section">
                  <div class="footer-logo">Pet Shop do Nathanzinho</div>
                  <p class="footer-about">We are dedicated to providing the best service to our customers. Our mission
                      is to create innovative solutions that make a difference in people's lives.</p>
                  <div class="social-links">
                      <a href="https://www.facebook.com/renatoalves.soares.56" class="social-icon"><i class="bi bi-facebook"></i></a>
                      <a href="#" class="social-icon"><i class="bi bi-twitter"></i></a>
                      <a href="#" class="social-icon"><i class="bi bi-instagram"></i></a>
                      <a href="#" class="social-icon"><i class="bi bi-linkedin"></i></a>
                  </div>
              </div>

              <div class="col-lg-2 col-md-6 footer-section">
                  <h5>Quick Links</h5>
                  <ul class="footer-links">
                      <li><a href="#">About Us</a></li>
                      <li><a href="#">Services</a></li>
                      <li><a href="#">Products</a></li>
                      <li><a href="#">Contact</a></li>
                      <li><a href="#">Careers</a></li>
                  </ul>
              </div>

              <div class="col-lg-2 col-md-6 footer-section">
                  <h5>Support</h5>
                  <ul class="footer-links">
                      <li><a href="#">FAQ</a></li>
                      <li><a href="#">Help Center</a></li>
                      <li><a href="#">Privacy Policy</a></li>
                      <li><a href="#">Terms of Service</a></li>
                      <li><a href="#">Contact Support</a></li>
                  </ul>
              </div>

              <div class="col-lg-4 footer-section">
                  <h5>Newsletter</h5>
                  <p class="footer-about">Subscribe to our newsletter for updates, news, and exclusive offers.</p>
                  <div class="footer-newsletter">
                      <input type="email" placeholder="nathanguara2023@gmail.com"/>
                      <button class="newsletter-btn">
                <i class="fas fa-paper-plane"></i>
              </button>
                  </div>
              </div>
          </div>

          <div class="footer-bottom">
              <ul class="footer-bottom-links">
                  <li><a href="#">Privacy Policy</a></li>
                  <li><a href="#">Terms of Service</a></li>
                  <li><a href="#">Cookie Policy</a></li>
              </ul>
              <p style={{ textAlign: 'center' }}>© 2025 Nathan´s Developer. All rights reserved.</p>
          </div>
      </div>
</footer>
    
</div>
  )
}

export default Footer