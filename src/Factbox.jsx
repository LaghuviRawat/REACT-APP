import React, { useState, useEffect } from 'react';

const Factbox = () => {
	const [fact, setFact] = useState('');
	const apiKey = 'Zu5106u/WCty2+oxAkul5g==HIceoDP0AffL3U6f'; 

	const fetchFact = () => {
	const options = {
		method: 'GET',
		headers: { 'x-api-key': apiKey },
	};

	const url = 'https://api.api-ninjas.com/v1/facts';

	fetch(url, options)
		.then((response) => response.json())
		.then((data) => {
		setFact(data[0].fact);
		})
		.catch((error) => {
		console.error('Error fetching fact:', error);
		});
	};

	useEffect(() => {
	fetchFact();
	}, []);

	return (
	<div className="card">
		<div className="card-header">
		<h6>Random Facts for you</h6>
		</div>
		<div className="card-body">
		<p className="card-text">{fact || '......Facts Here......'}</p>
		<button onClick={fetchFact} className="btn btn-primary">
		Generate
		</button>
		</div>
	</div>
	);
};

export default Factbox;