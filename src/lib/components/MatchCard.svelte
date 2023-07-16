<script lang="ts">
	type Game = {
		date: string;
		venue: string;
		teams: string[];
		status: string;
		winning_probability?: Record<string, number>;
	};

	export let game: Game;

	function handleBet() {
		// Handle the bet button click
		console.log('Placing a bet on the match:', game.teams.join(' vs '));
	}
</script>

<div class="border-2 px-4 py-2">
	<h2>Date: {game.date}</h2>
	<p>Venue: {game.venue}</p>
	<p>Teams: {game.teams.join(' vs ')}</p>
	<p>Status: {game.status}</p>
	{#if game.status === 'live'}
		{#if game.winning_probability}
			<p>Winning Probability:</p>
			<ul>
				{#each Object.entries(game.winning_probability) as [team, probability]}
					<li>{team}: {probability}</li>
				{/each}
			</ul>
		{:else}
			<p>No winning probability data available.</p>
		{/if}
	{/if}
	<button class="px-6 py-2 bg-rose-400 rounded-lg" on:click={handleBet}>Bet Now</button>
</div>
