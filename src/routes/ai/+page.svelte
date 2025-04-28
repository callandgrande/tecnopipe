<!-- src/routes/ai-solutions/+page.svelte -->
<script>
	// AI solutions data
	const aiSolutions = [
		{
			title: "Predictive Maintenance",
			description: "AI detects issues before they occur, preventing leaks and extending system life",
			icon: "🔍"
		},
		{
			title: "Resource Optimization",
			description: "Smart systems reduce energy and water consumption by up to 30%",
			icon: "⚡"
		},
		{
			title: "Carbon Footprint Reduction",
			description: "AI-optimized designs minimize environmental impact throughout the lifecycle",
			icon: "🌱"
		}
	];

	// Benefits by category
	const benefits = [
		{
			category: "Environmental",
			items: [
				"30% reduction in water consumption",
				"Significant decrease in material waste",
				"Lower overall carbon footprint"
			]
		},
		{
			category: "Operational",
			items: [
				"40% longer system lifespan",
				"Fewer unexpected maintenance issues",
				"Remote monitoring and adjustments"
			]
		},
		{
			category: "Financial",
			items: [
				"ROI typically within 24 months",
				"25% lower long-term ownership costs",
				"Increased property value"
			]
		}
	];
</script>

<svelte:head>
	<title>AI Solutions | TecnoPipe</title>
	<meta name="description" content="Learn how TecnoPipe uses artificial intelligence to create sustainable, efficient pipe systems." />
</svelte:head>

<!-- Hero Section -->
<section class="relative min-h-[40vh] w-full overflow-hidden bg-blue-900">
	<div class="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
	<div class="relative z-10 flex min-h-[40vh] items-center px-4 sm:px-6 md:px-10 lg:px-32">
		<div class="max-w-2xl pt-16">
			<h1 class="mb-4 text-4xl font-bold text-white md:text-5xl lg:text-6xl">AI Solutions</h1>
			<p class="text-xl font-light text-gray-100">
				Intelligent systems for a sustainable future
			</p>
		</div>
	</div>
</section>

<!-- Introduction Section -->
<section class="py-12 md:py-20">
	<div class="container mx-auto px-4 sm:px-6">
		<div class="mx-auto max-w-4xl">
			<h2 class="mb-8 text-center text-2xl font-medium md:text-3xl">TRANSFORMING PIPE SOLUTIONS WITH AI</h2>
			
			<div class="mb-10 text-gray-700">
				<p class="text-lg leading-relaxed">
					At TecnoPipe, we're harnessing artificial intelligence to revolutionize how pipe systems are designed, installed, and maintained. Our smart solutions optimize efficiency, sustainability, and performance while reducing costs and environmental impact.
				</p>
			</div>
			
			<!-- Smart system illustration -->
			<div class="mb-12 flex h-64 w-full items-center justify-center overflow-hidden rounded-lg bg-blue-50 md:h-80">
				<div class="relative h-48 w-48 md:h-64 md:w-64">
					<!-- Abstract AI visualization -->
					<div class="absolute inset-0 flex items-center justify-center">
						<div class="h-full w-full rounded-full border-4 border-blue-200 opacity-30"></div>
					</div>
					<div class="absolute inset-2 flex items-center justify-center">
						<div class="h-full w-full rounded-full border-4 border-blue-300 opacity-40"></div>
					</div>
					<div class="absolute inset-4 flex items-center justify-center">
						<div class="h-full w-full rounded-full border-4 border-blue-400 opacity-50"></div>
					</div>
					<div class="absolute inset-0 flex items-center justify-center">
						<div class="text-center text-blue-700">
							<div class="text-4xl font-bold">AI</div>
							<div class="mt-2 text-sm font-medium">POWERED SYSTEMS</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Core Solutions Grid -->
<section class="bg-gray-100 py-12 md:py-20">
	<div class="container mx-auto px-4 sm:px-6">
		<h2 class="mb-10 text-center text-2xl font-medium md:text-3xl">OUR AI SOLUTIONS</h2>
		
		<div class="grid grid-cols-1 gap-8 sm:grid-cols-3">
			{#each aiSolutions as solution}
				<div class="rounded-lg bg-white p-8 shadow-md transition-all hover:-translate-y-1 hover:shadow-lg">
					<div class="mb-6 text-4xl text-blue-700">{solution.icon}</div>
					<h3 class="mb-4 text-xl font-medium">{solution.title}</h3>
					<p class="text-gray-700">{solution.description}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- How It Works Section - Simplified -->
<section class="py-12 md:py-20">
    <div class="container mx-auto px-4 sm:px-6">
      <h2 class="mb-10 text-center text-2xl font-medium md:text-3xl">HOW OUR AI WORKS</h2>
      
      <div class="mx-auto max-w-3xl rounded-lg bg-white p-8 shadow-md">
        <div class="flex flex-col items-center gap-10 md:flex-row">
          <!-- Simple icon representation -->
          <div class="flex-shrink-0">
            <div class="flex h-24 w-24 items-center justify-center rounded-full bg-blue-100">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
              </svg>
            </div>
          </div>
          
          <!-- Simplified steps -->
          <div class="flex-grow">
            <div class="space-y-4">
              <div class="flex items-center gap-3">
                <div class="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-700 text-white">1</div>
                <p class="text-gray-700"><strong>Sensors collect data</strong> from your pipe system in real-time</p>
              </div>
              
              <div class="flex items-center gap-3">
                <div class="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-700 text-white">2</div>
                <p class="text-gray-700"><strong>AI analyzes patterns</strong> to predict behavior and detect issues</p>
              </div>
              
              <div class="flex items-center gap-3">
                <div class="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-700 text-white">3</div>
                <p class="text-gray-700"><strong>System optimizes automatically</strong> or alerts maintenance team</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

<!-- Benefits Section -->
<section class="bg-gray-100 py-12 md:py-20">
	<div class="container mx-auto px-4 sm:px-6">
		<div class="mb-12 flex flex-col items-center justify-center">
			<h2 class="mb-6 text-center text-2xl font-medium md:text-3xl">KEY BENEFITS</h2>
			<div class="mx-auto h-1 w-24 bg-blue-700"></div>
		</div>
		
		<div class="mx-auto grid max-w-4xl gap-8 md:grid-cols-3">
			{#each benefits as benefit, i}
				<div class="rounded-lg bg-white p-6 shadow-md">
					<div class="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
						<div class="text-2xl text-blue-700">
							{#if benefit.category === "Environmental"}
								🌍
							{:else if benefit.category === "Operational"}
								⚙️
							{:else}
								💰
							{/if}
						</div>
					</div>
					<h3 class="mb-4 text-xl font-medium">{benefit.category}</h3>
					<ul class="space-y-2">
						{#each benefit.items as item}
							<li class="flex items-start">
								<span class="mr-2 text-blue-700">•</span>
								<span class="text-gray-700">{item}</span>
							</li>
						{/each}
					</ul>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Case Study -->
<section class="py-12 md:py-20">
	<div class="container mx-auto px-4 sm:px-6">
		<div class="mx-auto max-w-4xl rounded-lg bg-white p-8 shadow-md">
			<h2 class="mb-6 text-center text-2xl font-medium">SUCCESS STORY</h2>
			
			<div class="mb-6 grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center">
				<div>
					<h3 class="mb-4 text-xl font-medium text-blue-700">Commercial Complex, Quito</h3>
					<p class="mb-4 text-gray-700">
						After implementing our AI pipe system, this major commercial building achieved:
					</p>
					<ul class="space-y-2 text-gray-700">
						<li class="flex items-start">
							<span class="mr-2 font-bold text-green-600">↓</span>
							<span>32% reduction in water usage</span>
						</li>
						<li class="flex items-start">
							<span class="mr-2 font-bold text-green-600">↓</span>
							<span>28% decrease in energy consumption</span>
						</li>
						<li class="flex items-start">
							<span class="mr-2 font-bold text-green-600">↓</span>
							<span>45% lower maintenance costs</span>
						</li>
						<li class="flex items-start">
							<span class="mr-2 text-blue-700">✓</span>
							<span>ROI achieved in just 19 months</span>
						</li>
					</ul>
				</div>
				<div class="flex items-center justify-center">
					<div class="h-48 w-48 overflow-hidden rounded-full bg-blue-50">
						<div class="flex h-full w-full items-center justify-center">
							<div class="text-center">
								<div class="text-4xl font-bold text-blue-700">67</div>
								<div class="text-sm text-blue-700">TONS CO₂</div>
								<div class="mt-2 text-sm font-medium text-blue-700">ANNUAL REDUCTION</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			
			<div class="mt-8 text-center">
				<a
					href="/contact"
					class="inline-block rounded-md bg-blue-700 px-6 py-3 font-medium text-white transition-all hover:bg-blue-800 hover:shadow-lg"
				>
					Discuss Your AI Project
				</a>
			</div>
		</div>
	</div>
</section>

<!-- Call to Action -->
<section class="bg-blue-900 py-12 text-white md:py-20">
	<div class="container mx-auto px-4 text-center sm:px-6">
		<h2 class="mb-6 text-2xl font-medium md:text-3xl">Ready to Transform Your Infrastructure?</h2>
		<p class="mx-auto mb-8 max-w-2xl text-lg">
			Experience the benefits of AI-powered pipe systems for your project.
		</p>
		<div class="flex flex-col items-center justify-center gap-4 sm:flex-row">
			<a
				href="/contact"
				class="rounded-md bg-white px-6 py-3 font-medium text-blue-900 transition-all hover:bg-gray-100"
			>
				Schedule a Consultation
			</a>
			<a
				href="/products"
				class="rounded-md border-2 border-white bg-transparent px-6 py-3 font-medium text-white transition-all hover:bg-white/10"
			>
				Explore Products
			</a>
		</div>
	</div>
</section>