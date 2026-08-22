<script>
  import { fadeUp } from '../animate.js';
  let yearly = true;
  
  let openFaq = null;
  const faqs = [
    { q: "Can I cancel at any time?", a: "Yes, you can cancel your subscription at any time. Your access will continue until the end of your billing period." },
    { q: "Do you offer custom integrations?", a: "Yes, our Enterprise plan includes custom API development and dedicated integration engineering." },
    { q: "Is my brand data secure?", a: "Absolutely. SnapBuild is SOC2 Type II compliant and we never use your proprietary design data to train our core models." },
    { q: "How many team members can I add?", a: "The Team plan includes 5 seats. Additional seats can be purchased at $20/month. The Enterprise plan has unlimited seats." }
  ];
</script>

<section class="pricing-expanded" id="pricing">
  <div class="container">
    <div class="header-content" use:fadeUp>
      <h2>Simple, transparent pricing</h2>
      <p>Scale your asset generation without scaling your costs.</p>
    </div>
    
    <div class="billing-toggle" use:fadeUp={{delay: 100}}>
      <div class="toggle-wrapper">
        <span class={!yearly ? 'active' : ''}>Monthly</span>
        <button class="toggle-btn {yearly ? 'yearly' : ''}" on:click={() => yearly = !yearly} aria-label="Toggle billing cycle">
          <div class="knob"></div>
        </button>
        <span class={yearly ? 'active' : ''}>Annually <span class="badge">Save 20%</span></span>
      </div>
    </div>
    
    <div class="pricing-grid">
      <!-- Starter Plan -->
      <div class="price-card" use:fadeUp={{delay: 200}}>
        <h3>Starter</h3>
        <p class="plan-desc">For small teams getting started.</p>
        <div class="price">
          <span class="currency">$</span>
          <span class="amount">{yearly ? '49' : '59'}</span>
          <span class="period">/mo</span>
        </div>
        <ul class="features">
          <li>1 Brand Identity</li>
          <li>100 Generations/mo</li>
          <li>Standard Support</li>
          <li>Basic Templates</li>
        </ul>
        <button class="outline-btn">Start free trial</button>
      </div>
      
      <!-- Pro Plan -->
      <div class="price-card popular" use:fadeUp={{delay: 300}}>
        <div class="popular-badge">Most Popular</div>
        <h3>Professional</h3>
        <p class="plan-desc">For growing marketing teams.</p>
        <div class="price">
          <span class="currency">$</span>
          <span class="amount">{yearly ? '99' : '119'}</span>
          <span class="period">/mo</span>
        </div>
        <ul class="features">
          <li>5 Brand Identities</li>
          <li>Unlimited Generations</li>
          <li>Priority Support</li>
          <li>Figma Integration</li>
          <li>Custom Fonts</li>
        </ul>
        <button class="primary-btn">Get Started</button>
      </div>
    </div>
    
    <!-- Enterprise Banner -->
    <div class="enterprise-banner" use:fadeUp={{delay: 400}}>
      <div class="ent-content">
        <h3>Enterprise</h3>
        <p>Custom solutions for large organizations. Includes dedicated account management, custom integrations, SAML SSO, and advanced RBAC permissions.</p>
      </div>
      <div class="ent-action">
        <button class="outline-btn dark">Contact Sales</button>
      </div>
    </div>
    
    <!-- Pricing FAQ -->
    <div class="pricing-faq" use:fadeUp={{delay: 500}}>
      <h3>Frequently asked questions</h3>
      <div class="faq-list">
        {#each faqs as faq, i}
          <div class="faq-item">
            <button class="faq-q" on:click={() => openFaq = openFaq === i ? null : i}>
              {faq.q}
              <span class="faq-icon">{openFaq === i ? '−' : '+'}</span>
            </button>
            {#if openFaq === i}
              <div class="faq-a fade-in">{faq.a}</div>
            {/if}
          </div>
        {/each}
      </div>
    </div>
    
  </div>
</section>

<style>
  .pricing-expanded {
    padding: 140px 0;
    background: #fafafa;
  }
  .header-content {
    text-align: center;
    margin-bottom: 40px;
  }
  h2 {
    font-size: 3.5rem;
    margin-bottom: 20px;
  }
  .header-content p {
    font-size: 1.25rem;
    color: var(--secondary);
  }
  
  .billing-toggle {
    display: flex;
    justify-content: center;
    margin-bottom: 60px;
  }
  .toggle-wrapper {
    display: flex;
    align-items: center;
    gap: 16px;
    background: white;
    padding: 8px 24px;
    border-radius: 100px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.05);
  }
  .toggle-wrapper span {
    font-weight: 500;
    color: #888;
    transition: color 0.3s;
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .toggle-wrapper span.active {
    color: #111;
  }
  .badge {
    background: #e83e8c;
    color: white !important;
    font-size: 0.75rem;
    padding: 4px 8px;
    border-radius: 100px;
    font-weight: 600;
  }
  
  .toggle-btn {
    width: 56px;
    height: 32px;
    background: #eee;
    border-radius: 16px;
    position: relative;
    padding: 4px;
    box-shadow: inset 0 2px 4px rgba(0,0,0,0.1);
  }
  .toggle-btn.yearly {
    background: #111;
  }
  .knob {
    width: 24px;
    height: 24px;
    background: white;
    border-radius: 50%;
    box-shadow: 0 2px 4px rgba(0,0,0,0.2);
    transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  }
  .toggle-btn.yearly .knob {
    transform: translateX(24px);
  }
  
  .pricing-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 32px;
    max-width: 900px;
    margin: 0 auto 60px;
  }
  .price-card {
    background: white;
    border: 1px solid var(--border-color);
    border-radius: 32px;
    padding: 48px;
    display: flex;
    flex-direction: column;
    position: relative;
    box-shadow: 0 10px 40px rgba(0,0,0,0.03);
  }
  .price-card.popular {
    border-color: #ff6b6b;
    box-shadow: 0 20px 60px rgba(255, 107, 107, 0.1);
    transform: scale(1.02);
  }
  .popular-badge {
    position: absolute;
    top: -16px;
    left: 50%;
    transform: translateX(-50%);
    background: linear-gradient(90deg, #ff6b6b, #d84b9e);
    color: white;
    padding: 6px 16px;
    border-radius: 100px;
    font-weight: 600;
    font-size: 0.9rem;
    box-shadow: 0 4px 12px rgba(255, 107, 107, 0.3);
  }
  
  h3 { font-size: 1.75rem; margin-bottom: 8px; }
  .plan-desc { color: #888; margin-bottom: 32px; }
  
  .price {
    display: flex;
    align-items: flex-end;
    margin-bottom: 40px;
  }
  .currency { font-size: 2rem; font-weight: 600; margin-bottom: 8px; }
  .amount { font-size: 4rem; font-weight: 700; line-height: 1; letter-spacing: -0.04em; }
  .period { font-size: 1.1rem; color: #888; margin-bottom: 8px; margin-left: 4px; }
  
  .features {
    list-style: none;
    padding: 0;
    margin: 0 0 40px 0;
    flex: 1;
  }
  .features li {
    padding: 12px 0;
    border-bottom: 1px solid #eee;
    color: #444;
    display: flex;
    align-items: center;
  }
  .features li::before {
    content: '✓';
    color: #ff6b6b;
    font-weight: bold;
    margin-right: 12px;
  }
  
  .outline-btn {
    background: transparent;
    border: 1px solid #ccc;
    color: #111;
    padding: 16px;
    border-radius: 12px;
    width: 100%;
    font-size: 1.1rem;
    font-weight: 600;
  }
  .outline-btn:hover { background: #f9f9f9; border-color: #aaa; }
  .primary-btn {
    width: 100%;
    padding: 16px;
    border-radius: 12px;
    font-size: 1.1rem;
    font-weight: 600;
  }
  
  /* Enterprise Banner */
  .enterprise-banner {
    max-width: 900px;
    margin: 0 auto 100px;
    background: #111;
    color: white;
    border-radius: 24px;
    padding: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 40px;
    box-shadow: 0 20px 50px rgba(0,0,0,0.15);
  }
  .ent-content h3 { color: white; margin-bottom: 12px; }
  .ent-content p { color: #bbb; line-height: 1.6; }
  .outline-btn.dark {
    border-color: rgba(255,255,255,0.3);
    color: white;
    white-space: nowrap;
    padding: 16px 32px;
  }
  .outline-btn.dark:hover {
    background: rgba(255,255,255,0.1);
    border-color: white;
  }
  
  /* FAQ */
  .pricing-faq {
    max-width: 700px;
    margin: 0 auto;
  }
  .pricing-faq h3 {
    text-align: center;
    font-size: 2rem;
    margin-bottom: 40px;
  }
  .faq-list {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  .faq-item {
    background: white;
    border: 1px solid #eee;
    border-radius: 16px;
    overflow: hidden;
  }
  .faq-q {
    width: 100%;
    text-align: left;
    padding: 24px;
    background: transparent;
    color: #111;
    font-size: 1.15rem;
    font-weight: 600;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: none;
    border-radius: 0;
    box-shadow: none;
  }
  .faq-q:hover { background: #fdfdfd; transform: none; box-shadow: none; }
  .faq-icon {
    font-size: 1.5rem;
    color: #ff6b6b;
    font-weight: 400;
  }
  .faq-a {
    padding: 0 24px 24px;
    color: #666;
    line-height: 1.6;
    font-size: 1.05rem;
  }
  .fade-in { animation: fadeIn 0.3s ease-out; }
  @keyframes fadeIn { from { opacity: 0; transform: translateY(-10px); } to { opacity: 1; transform: translateY(0); } }
  
  @media (max-width: 768px) {
    .pricing-grid { grid-template-columns: 1fr; }
    .price-card.popular { transform: none; }
    .enterprise-banner { flex-direction: column; text-align: center; }
  }
</style>
