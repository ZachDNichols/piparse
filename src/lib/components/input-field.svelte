<script lang="ts">
	let { placeholder, value = $bindable() } = $props();
</script>

<input class="dark:text-white w-1/3 border p-0.75 dark:border-white rounded-lg outline-blue-300 m-4 text-center" placeholder={placeholder} bind:value={value}/>
