<script lang="ts">
	import MatchCard from '$lib/components/MatchCard.svelte';

	export let data;
	const { cricket, football } = data;
</script>

<main class="px-10">
	<h2 class="text-2xl my-2">Cricket Matches</h2>
	<div class="grid sm:grid-cols-4 gap-10">
		{#each cricket as game}
			<MatchCard {game} />
		{/each}
	</div>

	<h2 class="text-2xl my-2">Football Matches</h2>
	<div class="grid grid-cols-4 gap-10">
		{#each football as game}
			<MatchCard {game} />
		{/each}
	</div>
</main>
