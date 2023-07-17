export const load = async ({ fetch }) => {
	const response = await fetch('/api/cricket');
	const cricket = await response.json();

	return {
		cricket
	};
};
