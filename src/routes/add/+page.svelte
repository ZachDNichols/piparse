<script lang="ts">
	import Input from "$lib/components/input-field.svelte"
	import { onMount } from 'svelte';

	let emailAddress = $state('');
	let host = $state('');
	let password = $state('');

	onMount(() => {
		const passwordInput = document.getElementById("passwordInput");
		const showPasswordButton = document.getElementById("togglePassword");
		const submitButton = document.getElementById("submit");

		if (passwordInput == null || showPasswordButton == null) {
			return;
		}

		showPasswordButton.addEventListener("click", () => {
			const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
			passwordInput.setAttribute("type", type);
		})

		passwordInput.addEventListener("input", () => {
			if (password === '')
			{
				showPasswordButton.classList.add("hidden");
			}
			else{
				showPasswordButton.classList.remove("hidden");
			}

			if (submitButton === null) {
				return;
			}

			submitButton.addEventListener("click", () => {
				console.log("Submitted email!");
			})

		});

	});
</script>
<div class="flex flex-col mt-4 items-center">
	<h2 class="text-1xl text-white text-center">At this time, PiParse only supports parsing emails through the IMAP. If you would like, you can
		<a class="underline" href="https://github.com/ZachDNichols/piparse">contribute to this project</a>
		to add other options.
	</h2>

	<div class="w-1/2 flex flex-col items-center mt-2">
		<Input placeholder="example@example.com" bind:value={emailAddress} label="Email Address" whatFor="username"></Input>
		<div class="m-2 flex-col flex w-1/2 items-center font-default">
			<label for="password" class="dark:text-white">Password</label>
			<div class="w-full flex items-center">
				<input bind:value={password} id="passwordInput" type="password" placeholder="password" class="w-full dark:text-white border p-0.75dark:border-white rounded-lg dark:outline-blue-300 text-center">
				<button type="button" id="togglePassword" class="focus:outline-none ml-3 hidden dark:text-white underline cursor-pointer">Show</button>
			</div>
		</div>
		<Input whatFor="host" placeholder="imap.example.com" bind:value={host} label="Host"></Input>
		<button class="p-4 text-white bg-blue-500 cursor-pointer rounded-lg w-1/3 mt-3 hover:bg-blue-900" id="submit">Submit</button>
	</div>
</div>