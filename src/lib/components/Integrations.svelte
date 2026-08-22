<script>
  import { fadeUp } from '../animate.js';
</script>

<section class="integrations-expanded" id="integrations">
  <div class="container">
    <div class="header-content" use:fadeUp>
      <h2>Seamlessly integrated</h2>
      <p>Your team's workflow shouldn't be disrupted. SnapBuild integrates deeply with your existing design and productivity tools.</p>
    </div>
    
    <div class="marquee-wrapper" use:fadeUp={{delay: 100}}>
      <div class="marquee">
        <!-- Replicated for infinite scroll effect -->
        <div class="marquee-content">
          <div class="brand">Figma</div>
          <div class="brand">Slack</div>
          <div class="brand">Notion</div>
          <div class="brand">Jira</div>
          <div class="brand">Asana</div>
          <div class="brand">Trello</div>
          <div class="brand">Google Drive</div>
          <div class="brand">Dropbox</div>
        </div>
        <div class="marquee-content">
          <div class="brand">Figma</div>
          <div class="brand">Slack</div>
          <div class="brand">Notion</div>
          <div class="brand">Jira</div>
          <div class="brand">Asana</div>
          <div class="brand">Trello</div>
          <div class="brand">Google Drive</div>
          <div class="brand">Dropbox</div>
        </div>
      </div>
    </div>
    
    <div class="integration-grid">
      <div class="int-card" use:fadeUp={{delay: 200}}>
        <div class="int-header">
          <div class="int-icon figma-bg">
            <svg viewBox="0 0 38 57" width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z" fill="#1ABCFE"/><path d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z" fill="#0ACF83"/><path d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z" fill="#FF7262"/><path d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z" fill="#F24E1E"/><path d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z" fill="#A259FF"/></svg>
          </div>
          <h3>Figma Sync</h3>
        </div>
        <p>Two-way sync with your Figma libraries. Pull in UI components, fonts, and color tokens instantly to ensure 100% brand accuracy.</p>
        <a href="#" class="int-link">Learn more &rarr;</a>
      </div>
      
      <div class="int-card" use:fadeUp={{delay: 300}}>
        <div class="int-header">
          <div class="int-icon slack-bg">
            <svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zm1.271 0a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zm0 1.271a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zm10.122 2.52a2.528 2.528 0 0 1 2.522-2.52 2.528 2.528 0 0 1 2.521 2.52 2.528 2.528 0 0 1-2.521 2.522h-2.522V8.833zm-1.268 0a2.528 2.528 0 0 1-2.523 2.522 2.528 2.528 0 0 1-2.52-2.522V2.52A2.528 2.528 0 0 1 15.166 0a2.528 2.528 0 0 1 2.522 2.522v6.312zm-2.52 10.122a2.528 2.528 0 0 1 2.52 2.522 2.528 2.528 0 0 1-2.52 2.522 2.528 2.528 0 0 1-2.522-2.522v-2.522h2.522zm0-1.268a2.528 2.528 0 0 1-2.522-2.523 2.528 2.528 0 0 1 2.522-2.52h6.312A2.528 2.528 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.522h-6.312z" fill="#fff"/></svg>
          </div>
          <h3>Slack Notifications</h3>
        </div>
        <p>Get instant updates in Slack when a marketing asset is generated, approved by legal, or ready for final review.</p>
        <a href="#" class="int-link">Learn more &rarr;</a>
      </div>
      
      <div class="int-card" use:fadeUp={{delay: 400}}>
        <div class="int-header">
          <div class="int-icon notion-bg">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="black" xmlns="http://www.w3.org/2000/svg"><path d="M4.459 4.208c.746.065 1.526.12 1.62.906.017.147.037.294.037.443v13.52c0 .416-.275.617-.677.653-.66.06-1.52.122-1.637.751-.01.054-.012.11-.012.167 0 .428.29.562.774.562h7.828c.365 0 .52-.164.52-.452 0-.317-.194-.436-.88-.475-.853-.05-1.076-.145-1.076-.843V7.126l7.305 13.91c.21.396.48.513.88.513h1.86c.338 0 .584-.132.584-.44V4.767c0-.503.26-.745 1.056-.798.544-.035.795-.213.795-.623 0-.376-.234-.582-.693-.582H15.02c-.373 0-.585.16-.585.497 0 .285.18.423.85.462.61.037.804.148.804.763v12.75l-7.2-13.67c-.203-.38-.456-.51-.83-.51H4.97c-.438 0-.67.19-.67.61 0 .286.12.443.16.54z"/></svg>
          </div>
          <h3>Notion Embeds</h3>
        </div>
        <p>Embed dynamically updating generated assets directly into your Notion workspace for seamless PRDs and roadmaps.</p>
        <a href="#" class="int-link">Learn more &rarr;</a>
      </div>
      
      <div class="int-card" use:fadeUp={{delay: 500}}>
        <div class="int-header">
          <div class="int-icon jira-bg">
            <svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.53 11.758a.465.465 0 0 0 .193.376l9.907 7.075c.184.132.44.02.44-.207V5.592a.463.463 0 0 0-.193-.376L11.723.11c-.183-.13-.44-.02-.44.207v11.44zm-5.765 4.116a.466.466 0 0 0 .192.377l9.907 7.076c.184.13.44.02.44-.208v-9.378a.465.465 0 0 0-.193-.376l-9.906-7.075c-.184-.13-.44-.02-.44.208v9.376zm-5.765 4.117a.465.465 0 0 0 .192.377l9.907 7.075c.184.13.44.02.44-.208v-7.35a.465.465 0 0 0-.193-.376l-9.906-7.076c-.184-.13-.44-.02-.44.207v7.351z" fill="#0052CC"/></svg>
          </div>
          <h3>Jira Ticketing</h3>
        </div>
        <p>Automatically create tracking tickets when a massive asset generation job is kicked off by the marketing team.</p>
        <a href="#" class="int-link">Learn more &rarr;</a>
      </div>
    </div>
  </div>
</section>

<style>
  .integrations-expanded {
    padding: 140px 0;
    background: #111;
    color: white;
    overflow: hidden;
  }
  .header-content {
    text-align: center;
    margin-bottom: 80px;
  }
  h2 {
    color: white;
    font-size: 3.5rem;
    margin-bottom: 24px;
    letter-spacing: -0.03em;
  }
  p {
    color: #bbb;
    font-size: 1.25rem;
    margin: 0 auto;
    max-width: 600px;
    line-height: 1.6;
  }
  
  .marquee-wrapper {
    width: 100vw;
    margin-left: calc(-50vw + 50%);
    overflow: hidden;
    margin-bottom: 100px;
    background: rgba(255,255,255,0.02);
    padding: 40px 0;
    border-top: 1px solid rgba(255,255,255,0.05);
    border-bottom: 1px solid rgba(255,255,255,0.05);
  }
  
  .marquee {
    display: flex;
    width: max-content;
    animation: scrollMarquee 30s linear infinite;
  }
  .marquee-content {
    display: flex;
    gap: 80px;
    padding-right: 80px;
  }
  .brand {
    font-size: 2.5rem;
    font-weight: 700;
    color: rgba(255,255,255,0.15);
    letter-spacing: -0.04em;
    text-transform: uppercase;
  }
  
  @keyframes scrollMarquee {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
  
  .integration-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 32px;
    max-width: 1000px;
    margin: 0 auto;
  }
  
  .int-card {
    background: #1a1a1a;
    border: 1px solid rgba(255,255,255,0.08);
    border-radius: 24px;
    padding: 40px;
    transition: transform 0.3s, background 0.3s;
  }
  .int-card:hover {
    background: #222;
    transform: translateY(-4px);
  }
  
  .int-header {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 24px;
  }
  .int-icon {
    width: 56px;
    height: 56px;
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .figma-bg { background: rgba(255,255,255,0.1); }
  .slack-bg { background: #4A154B; }
  .notion-bg { background: white; }
  .jira-bg { background: rgba(0, 82, 204, 0.2); }
  
  .int-header h3 {
    font-size: 1.5rem;
    color: white;
  }
  .int-card p {
    font-size: 1.1rem;
    color: #999;
    margin-bottom: 24px;
  }
  .int-link {
    color: white;
    font-weight: 600;
  }
  .int-link:hover {
    color: #ff6b6b;
  }
  
  @media (max-width: 768px) {
    .integration-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
