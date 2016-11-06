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

const Header = React.createClass({
	handleHeaderClick: function(){
		document.getElementById('artistSuggestions').style.visibility = 'hidden'
	},

	render: function(){
		return (
			<div id = 'header' onClick={this.handleHeaderClick}>
				<h1> <span className = 'HeaderTitle'></span> </h1>
			</div>
		)
	}
})

const SearchBar = React.createClass({
	getInitialState: function(){
		return {
			suggestionState: []
		}
	},
})