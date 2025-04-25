<!-- src/routes/maintenance/+page.svelte -->
<script>
	// Import any components or functionality if needed
	
	// Maintenance tasks data
	const maintenanceTasks = [
		{
			title: 'Air Filter Replacement',
			frequency: 'Monthly to quarterly',
			description: 'Ensures proper airflow and prevents dust buildup in the system'
		},
		{
			title: 'Coil Cleaning',
			frequency: 'Bi-annually',
			description: 'Improves heat transfer efficiency and system performance'
		},
		{
			title: 'Refrigerant Level Check',
			frequency: 'Annually',
			description: 'Proper levels ensure optimal cooling and system operation'
		},
		{
			title: 'Ductwork Inspection',
			frequency: 'Every 2-5 years',
			description: 'Identifies leaks or damage that could affect efficiency'
		}
	];
	
	// Seasonal maintenance benefits
	const seasonalBenefits = [
		{
			season: 'Spring',
			focus: 'Cooling System Prep',
			tasks: 'Clean condenser coils, check refrigerant, calibrate thermostat for summer'
		},
		{
			season: 'Fall',
			focus: 'Heating System Prep',
			tasks: 'Clean furnace components, check heat exchanger, test ignition system'
		},
		{
			season: 'Summer',
			focus: 'Performance Monitoring',
			tasks: 'Monitor efficiency, clean condensate drain, check for unusual noises'
		},
		{
			season: 'Winter',
			focus: 'System Protection',
			tasks: 'Insulate exposed pipes, check air handling unit, verify proper airflow'
		}
	];
</script>

<svelte:head>
	<title>HVAC Maintenance | TecnoPipe Solutions</title>
	<meta name="description" content="Learn about essential HVAC maintenance practices to improve efficiency, extend equipment life, and reduce costs." />
</svelte:head>

<!-- Hero Section -->
<section class="relative min-h-[40vh] w-full overflow-hidden bg-blue-900">
	<div class="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
	<div class="relative z-10 flex min-h-[40vh] items-center px-4 sm:px-6 md:px-10 lg:px-32">
		<div class="max-w-2xl pt-16">
			<h1 class="mb-4 text-4xl font-bold text-white md:text-5xl lg:text-6xl">HVAC Maintenance</h1>
			<p class="text-xl font-light text-gray-100">
				Ensuring optimal performance and longevity for your systems
			</p>
		</div>
	</div>
</section>

<!-- Introduction Section -->
<section class="py-12 md:py-20">
	<div class="container mx-auto px-4 sm:px-6">
		<div class="mx-auto max-w-4xl">
			<h2 class="mb-8 text-center text-2xl font-medium md:text-3xl">THE IMPORTANCE OF MAINTENANCE</h2>
			
			<div class="mb-10 space-y-6 text-gray-700">
				<p class="text-lg">
					<strong>Regular HVAC maintenance</strong> is essential for ensuring optimal performance, energy efficiency, and longevity of your equipment.
				</p>
				
				<p>
					By following a consistent maintenance schedule, you can prevent unexpected breakdowns, reduce energy costs, improve indoor air quality, and avoid costly emergency repairs. Our comprehensive maintenance approach focuses on both seasonal adjustments and thorough annual inspections.
				</p>
				
				<p>
					Neglecting maintenance can lead to poor airflow, inconsistent temperatures, system failures, and significantly higher utility bills over time. Investing in preventative care today saves you money and extends your system's lifespan.
				</p>
			</div>
			
			<!-- Image placeholder -->
			<div class="mb-12 h-64 w-full overflow-hidden rounded-lg bg-gray-200 md:h-80">
				<div class="flex h-full w-full items-center justify-center text-gray-500">
					HVAC Maintenance Image
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Regular Maintenance Tasks -->
<section class="bg-gray-100 py-12 md:py-20">
	<div class="container mx-auto px-4 sm:px-6">
		<h2 class="mb-8 text-center text-2xl font-medium md:text-3xl">ESSENTIAL MAINTENANCE TASKS</h2>
		
		<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
			{#each maintenanceTasks as task}
				<div class="rounded-lg bg-white p-6 shadow-sm">
					<h4 class="mb-2 font-medium">{task.title}</h4>
					<p class="mb-2 text-sm font-semibold text-blue-700">{task.frequency}</p>
					<p class="text-sm text-gray-700">{task.description}</p>
				</div>
			{/each}
		</div>
		
		<div class="mt-12 mx-auto max-w-3xl">
			<h3 class="mb-6 text-center text-xl font-medium">Additional Key Tasks</h3>
			<div class="space-y-4 text-gray-700">
				<p>
					<strong>Thermostat Testing:</strong> Regular calibration ensures accurate temperature control and efficient operation.
				</p>
				<p>
					<strong>Electrical Connections:</strong> Inspecting and tightening connections prevents system failures and safety hazards.
				</p>
				<p>
					<strong>Moving Parts Lubrication:</strong> Proper lubrication reduces friction, energy consumption, and wear on components.
				</p>
				<p>
					<strong>Heat Exchanger Inspection:</strong> Critical for identifying cracks that could lead to carbon monoxide leaks.
				</p>
			</div>
		</div>
	</div>
</section>

<!-- Seasonal Maintenance -->
<section class="py-12 md:py-20">
	<div class="container mx-auto px-4 sm:px-6">
		<h2 class="mb-10 text-center text-2xl font-medium md:text-3xl">SEASONAL MAINTENANCE</h2>
		
		<div class="relative mx-auto max-w-3xl">
			<!-- Timeline line -->
			<div class="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-300 md:left-1/2"></div>
			
			<!-- Seasonal maintenance items -->
			{#each seasonalBenefits as benefit, i}
				<div class="relative mb-8 md:mb-12">
					<!-- Timeline dot -->
					<div class="absolute left-4 h-4 w-4 -translate-x-1/2 rounded-full bg-blue-700 md:left-1/2"></div>
					
					<!-- Content container -->
					<div class={`ml-12 md:ml-0 md:w-1/2 ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:left-1/2'}`}>
						<div class="rounded-lg bg-white p-6 shadow-sm">
							<h3 class="mb-1 text-2xl font-bold text-blue-700">{benefit.season}</h3>
							<h4 class="mb-2 font-medium">{benefit.focus}</h4>
							<p class="text-sm text-gray-700">{benefit.tasks}</p>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Benefits Section -->
<section class="bg-gray-100 py-12 md:py-20">
	<div class="container mx-auto px-4 sm:px-6">
		<h2 class="mb-10 text-center text-2xl font-medium md:text-3xl">BENEFITS OF REGULAR MAINTENANCE</h2>
		
		<div class="mb-16 flex flex-col items-stretch gap-6 md:flex-row">
			<!-- Cost Savings -->
			<div class="w-full rounded-lg bg-white p-8 shadow-sm md:w-1/2">
				<h3 class="mb-4 text-xl font-medium">Reduced Energy Costs</h3>
				<p class="text-gray-700">
					Well-maintained HVAC systems operate more efficiently, using less energy to provide the same level of comfort. This translates to lower utility bills and reduced environmental impact.
				</p>
			</div>
			
			<!-- Extended Lifespan -->
			<div class="w-full rounded-lg bg-white p-8 shadow-sm md:w-1/2">
				<h3 class="mb-4 text-xl font-medium">Extended Equipment Life</h3>
				<p class="text-gray-700">
					Regular maintenance helps identify and address minor issues before they become major problems, significantly extending the useful life of your HVAC equipment and delaying costly replacements.
				</p>
			</div>
		</div>
		
		<!-- Additional Benefits -->
		<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
			<div class="rounded-lg bg-white p-6 text-center shadow-sm">
				<h4 class="mb-3 font-medium">IMPROVED AIR QUALITY</h4>
				<p class="text-sm text-gray-700">Clean filters and components reduce allergens, dust, and pollutants in your indoor air</p>
			</div>
			
			<div class="rounded-lg bg-white p-6 text-center shadow-sm">
				<h4 class="mb-3 font-medium">CONSISTENT COMFORT</h4>
				<p class="text-sm text-gray-700">Properly maintained systems provide more reliable temperature and humidity control</p>
			</div>
			
			<div class="rounded-lg bg-white p-6 text-center shadow-sm">
				<h4 class="mb-3 font-medium">FEWER EMERGENCY REPAIRS</h4>
				<p class="text-sm text-gray-700">Preventative maintenance reduces unexpected breakdowns and after-hours service calls</p>
			</div>
		</div>
	</div>
</section>

<!-- Maintenance Plans Section -->
<section class="py-12 md:py-20">
	<div class="container mx-auto px-4 sm:px-6">
		<h2 class="mb-8 text-center text-2xl font-medium md:text-3xl">OUR MAINTENANCE PLANS</h2>
		
		<div class="mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-3">
			<!-- Basic Plan -->
			<div class="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md">
				<h3 class="mb-2 text-xl font-medium">Basic</h3>
				<p class="mb-4 text-sm text-gray-600">Essential maintenance for residential systems</p>
				<ul class="mb-6 space-y-2 text-sm text-gray-700">
					<li>• Bi-annual system check</li>
					<li>• Filter replacements</li>
					<li>• Basic cleaning</li>
					<li>• Visual inspection</li>
				</ul>
				<p class="font-medium">Starting at $X/month</p>
			</div>
			
			<!-- Standard Plan -->
			<div class="rounded-lg border-2 border-blue-700 bg-white p-6 shadow-md">
				<div class="mb-4 -mt-6 -mx-6 bg-blue-700 py-2 text-center">
					<span class="text-sm font-medium text-white">MOST POPULAR</span>
				</div>
				<h3 class="mb-2 text-xl font-medium">Standard</h3>
				<p class="mb-4 text-sm text-gray-600">Comprehensive care for optimal performance</p>
				<ul class="mb-6 space-y-2 text-sm text-gray-700">
					<li>• Quarterly maintenance</li>
					<li>• Full system cleaning</li>
					<li>• Performance testing</li>
					<li>• Priority service</li>
					<li>• 10% discount on repairs</li>
				</ul>
				<p class="font-medium">Starting at $XX/month</p>
			</div>
			
			<!-- Premium Plan -->
			<div class="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md">
				<h3 class="mb-2 text-xl font-medium">Premium</h3>
				<p class="mb-4 text-sm text-gray-600">Complete protection for commercial systems</p>
				<ul class="mb-6 space-y-2 text-sm text-gray-700">
					<li>• Monthly maintenance</li>
					<li>• Comprehensive diagnostics</li>
					<li>• All parts and labor</li>
					<li>• 24/7 emergency service</li>
					<li>• Extended warranty</li>
				</ul>
				<p class="font-medium">Starting at $XXX/month</p>
			</div>
		</div>
	</div>
</section>

<!-- Signs You Need Maintenance -->
<section class="bg-gray-100 py-12 md:py-20">
	<div class="container mx-auto px-4 sm:px-6">
		<h2 class="mb-8 text-center text-2xl font-medium md:text-3xl">WARNING SIGNS</h2>
		
		<div class="mx-auto max-w-3xl">
			<p class="mb-8 text-center text-lg text-gray-700">
				Don't wait until your system breaks down completely. Watch for these warning signs that indicate your HVAC system needs immediate attention:
			</p>
			
			<div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
				<div class="rounded-lg bg-white p-4 shadow-sm">
					<h4 class="mb-2 font-medium text-red-600">Unusual Noises</h4>
					<p class="text-sm text-gray-700">Grinding, scraping, or squealing sounds may indicate mechanical problems</p>
				</div>
				
				<div class="rounded-lg bg-white p-4 shadow-sm">
					<h4 class="mb-2 font-medium text-red-600">Poor Airflow</h4>
					<p class="text-sm text-gray-700">Weak air from vents suggests blocked ducts or fan problems</p>
				</div>
				
				<div class="rounded-lg bg-white p-4 shadow-sm">
					<h4 class="mb-2 font-medium text-red-600">Rising Energy Bills</h4>
					<p class="text-sm text-gray-700">Unexplained increases in utility costs often reflect efficiency issues</p>
				</div>
				
				<div class="rounded-lg bg-white p-4 shadow-sm">
					<h4 class="mb-2 font-medium text-red-600">Inconsistent Temperatures</h4>
					<p class="text-sm text-gray-700">Hot or cold spots throughout your space indicate system problems</p>
				</div>
				
				<div class="rounded-lg bg-white p-4 shadow-sm">
					<h4 class="mb-2 font-medium text-red-600">Frequent Cycling</h4>
					<p class="text-sm text-gray-700">System turning on and off repeatedly signals control or sizing issues</p>
				</div>
				
				<div class="rounded-lg bg-white p-4 shadow-sm">
					<h4 class="mb-2 font-medium text-red-600">Unusual Odors</h4>
					<p class="text-sm text-gray-700">Musty or burning smells could indicate mold or electrical problems</p>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Call to Action -->
<section class="bg-blue-900 py-12 text-white md:py-20">
	<div class="container mx-auto px-4 text-center sm:px-6">
		<h2 class="mb-6 text-2xl font-medium md:text-3xl">Ready to Protect Your Investment?</h2>
		<p class="mx-auto mb-8 max-w-2xl text-lg">
			Schedule your comprehensive HVAC maintenance today and enjoy improved efficiency, extended equipment life, and peace of mind.
		</p>
		<div class="flex justify-center gap-4">
			<a
				href="/services"
				class="rounded-md border-2 border-white bg-transparent px-6 py-3 font-medium text-white transition-all hover:bg-white/10"
			>
				Explore Services
			</a>
			<a
				href="/contact"
				class="rounded-md bg-white px-6 py-3 font-medium text-blue-900 transition-all hover:bg-gray-100"
			>
				Schedule Maintenance
			</a>
		</div>
	</div>
</section>