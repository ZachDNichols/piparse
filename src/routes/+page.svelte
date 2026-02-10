<script lang="ts">
	import ActionButton from "$lib/components/action-button.svelte"
</script>

<div class="flex flex-col items-center font-default lg:mt-12">
	<ActionButton text="Add Email" route="/add"></ActionButton>
	<ActionButton text="View Emails" route="/view"></ActionButton>
</div>