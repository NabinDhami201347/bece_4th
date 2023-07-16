import { json } from '@sveltejs/kit';

export function GET() {
	const games = [
		{
			date: '2023-07-01',
			venue: 'Eden Gardens, Kolkata',
			teams: ['India', 'England'],
			status: 'live',
			winning_probability: {
				India: 0.6,
				England: 0.4
			}
		},
		{
			date: '2023-07-05',
			venue: "Lord's Cricket Ground, London",
			teams: ['England', 'Australia'],
			status: 'live',
			winning_probability: {
				England: 0.5,
				Australia: 0.5
			}
		},
		{
			date: '2023-07-08',
			venue: 'MCG, Melbourne',
			teams: ['Australia', 'South Africa'],
			status: 'live',
			winning_probability: {
				Australia: 0.7,
				'South Africa': 0.3
			}
		},
		{
			date: '2023-07-11',
			venue: 'Lahore Cricket Stadium, Lahore',
			teams: ['Pakistan', 'India'],
			status: 'live',
			winning_probability: {
				Pakistan: 0.6,
				India: 0.4
			}
		},
		{
			date: '2023-07-15',
			venue: 'Wankhede Stadium, Mumbai',
			teams: ['India', 'South Africa'],
			status: 'live',
			winning_probability: {
				India: 0.7,
				'South Africa': 0.3
			}
		},
		{
			date: '2023-07-18',
			venue: 'SCG, Sydney',
			teams: ['Australia', 'New Zealand'],
			status: 'live',
			winning_probability: {
				Australia: 0.6,
				'New Zealand': 0.4
			}
		},
		{
			date: '2023-07-22',
			venue: 'Old Trafford, Manchester',
			teams: ['England', 'India'],
			status: 'upcoming'
		},
		{
			date: '2023-07-26',
			venue: 'Eden Park, Auckland',
			teams: ['New Zealand', 'Australia'],
			status: 'upcoming'
		},
		{
			date: '2023-07-29',
			venue: 'Centurion Park, Centurion',
			teams: ['South Africa', 'England'],
			status: 'upcoming'
		},
		{
			date: '2023-08-02',
			venue: 'Gaddafi Stadium, Lahore',
			teams: ['Pakistan', 'Australia'],
			status: 'upcoming'
		}
	];

	return json(games);
}
