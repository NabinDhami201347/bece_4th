import { db } from '$lib/database';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { fail, type Actions, redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
	// redirect user if logged in
	if (locals.user) {
		throw redirect(302, '/');
	}
};

export const actions: Actions = {
	default: async ({ request, cookies }) => {
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

		const user = await db.user.findUnique({ where: { email } });
		if (!user) {
			return fail(404, { notfound: true });
		}

		const isMatch = await bcrypt.compare(password, user.password);
		if (!isMatch) {
			return fail(400, { credentials: true });
		}

		const payload = {
			id: user.id,
			role: user.role,
			username: user.username
		};
		const token = jwt.sign(payload, 'token', { expiresIn: '15m' });

		cookies.set('session', token, {
			path: '/',
			httpOnly: true,
			sameSite: 'strict',
			secure: process.env.NODE_ENV === 'production',
			maxAge: 60 * 60 * 24 * 30
		});

		// redirect the user
		throw redirect(302, '/');
	}
};
