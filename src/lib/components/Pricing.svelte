<script>
  let yearly = true;
</script>

<section class="pricing">
  <div class="container">
    <div class="pricing-header">
      <h2>Simple, transparent pricing</h2>
      <p>Start for free, upgrade when you need more power.</p>
      
      <div class="toggle-wrapper">
        <span class={!yearly ? 'active' : ''}>Monthly</span>
        <button class="toggle-btn {yearly ? 'yearly' : ''}" on:click={() => yearly = !yearly}>
          <div class="knob"></div>
        </button>
        <span class={yearly ? 'active' : ''}>Yearly <span class="badge">Save 20%</span></span>
      </div>
    </div>
    
    <div class="pricing-grid">
      <div class="price-card">
        <h3>Starter</h3>
        <div class="price">
          <span class="amount">{yearly ? '$0' : '$0'}</span>
          <span class="period">/mo</span>
        </div>
        <p class="desc">Perfect for individuals and small projects.</p>
        <ul class="features">
          <li>Up to 3 projects</li>
          <li>Basic templates</li>
          <li>Community support</li>
        </ul>
        <button class="plan-btn outline">Get Started</button>
      </div>
      
      <div class="price-card popular">
        <div class="popular-badge">Most Popular</div>
        <h3>Pro</h3>
        <div class="price">
          <span class="amount">{yearly ? '$49' : '$59'}</span>
          <span class="period">/mo</span>
        </div>
        <p class="desc">For teams that need more power and custom branding.</p>
        <ul class="features">
          <li>Unlimited projects</li>
          <li>Custom design system</li>
          <li>Priority support</li>
          <li>Advanced AI features</li>
        </ul>
        <button class="plan-btn">Start Free Trial</button>
      </div>
      
      <div class="price-card">
        <h3>Enterprise</h3>
        <div class="price">
          <span class="amount">Custom</span>
        </div>
        <p class="desc">For large organizations with complex needs.</p>
        <ul class="features">
          <li>Unlimited everything</li>
          <li>Dedicated account manager</li>
          <li>SSO & advanced security</li>
          <li>Custom integrations</li>
        </ul>
        <button class="plan-btn outline">Contact Sales</button>
      </div>
    </div>
  </div>
</section>

<style>
  .pricing {
    padding: 100px 0;
  }
  .pricing-header {
    text-align: center;
    margin-bottom: 60px;
  }
  h2 {
    font-size: 2.5rem;
    margin-bottom: 16px;
  }
  .pricing-header p {
    font-size: 1.125rem;
    color: var(--secondary);
    margin-bottom: 32px;
  }
  
  .toggle-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
    font-weight: 500;
  }
  .toggle-wrapper span {
    color: var(--secondary);
    transition: color 0.2s;
  }
  .toggle-wrapper span.active {
    color: var(--primary);
  }
  .badge {
    background: #e83e8c;
    color: white;
    font-size: 0.75rem;
    padding: 2px 8px;
    border-radius: 100px;
    margin-left: 8px;
  }
  
  .toggle-btn {
    background: #e0e0e0;
    width: 56px;
    height: 32px;
    border-radius: 100px;
    padding: 4px;
    position: relative;
  }
  .toggle-btn.yearly {
    background: var(--primary);
  }
  .knob {
    width: 24px;
    height: 24px;
    background: white;
    border-radius: 50%;
    transition: transform 0.3s;
  }
  .toggle-btn.yearly .knob {
    transform: translateX(24px);
  }
  
  .pricing-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
    max-width: 1000px;
    margin: 0 auto;
  }
  .price-card {
    background: white;
    border: 1px solid var(--border-color);
    border-radius: 24px;
    padding: 40px;
    position: relative;
    display: flex;
    flex-direction: column;
  }
  .price-card.popular {
    border: 2px solid var(--primary);
    box-shadow: var(--shadow);
    transform: translateY(-8px);
  }
  .popular-badge {
    position: absolute;
    top: -14px;
    left: 50%;
    transform: translateX(-50%);
    background: var(--primary);
    color: white;
    padding: 4px 16px;
    border-radius: 100px;
    font-size: 0.8rem;
    font-weight: 600;
  }
  
  .price-card h3 {
    font-size: 1.25rem;
    margin-bottom: 16px;
  }
  .price {
    margin-bottom: 16px;
  }
  .amount {
    font-size: 3rem;
    font-weight: 700;
    letter-spacing: -0.05em;
  }
  .period {
    color: var(--secondary);
  }
  .desc {
    font-size: 0.95rem;
    margin-bottom: 32px;
    min-height: 44px;
  }
  .features {
    list-style: none;
    padding: 0;
    margin: 0 0 40px;
    flex: 1;
  }
  .features li {
    padding: 8px 0;
    border-bottom: 1px solid #f0f0f0;
    font-size: 0.95rem;
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .features li::before {
    content: '✓';
    color: #e83e8c;
    font-weight: bold;
  }
  
  .plan-btn {
    width: 100%;
    padding: 16px;
    border-radius: 12px;
  }
  .plan-btn.outline {
    background: transparent;
    color: var(--primary);
    border: 1px solid var(--border-color);
  }
  .plan-btn.outline:hover {
    background: #f9f9f9;
  }
  
  @media (max-width: 768px) {
    .pricing-grid {
      grid-template-columns: 1fr;
    }
    .price-card.popular {
      transform: none;
    }
  }
</style>
