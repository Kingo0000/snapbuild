<script>
</script>

<header class="header">
  <div class="container">
    <div class="header-content">
      <div class="logo">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 6H20V10H4V6Z" fill="currentColor"/>
          <path d="M8 12H16V16H8V12Z" fill="currentColor"/>
        </svg>
        <span>снэпбилд</span>
      </div>
      <nav class="nav-links">
        <a href="#product">Product</a>
        <a href="#possibilities">Possibilities</a>
        <a href="#safety">Safety</a>
        <a href="#faq">FAQ</a>
      </nav>
      <button class="cta-btn">Start now</button>
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
  }
  @media (max-width: 768px) {
    .nav-links {
      display: none;
    }
  }
</style>
