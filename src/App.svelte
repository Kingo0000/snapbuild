<script>
  import Header from './lib/components/Header.svelte';
  import Hero from './lib/components/Hero.svelte';
  import Logos from './lib/components/Logos.svelte';
  import Advantages from './lib/components/Advantages.svelte';
  import ProductFeatures from './lib/components/ProductFeatures.svelte';
  import ComparisonTable from './lib/components/ComparisonTable.svelte';
  import UseCases from './lib/components/UseCases.svelte';
  import Integrations from './lib/components/Integrations.svelte';
  import Testimonials from './lib/components/Testimonials.svelte';
  import Pricing from './lib/components/Pricing.svelte';
  import ContactForm from './lib/components/ContactForm.svelte';
  import FinalCta from './lib/components/FinalCta.svelte';
  import Footer from './lib/components/Footer.svelte';
</script>

<Header />
<main>
  <Hero />
  <Logos />
  <Advantages />
  <ProductFeatures />
  
  <!-- New Section 1 -->
  <UseCases />
  
  <ComparisonTable />
  
  <!-- New Section 2 -->
  <Integrations />
  
  <!-- New Section 3 -->
  <Testimonials />
  
  <!-- New Section 4 -->
  <Pricing />
  
  <!-- New Section 5 -->
  <ContactForm />
  
  <FinalCta />
</main>
<Footer />
