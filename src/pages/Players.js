import { useLoaderData, Link } from 'react-router-dom';

export default function Players() {
	const players =  useLoaderData();
	return(
		<>
			<div className="players-list">
				{players.map(player => (
					<Link to={player.id.toString()} key={player.id}>
						<p>{player.name}</p>
						<p>No of goals: {player.goals}</p>
					</Link>

				))}

			</div>
		</>
	)
}

// loader function
export const playersLoader = async () => {
	const res = await fetch('http://localhost:4000/players/');

	return res.json();
}