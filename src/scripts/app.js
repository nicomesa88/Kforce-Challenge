import React from 'react'
import ReactDOM from 'react-dom'
import Backbone from 'backbone'
import { SearchArtistCollection, SearchArtistModel, SuggestedAlbumsCollection, AlbumsModel} from './models/models'


const app = function() {

	const Header = React.createClass({
		render: () => {
			return <h1>YOLO</h1>
		}
	})

	ReactDOM.render(<Header/>,document.querySelector('.container'))
}

app()