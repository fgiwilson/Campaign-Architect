<script lang="ts">
	import HeroImage from '$lib/components/heroImage.svelte';
	import placeholder from '$lib/images/placeholder-hero.webp';
	import type { PageServerData } from './$types';

	interface Props {
		data: PageServerData;
	}

	let { data }: Props = $props();

	let { world } = data;
</script>

<HeroImage image={placeholder} alt="Hero Image" />
<div class="max-w-7xl mx-auto">
	<h1 class="text-4xl font-medium text-bittersweet my-2 font-heading1">
		Create a Campaign in {world.name}
	</h1>
	<p>
		Fill in the basic details of the your campaign. Start with a name (all of these details can be
		changed later)
	</p>
	<form action="?/create" method="POST" class="flex flex-col w-96 mt-4">
		<div class="m-1">
			<div><label for="campaignName" class="font-bold mb-1">Campaign Name:</label></div>
			<input
				id="campaignName"
				name="campaignName"
				type="text"
				placeholder="Enter a name for your Campaign"
				class="form-input mb-1 p-1 rounded-md selection:border-frost-400 border-boulder-500 border-2 text-boulder-700 font-semibold min-w-fit"
				size="50"
			/>
		</div>
		<div class="m-1">
			<div><label class="mb-1 font-bold" for="campaignDesc">Campaign Description:</label></div>
			<textarea
				rows="5"
				cols="50"
				name="campaignDesc"
				id="campaignDesc"
				class="form-textarea mb-1 p-1 rounded-md selection:border-frost-400 border-boulder-500 border-2 text-boulder-700 font-semibold min-w-fit"
			></textarea>
		</div>
		<button
			class="p-2 mt-5 bg-frost hover:bg-jetStream hover:text-frost-100 rounded"
			type="submit">Create Campaign</button
		>
	</form>
</div>
