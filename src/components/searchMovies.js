import React, { useState } from "react";
import MovieCard from "./movieComponent";
import Header from "./HeaderComponent";
import ShowCard from "./showComponent";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

function Search() {
	//states- input querry, movies
	const [query, setQuery] = useState("");
	const [movies, setMovies] = useState([]);
	const [tvShows, setTVShow] = useState([]);

	const urlMovies = `https://api.themoviedb.org/3/search/movie?api_key=cdd3c5ce5ede207e5ca373b35395541c&language=en-US&query=%24%7B${query}%7D&page=1&include_adult=false`;
	const urlShows = `https://api.themoviedb.org/3/search/tv?api_key=cdd3c5ce5ede207e5ca373b35395541c&language=en-US&page=1&query=${query}&include_adult=false`;
	const searchMovie = (e) => {
		e.preventDefault();
		let info;

		fetch(urlMovies)
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

		fetch(urlShows)
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				setTVShow(data.results);
				console.log(data.results);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	return (
		<React.Fragment>
			<Header />
			<Form onSubmit={searchMovie}>
				<FormGroup className='form'>
					<Label htmlFor='query' className='label'>
						Movie Name
					</Label>
					<Input
						className='input form-control form-group'
						type='text'
						name='query'
						placeholder='Search'
						autoComplete='off'
						value={query}
						onChange={(e) => setQuery(e.target.value)}
					/>
					<Button className='btn form-group' type='submit'>
						Search
					</Button>
				</FormGroup>
			</Form>
			{movies
				.filter((movie) => movie.poster_path)
				.map((movie) => (
					<MovieCard movie={movie} key={movie.id} />
				))}
			{tvShows
				.filter((tvShow) => tvShow.backdrop_path)
				.map((tvShow) => (
					<ShowCard tvShow={tvShow} key={tvShow.id} />
				))}
		</React.Fragment>
	);
}

export default Search;
