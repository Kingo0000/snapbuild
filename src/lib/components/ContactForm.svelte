<script>
  let submitted = false;
  
  function handleSubmit(e) {
    e.preventDefault();
    submitted = true;
  }
</script>

<section class="contact-form">
  <div class="container">
    <div class="form-wrapper">
      <div class="form-info">
        <h2>Ready to transform your workflow?</h2>
        <p>Get in touch with our team to see how SnapBuild can adapt to your specific design system and processes.</p>
      </div>
      
      <div class="form-container">
        {#if submitted}
          <div class="success-state">
            <div class="success-icon">✓</div>
            <h3>Request submitted!</h3>
            <p>Our team will reach out to you shortly.</p>
            <button class="outline-btn" on:click={() => submitted = false}>Send another</button>
          </div>
        {:else}
          <form on:submit={handleSubmit}>
            <div class="form-group">
              <label for="name">Name</label>
              <input type="text" id="name" required placeholder="Jane Doe" />
            </div>
            <div class="form-group">
              <label for="email">Work Email</label>
              <input type="email" id="email" required placeholder="jane@company.com" />
            </div>
            <div class="form-group">
              <label for="message">How can we help?</label>
              <textarea id="message" rows="4" placeholder="Tell us about your team..."></textarea>
            </div>
            <button type="submit" class="submit-btn">Contact Sales</button>
          </form>
        {/if}
      </div>
    </div>
  </div>
</section>

<style>
  .contact-form {
    padding: 100px 0;
    background: linear-gradient(180deg, #ffffff 0%, #f9f9f9 100%);
  }
  .form-wrapper {
    display: flex;
    gap: 80px;
    align-items: center;
    max-width: 1000px;
    margin: 0 auto;
  }
  .form-info {
    flex: 1;
  }
  .form-info h2 {
    font-size: 2.5rem;
    margin-bottom: 24px;
    line-height: 1.2;
  }
  .form-info p {
    font-size: 1.125rem;
    color: var(--secondary);
    line-height: 1.6;
  }
  
  .form-container {
    flex: 1;
    background: white;
    padding: 40px;
    border-radius: 24px;
    box-shadow: var(--shadow);
    min-height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  
  .form-group {
    margin-bottom: 24px;
  }
  label {
    display: block;
    font-weight: 500;
    margin-bottom: 8px;
    font-size: 0.95rem;
  }
  input, textarea {
    width: 100%;
    padding: 12px 16px;
    border: 1px solid var(--border-color);
    border-radius: 12px;
    font-family: inherit;
    font-size: 1rem;
    transition: border-color 0.2s, box-shadow 0.2s;
  }
  input:focus, textarea:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 3px rgba(0,0,0,0.05);
  }
  .submit-btn {
    width: 100%;
    padding: 16px;
    font-size: 1.125rem;
    border-radius: 12px;
  }
  
  .success-state {
    text-align: center;
  }
  .success-icon {
    width: 64px;
    height: 64px;
    background: #4caf50;
    color: white;
    font-size: 2rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 24px;
  }
  .success-state h3 {
    font-size: 1.5rem;
    margin-bottom: 8px;
  }
  .success-state p {
    color: var(--secondary);
    margin-bottom: 32px;
  }
  .outline-btn {
    background: transparent;
    color: var(--primary);
    border: 1px solid var(--border-color);
  }
  
  @media (max-width: 768px) {
    .form-wrapper {
      flex-direction: column;
      gap: 40px;
    }
  }
</style>
