<script lang="ts">
	import ActionButton from "$lib/components/action-button.svelte"
</script>

<h2 class="dark:text-white text-center text-xl">PiParse is an email parser to make your emails <i>really loud.</i></h2>

<div class="flex flex-col items-center font-default lg:mt-12">
	<ActionButton text="Add Email" route="/add"></ActionButton>
	<ActionButton text="View Emails" route="/view"></ActionButton>
</div>