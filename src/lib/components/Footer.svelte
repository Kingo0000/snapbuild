<script>
</script>

<footer class="footer">
  <div class="container">
    <div class="footer-top">
      <div class="footer-brand">
        <div class="logo">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 6H20V10H4V6Z" fill="white"/>
            <path d="M8 12H16V16H8V12Z" fill="white"/>
          </svg>
          снэпбилд
        </div>
        <p>The single platform for all your marketing assets.</p>
      </div>
      <div class="footer-links">
        <div class="link-col">
          <h4>Product</h4>
          <a href="#">Features</a>
          <a href="#">Integrations</a>
          <a href="#">Pricing</a>
        </div>
        <div class="link-col">
          <h4>Company</h4>
          <a href="#">About Us</a>
          <a href="#">Careers</a>
          <a href="#">Contact</a>
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
