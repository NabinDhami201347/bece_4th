import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals, fetch }) => {
	// redirect user if not logged in
	if (!locals.user) {
		throw redirect(302, '/login');
	} else {
		const response = await fetch('/api/bets');
		const bets = await response.json();

		return {
			bets
		};
	}
};
