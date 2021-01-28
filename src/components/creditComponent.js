import React from "react";

function Credits({ casts, crews }) {
	return (
        
		<div>
			<table>
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
					{crews
						.filter(function (person) {
							return person.job === "Director";
						})
						.map((person) => (
							<tr key={person.id}>
								<td>{person.name}</td>
								<td></td>
								<td>{person.job}</td>
								<img
									id='poster'
									src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${person.profile_path}`}
									alt={person.name + " picture"}
								/>
							</tr>
						))}
				</tbody>
			</table>
		</div>
	);
}

export default Credits;