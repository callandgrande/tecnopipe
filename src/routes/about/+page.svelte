<!-- src/routes/about/+page.svelte -->
<script>
	// Import any components or functionality if needed
	
	// Team members data with the specific people you requested
	const teamMembers = [
		{
			name: 'Eduardo Amador',
			position: 'Gerente General',
			image: '/api/placeholder/300/300'
		},
		{
			name: 'Rebeca Santacruz',
			position: 'TBD',
			image: '/api/placeholder/300/300'
		}
	];
	
	// Company milestones
	const milestones = [
		{
			year: '2013',
			title: 'Company Founded',
			description: 'Tecnpipe was established with a vision to revolutionize the pipe industry in Ecuador.'
		},
		{
			year: '2015',
			title: 'International Partnerships',
			description: 'Formed key partnerships with German and American manufacturers to bring high-quality products to Ecuador.'
		},
		{
			year: '2018',
			title: 'Environmental Certification',
			description: 'Achieved international certifications for environmental protection and sustainable practices.'
		},
		{
			year: '2023',
			title: 'AI Integration',
			description: 'Began implementing artificial intelligence solutions to improve energy efficiency in our products.'
		}
	];
</script>

<svelte:head>
	<title>About Us | TecnoPipe Solutions</title>
	<meta name="description" content="Learn about TecnoPipe's history, mission and commitment to innovation since 2013." />
</svelte:head>

<!-- Hero Section -->
<section class="relative min-h-[40vh] w-full overflow-hidden bg-blue-900">
	<div class="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
	<div class="relative z-10 flex min-h-[40vh] items-center px-4 sm:px-6 md:px-10 lg:px-32">
		<div class="max-w-2xl pt-16">
			<h1 class="mb-4 text-4xl font-bold text-white md:text-5xl lg:text-6xl">About Us</h1>
			<p class="text-xl font-light text-gray-100">
				Driving innovation in pipe solutions since 2013
			</p>
		</div>
	</div>
</section>

<!-- Our Story Section -->
<section class="py-12 md:py-20">
	<div class="container mx-auto px-4 sm:px-6">
		<div class="mx-auto max-w-4xl">
			<h2 class="mb-8 text-center text-2xl font-medium md:text-3xl">OUR STORY</h2>
			
			<div class="mb-10 space-y-6 text-gray-700">
				<p class="text-lg">
					<strong>Tecnpipe</strong> is a forward-thinking company dedicated to innovation and the development of markets and products in Ecuador since 2013.
				</p>
				
				<p>
					We proudly offer high-quality products sourced from Germany and the United States, known for their advanced technology, superior performance, and internationally recognized certifications in environmental protection, energy management, and carbon footprint reduction.
				</p>
				
				<p>
					Looking ahead, Tecnpipe is also embracing the power of artificial intelligence to drive greater energy efficiency and sustainability—further reinforcing our commitment to protecting the environment and promoting a greener future.
				</p>
			</div>
			
			<!-- Company Image -->
			<div class="mb-12 flex h-64 w-full items-center justify-center overflow-hidden rounded-lg md:h-80">
				<img src="/images/10.png" alt="TecnoPipe Company" class="max-h-full object-contain" />
			</div>
		</div>
	</div>
</section>

<!-- Mission and Values -->
<section class="bg-gray-100 py-12 md:py-20">
	<div class="container mx-auto px-4 sm:px-6">
		<h2 class="mb-8 text-center text-2xl font-medium md:text-3xl">MISSION & VALUES</h2>
		
		<div class="mb-16 flex flex-col items-stretch gap-6 md:flex-row">
			<!-- Mission -->
			<div class="w-full rounded-lg bg-white p-8 shadow-sm md:w-1/2">
				<h3 class="mb-4 text-xl font-medium">Our Mission</h3>
				<p class="text-gray-700">
					To provide innovative, sustainable pipe solutions that meet the highest international standards while contributing to the development of Ecuador's infrastructure and protecting our environment for future generations.
				</p>
			</div>
			
			<!-- Vision -->
			<div class="w-full rounded-lg bg-white p-8 shadow-sm md:w-1/2">
				<h3 class="mb-4 text-xl font-medium">Our Vision</h3>
				<p class="text-gray-700">
					To be the leading provider of eco-friendly pipe solutions in Latin America, recognized for our commitment to innovation, quality, and sustainability through the integration of cutting-edge technologies.
				</p>
			</div>
		</div>
		
		<!-- Core Values -->
		<h3 class="mb-6 text-center text-xl font-medium">Core Values</h3>
		<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
			<div class="rounded-lg bg-white p-6 text-center shadow-sm">
				<h4 class="mb-3 font-medium">QUALITY</h4>
				<p class="text-sm text-gray-700">Delivering products that meet the highest international standards</p>
			</div>
			
			<div class="rounded-lg bg-white p-6 text-center shadow-sm">
				<h4 class="mb-3 font-medium">INNOVATION</h4>
				<p class="text-sm text-gray-700">Constantly evolving our solutions to address emerging challenges</p>
			</div>
			
			<div class="rounded-lg bg-white p-6 text-center shadow-sm">
				<h4 class="mb-3 font-medium">SUSTAINABILITY</h4>
				<p class="text-sm text-gray-700">Prioritizing environmental protection in all our business decisions</p>
			</div>
			
			<div class="rounded-lg bg-white p-6 text-center shadow-sm">
				<h4 class="mb-3 font-medium">INTEGRITY</h4>
				<p class="text-sm text-gray-700">Operating with transparency and honesty in all our relationships</p>
			</div>
		</div>
	</div>
</section>

<!-- Milestones Section -->
<section class="py-12 md:py-20">
	<div class="container mx-auto px-4 sm:px-6">
		<h2 class="mb-10 text-center text-2xl font-medium md:text-3xl">OUR JOURNEY</h2>
		
		<div class="relative mx-auto max-w-3xl">
			<!-- Timeline line -->
			<div class="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-300 md:left-1/2"></div>
			
			<!-- Timeline items -->
			{#each milestones as milestone, i}
				<div class="relative mb-8 md:mb-12">
					<!-- Timeline dot -->
					<div class="absolute left-4 h-4 w-4 -translate-x-1/2 rounded-full bg-blue-700 md:left-1/2"></div>
					
					<!-- Content container -->
					<div class={`ml-12 md:ml-0 md:w-1/2 ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:left-1/2'}`}>
						<div class="rounded-lg bg-white p-6 shadow-sm">
							<h3 class="mb-1 text-2xl font-bold text-blue-700">{milestone.year}</h3>
							<h4 class="mb-2 font-medium">{milestone.title}</h4>
							<p class="text-sm text-gray-700">{milestone.description}</p>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Team Section -->
<section class="bg-gray-100 py-12 md:py-20">
	<div class="container mx-auto px-4 sm:px-6">
		<h2 class="mb-10 text-center text-2xl font-medium md:text-3xl">OUR TEAM</h2>
		
		<div class="mx-auto grid max-w-2xl grid-cols-1 gap-12 sm:grid-cols-2">
			{#each teamMembers as member}
				<div class="text-center">
					<div class="mx-auto mb-4 h-48 w-48 overflow-hidden rounded-full">
						<img src={member.image} alt={member.name} class="h-full w-full object-cover" />
					</div>
					<h3 class="mb-1 text-lg font-medium">{member.name}</h3>
					<p class="text-gray-600">{member.position}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Partners Section -->
<section class="py-12 md:py-20">
	<div class="container mx-auto px-4 sm:px-6">
		<h2 class="mb-10 text-center text-2xl font-medium md:text-3xl">OUR PARTNERS</h2>
		
		<div class="flex flex-wrap items-center justify-center gap-8">
			<!-- Partner logos -->
			<div class="flex h-20 w-40 items-center justify-center">
				<img src="/images/cees.png" alt="CEES Logo" class="max-h-full max-w-full object-contain" />
			</div>
			<div class="flex h-20 w-40 items-center justify-center">
				<img src="/images/aenor.jpg" alt="AENOR Logo" class="max-h-full max-w-full object-contain" />
			</div>
			<div class="flex h-20 w-40 items-center justify-center">
				<img src="/images/viking.png" alt="VIKING Logo" class="max-h-full max-w-full object-contain" />
			</div>
			<div class="flex h-20 w-40 items-center justify-center">
				<img src="/images/wefatherm.png" alt="WEFATHERM Logo" class="max-h-full max-w-full object-contain" />
			</div>
		</div>
		
		<div class="mt-12 text-center">
			<p class="mb-6 text-gray-700">
				We proudly collaborate with industry leaders from Germany and the United States to bring the highest quality pipe solutions to Ecuador.
			</p>
			
			<a
				href="/contact"
				class="inline-block rounded-md bg-blue-700 px-6 py-3 font-medium text-white transition-all hover:bg-blue-800 hover:shadow-lg"
			>
				Become a Partner
			</a>
		</div>
	</div>
</section>

<!-- Call to Action -->
<section class="bg-blue-900 py-12 text-white md:py-20">
	<div class="container mx-auto px-4 text-center sm:px-6">
		<h2 class="mb-6 text-2xl font-medium md:text-3xl">Ready to Work With Us?</h2>
		<p class="mx-auto mb-8 max-w-2xl text-lg">
			Experience the innovation and quality that has made Tecnpipe a leader in the industry since 2013.
		</p>
		<div class="flex justify-center gap-4">
			<a
				href="/services"
				class="rounded-md border-2 border-white bg-transparent px-6 py-3 font-medium text-white transition-all hover:bg-white/10"
			>
				Our Services
			</a>
			<a
				href="/contact"
				class="rounded-md bg-white px-6 py-3 font-medium text-blue-900 transition-all hover:bg-gray-100"
			>
				Contact Us
			</a>
		</div>
	</div>
</section>