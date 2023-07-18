import { db } from '$lib/database.js';
import { json } from '@sveltejs/kit';

export async function POST({ request }) {
	const { betId, acceptorId, acceptorTeam } = await request.json();

	await db.bet.update({
		where: { id: betId },
		data: {
			acceptor: {
				connect: { id: acceptorId }
			},
			betSelections: {
				create: [{ user: { connect: { id: acceptorId } }, selectedTeam: acceptorTeam }]
			}
		},
		include: {
			betSelections: true,
			creator: true,
			acceptor: true
		}
	});

	return json({ status: 201 });
}
