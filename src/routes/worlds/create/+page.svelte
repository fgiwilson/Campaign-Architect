<script lang="ts">
	import HeroImage from '$lib/components/heroImage.svelte';
	import placeholder from '$lib/images/placeholder-hero.webp';
</script>

<HeroImage image={placeholder} alt="Hero Image" />
<div class="container mx-auto">
	<h1 class="text-4xl font-medium text-bittersweet my-2 font-heading1">Create a new World</h1>
	<p>
		Fill in the basic details of the your world. Start with a name (all of these details can be
		changed later)
	</p>
	<form action="?/create" method="POST" class="flex flex-col w-96 mt-4">
		<div class="m-1">
			<div><label for="worldName" class="font-bold mb-1">World Name:</label></div>
			<input
				id="worldName"
				name="worldName"
				type="text"
				placeholder="Enter a name for your world"
				class="form-input mb-1 p-1 rounded-md selection:border-frost-400 border-boulder-500 border-2 text-boulder-700 font-semibold"
			/>
		</div>
		<div class="m-1">
			<div><label class="mb-1 font-bold" for="worldDesc">World Description:</label></div>
			<textarea
				rows="5"
				cols="50"
				name="worldDesc"
				id="worldDesc"
				class="form-textarea p-1 rounded text-boulder-700 font-semibold focus:border-boulder-400"
			></textarea>
		</div>
		<button
			class="p-2 mt-5 bg-frost hover:bg-jetStream hover:text-frost rounded"
			type="submit">Create</button
		>
	</form>
</div>
