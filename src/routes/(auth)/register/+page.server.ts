import { fail, type Actions } from '@sveltejs/kit';

export const actions: Actions = {
	default: async ({ request }) => {
		const formData = await request.formData();
		const email = formData.get('email');
		const username = formData.get('username');
		const password = formData.get('password');
		const confirmPassword = formData.get('confirmPassword');

		if (typeof username !== 'string' || !username) {
			return fail(400, { username: true });
		}
		if (typeof email !== 'string' || !email) {
			return fail(400, { email: true });
		}

		if (typeof password !== 'string' || !password) {
			return fail(400, { password: true });
		}
		if (password.length < 5) {
			return fail(400, { minimum: true });
		}

		if (typeof confirmPassword !== 'string' || !confirmPassword) {
			return fail(400, { confirmPassword: true });
		}
		if (confirmPassword.length < 5) {
			return fail(400, { minimum: true });
		}

		if (password !== confirmPassword) {
			return fail(400, { invalidPassword: true });
		}
	}
};
