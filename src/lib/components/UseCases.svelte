<script>
  import { fadeUp } from '../animate.js';
</script>

<section class="use-cases">
  <div class="container">
    <div class="header-content" use:fadeUp>
      <h2>One tool for every team</h2>
      <p>Empower your entire organization to create on-brand assets effortlessly.</p>
    </div>
    
    <div class="bento-grid">
      <div class="bento-card main-card" use:fadeUp={{delay: 100}}>
        <div class="content">
          <div class="icon">
            <!-- Rocket/Launch Icon SVG -->
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 3.82-13 1.5 1.5 0 0 1 2.18 2.18A22 22 0 0 1 12 15z"/><path d="m15 12 3 3a22 22 0 0 0 13-3.82 1.5 1.5 0 0 0-2.18-2.18A22 22 0 0 0 15 12z"/></svg>
          </div>
          <h3>Marketing Campaigns</h3>
          <p>Generate ad banners, social media posts, and landing pages that convert, without waiting for the design team.</p>
        </div>
        <div class="bento-visual marketing-visual">
          <div class="ui-mockup">
            <div class="line w-full"></div>
            <div class="line w-3-4"></div>
            <div class="box-grid">
              <div class="sq"></div>
              <div class="sq"></div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="bento-card" use:fadeUp={{delay: 200}}>
        <div class="content">
          <div class="icon">
            <!-- Briefcase Icon SVG -->
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
          </div>
          <h3>Sales Pitch Decks</h3>
          <p>Personalize proposals for each client while staying perfectly aligned with brand guidelines.</p>
        </div>
        <div class="bento-visual sales-visual">
           <div class="bar-chart">
             <div class="bar" style="height: 40%"></div>
             <div class="bar" style="height: 70%"></div>
             <div class="bar highlight" style="height: 100%"></div>
           </div>
        </div>
      </div>
      
      <div class="bento-card tall-card" use:fadeUp={{delay: 300}}>
        <div class="content">
          <div class="icon">
            <!-- Package/Product Icon SVG -->
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m7.5 4.27 9 5.15"/><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg>
          </div>
          <h3>Product</h3>
          <p>Create release notes and user onboarding materials effortlessly.</p>
        </div>
      </div>
      
      <div class="bento-card dark-card" use:fadeUp={{delay: 400}}>
        <div class="content">
          <div class="icon">
            <!-- Palette Icon SVG -->
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/></svg>
          </div>
          <h3>Design Systems</h3>
          <p>Define the rules once and let the rest of the company generate their own assets safely.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .use-cases {
    padding: 120px 0;
    background: #fbfbfb;
  }
  .header-content {
    text-align: center;
    margin-bottom: 80px;
  }
  h2 {
    font-size: 3.5rem;
    margin-bottom: 20px;
    letter-spacing: -0.03em;
  }
  .header-content p {
    font-size: 1.25rem;
    color: var(--secondary);
    max-width: 600px;
    margin: 0 auto;
  }
  
  .bento-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 320px;
    gap: 32px;
    max-width: 1200px;
  }
  
  .bento-card {
    background: white;
    border-radius: 32px;
    padding: 40px;
    border: 1px solid var(--border-color);
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s;
    box-shadow: 0 4px 20px rgba(0,0,0,0.03);
  }
  .bento-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 16px 40px rgba(0,0,0,0.08);
  }
  
  .main-card {
    grid-column: span 2;
    grid-row: span 2;
  }
  .tall-card {
    grid-row: span 2;
  }
  .dark-card {
    background: #111;
    color: white;
    border-color: #222;
    grid-column: span 2;
  }
  .dark-card p {
    color: #aaa;
  }
  
  .icon {
    color: #e83e8c;
    margin-bottom: 24px;
    background: #fff0f5;
    width: 64px;
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
  }
  .dark-card .icon {
    background: #2a1b2a;
    color: #f4b8cc;
  }
  
  .content h3 {
    font-size: 1.75rem;
    margin-bottom: 12px;
    letter-spacing: -0.02em;
  }
  .dark-card h3 {
    color: white;
  }
  .content p {
    font-size: 1.125rem;
    line-height: 1.6;
    color: var(--secondary);
  }
  .dark-card p {
    color: #888;
  }
  
  .bento-visual {
    margin-top: 40px;
    border-radius: 20px;
    background: #f8f9fa;
    border: 1px solid #eee;
    flex: 1;
    position: relative;
    overflow: hidden;
  }
  
  /* Mockup styles for bento visuals */
  .marketing-visual {
    padding: 32px;
    display: flex;
    justify-content: flex-end;
    background: linear-gradient(135deg, #fdfbfb 0%, #ebedee 100%);
  }
  .ui-mockup {
    width: 70%;
    background: white;
    border-radius: 16px;
    box-shadow: 0 20px 50px rgba(0,0,0,0.1);
    padding: 24px;
    transform: rotate(-3deg) translateX(20px) translateY(20px);
    transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
  }
  .main-card:hover .ui-mockup {
    transform: rotate(0) translateX(0) translateY(0);
  }
  .line { height: 12px; background: #eee; border-radius: 6px; margin-bottom: 16px; }
  .w-full { width: 100%; }
  .w-3-4 { width: 75%; }
  .box-grid { display: flex; gap: 16px; margin-top: 24px; }
  .sq { flex: 1; height: 100px; background: #f4f4f4; border-radius: 12px; }
  
  .sales-visual {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    padding: 24px;
    gap: 16px;
    background: linear-gradient(135deg, #fff0f5 0%, #ffe0d4 100%);
  }
  .bar-chart {
    display: flex;
    align-items: flex-end;
    gap: 16px;
    height: 140px;
    width: 80%;
  }
  .bar {
    flex: 1;
    background: rgba(255,255,255,0.6);
    border-radius: 8px 8px 0 0;
    transition: height 1s;
    box-shadow: 0 -4px 12px rgba(0,0,0,0.05);
  }
  .bar.highlight {
    background: linear-gradient(180deg, #ff6b6b, #d84b9e);
    box-shadow: 0 -4px 20px rgba(216, 75, 158, 0.3);
  }
  
  @media (max-width: 900px) {
    .bento-grid {
      grid-template-columns: 1fr;
      grid-auto-rows: auto;
    }
    .main-card, .dark-card, .tall-card {
      grid-column: span 1;
      grid-row: span 1;
    }
    .bento-visual {
      min-height: 250px;
    }
  }
</style>
