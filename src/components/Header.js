import { NavLink } from 'react-router-dom';

export default function Header() {
	return(
		<>	
			<header>
				<div className="logo"><span>PL</span></div>
				<nav>
					<NavLink to="/">Home</NavLink>
					<NavLink to="about">About</NavLink>
					<NavLink to="players">Players</NavLink>
				</nav>
			</header>
		</>
	)
}