import { db } from '$lib/database.js';
import { json } from '@sveltejs/kit';

export async function POST({ request }) {
	const { gameId, teams, gameType, betAmount, creatorId, selectedTeam } = await request.json();

	await db.bet.create({
		data: {
			gameId,
			teams,
			gameType,
			betAmount,
			creatorId,
			betSelections: {
				create: {
					selectedTeam,
					userId: creatorId
				}
			}
		},
		include: { betSelections: true }
	});

	return json({ status: 201 });
}
