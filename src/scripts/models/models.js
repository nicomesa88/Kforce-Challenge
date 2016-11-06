import Backbone from 'backbone'
import $ from 'jquery'
import {app_name} from '../app'

const SearchCollection = Backbone.Collection.extend({
	url: 'https://api.spotify.com/v1/search/',
	parse: function(rawJSONP){
		return rawJSONP.artists
	}
})

const SerchArtistModel = Backbone.Model.extend({
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

