<script>
  import { fadeUp } from '../animate.js';
</script>

<section class="hero">
  <div class="hero-bg"></div>
  <div class="container hero-content">
    <h1 use:fadeUp>A platform where everything<br/>is created within your brand<br/>and design system</h1>
    <p use:fadeUp={{delay: 100}}>Connect your design system to SnapBuild so every team member can create professional, branded materials in minutes, not days.</p>
    <button class="primary-btn" use:fadeUp={{delay: 200}}>
      <span class="btn-text">Start now</span>
    </button>
    
    <div class="hero-mockup-wrapper" use:fadeUp={{delay: 300}}>
      <div class="hero-mockup">
        <div class="mockup-header">
          <div class="mockup-logo">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 6H20V10H4V6Z" fill="white"/>
              <path d="M8 12H16V16H8V12Z" fill="white"/>
            </svg>
            снэпбилд
          </div>
        </div>
        <div class="mockup-body">
          <div class="mockup-sidebar">
            <div class="search">Search</div>
            <div class="sidebar-item active">Websites</div>
            <div class="sidebar-item">Images</div>
            <div class="sidebar-item">Video</div>
          </div>
          <div class="mockup-main">
            <h2>Алексей, создадим что-то новое?</h2>
            <div class="prompt-box">
              <span class="cursor">|</span> Опишите, что вы хотите сгенерировать...
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .hero-bg {
    position: absolute;
    top: -150px;
    left: 0;
    right: 0;
    height: 1200px;
    background: radial-gradient(circle at 85% 40%, #ffd0db 0%, #ffe8d9 45%, #ffffff 80%);
    z-index: 0;
    pointer-events: none;
  }
  
  .hero {
    position: relative;
    padding: 100px 0 0;
    text-align: center;
    overflow: visible;
  }

  .hero-content {
    position: relative;
    z-index: 1;
  }

  .hero-content h1 {
    font-size: 5rem;
    line-height: 1.05;
    margin-bottom: 24px;
    font-weight: 600;
    letter-spacing: -0.03em;
    color: #111;
  }
  .hero-content p {
    font-size: 1.2rem;
    color: #555;
    max-width: 650px;
    margin: 0 auto 40px;
    line-height: 1.6;
  }
  .primary-btn {
    background: white;
    padding: 16px 40px;
    border-radius: 16px;
    box-shadow: 0 10px 30px rgba(255, 150, 150, 0.15), 0 2px 8px rgba(0,0,0,0.05);
    margin-bottom: 80px;
    font-weight: 600;
    transition: transform 0.2s, box-shadow 0.2s;
  }
  .primary-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 36px rgba(255, 150, 150, 0.25), 0 4px 12px rgba(0,0,0,0.08);
  }
  .btn-text {
    font-size: 1.125rem;
    background: linear-gradient(90deg, #ff6b6b, #d84b9e);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  
  .hero-mockup-wrapper {
    perspective: 1000px;
  }
  .hero-mockup {
    background: #1a1a1a;
    border: 1px solid rgba(255,255,255,0.05);
    border-radius: 24px 24px 0 0;
    width: 100%;
    max-width: 1050px;
    margin: 0 auto;
    height: 500px;
    box-shadow: 0 -20px 80px rgba(0,0,0,0.15);
    display: flex;
    flex-direction: column;
    overflow: hidden;
    text-align: left;
    color: white;
  }

  .mockup-header {
    padding: 16px 24px;
    border-bottom: 1px solid rgba(255,255,255,0.05);
    display: flex;
    align-items: center;
  }
  .mockup-logo {
    display: flex;
    align-items: center;
    gap: 8px;
    font-weight: 600;
    opacity: 0.9;
  }
  .mockup-body {
    display: flex;
    flex: 1;
  }
  .mockup-sidebar {
    width: 240px;
    border-right: 1px solid rgba(255,255,255,0.05);
    padding: 24px;
    background: #1e1e1e;
  }
  .search {
    background: #2a2a2a;
    padding: 10px 16px;
    border-radius: 12px;
    margin-bottom: 32px;
    color: #666;
    font-size: 0.9rem;
    border: 1px solid rgba(255,255,255,0.03);
  }
  .sidebar-item {
    padding: 10px 16px;
    color: #777;
    cursor: pointer;
    border-radius: 10px;
    margin-bottom: 4px;
    transition: background 0.2s, color 0.2s;
    font-weight: 500;
  }
  .sidebar-item:hover {
    background: rgba(255,255,255,0.03);
    color: #ddd;
  }
  .sidebar-item.active {
    background: rgba(255,255,255,0.08);
    color: white;
  }
  .mockup-main {
    flex: 1;
    padding: 80px 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: linear-gradient(180deg, rgba(30,30,30,0) 0%, rgba(200, 100, 150, 0.05) 100%);
  }
  .mockup-main h2 {
    color: white;
    margin-bottom: 40px;
    font-size: 2.2rem;
    font-weight: 500;
    letter-spacing: -0.02em;
  }
  .prompt-box {
    background: rgba(255,255,255,0.03);
    border: 1px solid rgba(255,255,255,0.08);
    padding: 24px 32px;
    border-radius: 16px;
    width: 100%;
    max-width: 650px;
    color: #888;
    box-shadow: inset 0 2px 12px rgba(0,0,0,0.2);
    font-size: 1.1rem;
  }
  .cursor {
    animation: blink 1s step-start infinite;
    color: #ff6b6b;
  }
  
  @keyframes blink {
    50% { opacity: 0; }
  }
  
  @media (max-width: 768px) {
    .hero-content h1 {
      font-size: 3rem;
    }
    .hero-mockup {
      height: 350px;
    }
    .mockup-sidebar {
      display: none;
    }
  }
</style>
