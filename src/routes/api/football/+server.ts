import { json } from '@sveltejs/kit';

export function GET() {
	const games = [
		{
			date: '2023-07-01',
			venue: 'Old Trafford, Manchester',
			teams: ['Manchester United', 'Manchester City'],
			status: 'live',
			winning_probability: {
				'Manchester United': 0.6,
				'Manchester City': 0.4
			}
		},
		{
			date: '2023-07-05',
			venue: 'Anfield, Liverpool',
			teams: ['Liverpool', 'Chelsea'],
			status: 'live',
			winning_probability: {
				Liverpool: 0.5,
				Chelsea: 0.5
			}
		},
		{
			date: '2023-07-08',
			venue: 'Camp Nou, Barcelona',
			teams: ['Barcelona', 'Real Madrid'],
			status: 'live',
			winning_probability: {
				Barcelona: 0.7,
				'Real Madrid': 0.3
			}
		},
		{
			date: '2023-07-11',
			venue: 'Allianz Arena, Munich',
			teams: ['Bayern Munich', 'Borussia Dortmund'],
			status: 'live',
			winning_probability: {
				'Bayern Munich': 0.6,
				'Borussia Dortmund': 0.4
			}
		},
		{
			date: '2023-07-15',
			venue: 'Parc des Princes, Paris',
			teams: ['Paris Saint-Germain', 'AS Monaco'],
			status: 'live',
			winning_probability: {
				'Paris Saint-Germain': 0.7,
				'AS Monaco': 0.3
			}
		},
		{
			date: '2023-07-18',
			venue: 'San Siro, Milan',
			teams: ['AC Milan', 'Inter Milan'],
			status: 'live',
			winning_probability: {
				'AC Milan': 0.6,
				'Inter Milan': 0.4
			}
		},
		{
			date: '2023-07-22',
			venue: 'Etihad Stadium, Manchester',
			teams: ['Manchester City', 'Liverpool'],
			status: 'upcoming'
		},
		{
			date: '2023-07-26',
			venue: 'Stamford Bridge, London',
			teams: ['Chelsea', 'Arsenal'],
			status: 'upcoming'
		},
		{
			date: '2023-07-29',
			venue: 'Santiago Bernabeu, Madrid',
			teams: ['Real Madrid', 'Barcelona'],
			status: 'upcoming'
		},
		{
			date: '2023-08-02',
			venue: 'Westfalenstadion, Dortmund',
			teams: ['Borussia Dortmund', 'Bayern Munich'],
			status: 'upcoming'
		}
	];

	return json(games);
}
