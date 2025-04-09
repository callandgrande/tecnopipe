<!-- src/routes/contact/+page.svelte -->
<script>
	let formData = {
		name: '',
		email: '',
		phone: '',
		message: '',
		service: 'general'
	};
	
	let formSubmitted = false;
	let formError = false;
	
	function handleSubmit() {
		// Simple form validation
		if (!formData.name || !formData.email || !formData.message) {
			formError = true;
			return;
		}
		
		// In a real application, you would send the form data to your server here
		// For this example, we'll just simulate a successful submission
		formSubmitted = true;
		formError = false;
		
		// Reset form after submission
		formData = {
			name: '',
			email: '',
			phone: '',
			message: '',
			service: 'general'
		};
	}
</script>

<svelte:head>
	<title>Contact Us | TecnoPipe Solutions</title>
	<meta name="description" content="Contact TecnoPipe Solutions for all your piping needs." />
</svelte:head>

<!-- Hero Section -->
<section class="relative min-h-[40vh] w-full overflow-hidden bg-blue-900">
	<div class="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
	<div class="relative z-10 flex min-h-[40vh] items-center px-4 sm:px-6 md:px-10 lg:px-32">
		<div class="max-w-2xl pt-16">
			<h1 class="mb-4 text-4xl font-bold text-white md:text-5xl lg:text-6xl">Contact Us</h1>
			<p class="text-xl font-light text-gray-100">
				We're here to answer your questions and help with your piping needs.
			</p>
		</div>
	</div>
</section>

<!-- Contact Content Section -->
<section class="py-12 md:py-20">
	<div class="container mx-auto px-4 sm:px-6">
		<div class="flex flex-col items-start gap-10 lg:flex-row">
			<!-- Left Column - Contact Information -->
			<div class="w-full lg:w-1/3">
				<h2 class="mb-6 text-2xl font-medium">Get In Touch</h2>
				
				<div class="mb-8">
					<h3 class="mb-3 text-lg font-medium">Our Office</h3>
					<p class="mb-1 text-gray-700">Street</p>
					<p class="mb-1 text-gray-700">Office</p>
					<p class="mb-4 text-gray-700">Quito, Ecuador 12345</p>
					
					<h4 class="mb-2 font-medium">Phone</h4>
					<p class="mb-4 text-gray-700">
						<a href="tel:(+593) 98-966-0516" class="text-blue-700 hover:text-blue-800">(+593) 98-966-0516</a>
					</p>
                    <p class="mb-4 text-gray-700">
						<a href="tel:(+593) 99-733-1443" class="text-blue-700 hover:text-blue-800">(+593) 99-733-1443</a>
					</p>
					
					<h4 class="mb-2 font-medium">Email</h4>
					<p class="mb-4 text-gray-700">
						<a href="mailto:eduardoamador@eduardoamador.com" class="text-blue-700 hover:text-blue-800">eduardoamador@eduardoamador.com</a>
					</p>
                    <p class="mb-4 text-gray-700">
						<a href="mailto:rebecasantacruz@hotmail.com" class="text-blue-700 hover:text-blue-800">rebecasantacruz@hotmail.com</a>
					</p>

				</div>
				
				<div class="mb-8">
					<h3 class="mb-3 text-lg font-medium">Business Hours</h3>
					<p class="mb-1 text-gray-700">Monday - Friday: 8:00 AM - 6:00 PM</p>
					<p class="mb-1 text-gray-700">Saturday: 9:00 AM - 2:00 PM</p>
					<p class="text-gray-700">Sunday: Closed</p>
				</div>
				
				<div>
					<h3 class="mb-3 text-lg font-medium">Connect With Us</h3>
					<div class="flex space-x-4">
						<a href="https://www.facebook.com" target="_blank" class="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300">
							<span class="text-xs">FB</span>
						</a>
						<a href="https://www.instagram.com/tecnopipe_ec/?hl=en" target="_blank" class="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300">
							<span class="text-xs">IG</span>
						</a>
						<a href="https://www.linkedin.com" target="_blank" class="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300">
							<span class="text-xs">IN</span>
						</a>
						<a href="https://www.youtube.com" target="_blank" class="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300">
							<span class="text-xs">YT</span>
						</a>
					</div>
				</div>
			</div>

			<!-- Right Column - Contact Form -->
			<div class="w-full lg:w-2/3">
				<h2 class="mb-6 text-2xl font-medium">Send Us a Message</h2>
				
				{#if formSubmitted}
					<div class="mb-6 rounded-md bg-green-100 p-4 text-green-700">
						<p class="font-medium">Thank you for your message!</p>
						<p>We've received your inquiry and will get back to you as soon as possible.</p>
					</div>
				{/if}
				
				{#if formError}
					<div class="mb-6 rounded-md bg-red-100 p-4 text-red-700">
						<p class="font-medium">Please complete all required fields.</p>
						<p>Name, email, and message are required to submit the form.</p>
					</div>
				{/if}
				
				<form on:submit|preventDefault={handleSubmit} class="space-y-6">
					<div class="grid grid-cols-1 gap-6 md:grid-cols-2">
						<div>
							<label for="name" class="mb-1 block text-sm font-medium text-gray-700">Name *</label>
							<input
								type="text"
								id="name"
								bind:value={formData.name}
								class="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
								required
							/>
						</div>
						
						<div>
							<label for="email" class="mb-1 block text-sm font-medium text-gray-700">Email *</label>
							<input
								type="email"
								id="email"
								bind:value={formData.email}
								class="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
								required
							/>
						</div>
					</div>
					
					<div class="grid grid-cols-1 gap-6 md:grid-cols-2">
						<div>
							<label for="phone" class="mb-1 block text-sm font-medium text-gray-700">Phone Number</label>
							<input
								type="tel"
								id="phone"
								bind:value={formData.phone}
								class="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
							/>
						</div>
						
						<div>
							<label for="service" class="mb-1 block text-sm font-medium text-gray-700">Service Interest</label>
							<select
								id="service"
								bind:value={formData.service}
								class="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
							>
								<option value="general">General Inquiry</option>
								<option value="industrial">Industrial Pipes</option>
								<option value="residential">Residential Solutions</option>
								<option value="installation">Installation</option>
								<option value="maintenance">Maintenance</option>
								<option value="custom">Custom Solutions</option>
								<option value="consulting">Consulting & Design</option>
								<option value="emergency">Emergency Repairs</option>
							</select>
						</div>
					</div>
					
					<div>
						<label for="message" class="mb-1 block text-sm font-medium text-gray-700">Message *</label>
						<textarea
							id="message"
							bind:value={formData.message}
							rows="6"
							class="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
							required
						></textarea>
					</div>
					
					<button
						type="submit"
						class="rounded-md bg-blue-700 px-6 py-3 font-medium text-white transition-all hover:bg-blue-800 hover:shadow-lg"
					>
						Send Message
					</button>
				</form>
			</div>
		</div>
	</div>
</section>

<!-- Map Section -->
<section class="bg-gray-100 py-12">
	<div class="container mx-auto px-4 sm:px-6">
		<h2 class="mb-8 text-xl font-medium sm:text-2xl">FIND US</h2>
		
		<!-- Map placeholder -->
		<div class="flex h-80 w-full items-center justify-center rounded bg-gray-300 text-gray-600">
			<div class="text-center">
				<p class="mb-2">Map Placeholder</p>
				<p class="text-sm">Here you would embed your Google Maps or other map service</p>
			</div>
		</div>
	</div>
</section>