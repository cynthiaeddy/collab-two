import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './ImageDetailsPage.css';

export const ImageDetailsPage = (props) => {
	console.log('in card', props);

	const location = useLocation();
	const navigate = useNavigate();
	const { from } = location.state;
	const IMAGE_ID = from;
	console.log(from, IMAGE_ID);

	const goBack = () => {
		navigate(-1);
	};

	return (
		<>
			hi
			<div className="card-image">
				<img
					alt={''}
					src={`https://www.artic.edu/iiif/2/${IMAGE_ID}/full/843,/0/default.jpg`}
				/>
			</div>
			<button className="btn" onClick={goBack}>
				back
			</button>
		</>
	);
};