<script>
	import { page } from '$app/stores';

	import '../app.css';
</script>

<svelte:head>
	<title>Cric BET</title>
</svelte:head>

<nav class="w-11/12 py-2 mx-auto flex items-center justify-between border-b-2">
	<div>
		<a href="/"><h1 class="hover:underline">Cric BET</h1></a>
	</div>
	<ul class="hidden sm:flex items-center gap-4">
		{#if $page.data.user}
			<li class="hover:underline"><a href="/">Home</a></li>
			<li class="hover:underline"><a href="/dashboard">Dashboard</a></li>
			<li class="hover:underline"><a href="/contact">Contact</a></li>
			<form action="/logout" method="POST">
				<button type="submit">Log out</button>
			</form>
		{:else}
			<li class="hover:underline"><a href="/login">Login</a></li>
			<li class="hover:underline"><a href="/register">Register</a></li>
		{/if}
	</ul>
</nav>

<slot />
