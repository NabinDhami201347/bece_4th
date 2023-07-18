<script lang="ts">
	import { page } from '$app/stores';
	import type { Bet } from '@prisma/client';

	type Match = {
		id: number;
		seriesName: string;
		matchType: string;
		matchDay: string;
		team1: string;
		team2: string;
		battingTeam: string;
		bowlingTeam: string;
		status: 'live' | 'completed' | 'upcoming';
		score1?: number;
		wickets1?: number;
		score2?: number;
		wickets2?: number;
		overs?: number;
		bets: Bet[];
		winningProbability: Record<string, number>;
	};

	export let game: Match;

	let showBetDialog = false;
	let selectedTeam: string | null = null;

	function openBetDialog() {
		showBetDialog = true;
	}

	function closeBetDialog() {
		showBetDialog = false;
		selectedTeam = null;
	}

	function convertProbabilityToPercentage(probability: number): number {
		return Math.round(probability * 100);
	}

	async function placeBet(event: Event) {
		event.preventDefault();
		const teamSelect = document.getElementById('team-select') as HTMLSelectElement;
		const amountInput = document.getElementById('amount-input') as HTMLInputElement;

		const team = teamSelect.value;
		const amount = parseFloat(amountInput.value);

		if (team && amount > 0) {
			// Add the bet to the match's bets array
			const response = await fetch('/api/placebet', {
				method: 'POST',
				body: JSON.stringify({
					gameId: game.id,
					teams: game.team1 + ' vs ' + game.team2,
					gameType: game.matchType,
					betAmount: amount,
					creatorId: $page.data.user.id,
					selectedTeam: team
				}),
				headers: {
					'Content-Type': 'application/json'
				}
			});

			closeBetDialog();
		}
	}

	async function acceptBet(event: Event) {
		event.preventDefault();
		await fetch('/api/acceptbet', {
			method: 'POST',
			body: JSON.stringify({
				betId: game.bets[0].id,
				acceptorId: $page.data.user.id,
				acceptorTeam: selectedTeam === game.team1 ? game.team2 : game.team1
			}),
			headers: {
				'Content-Type': 'application/json'
			}
		});
	}
</script>

<div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow">
	<div class="flex items-center justify-between">
		<h2 class="text-xs text-gray-900 opacity-50">{game.seriesName}</h2>
		<span class="text-xs font-semibold animate-pulse text-green-500 rounded-full px-2"> Live </span>
	</div>
	<p class="text-xs text-gray-900 opacity-50">{game.matchDay}</p>

	<div class="flex flex-col">
		<div class="flex items-center justify-between text-gray-700 mb-2">
			<p class="text-lg font-medium">{game.team1}</p>
			{#if game.score1 !== undefined && game.score2 !== undefined}
				<p class="text-sm">{game.score1}/{game.wickets1} ({game.overs} overs)</p>
			{/if}
		</div>
		<div class="flex items-center justify-between text-gray-700">
			<p class="text-lg font-medium">{game.team2}</p>
			{#if game.score1 !== undefined && game.score2 !== undefined}
				<p class="text-sm">{game.score2}/{game.wickets2} ({game.overs} overs)</p>
			{/if}
		</div>
	</div>

	<div class="flex items-center mt-4">
		<div
			class="bg-green-400 h-2 rounded-l-lg"
			style="width: {convertProbabilityToPercentage(game?.winningProbability[game.battingTeam])}%"
		/>
		<div
			class="bg-red-400 h-2 rounded-r-lg"
			style="width: {convertProbabilityToPercentage(
				1 - game?.winningProbability[game.battingTeam]
			)}%"
		/>
	</div>

	{#if $page.data.user}
		{#if game && game.bets && game.bets.length > 0}
			{#if game.bets[0].creatorId}
				{#if game.bets[0].acceptorId}
					<p class="text-green-400 animate-pulse text-sm mt-2">
						Successfully Bet 🔥🔥🔥<br /> Waiting for results...
					</p>
				{:else}
					<button
						class="mt-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
						on:click={acceptBet}
					>
						Accept Bet
					</button>
				{/if}
			{/if}
		{:else}
			<button
				class="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
				on:click={openBetDialog}
			>
				Place Bet
			</button>
		{/if}
	{/if}

	{#if showBetDialog}
		<div
			class="fixed z-50 inset-0 bg-gray-900 bg-opacity-50 backdrop-blur-sm flex items-center justify-center"
		>
			<div class="bg-white w-10/12 sm:w-1/2 p-6 rounded-lg shadow">
				<div class="flex items-center justify-between">
					<div />
					<button class="text-2xl" on:click={closeBetDialog}>x</button>
				</div>
				<form on:submit={placeBet}>
					<div class="mb-4">
						<label class="block text-gray-700 text-sm font-bold mb-2" for="team-select">
							Select Team:
						</label>
						<select id="team-select" class="w-full border border-gray-300 rounded px-3 py-2">
							<option value={game.team1}>{game.team1}</option>
							<option value={game.team2}>{game.team2}</option>
						</select>
					</div>
					<div class="mb-4">
						<label class="block text-gray-700 text-sm font-bold mb-2" for="amount-input">
							Amount:
						</label>
						<input
							id="amount-input"
							type="text"
							class="w-full border border-gray-300 rounded px-3 py-2"
						/>
					</div>
					<div class="flex justify-end">
						<button
							type="submit"
							class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
						>
							Continue
						</button>
					</div>
				</form>
			</div>
		</div>
	{/if}
</div>
