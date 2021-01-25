import React, { useState } from "react";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
import Jumbotron from "reactstrap/lib/Jumbotron";
function MovieCard({ movie }) {
	const [trailerUrl, setTrailerUrl] = useState("");
	const [casts, setCast] = useState([]);
	const [crews, setCrew] = useState([]);
	const opts = {
		height: "390",
		width: "100%",
		playerVars: {
			// https://developers.google.com/youtube/player_parameters
			autoplay: 1,
		},
	};
	const handleClick = (movie) => {
		if (trailerUrl) {
			setTrailerUrl("");
		} else {
			movieTrailer(movie?.title || "")
				.then((url) => {
					const urlParams = new URLSearchParams(new URL(url).search);
					setTrailerUrl(urlParams.get("v"));
				})
				.catch((error) => console.log(error));
		}
	};
	const handleCredits = (id) => {
		const url = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=cdd3c5ce5ede207e5ca373b35395541c&language=en-US`;
		fetch(url)
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				console.log(data.crew);
				setCast(data.cast);
				setCrew(data.crew);
			});
	};

	return (
		<div className='row'>
			<Jumbotron key={movie.id} className='card'>
				<div className='card-body'>
					<div className='row'>
						<div className='col'>
							<img
								id='poster'
								src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
								alt={movie.title + "poster"}
							/>
						</div>
						<div className='col'>
							<h3 className='card-title'>{movie.title}</h3>
							<p className='card-text'>
								<small>RELEASE DATE: {movie.release_date}</small>
							</p>
							<div className='row'>
								<div className='col-6'>
									<p className='card-text'>
										<small>RATING: {movie.vote_average}</small>
									</p>
								</div>
								<div className='col-6'>
									<button
										className='btn btn-primary button '
										onClick={() => handleClick(movie)}>
										Watch Trailer
									</button>
									<button
										className='btn button btn-primary'
										onClick={() => {
											handleCredits(movie.id);
										}}>
										Credits
									</button>
								</div>
							</div>
							<p className='card-text'>{movie.overview}</p>
						</div>
					</div>
				</div>
				<div id='people'>
					<table className='table'>
						<thead>
							<tr>
								<th scope='col'></th>
								<th scope='col'></th>
								<th scope='col'></th>
							</tr>
						</thead>
						<tbody>
							{casts.slice(0, 10).map((actor) => (
								<tr key={actor.id}>
									<td>{actor.name}</td>
									<td>{actor.character}</td>
									<td>{actor.known_for_department}</td>
								</tr>
							))}
							{/* {crews.map((person) => {
								<tr key={person.id}>
									<td>{person.name}</td>
									<td>{person.known_for_department}</td>
									<td>{person.job}</td>
								</tr>;
							})} */}
						</tbody>
					</table>
				</div>
				<div style={{ padding: "40px" }}>
					{trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
				</div>
			</Jumbotron>
		</div>
	);
}

export default MovieCard;
