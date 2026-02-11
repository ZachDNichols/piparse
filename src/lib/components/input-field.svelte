<script lang="ts">
	let { placeholder, value = $bindable(), label, whatFor } = $props();
</script>

<div class="m-2 flex-col flex w-1/2 items-center font-default">
	<label for="{whatFor}" class="dark:text-white">{label}</label>
	<input class="w-full dark:text-white border p-0.75 dark:border-white rounded-lg dark:outline-blue-300 text-center" placeholder={placeholder} bind:value={value}/>
</div>

