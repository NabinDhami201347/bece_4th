import type { Handle } from '@sveltejs/kit';
import jwt, { type JwtPayload } from 'jsonwebtoken';

export const handle: Handle = async ({ event, resolve }) => {
	// Get the session token from the cookies
	const token = event.cookies.get('session');

	if (!token) {
		// If there is no session token, load the page as normal
		return await resolve(event);
	}

	try {
		const user = jwt.verify(token, 'token') as { user: { id: string; role: string } } & JwtPayload;

		if (user) {
			// Check if the token has expired
			const now = Math.floor(Date.now() / 1000);
			if (user.exp && now > user.exp) {
				// Token has expired, remove the session cookie
				event.cookies.set('session', '', { expires: new Date(0) });
			} else {
				// Token is valid, set user data in `event.locals`
				event.locals.user = {
					id: user.id,
					role: user.role,
					usernames: user.usernames
				};
			}
		}
	} catch (error) {
		// Token verification failed, remove the session cookie
		event.cookies.set('session', '', { expires: new Date(0) });
	}

	// Load the page as normal
	return await resolve(event);
};
