<script>
	import '../app.css';

	const user = true;
</script>

<nav class="w-11/12 py-2 mx-auto flex items-center justify-between border-b-2">
	<div>
		<a href="/"><h1 class="hover:underline">Betting Nepal</h1></a>
	</div>
	<ul class="hidden sm:flex items-center gap-4">
		{#if user}
			<li class="hover:underline"><a href="/">Home</a></li>
			<li class="hover:underline"><a href="/dashboard">Dashboard</a></li>
			<li class="hover:underline"><a href="/contact">Contact</a></li>
			<li class="hover:underline"><a href="/logout">Logout</a></li>
		{:else}
			<li class="hover:underline"><a href="/login">login</a></li>
			<li class="hover:underline"><a href="/register">Register</a></li>
		{/if}
	</ul>
</nav>

<slot />
