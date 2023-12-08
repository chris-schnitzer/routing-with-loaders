import { Outlet } from 'react-router-dom';

 export default function PlayersLayout() {
 	return(
 		<div className="container">	
 			<h1>Players of the month</h1>
 			<Outlet />
 		</div>
 	)
 }