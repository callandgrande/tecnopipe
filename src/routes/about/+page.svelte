<script>
    import Hero from '../../components/Hero.svelte'; // Assuming you have a Hero component
    import Section from '../../components/Section.svelte'; // A reusable section component
    import TeamMember from '../../components/TeamMember.svelte'; // Optional team member card
  
    const teamMembers = [
      // Example team members (replace with your actual team)
      { name: 'Founder Name', role: 'CEO', imageUrl: '/images/team/founder.jpg', bio: 'Brief bio of the founder.' },
      { name: 'Key Contact Name', role: 'Sales Manager', imageUrl: '/images/team/sales.jpg', bio: 'Brief bio of the sales manager.' },
      // Add more team members as needed
    ];
  </script>
  
  <svelte:head>
    <title>About Us - [Your Company Name]</title>
    <meta name="description" content="Learn more about [Your Company Name], your trusted partner for importing high-quality German construction materials to Ecuador. Based in Quito, we are committed to quality and reliability.">
  </svelte:head>
  
  <Hero
    title="About Us"
    subtitle="Your Trusted Partner for Quality German Construction Materials in Ecuador"
    image="static/images/logo.png" 
  />
  
  <Section title="Our Story">
    <p>
      Founded with a vision to bridge the gap between Germany's renowned construction material quality and Ecuador's growing infrastructure needs, [Your Company Name] was established in [Year of Founding] in Quito. Recognizing the demand for reliable and high-performance materials, we embarked on a journey to source and import the finest products from trusted German manufacturers.
    </p>
    <p>
      Our deep understanding of both the German manufacturing standards and the specific requirements of the Ecuadorian construction market allows us to curate a selection of materials that meet the highest standards of durability, performance, and sustainability.
    </p>
  </Section>
  
  <Section title="Our Mission">
    <p>
      To be the leading and most reliable importer of high-quality German construction materials in Ecuador, empowering the nation's development with superior products and exceptional service.
    </p>
  </Section>
  
  <Section title="Our Vision">
    <p>
      To be recognized as the preferred partner for construction projects across Ecuador, contributing to the creation of robust, sustainable, and high-quality infrastructure through the seamless delivery of world-class German materials.
    </p>
  </Section>
  
  <Section title="Why Choose Us?">
    <ul>
      <li><strong>Uncompromising Quality:</strong> We source directly from reputable German manufacturers known for their superior products.</li>
      <li><strong>Reliable Import Process:</strong> Our streamlined logistics ensure timely and efficient delivery to your projects in Ecuador.</li>
      <li><strong>Strong German Partnerships:</strong> We have established long-term relationships with leading material producers in Germany.</li>
      <li><strong>Local Expertise:</strong> Based in Quito, we possess a deep understanding of the Ecuadorian construction market and its unique demands.</li>
      <li><strong>Customer-Centric Approach:</strong> Your satisfaction is our priority. We are committed to providing exceptional support and service.</li>
      <li><strong>[Add any other specific benefits, e.g., Wide range of products, Competitive pricing]</strong></li>
    </ul>
  </Section>
  
  <Section title="Our Values">
    <ul>
      <li><strong>Quality:</strong> We are dedicated to providing materials that meet the highest international standards.</li>
      <li><strong>Reliability:</strong> You can count on us for consistent and dependable service.</li>
      <li><strong>Integrity:</strong> We operate with transparency and ethical practices in all our dealings.</li>
      <li><strong>Partnership:</strong> We believe in building strong, collaborative relationships with our clients and suppliers.</li>
      <li><strong>Customer Focus:</strong> We are committed to understanding and meeting your specific needs.</li>
      <li><strong>[Add any other core values]</strong></li>
    </ul>
  </Section>
  
  {#if teamMembers.length > 0}
    <Section title="Meet Our Team">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {#each teamMembers as member}
          <TeamMember {...member} />
        {/each}
      </div>
    </Section>
  {/if}
  
  <Section title="Our Commitment to Ecuador">
    <p>
      We are proud to contribute to the growth and development of Ecuador's construction sector. By providing access to top-tier German construction materials, we aim to empower local projects with the quality and durability needed for long-lasting success. Based in Quito, we are deeply invested in serving our community and building lasting partnerships throughout the country.
    </p>
  </Section>
  
  <Section class="bg-gray-100 py-12 text-center">
    <p class="text-xl font-semibold mb-4">Ready to Partner with Us?</p>
    <a href="/contact" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full">
      Contact Us Today
    </a>
  </Section>
  
  <style>
    /* Add any specific styling for this page here */
    ul {
      list-style-type: disc;
      margin-left: 1.5em;
      margin-bottom: 1em;
    }
    li {
      margin-bottom: 0.5em;
    }
  </style>