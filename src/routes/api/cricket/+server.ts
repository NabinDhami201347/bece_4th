import { db } from '$lib/database';
import { json } from '@sveltejs/kit';

export async function GET() {
	// const games = [
	// 	{
	// 		id: 1,
	// 		seriesName: 'ICC World Test Championship',
	// 		matchType: 'Test',
	// 		matchDay: 'Final',
	// 		team1: 'India',
	// 		team2: 'New Zealand',
	// 		battingTeam: 'India',
	// 		bowlingTeam: 'New Zealand',
	// 		status: 'live',
	// 		score1: 225,
	// 		wickets1: 3,
	// 		score2: 180,
	// 		wickets2: 5,
	// 		overs: 65,
	// 		winningProbability: {
	// 			India: 0.65,
	// 			'New Zealand': 0.35
	// 		},
	// 		date: '2021-06-18',
	// 		bets: [
	// 			{ user: 'user1', amount: 50 },
	// 			{ user: 'user2', amount: 100 }
	// 		]
	// 	},
	// 	{
	// 		id: 2,
	// 		seriesName: 'Australia Tour of West Indies',
	// 		matchType: 'ODI',
	// 		matchDay: '1st ODI',
	// 		team1: 'West Indies',
	// 		team2: 'Australia',
	// 		battingTeam: 'West Indies',
	// 		bowlingTeam: 'Australia',
	// 		status: 'live',
	// 		score1: 145,
	// 		wickets1: 2,
	// 		score2: 220,
	// 		wickets2: 7,
	// 		overs: 30,
	// 		winningProbability: {
	// 			'West Indies': 0.4,
	// 			Australia: 0.6
	// 		},
	// 		date: '2021-07-20',
	// 		bets: []
	// 	},
	// 	{
	// 		id: 3,
	// 		seriesName: 'England Tour of Pakistan',
	// 		matchType: 'T20',
	// 		matchDay: '2nd T20',
	// 		team1: 'Pakistan',
	// 		team2: 'England',
	// 		battingTeam: 'England',
	// 		bowlingTeam: 'Pakistan',
	// 		status: 'live',
	// 		score1: 132,
	// 		wickets1: 4,
	// 		score2: 145,
	// 		wickets2: 3,
	// 		overs: 18,
	// 		winningProbability: {
	// 			England: 0.6,
	// 			Pakistan: 0.4
	// 		},
	// 		date: '2021-08-10',
	// 		bets: [{ user: 'user1', amount: 75 }]
	// 	},
	// 	{
	// 		id: 4,
	// 		seriesName: 'South Africa Tour of Sri Lanka',
	// 		matchType: 'Test',
	// 		matchDay: '3rd Test',
	// 		team1: 'Sri Lanka',
	// 		team2: 'South Africa',
	// 		battingTeam: 'South Africa',
	// 		bowlingTeam: 'Sri Lanka',
	// 		status: 'live',
	// 		score1: 285,
	// 		wickets1: 6,
	// 		score2: 210,
	// 		wickets2: 8,
	// 		overs: 80,
	// 		winningProbability: {
	// 			'South Africa': 0.55,
	// 			'Sri Lanka': 0.45
	// 		},
	// 		date: '2021-09-05',
	// 		bets: [
	// 			{ user: 'user2', amount: 50 },
	// 			{ user: 'user3', amount: 100 }
	// 		]
	// 	},
	// 	{
	// 		id: 5,
	// 		seriesName: 'New Zealand Tour of Bangladesh',
	// 		matchType: 'ODI',
	// 		matchDay: '2nd ODI',
	// 		team1: 'Bangladesh',
	// 		team2: 'New Zealand',
	// 		battingTeam: 'Bangladesh',
	// 		bowlingTeam: 'New Zealand',
	// 		status: 'live',
	// 		score1: 180,
	// 		wickets1: 3,
	// 		score2: 165,
	// 		wickets2: 5,
	// 		overs: 35,
	// 		winningProbability: {
	// 			Bangladesh: 0.6,
	// 			'New Zealand': 0.4
	// 		},
	// 		date: '2021-10-12',
	// 		bets: [
	// 			{ user: 'user1', amount: 80 },
	// 			{ user: 'user3', amount: 120 }
	// 		]
	// 	},
	// 	{
	// 		id: 6,
	// 		seriesName: 'India Tour of Australia',
	// 		matchType: 'T20',
	// 		matchDay: '1st T20',
	// 		team1: 'Australia',
	// 		team2: 'India',
	// 		battingTeam: 'India',
	// 		bowlingTeam: 'Australia',
	// 		status: 'live',
	// 		score1: 78,
	// 		wickets1: 2,
	// 		score2: 102,
	// 		wickets2: 3,
	// 		overs: 10,
	// 		winningProbability: {
	// 			India: 0.5,
	// 			Australia: 0.5
	// 		},
	// 		date: '2021-11-25',
	// 		bets: []
	// 	},
	// 	{
	// 		id: 7,
	// 		seriesName: 'West Indies Tour of England',
	// 		matchType: 'Test',
	// 		matchDay: '4th Test',
	// 		team1: 'England',
	// 		team2: 'West Indies',
	// 		battingTeam: 'West Indies',
	// 		bowlingTeam: 'England',
	// 		status: 'live',
	// 		score1: 195,
	// 		wickets1: 4,
	// 		score2: 250,
	// 		wickets2: 3,
	// 		overs: 55,
	// 		winningProbability: {
	// 			England: 0.45,
	// 			'West Indies': 0.55
	// 		},
	// 		date: '2022-02-08',
	// 		bets: [
	// 			{ user: 'user2', amount: 60 },
	// 			{ user: 'user3', amount: 90 }
	// 		]
	// 	},
	// 	{
	// 		id: 8,
	// 		seriesName: 'Pakistan Super League',
	// 		matchType: 'T20',
	// 		matchDay: 'Final',
	// 		team1: 'Lahore Qalandars',
	// 		team2: 'Karachi Kings',
	// 		battingTeam: 'Karachi Kings',
	// 		bowlingTeam: 'Lahore Qalandars',
	// 		status: 'live',
	// 		score1: 140,
	// 		wickets1: 2,
	// 		score2: 125,
	// 		wickets2: 4,
	// 		overs: 15,
	// 		winningProbability: {
	// 			'Lahore Qalandars': 0.6,
	// 			'Karachi Kings': 0.4
	// 		},
	// 		date: '2022-03-22',
	// 		bets: []
	// 	},
	// 	{
	// 		id: 9,
	// 		seriesName: 'South Africa Tour of India',
	// 		matchType: 'ODI',
	// 		matchDay: '3rd ODI',
	// 		team1: 'India',
	// 		team2: 'South Africa',
	// 		battingTeam: 'South Africa',
	// 		bowlingTeam: 'India',
	// 		status: 'live',
	// 		score1: 210,
	// 		wickets1: 5,
	// 		score2: 175,
	// 		wickets2: 7,
	// 		overs: 40,
	// 		winningProbability: {
	// 			India: 0.55,
	// 			'South Africa': 0.45
	// 		},
	// 		date: '2022-05-16',
	// 		bets: [
	// 			{ user: 'user1', amount: 70 },
	// 			{ user: 'user3', amount: 110 }
	// 		]
	// 	},
	// 	{
	// 		id: 10,
	// 		seriesName: 'The Ashes',
	// 		matchType: 'Test',
	// 		matchDay: '1st Test',
	// 		team1: 'England',
	// 		team2: 'Australia',
	// 		battingTeam: 'Australia',
	// 		bowlingTeam: 'England',
	// 		status: 'live',
	// 		score1: 125,
	// 		wickets1: 3,
	// 		score2: 150,
	// 		wickets2: 2,
	// 		overs: 25,
	// 		winningProbability: {
	// 			England: 0.4,
	// 			Australia: 0.6
	// 		},
	// 		date: '2022-12-01',
	// 		bets: [
	// 			{ user: 'user2', amount: 55 },
	// 			{ user: 'user3', amount: 95 }
	// 		]
	// 	}
	// ];

	const games = await db.match.findMany({ include: { bets: true } });

	return json(games);
}
