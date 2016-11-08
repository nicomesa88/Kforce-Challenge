import React from 'react'
import {SearchArtistCollection, SearchCollection} from '../models/models'

const HomeView = React.createClass({
	render: function(){
		return (
				<div id='wrapper'>
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
					<div id='header' onClick={this.handleHeaderClick}>
						<a href = '#home'>Spotify App</a>
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

	handleKeyUp: function(event){
		this.refs.suggestionsDiv.style.visibility = 'visible'
		if (event.keyCode !== 13){
			var suggestions = new SearchCollection()
			suggestions.fetch({
				dataType: 'json',
				data: {
					type: 'artist',
					q: event.target.value,
					limit: 10
				}
			}).then(()=>{
				this.setState({
					suggestionState: suggestions.models[0].attributes.items
				})
			})
		}
		else if (event.keyCode === 13){
			let artistName = event.target.value.replace(/ /g,'%20')
			location.hash = 'artist/' + artistName
			this.refs.suggestionsDiv.style.visibility = 'hidden'
			event.target.value = artistName
		}
	},

	handleClick: function(name){
			return (event)=>{
				location.hash = 'artist/' + name
				this.refs.searchInput.value = name
				this.refs.suggestionsDiv.style.visibility = 'hidden'
			}
	},

	handleInputClick: function(event){
		event.target.value = ''
	},

	handleSearchBarClick:function(){
		document.getElementById('artistSuggestions').style.visibility = 'hidden'
	},

	getSuggestions: function(){
		let artistJSXArr = []
		this.state.suggestionState.forEach((artist)=>{
			artistJSXArr.push(<div onClick={this.handleClick(artist.name)} key={artist.id} value={artist.name}>{artist.name}</div>)
		})
		return artistJSXArr
	},

	render: function(){
		return (
				<div id='searchBar' onClick={this.handleSearchBarClick}>
						<div id='searchBarInputDiv'>
							<input placeholder='Search Artists' ref='searchInput' list='artistSuggestions' onKeyUp={this.handleKeyUp} onClick={this.handleInputClick} type='text'/>
								<div ref='suggestionsDiv' id="artistSuggestions">
									{this.getSuggestions()}
								</div>
						</div>
				</div>
			)
		}
	})

export default HomeView