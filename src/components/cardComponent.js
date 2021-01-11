import React from "react"

function MovieCard({ movie }) {
	return (
		<div key={movie.id} className='card'>
			<div className='card-body'>
				<img
					id='poster'
					src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
					alt={movie.title + "poster"}
				/>
				<h3 className='card-title'>{movie.title}</h3>
				<p className='card-text'>
					<small>RELEASE DATE: {movie.release_date}</small>
				</p>
				<p className='card-text'>
					<small>RATING: {movie.vote_average}</small>
				</p>
				<p className='card-text'>{movie.overview}</p>
			</div>
		</div>
	);
}

export default MovieCard