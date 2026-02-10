<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
  import { resolve } from '$app/paths'
	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
<div class="items-center text-center font-default text-5xl lg:mt-12 flex flex-col">
    <div class="w-fit">
        <a class="text-black dark:text-white relative cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-red-400 before:origin-center before:h-1 before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-red-400 after:origin-center after:h-1 after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%] after:rounded-l-2xl before:rounded-r-2xl" href={resolve('/')} >PiParse
        </a>
    </div>

</div>
{@render children()}
