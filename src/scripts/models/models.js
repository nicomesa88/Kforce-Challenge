import Backbone from 'backbone'
import $ from 'jquery'
import {app_name} from '../app'

const SearchArtistCollection = Backbone.Collection.extend({
	url: 'https://api.spotify.com/v1/search/',
	parse: function(rawJSONP){
		return rawJSONP.artists
	}
})

const SearchArtistModel = Backbone.Model.extend({
	url: 'https://api.spotify.com/v1/search/',
	parse: function(rawJSONP){
		return rawJSONP.artists
	}
})

const SuggestedAlbumsCollection = Backbone.Collection.extend({
	parse: function(rawJSONP){
		return rawJSONP.items
	}
})

const AlbumsModel = Backbone.Model.extend({
	url: 'https://api.spotify.com/v1/albums/',
	parse: function(rawJSONP){
		return rawJSONP
	}
})

const SearchCollection = SearchArtistCollection.extend({
	initialize: function(){
	}
})

export {SearchCollection, SearchArtistModel, SuggestedAlbumsCollection, AlbumsModel}