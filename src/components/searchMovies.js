import React, { useState } from "react";

export default function SearchMovies() {
	//states- input querry, movies
	const [query, setQuery] = useState("");
	const [movies, setMovies] = useState([]);
	const searchMovie = async (e) => {
		e.preventDefault();
		const url = `https://api.themoviedb.org/3/search/movie?api_key=cdd3c5ce5ede207e5ca373b35395541c&language=en-US&query=%24%7B${query}%7D&page=1&include_adult=false`;

		try {
			const res = await fetch(url);
			const data = await res.json();
			setMovies(data.results);
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<>
			<form onSubmit={searchMovie}>
				<div className='form form-group'>
					<label htmlFor='query' className='label'>
						Movie Name
					</label>
					<input
						className='input form-control'
						type='text'
						name='query'
						placeholder='Movie'
						autoComplete='off'
						value={query}
						onChange={(e) => setQuery(e.target.value)}
					/>
					<button className='button btn btn-primary' type='submit'>
						Search
					</button>
				</div>
			</form>
			<div >
				{movies
					.filter((movie) => movie.poster_path)
					.map((movie) => (
						<div key={movie.id} className="card">
							<img
								src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
								alt={movie.title + "poster"}
							/>
							<div className='card-body'>
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
					))}
			</div>
		</>
	);
}
