import React, { useState } from "react";
import MovieCard from "./cardComponent";
import Header from "./HeaderComponent";
import ReactDOM from "react-dom";

function SearchMovies() {
	//states- input querry, movies
	const [query, setQuery] = useState("");
	const [movies, setMovies] = useState([]);

	const url = `https://api.themoviedb.org/3/search/movie?api_key=cdd3c5ce5ede207e5ca373b35395541c&language=en-US&query=%24%7B${query}%7D&page=1&include_adult=false`;

	const searchMovie = (e) => {
		e.preventDefault();
		let info;

		fetch(url)
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				setMovies(data.results);
				info = data.results;
				return info;
			})
			.then((info) => {
				if (info.length === 0) {
					alert("Not Found or Input Field is Empty!");
				}
			})
			.catch((error) => {
				console.log(error);
			});
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
			{movies
				.filter((movie) => movie.poster_path)
				.map((movie) => (
					<MovieCard movie={movie} key={movie.id} />
				))}
		</React.Fragment>
	);
}

export default SearchMovies;
