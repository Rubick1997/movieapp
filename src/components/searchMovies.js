import React, { useState } from "react";
import MovieCard from "./cardComponent";
import Header from "./HeaderComponent";
import ReactDOM from "react-dom";

function SearchMovies(props) {
	//states- input querry, movies
	const [query, setQuery] = useState("");
	const [movies, setMovies] = useState([]);
	const list = [];
	const searchMovie = async (e) => {
		e.preventDefault();
		const url = `https://api.themoviedb.org/3/search/movie?api_key=cdd3c5ce5ede207e5ca373b35395541c&language=en-US&query=%24%7B${query}%7D&page=1&include_adult=false`;

		try {
			const res = await fetch(url);
			const data = await res.json();
			setMovies(data.results);
			const message = <h2>Results:</h2>;
			ReactDOM.render(message, document.getElementById("message"));
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<React.Fragment>
			<Header />
			<form onSubmit={searchMovie}>
				<div className='form form-group'>
					<label htmlFor='query' className='label'>
						Movie Name
					</label>
					<input
						className='input form-control form-group'
						type='text'
						name='query'
						placeholder='Search'
						autoComplete='off'
						value={query}
						onChange={(e) => setQuery(e.target.value)}
					/>
					<button className='btn btn-secondary form-group' type='submit'>
						Search
					</button>
				</div>
			</form>
			<div id='message'></div>
			{movies
				.filter((movie) => movie.poster_path)
				.map((movie) => (
					<MovieCard movie={movie} key={movie.id} />
				))}
		</React.Fragment>
	);
}

export default SearchMovies;
