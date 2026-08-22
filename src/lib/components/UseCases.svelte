<script>
  import { fadeUp } from '../animate.js';
  
  const cases = [
    {
      id: 'marketing',
      title: 'Marketing Campaigns',
      icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 3.82-13 1.5 1.5 0 0 1 2.18 2.18A22 22 0 0 1 12 15z"/><path d="m15 12 3 3a22 22 0 0 0 13-3.82 1.5 1.5 0 0 0-2.18-2.18A22 22 0 0 0 15 12z"/></svg>',
      tagline: 'Scale your ad variations effortlessly.',
      desc: 'Generate hundreds of ad banners, social media posts, and landing pages that convert, without waiting days for the design team. Perfect for A/B testing across multiple channels.',
      metrics: ['10x faster campaign launches', '100% brand consistency globally'],
      color: '#ff6b6b',
      bgColor: 'linear-gradient(135deg, #fff0f5 0%, #ffe0d4 100%)'
    },
    {
      id: 'sales',
      title: 'Sales Pitch Decks',
      icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>',
      tagline: 'Win more deals with personalized pitches.',
      desc: 'Empower Account Executives to spin up hyper-personalized slide decks for every prospect in minutes. Every deck stays perfectly aligned with enterprise brand guidelines.',
      metrics: ['+35% increase in win rate', 'Zero manual design formatting needed'],
      color: '#1ABCFE',
      bgColor: 'linear-gradient(135deg, #e0f7fa 0%, #e8f5e9 100%)'
    },
    {
      id: 'product',
      title: 'Product Teams',
      icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m7.5 4.27 9 5.15"/><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg>',
      tagline: 'Ship announcements instantly.',
      desc: 'Create beautiful release notes, in-app onboarding banners, and help center imagery without interrupting the product design team\'s sprint.',
      metrics: ['Save 15+ design hours per launch', 'Instantly update outdated documentation'],
      color: '#A259FF',
      bgColor: 'linear-gradient(135deg, #f3e5f5 0%, #ede7f6 100%)'
    },
    {
      id: 'design',
      title: 'Design Systems',
      icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/></svg>',
      tagline: 'Define rules once. Automate the rest.',
      desc: 'Stop being the bottleneck. Codify your brand rules, upload your Figma assets, and safely let the rest of the company generate their own materials on-demand.',
      metrics: ['Eliminate 90% of routine requests', 'Maintain absolute creative control'],
      color: '#0ACF83',
      bgColor: 'linear-gradient(135deg, #e8f5e9 0%, #f1f8e9 100%)'
    }
  ];
  
  let activeIndex = 0;
</script>

<section class="use-cases-expanded" id="use-cases">
  <div class="container">
    <div class="header-content" use:fadeUp>
      <h2>Built for every department</h2>
      <p>Empower your entire organization to create on-brand assets effortlessly, eliminating cross-department bottlenecks.</p>
    </div>
    
    <div class="split-view" use:fadeUp={{delay: 100}}>
      <!-- Left sidebar: Tabs -->
      <div class="case-sidebar">
        {#each cases as caseItem, index}
          <button 
            class="case-tab {index === activeIndex ? 'active' : ''}" 
            on:click={() => activeIndex = index}
          >
            <div class="tab-icon" style="color: {index === activeIndex ? caseItem.color : '#888'}">
              {@html caseItem.icon}
            </div>
            <div class="tab-text">
              <h3>{caseItem.title}</h3>
            </div>
          </button>
        {/each}
      </div>
      
      <!-- Right area: Detailed Content -->
      <div class="case-content">
        {#each cases as caseItem, index}
          {#if index === activeIndex}
            <div class="content-panel fade-in">
              <div class="panel-visual" style="background: {caseItem.bgColor}">
                <!-- Mockup visualization inside the panel -->
                <div class="panel-mockup" style="border-top-color: {caseItem.color}">
                  <div class="mockup-header">
                    <div class="dots"><span/><span/><span/></div>
                    <div class="mockup-title">{caseItem.title} Workspace</div>
                  </div>
                  <div class="mockup-body">
                    <div class="skeleton-line" style="width: 80%"></div>
                    <div class="skeleton-line" style="width: 60%"></div>
                    <div class="skeleton-grid">
                      <div class="skeleton-box"></div>
                      <div class="skeleton-box"></div>
                      <div class="skeleton-box"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div class="panel-text">
                <h3 style="color: {caseItem.color}">{caseItem.tagline}</h3>
                <p class="desc">{caseItem.desc}</p>
                <div class="metrics">
                  {#each caseItem.metrics as metric}
                    <div class="metric-item">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={caseItem.color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                      {metric}
                    </div>
                  {/each}
                </div>
                <button class="case-cta" style="background-color: {caseItem.color}">Explore {caseItem.title} use cases</button>
              </div>
            </div>
          {/if}
        {/each}
      </div>
    </div>
  </div>
</section>

<style>
  .use-cases-expanded {
    padding: 140px 0;
    background: #fff;
    border-top: 1px solid var(--border-color);
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
    max-width: 650px;
    margin: 0 auto;
  }
  
  .split-view {
    display: flex;
    gap: 40px;
    max-width: 1200px;
    margin: 0 auto;
    align-items: flex-start;
  }
  
  .case-sidebar {
    width: 320px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    flex-shrink: 0;
  }
  
  .case-tab {
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 24px;
    background: transparent;
    border: 1px solid transparent;
    border-radius: 20px;
    text-align: left;
    transition: all 0.3s;
    color: var(--secondary);
  }
  .case-tab:hover {
    background: #f9f9f9;
    transform: none;
    box-shadow: none;
  }
  .case-tab.active {
    background: white;
    border-color: var(--border-color);
    box-shadow: 0 10px 30px rgba(0,0,0,0.05);
    color: #111;
  }
  .tab-icon {
    width: 48px;
    height: 48px;
    border-radius: 12px;
    background: #f4f4f4;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }
  .case-tab.active .tab-icon {
    background: #fff0f5;
  }
  .tab-text h3 {
    font-size: 1.25rem;
    font-weight: 600;
  }
  
  .case-content {
    flex: 1;
    min-height: 600px;
  }
  
  .content-panel {
    background: white;
    border-radius: 32px;
    border: 1px solid var(--border-color);
    box-shadow: 0 20px 60px rgba(0,0,0,0.05);
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }
  
  .fade-in {
    animation: fadeIn 0.4s ease-out forwards;
  }
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
  
  .panel-visual {
    height: 350px;
    position: relative;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    padding: 0 40px;
  }
  
  .panel-mockup {
    width: 100%;
    max-width: 600px;
    height: 280px;
    background: white;
    border-radius: 16px 16px 0 0;
    box-shadow: 0 -10px 40px rgba(0,0,0,0.1);
    border-top: 4px solid;
    display: flex;
    flex-direction: column;
  }
  .mockup-header {
    padding: 16px 24px;
    border-bottom: 1px solid #eee;
    display: flex;
    align-items: center;
    gap: 16px;
  }
  .dots { display: flex; gap: 6px; }
  .dots span { width: 10px; height: 10px; border-radius: 50%; background: #ddd; }
  .dots span:nth-child(1) { background: #ff5f56; }
  .dots span:nth-child(2) { background: #ffbd2e; }
  .dots span:nth-child(3) { background: #27c93f; }
  .mockup-title {
    font-size: 0.9rem;
    color: #888;
    font-weight: 500;
  }
  .mockup-body {
    padding: 32px;
  }
  .skeleton-line { height: 12px; background: #f0f0f0; border-radius: 6px; margin-bottom: 16px; }
  .skeleton-grid { display: flex; gap: 16px; margin-top: 24px; }
  .skeleton-box { flex: 1; height: 100px; background: #f4f4f4; border-radius: 12px; }
  
  .panel-text {
    padding: 40px;
  }
  .panel-text h3 {
    font-size: 1.75rem;
    margin-bottom: 16px;
    letter-spacing: -0.02em;
  }
  .desc {
    font-size: 1.15rem;
    line-height: 1.6;
    margin-bottom: 32px;
  }
  .metrics {
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-bottom: 40px;
  }
  .metric-item {
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 1.05rem;
    font-weight: 500;
    color: #333;
  }
  .case-cta {
    padding: 16px 32px;
    color: white;
    font-size: 1.1rem;
    border-radius: 12px;
    box-shadow: 0 8px 24px rgba(0,0,0,0.1);
  }
  .case-cta:hover {
    transform: translateY(-2px);
    filter: brightness(1.1);
  }
  
  @media (max-width: 900px) {
    .split-view {
      flex-direction: column;
    }
    .case-sidebar {
      width: 100%;
      flex-direction: row;
      overflow-x: auto;
      padding-bottom: 16px;
    }
    .case-tab {
      padding: 16px;
      min-width: 240px;
    }
    .panel-visual {
      height: 250px;
      padding: 0 20px;
    }
    .panel-mockup {
      height: 200px;
    }
  }
</style>
