import './App.css';
import { useState } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Routes,
	Switch,
	Redirect,
} from 'react-router-dom';

import { searchArtworks } from '../utils/api';
import { SearchForm } from './SearchForm';
import { Footer } from './Footer';
import { ImageDetailsPage } from './ImageDetailsPage';

export function App() {
	const [results, setResults] = useState([]);

	function onSearchSubmit(query) {
		// Search for the users's query.
		// TODO: render the results, instead of logging them to the console.
		// NOTE: `searchArtworks` currently returns local data, so that we
		// don't make too many requests to the API! Once we've built out
		// our UI, we need to make real requests!
		// @see: ./src/uitls/api.js
		searchArtworks(query).then((json) => {
			console.log(json);
			setResults(json.data);
		});
	}

	return (
		<Router>
			<div className="App">
				<h1>TCL Career Lab Art Finder</h1>
				<Routes>
					<Route
						element={
							<SearchForm results={results} onSearchSubmit={onSearchSubmit} />
						}
						path="/"
					/>
					<Route element={<ImageDetailsPage />} path="card" />
				</Routes>
				<Footer />
			</div>
		</Router>
	);
}
