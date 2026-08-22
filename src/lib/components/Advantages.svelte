<script>
  import { fadeUp } from '../animate.js';
  import card1 from '../../assets/card1.jpg';
  import card2 from '../../assets/card2.jpg';
  import card3 from '../../assets/card3.jpg';
</script>

<section class="advantages" id="possibilities">
  <div class="container">
    <h2 use:fadeUp>One platform - all marketing</h2>
    <p class="subtitle" use:fadeUp={{delay: 100}}>Websites, images, videos, banners and presentations - from one idea, in your style</p>
    
    <div class="cards-grid">
      <div class="card" use:fadeUp={{delay: 200}}>
        <div class="card-img" style="background-image: url({card1})"></div>
        <div class="card-content">
          <h3>The design system is the core of the platform</h3>
          <p>Your components, colors, and fonts are the only source of style</p>
        </div>
      </div>
      <div class="card" use:fadeUp={{delay: 300}}>
        <div class="card-img" style="background-image: url({card2})"></div>
        <div class="card-content">
          <h3>Flexible configuration</h3>
          <p>Brand rules are set once and apply to every generation.</p>
        </div>
      </div>
      <div class="card" use:fadeUp={{delay: 400}}>
        <div class="card-img" style="background-image: url({card3})"></div>
        <div class="card-content">
          <h3>Default matching</h3>
          <p>AI can't disrupt your brand: websites, images, videos, banners, and presentations are strictly according to your rules.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .advantages {
    padding: 100px 0;
  }
  h2 {
    font-size: 3rem;
    margin-bottom: 16px;
  }
  .subtitle {
    font-size: 1.25rem;
    margin-bottom: 64px;
  }
  .cards-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
  }
  .card {
    display: flex;
    flex-direction: column;
    background: var(--card-bg);
    border-radius: 24px;
    overflow: hidden;
    transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    border: 1px solid var(--border-color);
  }
  .card:hover {
    transform: translateY(-8px);
    box-shadow: var(--shadow-hover);
  }
  .card-img {
    height: 300px;
    background-size: cover;
    background-position: center;
  }
  
  .card-content {
    padding: 32px;
  }
  
  .card h3 {
    font-size: 1.35rem;
    margin-bottom: 12px;
    line-height: 1.3;
  }
  .card p {
    font-size: 1rem;
    line-height: 1.6;
  }
  @media (max-width: 768px) {
    .cards-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
