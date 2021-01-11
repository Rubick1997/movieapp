import React, { Component } from "react";
import "./App.css";
import SearchMovies from "./components/searchMovies";

class App extends Component {
	render() {
		return (
			<div className='container'>
				<h1 className='title'>Movie search</h1>
				<SearchMovies/>
			</div>
		);
	}
}

export default App;
