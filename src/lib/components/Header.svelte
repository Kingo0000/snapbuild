<script>
</script>

<header class="header">
  <div class="container">
    <div class="header-content">
      <div class="logo">
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 2L2 9V19L14 26L26 19V9L14 2Z" fill="url(#logo-grad)" />
          <path d="M2 9L14 16L26 9" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
          <path d="M14 26V16" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
          <defs>
            <linearGradient id="logo-grad" x1="2" y1="2" x2="26" y2="26" gradientUnits="userSpaceOnUse">
              <stop stop-color="#ff6b6b"/>
              <stop offset="1" stop-color="#d84b9e"/>
            </linearGradient>
          </defs>
        </svg>
        <span class="logo-text">SnapBuild</span>
      </div>
      <nav class="nav-links">
        <a href="#product">Product</a>
        <a href="#use-cases">Use Cases</a>
        <a href="#integrations">Integrations</a>
        <a href="#testimonials">Testimonials</a>
        <a href="#pricing">Pricing</a>
      </nav>
      <a href="#contact" class="cta-btn">Start now</a>
    </div>
  </div>
</header>

<style>
  .header {
    padding: 24px 0;
    position: sticky;
    top: 0;
    z-index: 100;
  }
  .header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: rgba(255, 255, 255, 0.85);
    backdrop-filter: blur(12px);
    border-radius: 100px;
    padding: 8px 12px 8px 24px;
    box-shadow: 0 4px 24px rgba(0,0,0,0.04);
  }
  .logo {
    display: flex;
    align-items: center;
    gap: 8px;
    font-weight: 700;
    font-size: 1.25rem;
  }
  .nav-links {
    display: flex;
    gap: 32px;
  }
  .nav-links a {
    color: var(--primary);
    font-size: 0.95rem;
    transition: opacity 0.2s;
  }
  .nav-links a:hover {
    opacity: 0.7;
  }
  .cta-btn {
    border-radius: 100px;
    background-color: var(--primary);
    padding: 12px 24px;
    font-size: 0.95rem;
    color: white;
    text-decoration: none;
    font-weight: 500;
    transition: opacity 0.2s;
  }
  .cta-btn:hover {
    opacity: 0.9;
  }
  @media (max-width: 768px) {
    .nav-links {
      display: none;
    }
  }
</style>
