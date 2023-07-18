<script lang="ts">
	import MatchCard from '$lib/components/MatchCard.svelte';

	export let data;
	const { cricket } = data;
</script>

<svelte:head>
	<title>Circ BET</title>
</svelte:head>

<main class="w-11/12 mx-auto">
	<div class=" grid sm:grid-cols-4 gap-10 my-10">
		{#each cricket as game}
			<MatchCard {game} />
		{/each}
	</div>
</main>
