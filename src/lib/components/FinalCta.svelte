<script>
  import { fadeUp } from '../animate.js';
</script>

<section class="final-cta">
  <div class="container">
    <div class="cta-banner" use:fadeUp>
      <h2>Professional, branded materials<br/>in minutes, not days</h2>
      <button class="primary-btn">
        <span class="btn-text">Start now</span>
      </button>
    </div>
  </div>
</section>

<style>
  .final-cta {
    padding: 80px 0 120px;
    background: var(--bg-color);
  }
  .cta-banner {
    background: linear-gradient(135deg, 
      #ffe5d9 0%, 
      #fff0e6 20%, 
      #ffccd5 50%, 
      #e0c3fc 80%, 
      #c2e9fb 100%
    );
    border-radius: 40px;
    padding: 120px 40px;
    text-align: center;
    box-shadow: inset 0 2px 20px rgba(255,255,255,0.5);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .cta-banner h2 {
    font-size: 3.5rem;
    font-weight: 500;
    color: #111;
    margin-bottom: 40px;
    letter-spacing: -0.02em;
    line-height: 1.2;
  }
  .primary-btn {
    background: white;
    padding: 16px 40px;
    border-radius: 16px;
    box-shadow: 0 10px 30px rgba(255, 150, 150, 0.15), 0 2px 8px rgba(0,0,0,0.05);
    font-weight: 600;
    transition: transform 0.2s, box-shadow 0.2s;
    border: none;
    cursor: pointer;
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
  
  @media (max-width: 768px) {
    .cta-banner h2 {
      font-size: 2.5rem;
    }
    .cta-banner {
      padding: 80px 24px;
      border-radius: 24px;
    }
  }
</style>
