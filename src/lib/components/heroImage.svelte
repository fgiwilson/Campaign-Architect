<script lang="ts">
	let { image, alt } = $props();
</script>

<div class="flex flex-col">
	<div class="p-0 m-0">
		<img class="h-[15rem] w-full object-cover p-0 m-0" src={image} {alt} />
	</div>
</div>

<style>
</style>
