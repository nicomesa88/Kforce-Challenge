import Backbone from 'backbone'
import $ from 'jquery'
import {app_name} from '../app'

const SearchArtistCollection = Backbone.Collection.extend({
	url: 'https://api.spotify.com/v1/search/',
	parse: function(rawJSONP){
		return rawJSONP.artists
	}
})