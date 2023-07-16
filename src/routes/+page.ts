export const load = async ({ fetch }) => {
	const response = await fetch('/api/cricket');
	const cricket = await response.json();

	const res = await fetch('/api/football');
	const football = await res.json();

	return {
		cricket,
		football
	};
};
