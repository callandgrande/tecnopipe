<script>
    let name = '';
    let email = '';
    let message = '';
  </script>
  
  <section class="max-w-4xl mx-auto px-4 py-16 text-center">
    <h1 class="text-4xl font-bold text-blue-700 mb-6">Get in Touch</h1>
    <p class="text-gray-600 mb-10">
      Have questions? Fill out the form below and we'll get back to you as soon as possible.
    </p>
  
    <form class="space-y-6 max-w-2xl mx-auto text-left">
      <div>
        <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
        <input
          id="name"
          bind:value={name}
          type="text"
          required
          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-700 focus:ring focus:ring-blue-200"
          placeholder="Your full name"
        />
      </div>
  
      <div>
        <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
        <input
          id="email"
          bind:value={email}
          type="email"
          required
          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-700 focus:ring focus:ring-blue-200"
          placeholder="you@example.com"
        />
      </div>
  
      <div>
        <label for="message" class="block text-sm font-medium text-gray-700">Message</label>
        <textarea
          id="message"
          bind:value={message}
          rows="5"
          required
          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-700 focus:ring focus:ring-blue-200"
          placeholder="Your message..."
        ></textarea>
      </div>
  
      <button
        type="submit"
        class="w-full rounded-md bg-blue-700 px-6 py-3 text-white font-medium hover:bg-blue-800 transition-all"
      >
        Send Message
      </button>
    </form>
  
    <div class="mt-12 text-gray-600 text-sm">
      <p>
        Or reach us directly via:
      </p>
      <p class="mt-2">
        📞 <a href="tel:+15551234567" class="text-blue-700 hover:underline">(555) 123-4567</a><br />
        ✉️ <a href="mailto:info@tecnopipe.com" class="text-blue-700 hover:underline">info@tecnopipe.com</a>
      </p>
    </div>
  </section>
  