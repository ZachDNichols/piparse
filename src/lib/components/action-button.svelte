
<script lang="ts">
	import { resolve } from '$app/paths'
	import type { RouteId } from '$app/types';
	
	let { route, text } : { route : RouteId, text: string } = $props();
</script>

<a href={resolve(route)}>{text}</a>