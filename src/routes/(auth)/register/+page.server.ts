import { fail, redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';

import bcrypt from 'bcrypt';
import { db } from '$lib/database';

export const load: PageServerLoad = async ({ locals }) => {
	// redirect user if logged in
	if (locals.user) {
		throw redirect(302, '/');
	}
};

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

		await db.user.create({
			data: {
				username,
				email,
				password: await bcrypt.hash(password, 10)
			}
		});

		throw redirect(303, '/login');
	}
};
