
<script lang="ts">
	import { resolve } from '$app/paths'
	import type { RouteId } from '$app/types';
	
	let { route, text } : { route : RouteId, text: string } = $props();
</script>

<a class="p-3 bg-blue-500 text-white rounded-lg w-1/7 text-center hover:bg-blue-900 duration-300 ease-in-out m-1.5" href={resolve(route)}>{text}</a>

