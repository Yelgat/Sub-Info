import React, { Component } from 'react';

import Hours from './Hours.jsx';

export default class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			hours: {
				Sunday: '12:00pm - 3:00pm',
				Monday: '10:30am - 5:30pm',
				Tuesday: '10:30am - 5:30pm',
				Wednesday: '10:30am - 5:30pm',
				Thursday: '10:30am - 5:30pm',
				Friday: '10:30am - 5:30pm',
				Saturday: 'Closed'
			},
			address: '123 Fake Street',
			address2: 'Suite 4',
			city: 'San Francisco',
			state: 'CA',
			zip: '94103',
			phone: '(415) 123-4567',
			webAddress: 'restaurant.com'
		}
	}

	render() {
		return(
			<div className="subInfo">
				<ul>
					{Object.keys(this.state.hours).map((hour, i) => {
							return <Hours key={i} day={hour} time={this.state.hours[hour]} />
						})
					}
				</ul>
				<p><a>{this.state.address}, {this.state.address2}<br />
				{this.state.city}, {this.state.state} {this.state.zip}</a></p>
				<p><a>{this.state.phone} </a></p>
				<p><a>{this.state.webAddress}</a></p>
			</div>
		);
	}
}