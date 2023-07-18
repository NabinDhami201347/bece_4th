<script lang="ts">
	// Assuming you have user-specific information and betting information from your API
	let user = {
		id: 1,
		name: 'John Doe',
		successRate: 75,
		amountLeft: 500,
		amountUsed: 500,
		loadMoney: 1000,
		image:
			'https://img.favpng.com/14/3/22/stock-photography-computer-icons-user-png-favpng-TWgLj8kmcdnekcpWySfpV97h3.jpg' // Replace with the actual path to the user's image
	};

	let userBets = [
		{
			id: 1,
			game: {
				team1: 'India',
				team2: 'Pakistan',
				genre: 'Cricket'
			},
			opponent: {
				avatar: 'https://th.bing.com/th/id/OIP.i-6PPmEKt2LNnliJyYG6QQHaE7?&rs=1&pid=ImgDet',
				username: 'Mohan Adhikari'
			},
			betAmount: 50,
			result: 'Won',
			date: new Date('2023-07-16T18:30:00Z')
		},
		{
			id: 2,
			game: {
				team1: 'Barcelona',
				team2: 'Real Madrid',
				genre: 'Football'
			},
			opponent: {
				avatar:
					'https://png.pngtree.com/png-vector/20190629/ourlarge/pngtree-business-people-avatar-icon-user-profile-free-vector-png-image_1527664.jpg',
				username: 'Biraj Sapkota'
			},
			betAmount: 100,
			result: 'Lost',
			date: new Date('2023-07-15T20:45:00Z')
		},
		{
			id: 3,
			game: {
				team1: 'Australia',
				team2: 'England',
				genre: 'Cricket'
			},
			opponent: {
				avatar: 'https://th.bing.com/th/id/OIP.i-6PPmEKt2LNnliJyYG6QQHaE7?&rs=1&pid=ImgDet',
				username: 'Harry Styles'
			},
			betAmount: 75,
			result: 'Won',
			date: new Date('2023-07-14T14:00:00Z')
		},
		{
			id: 4,
			game: {
				team1: 'Brazil',
				team2: 'Argentina',
				genre: 'Football'
			},
			opponent: {
				avatar: 'https://th.bing.com/th/id/OIP.i-6PPmEKt2LNnliJyYG6QQHaE7?&rs=1&pid=ImgDet',
				username: 'Chrish Benoit'
			},
			betAmount: 90,
			result: 'Lost',
			date: new Date('2023-07-13T17:30:00Z')
		},
		{
			id: 5,
			game: {
				team1: 'New Zealand',
				team2: 'Sri Lanka',
				genre: 'Cricket'
			},
			opponent: {
				avatar: 'https://th.bing.com/th/id/OIP.i-6PPmEKt2LNnliJyYG6QQHaE7?&rs=1&pid=ImgDet',
				username: 'Randy Orton'
			},
			betAmount: 60,
			result: 'Won',
			date: new Date('2023-07-12T10:15:00Z')
		},
		{
			id: 6,
			game: {
				team1: 'Spain',
				team2: 'Italy',
				genre: 'Football'
			},
			opponent: {
				avatar: 'https://th.bing.com/th/id/OIP.i-6PPmEKt2LNnliJyYG6QQHaE7?&rs=1&pid=ImgDet',
				username: 'Ashok Thapaliya'
			},
			betAmount: 80,
			result: 'Lost',
			date: new Date('2023-07-11T16:45:00Z')
		},
		{
			id: 7,
			game: {
				team1: 'South Africa',
				team2: 'West Indies',
				genre: 'Cricket'
			},
			opponent: {
				avatar: 'https://th.bing.com/th/id/OIP.i-6PPmEKt2LNnliJyYG6QQHaE7?&rs=1&pid=ImgDet',
				username: 'Deepak Bista'
			},
			betAmount: 70,
			result: 'Won',
			date: new Date('2023-07-10T13:20:00Z')
		},
		{
			id: 8,
			game: {
				team1: 'France',
				team2: 'Germany',
				genre: 'Football'
			},
			opponent: {
				avatar: 'https://th.bing.com/th/id/OIP.i-6PPmEKt2LNnliJyYG6QQHaE7?&rs=1&pid=ImgDet',
				username: 'Santosh Acharya'
			},
			betAmount: 95,
			result: 'Lost',
			date: new Date('2023-07-09T19:00:00Z')
		}
	];

	function handleLoadMoney() {
		console.log('Load money button clicked');
	}

	function getStatusColor(status: string) {
		return status === 'Won' ? 'text-green-500' : 'text-red-500';
	}

	function formatDate(date: Date) {
		return date.toLocaleString('en-US', {
			year: 'numeric',
			month: 'short',
			day: 'numeric',
			hour: 'numeric',
			minute: 'numeric'
		});
	}

	export let data;
	const { bets } = data;
</script>

<svelte:head>
	<title>Dashboard</title>
</svelte:head>

<main class="w-11/12 mx-auto my-10">
	<div class="flex items-center p-4 rounded shadow">
		<div class="w-20 h-20 rounded-full overflow-hidden mr-4">
			<!-- svelte-ignore a11y-img-redundant-alt -->
			<img src={user.image} alt="User Image" />
		</div>
		<div class="flex-grow">
			<div class="space-y-1">
				<h2 class="text-xl font-bold mb-1">{bets.username}</h2>
				<p>
					<strong>Success Rate:</strong>
					{user.successRate}%
				</p>
				<p>
					<strong>Amount Left:</strong>
					{user.amountLeft}$
				</p>
				<p>
					<strong>Amount Used:</strong>
					{user.amountUsed}$
				</p>
			</div>
			<button
				on:click={handleLoadMoney}
				class="load-money-btn bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded mt-4"
			>
				Load Money
			</button>
		</div>
	</div>

	<h2 class="text-2xl mt-4 mb-2">Created Bets</h2>
	<table class="min-w-full bg-white border border-gray-200">
		<thead>
			<tr>
				<th class="px-4 py-2 text-left">Bet ID</th>
				<th class="px-4 py-2 text-left">Game</th>
				<th class="px-4 py-2 text-left">Opponent</th>
				<th class="px-4 py-2 text-left">Bet Amount</th>
				<th class="px-4 py-2 text-left">Result</th>
				<th class="px-4 py-2 text-left">Date</th>
			</tr>
		</thead>
		<tbody>
			{#each bets?.createdBets as bet}
				<tr>
					<td class="px-4 py-2 border-t">{bet.id}</td>
					<td class="px-4 py-2 border-t">
						{bet.teams} ({bet.gameType})
					</td>
					<td class="flex items-center px-4 py-2 border-t">
						<img
							class="w-8 h-8 rounded-full mr-2"
							src="https://th.bing.com/th/id/OIP.i-6PPmEKt2LNnliJyYG6QQHaE7?&rs=1&pid=ImgDet"
							alt="Opponent Avatar"
						/>
						{bet.acceptor.username}
					</td>
					<td class="px-4 py-2 border-t">{bet.betAmount}</td>
					<td class={`${getStatusColor('Won')} px-4 py-2 border-t`}>Won</td>
					<td class="px-4 py-2 border-t">{formatDate(bets.createdAt)}</td>
				</tr>
			{/each}
		</tbody>
	</table>

	<h2 class="text-2xl mt-4 mb-2">Accepted Bets</h2>
	<table class="min-w-full bg-white border border-gray-200">
		<thead>
			<tr>
				<th class="px-4 py-2 text-left">Bet ID</th>
				<th class="px-4 py-2 text-left">Game</th>
				<th class="px-4 py-2 text-left">Opponent</th>
				<th class="px-4 py-2 text-left">Bet Amount</th>
				<th class="px-4 py-2 text-left">Result</th>
				<th class="px-4 py-2 text-left">Date</th>
			</tr>
		</thead>
		<tbody>
			{#each bets?.acceptedBets as bet}
				<tr>
					<td class="px-4 py-2 border-t">{bet.id}</td>
					<td class="px-4 py-2 border-t">
						{bet.teams} ({bet.gameType})
					</td>
					<td class="flex items-center px-4 py-2 border-t">
						<img
							class="w-8 h-8 rounded-full mr-2"
							src="https://th.bing.com/th/id/OIP.i-6PPmEKt2LNnliJyYG6QQHaE7?&rs=1&pid=ImgDet"
							alt="Opponent Avatar"
						/>
						{bet.creator.username}
					</td>
					<td class="px-4 py-2 border-t">{bet.betAmount}</td>
					<td class={`${getStatusColor('Won')} px-4 py-2 border-t`}>Won</td>
					<td class="px-4 py-2 border-t">{formatDate(bets.createdAt)}</td>
				</tr>
			{/each}
		</tbody>
	</table>
</main>
