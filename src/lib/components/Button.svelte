<script lang="ts">
	let {
		btnLabel,
		btnType,
		btnStyle,
        link,
	}: { btnLabel: string; btnType: string; btnStyle: string; link:string } = $props();
	
    function getBtnStyleClasses(btnStyle:string): string {
		switch (btnStyle) {
			case 'primary':
				return `rounded py-3 px-4 bg-brandSecondary hover:bg-jetStream-600 text-jetStream-50 border-r border-b border-jetStream-600 my-2 transition-colors duration-200`;
			case 'secondary':
				return `rounded py-3 px-4 hover:bg-jetStream-600 text-jetStream-600 hover:text-jetStream-50 border border-jetStream-400 my-2 transition-colors duration-200`;
			case 'success':
				return `rounded py-3 px-4 bg-frost-400 hover:bg-frost-600 text-frost-50 border-r border-b border-frost-600 my-2 transition-colors duration-200`;
			case 'danger':
				return `rounded py-3 px-4 bg-bittersweet-500 hover:bg-bittersweet-700 text-bittersweet-50 border-r border-b border-bittersweet-700 my-2 transition-colors duration-200`;
			default:
				return `rounded py-3 px-4 bg-jetStream-300 hover:bg-jetStream-600 text-jetStream-50 border-r border-b border-jetStream-600 my-2 transition-colors duration-200`;
		}
	}
	let btnStyleClasses = getBtnStyleClasses(btnStyle);
</script>

{#if btnType === 'submit'}
    <button type='submit' class={btnStyleClasses}>{btnLabel}</button>
{:else if btnType === 'reset'}
    <button type='reset' class={btnStyleClasses}>{btnLabel}</button>
{:else if btnType === "anchor"}
    <a  href = {link} class={btnStyleClasses}>{btnLabel}</a>
{/if}

<style>
</style>
