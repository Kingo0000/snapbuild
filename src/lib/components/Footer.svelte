<script>
</script>

<footer class="footer">
  <div class="container">
    <div class="footer-top">
      <div class="footer-brand">
        <div class="logo">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 2L2 9V19L14 26L26 19V9L14 2Z" fill="url(#footer-grad)" />
            <path d="M2 9L14 16L26 9" stroke="white" stroke-width="2" stroke-linejoin="round"/>
            <path d="M14 26V16" stroke="white" stroke-width="2" stroke-linejoin="round"/>
            <defs>
              <linearGradient id="footer-grad" x1="2" y1="2" x2="26" y2="26" gradientUnits="userSpaceOnUse">
                <stop stop-color="#ff6b6b"/>
                <stop offset="1" stop-color="#d84b9e"/>
              </linearGradient>
            </defs>
          </svg>
          SnapBuild
        </div>
        <p>The single platform for all your marketing assets.</p>
      </div>
      <div class="footer-links">
        <div class="link-col">
          <h4>Product</h4>
          <a href="#product">Features</a>
          <a href="#integrations">Integrations</a>
          <a href="#pricing">Pricing</a>
        </div>
        <div class="link-col">
          <h4>Company</h4>
          <a href="#">About Us</a>
          <a href="#">Careers</a>
          <a href="#contact">Contact</a>
        </div>
        <div class="link-col">
          <h4>Legal</h4>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; {new Date().getFullYear()} SnapBuild. All rights reserved.</p>
    </div>
  </div>
</footer>

<style>
  .footer {
    background: #111;
    color: white;
    padding: 80px 0 40px;
  }
  .footer-top {
    display: flex;
    justify-content: space-between;
    margin-bottom: 60px;
    flex-wrap: wrap;
    gap: 48px;
  }
  .footer-brand {
    max-width: 300px;
  }
  .logo {
    display: flex;
    align-items: center;
    gap: 8px;
    font-weight: 700;
    font-size: 1.5rem;
    margin-bottom: 16px;
  }
  .footer-brand p {
    color: #888;
    font-size: 0.95rem;
    line-height: 1.6;
  }
  
  .footer-links {
    display: flex;
    gap: 80px;
  }
  .link-col {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  .link-col h4 {
    color: white;
    font-size: 1.125rem;
    margin-bottom: 8px;
  }
  .link-col a {
    color: #888;
    text-decoration: none;
    font-size: 0.95rem;
    transition: color 0.2s;
  }
  .link-col a:hover {
    color: white;
  }
  
  .footer-bottom {
    border-top: 1px solid #333;
    padding-top: 32px;
    text-align: center;
    color: #666;
    font-size: 0.9rem;
  }
  
  @media (max-width: 768px) {
    .footer-links {
      flex-direction: column;
      gap: 32px;
    }
  }
</style>
