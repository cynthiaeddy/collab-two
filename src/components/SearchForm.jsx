import './SearchForm.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export function SearchForm(props) {
	const [query, setQuery] = useState('');

	function handleInputChange(evt) {
		setQuery(evt.target.value);
	}

	function handleFormSubmit(e) {
		e.preventDefault();
		props.onSearchSubmit(query);
	}

	return (
		<>
			<form className="Form" role="search" onSubmit={handleFormSubmit}>
				<label className="label" htmlFor="search-field">
					Search for some art
				</label>
				<input
					className="input"
					id="search-field"
					inputMode="search"
					name="query"
					type="text"
					value={query}
					onChange={handleInputChange}
				/>
				<button className="button" type="submit">
					Search
				</button>
			</form>
			<div className="cards-container">
				{props.results.map((result) => (
					<div key={result.id} className="card">
						<Link state={{ from: result.image_id }} to={`/card`}>
							<h3>{result.title}</h3>
							<h5>{result.artist_title}</h5>
						</Link>
					</div>
				))}
			</div>
		</>
	);
}
