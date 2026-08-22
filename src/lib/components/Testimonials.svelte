<script>
  import { fadeUp } from '../animate.js';
  const testimonials = [
    { 
      metric: "50%",
      metricDesc: "faster launch time",
      text: "SnapBuild reduced our design bottleneck to zero. Marketing can now launch campaigns in minutes.", 
      author: "Jane Doe", 
      role: "CMO at TechFlow" 
    },
    { 
      metric: "100%",
      metricDesc: "brand consistency",
      text: "We used to spend hours reviewing brand consistency. Now the system handles it automatically.", 
      author: "John Smith", 
      role: "Design Lead at Avito" 
    },
    { 
      metric: "3x",
      metricDesc: "increase in output",
      text: "An absolute game changer for our sales team. Pitch decks are personalized and always on-brand.", 
      author: "Alice Johnson", 
      role: "VP of Sales at Ozon" 
    }
  ];
  let current = 0;
  
  function next() { current = (current + 1) % testimonials.length; }
  function prev() { current = (current - 1 + testimonials.length) % testimonials.length; }
</script>

<section class="testimonials-expanded" id="testimonials">
  <div class="mesh-bg-test"></div>
  <div class="container relative">
    <div class="header-content" use:fadeUp>
      <h2>Proven by top teams</h2>
      <p>See how SnapBuild is transforming workflows at industry-leading companies.</p>
    </div>
    
    <div class="slider-wrapper" use:fadeUp={{delay: 150}}>
      <div class="slider glass-card">
        <div class="slide">
          <div class="slide-content">
            <div class="metric-block">
              <div class="metric-val">{testimonials[current].metric}</div>
              <div class="metric-label">{testimonials[current].metricDesc}</div>
            </div>
            <div class="quote-block">
              <div class="quote">"{testimonials[current].text}"</div>
              <div class="author-block">
                <div class="avatar"></div>
                <div class="author-info">
                  <strong>{testimonials[current].author}</strong>
                  <span>{testimonials[current].role}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="controls">
          <button class="icon-btn" on:click={prev} aria-label="Previous">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 18l-6-6 6-6"/></svg>
          </button>
          <div class="dots">
            {#each testimonials as _, i}
              <div class="dot {i === current ? 'active' : ''}"></div>
            {/each}
          </div>
          <button class="icon-btn" on:click={next} aria-label="Next">
             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg>
          </button>
        </div>
      </div>
    </div>
    
    <!-- Logo Wall -->
    <div class="logo-wall" use:fadeUp={{delay: 300}}>
      <p>Trusted by forward-thinking teams globally</p>
      <div class="logos">
        <span>Acme Corp</span>
        <span>GlobalTech</span>
        <span>Innovate</span>
        <span>TechFlow</span>
        <span>Synergy</span>
      </div>
    </div>
  </div>
</section>

<style>
  .testimonials-expanded {
    padding: 140px 0;
    position: relative;
    background: #fdfcfc;
    overflow: hidden;
  }
  .mesh-bg-test {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 1000px;
    height: 1000px;
    background: radial-gradient(circle, rgba(224, 195, 252, 0.4) 0%, rgba(255,255,255,0) 70%);
    z-index: 0;
    pointer-events: none;
  }
  .relative {
    position: relative;
    z-index: 1;
  }
  .header-content {
    text-align: center;
    margin-bottom: 60px;
  }
  h2 {
    font-size: 3.5rem;
    margin-bottom: 20px;
    letter-spacing: -0.03em;
  }
  .header-content p {
    font-size: 1.25rem;
    color: var(--secondary);
  }
  
  .slider-wrapper {
    max-width: 1000px;
    margin: 0 auto 80px;
  }
  .glass-card {
    background: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(40px);
    -webkit-backdrop-filter: blur(40px);
    border: 1px solid rgba(255,255,255,0.9);
    padding: 80px;
    border-radius: 40px;
    box-shadow: 0 30px 80px rgba(0,0,0,0.05), inset 0 2px 4px rgba(255,255,255,1);
  }
  
  .slide-content {
    display: flex;
    gap: 60px;
    align-items: center;
    margin-bottom: 60px;
  }
  
  .metric-block {
    flex: 1;
    border-right: 1px solid rgba(0,0,0,0.1);
    padding-right: 40px;
    text-align: center;
  }
  .metric-val {
    font-size: 6rem;
    font-weight: 700;
    letter-spacing: -0.05em;
    background: linear-gradient(135deg, #ff6b6b, #d84b9e);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    line-height: 1;
    margin-bottom: 16px;
  }
  .metric-label {
    font-size: 1.25rem;
    color: #555;
    font-weight: 500;
  }
  
  .quote-block {
    flex: 2;
  }
  
  .quote {
    font-size: 1.75rem;
    font-weight: 500;
    line-height: 1.5;
    margin-bottom: 40px;
    color: #111;
    letter-spacing: -0.02em;
  }
  
  .author-block {
    display: flex;
    align-items: center;
    gap: 16px;
  }
  .avatar {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    background: linear-gradient(135deg, #f4b8cc, #f8c9b3);
  }
  .author-info {
    display: flex;
    flex-direction: column;
  }
  .author-info strong {
    font-size: 1.25rem;
    color: #111;
  }
  .author-info span {
    color: var(--secondary);
    font-size: 1.05rem;
  }
  
  .controls {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 32px;
  }
  .icon-btn {
    background: white;
    color: #111;
    border-radius: 50%;
    width: 56px;
    height: 56px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    box-shadow: 0 8px 24px rgba(0,0,0,0.05);
  }
  .icon-btn:hover {
    background: #fdfdfd;
    transform: scale(1.05);
    box-shadow: 0 12px 32px rgba(0,0,0,0.08);
  }
  .dots {
    display: flex;
    gap: 12px;
  }
  .dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: rgba(0,0,0,0.1);
    transition: background 0.3s, transform 0.3s;
  }
  .dot.active {
    background: #111;
    transform: scale(1.2);
  }
  
  /* Logo Wall */
  .logo-wall {
    text-align: center;
    border-top: 1px solid rgba(0,0,0,0.05);
    padding-top: 60px;
  }
  .logo-wall p {
    color: #888;
    font-size: 1rem;
    margin-bottom: 32px;
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }
  .logos {
    display: flex;
    justify-content: center;
    gap: 60px;
    flex-wrap: wrap;
    opacity: 0.6;
    font-size: 1.5rem;
    font-weight: 700;
    color: #333;
  }
  
  @media (max-width: 900px) {
    .slide-content {
      flex-direction: column;
      gap: 40px;
    }
    .metric-block {
      border-right: none;
      border-bottom: 1px solid rgba(0,0,0,0.1);
      padding-right: 0;
      padding-bottom: 40px;
    }
    .glass-card {
      padding: 40px 24px;
    }
    .quote {
      font-size: 1.35rem;
    }
  }
</style>
