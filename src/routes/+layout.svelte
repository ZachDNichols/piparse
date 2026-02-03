<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
<div class="flex items-center font-default text-5xl lg:mt-12">
    <h1>PiParse</h1>
</div>
{@render children()}
