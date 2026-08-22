<script>
  import { fadeUp } from '../animate.js';
  const testimonials = [
    { 
      text: "SnapBuild reduced our design bottleneck to zero. Marketing can now launch campaigns in minutes.", 
      author: "Jane Doe", 
      role: "CMO at TechFlow" 
    },
    { 
      text: "We used to spend hours reviewing brand consistency. Now the system handles it automatically.", 
      author: "John Smith", 
      role: "Design Lead at Avito" 
    },
    { 
      text: "An absolute game changer for our sales team. Pitch decks are personalized and always on-brand.", 
      author: "Alice Johnson", 
      role: "VP of Sales at Ozon" 
    }
  ];
  let current = 0;
  
  function next() { current = (current + 1) % testimonials.length; }
  function prev() { current = (current - 1 + testimonials.length) % testimonials.length; }
</script>

<section class="testimonials">
  <div class="mesh-bg-test"></div>
  <div class="container relative">
    <h2 use:fadeUp>Loved by teams</h2>
    
    <div class="slider-wrapper" use:fadeUp={{delay: 150}}>
      <div class="slider glass-card">
        <div class="slide">
          <div class="quote">"{testimonials[current].text}"</div>
          <div class="author-block">
            <div class="avatar"></div>
            <div class="author-info">
              <strong>{testimonials[current].author}</strong>
              <span>{testimonials[current].role}</span>
            </div>
          </div>
        </div>
        
        <div class="controls">
          <button class="icon-btn" on:click={prev}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 18l-6-6 6-6"/></svg>
          </button>
          <div class="dots">
            {#each testimonials as _, i}
              <div class="dot {i === current ? 'active' : ''}"></div>
            {/each}
          </div>
          <button class="icon-btn" on:click={next}>
             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .testimonials {
    padding: 120px 0;
    position: relative;
    text-align: center;
    background: #fafafa;
    overflow: hidden;
  }
  .mesh-bg-test {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 800px;
    height: 800px;
    background: radial-gradient(circle, rgba(224, 195, 252, 0.4) 0%, rgba(255,255,255,0) 70%);
    z-index: 0;
  }
  .relative {
    position: relative;
    z-index: 1;
  }
  h2 {
    font-size: 3.5rem;
    margin-bottom: 60px;
  }
  .slider-wrapper {
    max-width: 900px;
    margin: 0 auto;
    perspective: 1000px;
  }
  .glass-card {
    background: rgba(255, 255, 255, 0.6);
    backdrop-filter: blur(40px);
    -webkit-backdrop-filter: blur(40px);
    border: 1px solid rgba(255,255,255,0.8);
    padding: 80px;
    border-radius: 40px;
    box-shadow: 0 30px 60px rgba(0,0,0,0.05), inset 0 2px 4px rgba(255,255,255,0.8);
    transition: transform 0.3s;
  }
  .glass-card:hover {
    transform: translateY(-4px) scale(1.01);
  }
  
  .quote {
    font-size: 2rem;
    font-weight: 500;
    line-height: 1.4;
    margin-bottom: 48px;
    min-height: 140px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #111;
    letter-spacing: -0.02em;
  }
  
  .author-block {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
    margin-bottom: 60px;
  }
  .avatar {
    width: 56px;
    height: 56px;
    border-radius: 50%;
    background: linear-gradient(135deg, #f4b8cc, #f8c9b3);
  }
  .author-info {
    display: flex;
    flex-direction: column;
    text-align: left;
  }
  .author-info strong {
    font-size: 1.25rem;
    color: #111;
  }
  .author-info span {
    color: var(--secondary);
    font-size: 1rem;
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
    box-shadow: 0 4px 12px rgba(0,0,0,0.05);
  }
  .icon-btn:hover {
    background: #f0f0f0;
    transform: scale(1.05);
  }
  .dots {
    display: flex;
    gap: 12px;
  }
  .dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: rgba(0,0,0,0.1);
    transition: background 0.3s, transform 0.3s;
  }
  .dot.active {
    background: var(--primary);
    transform: scale(1.2);
  }
  
  @media (max-width: 768px) {
    .glass-card {
      padding: 40px 24px;
    }
    .quote {
      font-size: 1.5rem;
      min-height: 100px;
    }
  }
</style>
