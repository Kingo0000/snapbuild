<script>
  import { fadeUp } from '../animate.js';
  let submitted = false;
  
  function handleSubmit(e) {
    e.preventDefault();
    submitted = true;
    setTimeout(() => submitted = false, 5000);
  }
</script>

<section class="contact-expanded" id="contact">
  <div class="container">
    <div class="contact-wrapper" use:fadeUp>
      
      <!-- Left side: Info -->
      <div class="contact-info">
        <h2>Get in touch</h2>
        <p class="subtitle">Whether you have a question about pricing, need a demo, or want to explore enterprise options, our team is ready to answer all your questions.</p>
        
        <div class="info-blocks">
          <div class="info-item">
            <div class="info-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            </div>
            <div>
              <h3>Sales Inquiries</h3>
              <p>sales@snapbuild.ru</p>
            </div>
          </div>
          <div class="info-item">
            <div class="info-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
            </div>
            <div>
              <h3>Support</h3>
              <p>Available 24/7 for Pro and Enterprise</p>
            </div>
          </div>
          <div class="info-item">
            <div class="info-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            </div>
            <div>
              <h3>Response Time</h3>
              <p>We aim to respond within 2 hours</p>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Right side: Form -->
      <div class="contact-form-side">
        <form class="glass-form" on:submit={handleSubmit}>
          {#if submitted}
            <div class="success-msg fade-in">
              <div class="success-icon">✓</div>
              <h3>Message sent!</h3>
              <p>Thanks for reaching out. We'll get back to you shortly.</p>
            </div>
          {:else}
            <div class="form-grid fade-in">
              <div class="input-group">
                <label for="name">Name</label>
                <input type="text" id="name" placeholder="Alexey" required>
              </div>
              <div class="input-group">
                <label for="email">Email</label>
                <input type="email" id="email" placeholder="alexey@company.com" required>
              </div>
              <div class="input-group full">
                <label for="topic">Topic</label>
                <select id="topic" required>
                  <option value="" disabled selected>Select a topic</option>
                  <option value="demo">Book a Demo</option>
                  <option value="pricing">Pricing Inquiry</option>
                  <option value="support">Technical Support</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div class="input-group full">
                <label for="message">Message</label>
                <textarea id="message" rows="4" placeholder="How can we help you?" required></textarea>
              </div>
              <button type="submit" class="submit-btn">Send message</button>
            </div>
          {/if}
        </form>
      </div>
      
    </div>
  </div>
</section>

<style>
  .contact-expanded {
    padding: 140px 0;
    background: linear-gradient(180deg, #fdfdfd 0%, #f4f4f4 100%);
  }
  .contact-wrapper {
    display: flex;
    background: white;
    border-radius: 40px;
    box-shadow: 0 30px 80px rgba(0,0,0,0.06);
    overflow: hidden;
    max-width: 1100px;
    margin: 0 auto;
    border: 1px solid var(--border-color);
  }
  
  .contact-info {
    flex: 1;
    padding: 60px;
    background: #111;
    color: white;
  }
  .contact-info h2 {
    color: white;
    font-size: 3rem;
    margin-bottom: 24px;
    letter-spacing: -0.03em;
  }
  .subtitle {
    color: #bbb;
    font-size: 1.15rem;
    line-height: 1.6;
    margin-bottom: 60px;
  }
  
  .info-blocks {
    display: flex;
    flex-direction: column;
    gap: 32px;
  }
  .info-item {
    display: flex;
    align-items: flex-start;
    gap: 20px;
  }
  .info-icon {
    width: 48px;
    height: 48px;
    border-radius: 12px;
    background: rgba(255,255,255,0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ff6b6b;
    flex-shrink: 0;
  }
  .info-item h3 {
    color: white;
    font-size: 1.15rem;
    margin-bottom: 6px;
  }
  .info-item p {
    color: #999;
    font-size: 1rem;
  }
  
  .contact-form-side {
    flex: 1.2;
    padding: 60px;
    position: relative;
  }
  
  .glass-form {
    width: 100%;
    position: relative;
    min-height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  
  .form-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;
  }
  .input-group {
    display: flex;
    flex-direction: column;
  }
  .input-group.full {
    grid-column: span 2;
  }
  label {
    font-size: 0.95rem;
    font-weight: 600;
    margin-bottom: 8px;
    color: #444;
  }
  input, textarea, select {
    padding: 16px;
    border: 1px solid #ddd;
    border-radius: 12px;
    font-family: inherit;
    font-size: 1rem;
    background: #fafafa;
    transition: border-color 0.3s, box-shadow 0.3s;
  }
  input:focus, textarea:focus, select:focus {
    outline: none;
    border-color: #ff6b6b;
    box-shadow: 0 0 0 4px rgba(255, 107, 107, 0.1);
    background: white;
  }
  
  .submit-btn {
    grid-column: span 2;
    background: #111;
    color: white;
    padding: 18px;
    border-radius: 12px;
    font-size: 1.125rem;
    font-weight: 600;
    margin-top: 12px;
    transition: transform 0.2s, background 0.2s;
  }
  .submit-btn:hover {
    transform: translateY(-2px);
    background: #333;
  }
  
  .success-msg {
    text-align: center;
    padding: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
  .success-icon {
    width: 80px;
    height: 80px;
    background: #e8f5e9;
    color: #2e7d32;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2.5rem;
    margin-bottom: 24px;
  }
  .success-msg h3 {
    font-size: 2rem;
    margin-bottom: 12px;
  }
  
  .fade-in { animation: fadeIn 0.4s ease-out; }
  @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
  
  @media (max-width: 900px) {
    .contact-wrapper { flex-direction: column; }
    .form-grid { grid-template-columns: 1fr; }
    .input-group.full { grid-column: span 1; }
    .submit-btn { grid-column: span 1; }
    .contact-info, .contact-form-side { padding: 40px 24px; }
  }
</style>
