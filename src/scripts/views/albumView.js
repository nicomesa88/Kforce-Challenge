import React from 'react'
import {SuggestedAlbumsList} from './suggestedView'
import HomeView from './homeView'

const AlbumDetailView = React.createClass({
	render: function(){
		return (
				<div className="detail-view">
					<HomeView/>
					<AlbumDetails albumDetails={this.props.albumDetails}/>
					<SuggestedAlbumsList albumList={this.props.albumCol.models}/>
				</div>
			)
	}
})

const AlbumDetails = React.createClass({

	getTrackListJSXArr: function(){
		let tracksArr = []
		this.props.albumDetails.get('tracks').items.forEach((track)=>{
			tracksArr.push(<Track key={track.id} trackInfo={track}/>)
		})
		return tracksArr
	},

	render: function(){
		return(
			<div className="album-detail-wrapper">
				<div className="album-info-header">
					<h1>{this.props.albumDetails.get('name')}</h1>
					<h2>{this.props.albumDetails.get('artists')[0].name}</h2>
					<h3>Release Date: {this.props.albumDetails.get('release_date')}</h3>
				</div>
				<div className="album-info">
					<div className="album-cover">
						<img className="album-cover-img" src={this.props.albumDetails.get('images')[0].url}/>
					</div>
					<div className="track-list">
						<div className="track-list-header">
							<h3>Track Name</h3>
							<h3>Duration</h3>
						</div>
							{this.getTrackListJSXArr()}
					</div>
				</div>
			</div>
			)
	}
})

const Track = React.createClass({
	msToTime: function (duration){
		let milliseconds = parseInt((duration%1000)/100),
			seconds = parseInt((duration/1000)%60),
			minutes = parseInt((duration/(1000*60)))

		minutes = (minutes < 10) ? "0" + minutes : minutes;
		seconds = (seconds < 10) ? "0" + seconds : seconds;

		return minutes + ":" + seconds;
	},

	render: function(){
		return (
				<div className="track-info">
					<div className="track-name">
						{this.props.trackInfo.name}
					</div>
					<div className="track-duration">
						{this.msToTime(this.props.trackInfo.duration_ms)}
					</div>
				</div>
			)
	}
})

export default AlbumDetailView