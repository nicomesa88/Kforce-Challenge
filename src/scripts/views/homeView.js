// main view for the web app.

import React from 'react'
import {SearchCollection, SearchArtistCollection}

const HomeView = React.createClass({
	render: function(){
		return (
			<div id = 'banner'>
				<Header/>
				<SearchBar/>
			</div>
			)
	}
})