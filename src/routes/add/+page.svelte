<script>
	import Input from "$lib/components/input-field.svelte"

	let test = $state('test')
</script>
<div class="flex flex-col mt-4 items-center">
	<h2 class="text-1xl text-white text-center">At this time, PiParse only supports parsing emails through the IMAP. If you would like, you can
		<a class="underline" href="https://github.com/ZachDNichols/piparse">contribute to this project</a>
		to add other options.
	</h2>

	<div class="w-1/2 flex flex-col items-center">
		<Input placeholder="test" bind:value={test}></Input>
	</div>
</div>
