import { db } from '$lib/database';
import { json } from '@sveltejs/kit';

export async function GET({ locals }) {
	try {
		const bets = await db.user.findFirst({
			where: { id: locals.user.id },
			include: {
				acceptedBets: { include: { creator: true } },
				createdBets: { include: { acceptor: true } }
			}
		});

		return json(bets);
	} catch (error) {
		console.error('Error retrieving bets:', error);
		return json({ error: 'Failed to retrieve bets' }, { status: 500 });
	}
}
