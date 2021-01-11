import React from "react";

export default function SearchMovies() {
	return (
		<form>
			<div className='form-group'>
				<label htmlFor='query' className='label'>
					Movie Name
				</label>
				<input
					className='input form-control'
					type='text'
					name='query'
					placeholder='Movie'
					autoComplete="off"
				/>
				<button className='btn btn-primary' type='submit'>
					Search
				</button>
			</div>
		</form>
	);
}
