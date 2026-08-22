<script>
  import { fadeUp } from '../animate.js';
  let activeTab = 'Websites';
  const tabs = ['Websites', 'Images', 'Video', 'Banners', 'Presentations'];
  
  const features = [
    { title: 'Result for one request', desc: 'Submit a document or link to a product description - the platform will compile the structure' },
    { title: 'Page per minute', desc: 'Generate complete pages faster than ever before.' },
    { title: 'AI or visual editor', desc: 'Use AI to generate or tweak manually in the visual editor.' },
    { title: 'Adaptation to target audience', desc: 'Modify content instantly for different segments.' },
  ];
</script>

<section class="product-features" id="product">
  <div class="container">
    <h2 use:fadeUp>Any content in your brand style in minutes</h2>
    <div class="tabs" use:fadeUp={{delay: 100}}>
      {#each tabs as tab}
        <button 
          class="tab-btn {activeTab === tab ? 'active' : ''}"
          on:click={() => activeTab = tab}
        >
          {tab}
        </button>
      {/each}
    </div>
    
    <div class="feature-content">
      <div class="feature-list" use:fadeUp={{delay: 200}}>
        {#each features as feat, i}
          <div class="feature-item {i === 0 ? 'active' : ''}">
            <h4>{feat.title}</h4>
            {#if feat.desc}
              <p>{feat.desc}</p>
            {/if}
          </div>
        {/each}
      </div>
      <div class="feature-visual" use:fadeUp={{delay: 300}}>
        <div class="visual-mockup">
          <div class="mockup-ui">
            <div class="sidebar">
              {#each tabs as t}
                <div class="s-item {t === activeTab ? 'active' : ''}">
                  <span class="dot {t === activeTab ? 'active-dot' : ''}"></span> {t}
                </div>
              {/each}
            </div>
            <div class="main-area">
              <div class="main-title">Editing: {activeTab}</div>
              <div class="main-content">
                <div class="box"></div>
                <div class="box"></div>
                <div class="box full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .product-features {
    padding: 120px 0;
  }
  h2 {
    font-size: 3rem;
    margin-bottom: 32px;
  }
  .tabs {
    display: flex;
    gap: 12px;
    margin-bottom: 60px;
    overflow-x: auto;
    padding-bottom: 8px;
    scrollbar-width: none;
  }
  .tabs::-webkit-scrollbar {
    display: none;
  }
  .tab-btn {
    background: #f4f4f4;
    color: var(--secondary);
    border-radius: 100px;
    padding: 10px 20px;
    font-size: 1.05rem;
    font-weight: 500;
  }
  .tab-btn.active {
    background: #111;
    color: white;
  }
  .tab-btn:hover:not(.active) {
    background: #e0e0e0;
    color: #111;
    transform: none;
    box-shadow: none;
  }
  
  .feature-content {
    display: flex;
    gap: 80px;
    align-items: stretch;
  }
  .feature-list {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 32px;
    border-left: 2px solid #eee;
  }
  .feature-item {
    padding-left: 32px;
    position: relative;
    opacity: 0.5;
    transition: opacity 0.3s;
  }
  .feature-item.active {
    opacity: 1;
  }
  .feature-item.active::before {
    content: '';
    position: absolute;
    left: -2px;
    top: 0;
    bottom: 0;
    width: 2px;
    background: linear-gradient(180deg, #ff6b6b, #d84b9e);
  }
  .feature-item h4 {
    font-size: 1.35rem;
    margin-bottom: 12px;
  }
  .feature-item p {
    font-size: 1.05rem;
    line-height: 1.6;
  }
  
  .feature-visual {
    flex: 2;
    background: linear-gradient(135deg, #111, #2a1b2a);
    border-radius: 32px;
    padding: 16px;
    overflow: hidden;
    box-shadow: 0 24px 60px rgba(0,0,0,0.15);
    border: 1px solid rgba(255,255,255,0.05);
  }
  .visual-mockup {
    background: linear-gradient(180deg, #1a1a1a 0%, #3a1c3d 100%);
    border-radius: 20px;
    height: 100%;
    min-height: 450px;
    display: flex;
    border: 1px solid rgba(255,255,255,0.05);
    box-shadow: inset 0 2px 10px rgba(0,0,0,0.5);
  }
  .mockup-ui {
    display: flex;
    width: 100%;
    color: white;
  }
  .sidebar {
    width: 220px;
    border-right: 1px solid rgba(255,255,255,0.1);
    padding: 32px 24px;
    background: rgba(0,0,0,0.2);
  }
  .s-item {
    padding: 10px 12px;
    color: #888;
    font-size: 0.95rem;
    border-radius: 8px;
    margin-bottom: 8px;
    display: flex;
    align-items: center;
    gap: 12px;
  }
  .s-item.active {
    color: white;
    background: rgba(255,255,255,0.1);
  }
  .dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: rgba(255,255,255,0.2);
  }
  .dot.active-dot {
    background: #ff6b6b;
    box-shadow: 0 0 10px #ff6b6b;
  }
  
  .main-area {
    flex: 1;
    padding: 40px;
  }
  .main-title {
    font-size: 1.5rem;
    margin-bottom: 40px;
    font-weight: 500;
  }
  .main-content {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }
  .box {
    background: rgba(255,255,255,0.05);
    border: 1px solid rgba(255,255,255,0.05);
    border-radius: 16px;
    height: 120px;
    flex: 1 1 calc(50% - 20px);
  }
  .box.full {
    flex: 1 1 100%;
    height: 180px;
  }
  
  @media (max-width: 900px) {
    .feature-content {
      flex-direction: column;
    }
  }
</style>
