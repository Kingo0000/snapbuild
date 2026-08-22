<script>
  import { fadeUp } from '../animate.js';
</script>

<section class="integrations">
  <div class="container">
    <div class="int-content" use:fadeUp>
      <div class="text-side">
        <h2>Connects with your stack</h2>
        <p>SnapBuild seamlessly integrates with the tools your team already uses daily. Export directly, sync assets, and maintain a single source of truth.</p>
        <button class="secondary-btn">View all integrations</button>
      </div>
      
      <div class="grid-side">
        <!-- Floating orbs for integrations -->
        <div class="orb figma">
          <svg viewBox="0 0 38 57" width="32" height="48" xmlns="http://www.w3.org/2000/svg"><path d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z" fill="#1ABCFE"/><path d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z" fill="#0ACF83"/><path d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z" fill="#FF7262"/><path d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z" fill="#F24E1E"/><path d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z" fill="#A259FF"/></svg>
        </div>
        <div class="orb slack">
          <svg viewBox="0 0 24 24" width="36" height="36" xmlns="http://www.w3.org/2000/svg"><path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zm1.271 0a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zm0 1.271a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zm10.122 2.52a2.528 2.528 0 0 1 2.522-2.52 2.528 2.528 0 0 1 2.521 2.52 2.528 2.528 0 0 1-2.521 2.522h-2.522V8.833zm-1.268 0a2.528 2.528 0 0 1-2.523 2.522 2.528 2.528 0 0 1-2.52-2.522V2.52A2.528 2.528 0 0 1 15.166 0a2.528 2.528 0 0 1 2.522 2.522v6.312zm-2.52 10.122a2.528 2.528 0 0 1 2.52 2.522 2.528 2.528 0 0 1-2.52 2.522 2.528 2.528 0 0 1-2.522-2.522v-2.522h2.522zm0-1.268a2.528 2.528 0 0 1-2.522-2.523 2.528 2.528 0 0 1 2.522-2.52h6.312A2.528 2.528 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.522h-6.312z" fill="#fff"/></svg>
        </div>
        <div class="orb notion">
          <svg viewBox="0 0 24 24" width="36" height="36" fill="black" xmlns="http://www.w3.org/2000/svg"><path d="M4.459 4.208c.746.065 1.526.12 1.62.906.017.147.037.294.037.443v13.52c0 .416-.275.617-.677.653-.66.06-1.52.122-1.637.751-.01.054-.012.11-.012.167 0 .428.29.562.774.562h7.828c.365 0 .52-.164.52-.452 0-.317-.194-.436-.88-.475-.853-.05-1.076-.145-1.076-.843V7.126l7.305 13.91c.21.396.48.513.88.513h1.86c.338 0 .584-.132.584-.44V4.767c0-.503.26-.745 1.056-.798.544-.035.795-.213.795-.623 0-.376-.234-.582-.693-.582H15.02c-.373 0-.585.16-.585.497 0 .285.18.423.85.462.61.037.804.148.804.763v12.75l-7.2-13.67c-.203-.38-.456-.51-.83-.51H4.97c-.438 0-.67.19-.67.61 0 .286.12.443.16.54z"/></svg>
        </div>
        <div class="orb jira">
          <svg viewBox="0 0 24 24" width="36" height="36" xmlns="http://www.w3.org/2000/svg"><path d="M11.53 11.758a.465.465 0 0 0 .193.376l9.907 7.075c.184.132.44.02.44-.207V5.592a.463.463 0 0 0-.193-.376L11.723.11c-.183-.13-.44-.02-.44.207v11.44zm-5.765 4.116a.466.466 0 0 0 .192.377l9.907 7.076c.184.13.44.02.44-.208v-9.378a.465.465 0 0 0-.193-.376l-9.906-7.075c-.184-.13-.44-.02-.44.208v9.376zm-5.765 4.117a.465.465 0 0 0 .192.377l9.907 7.075c.184.13.44.02.44-.208v-7.35a.465.465 0 0 0-.193-.376l-9.906-7.076c-.184-.13-.44-.02-.44.207v7.351z" fill="#0052CC"/></svg>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .integrations {
    padding: 120px 0;
    background: #111;
    color: white;
  }
  .int-content {
    display: flex;
    align-items: center;
    gap: 80px;
    background: linear-gradient(135deg, rgba(26,26,26,0.8) 0%, rgba(42,27,42,0.8) 100%);
    padding: 80px;
    border-radius: 40px;
    border: 1px solid rgba(255,255,255,0.05);
    box-shadow: 0 40px 100px rgba(0,0,0,0.5);
    overflow: hidden;
  }
  .text-side {
    flex: 1;
    z-index: 2;
  }
  h2 {
    color: white;
    font-size: 3.5rem;
    margin-bottom: 24px;
    line-height: 1.1;
  }
  p {
    color: #bbb;
    font-size: 1.25rem;
    margin-bottom: 40px;
    line-height: 1.6;
    max-width: 400px;
  }
  .secondary-btn {
    background: rgba(255,255,255,0.1);
    border: 1px solid rgba(255,255,255,0.2);
    color: white;
    padding: 16px 32px;
    font-size: 1.125rem;
    border-radius: 100px;
    transition: background 0.2s, box-shadow 0.2s;
  }
  .secondary-btn:hover {
    background: white;
    color: black;
    box-shadow: 0 0 20px rgba(255,255,255,0.2);
  }
  
  .grid-side {
    flex: 1;
    position: relative;
    height: 400px;
  }
  
  .orb {
    position: absolute;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 20px 40px rgba(0,0,0,0.3);
    animation: floatOrb 8s ease-in-out infinite alternate;
  }
  .figma {
    background: #fff;
    top: 20%;
    left: 20%;
    width: 100px; height: 100px;
  }
  .slack {
    background: #4A154B;
    top: 50%;
    right: 10%;
    animation-delay: -2s;
  }
  .notion {
    background: #fff;
    bottom: 10%;
    left: 40%;
    animation-delay: -4s;
    width: 90px; height: 90px;
  }
  .jira {
    background: #fff;
    top: 10%;
    right: 30%;
    animation-delay: -6s;
    width: 70px; height: 70px;
  }
  
  @keyframes floatOrb {
    0% { transform: translateY(0) scale(1); }
    100% { transform: translateY(-20px) scale(1.05); }
  }
  
  @media (max-width: 900px) {
    .int-content {
      flex-direction: column;
      padding: 40px 24px;
      text-align: center;
    }
    p {
      margin: 0 auto 40px;
    }
    .grid-side {
      width: 100%;
      height: 300px;
    }
  }
</style>
