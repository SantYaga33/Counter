import React from 'react';
import Main from "./Main/Main";


class App extends React.Component {
	constructor (props) {
		super (props);
	}

	state = {

		countValue: 0,
		maxCountValue: 8,
		buttons: [
			'1',  { id: 1, title: 'Inc', buttonStatus: false, activeClassBtn: '' } ,
			'2',  { id: 2, title: 'Reset', buttonStatus: false, activeClassBtn: '' }
		],

	};

	addCount = () => {
		if (this.state.countValue < this.state.maxCountValue ) {
			this.setState ({
				countValue: this.state.countValue + 1,

			});
		}else {
			this.setState ({
				countValue: this.state.maxCountValue,


			});
		}
	};

	reset = () => {
		this.setState ({
			countValue: 0,

		});

	};

	render = () => {
		return (
			<Main state={this.state} addCount={this.addCount}  reset={this.reset}/>
		);
	}
}

export default App;


