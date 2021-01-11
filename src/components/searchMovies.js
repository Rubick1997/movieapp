import React, { useState } from "react";

export default function SearchMovies() {
	//states- input querry, movies
	const [query, setQuery] = useState("");
	const [movie,setMovie] = useState([])
	const searchMovie = async (e) => {
		e.preventDefault();
		const url = `https://api.themoviedb.org/3/search/movie?api_key=cdd3c5ce5ede207e5ca373b35395541c&language=en-US&query=%24%7B${query}%7D&page=1&include_adult=false`;
		
		try {
			const res = await fetch(url);
			const data = await res.json();
			setMovie(data.results)
		} catch (err) {
			console.log(err);
		}
	};

	return (
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
					value={query} onChange={(e)=> setQuery(e.target.value)}
				/>
				<button className='button btn btn-primary' type='submit'>
					Search
				</button>
			</div>
		</form>
	);
}
