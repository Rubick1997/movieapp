import React from "react";
import { Container } from "reactstrap";

function Credits({ casts, crews }) {
	return (
		<Container>
			{crews
				.filter(function (person) {
					return person.job === "Director";
				})
				.map((person) => (
					<div className='row'>
						<table className='col'>
							<thead>
								<tr>
									<th scope='col'>Name</th>
									<th scope='col'>Character</th>
									<th scope='col'>Job</th>
								</tr>
							</thead>
							<tbody>
								{casts.slice(0, 10).map((actor) => (
									<tr key={actor.id}>
										<td>{actor.name}</td>
										<td>{actor.character}</td>
										<td>Actor</td>
									</tr>
								))}

								<tr key={person.id}>
									<td>{person.name}</td>
									<td></td>
									<td>{person.job}</td>
								</tr>
							</tbody>
						</table>
						<div className='col'>
							<img
								id='poster'
								src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${person.profile_path}`}
								alt={person.name + " picture"}
							/>
							<h3 className='text-center'>{person.name}</h3>
						</div>
					</div>
				))}
		</Container>
	);
}
export default Credits;
