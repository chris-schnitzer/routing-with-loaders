import { useParams, useLoaderData } from 'react-router-dom';

export default function PlayerDetails() {
	const { id } = useParams();
	const player = useLoaderData();

	return (
		<>
		<h1>Player</h1>
		<p>Name: {player.name}</p>
		<p>Goals: {player.goals}</p>
		</>
	)
}

//loader function
export const PlayerDetailsLoader = async ({ params }) => {
	const { id } = params;

	const res = await fetch('http://localhost:4000/players/' + id);

	return res.json();
}