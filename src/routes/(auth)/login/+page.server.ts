import { fail, type Actions } from '@sveltejs/kit';

export const actions: Actions = {
	default: async ({ request }) => {
		const formData = await request.formData();
		const email = formData.get('email');
		const password = formData.get('password');

		if (typeof email !== 'string' || !email) {
			return fail(400, { email: true });
		}

		if (typeof password !== 'string' || !password) {
			return fail(400, { password: true });
		}
		if (password.length < 5) {
			return fail(400, { minimum: true });
		}

		console.log(email, password);
	}
};
