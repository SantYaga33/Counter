import React from 'react';
import styles from './App.module.css'
import Main from "./Main/Components/Main";
import SetCounter from "./Main/SetComponents/SetConter";


class App extends React.Component {
	constructor (props) {
		super (props);
	}

	state = {

		startCountValue: 0,
		maxCountValue: 0,
		startCountStore: 0,
		maxCountStore: 0,
		screenTitle: 'input value and press "Set"',
		countColor: 'text', // 'red' 'green' 'error'
		inputError: false,
		buttons: [
			{ id: 1, title: 'Inc', buttonStatus: true, activeClassBtn: 'button_green' },
			{ id: 2, title: 'Reset', buttonStatus: true, activeClassBtn: 'button_red' },
			{ id: 3, title: 'Set', buttonStatus: true, activeClassBtn: 'button_green' },
		],
		inputs: [
			{ id: 1, activeClassInp: '', },
			{ id: 2, activeClassInp: '', },
		]

	};

	addCount = () => {
		if ( this.state.startCountValue < this.state.maxCountValue ) {
			this.setState ({
				startCountValue: this.state.startCountValue + 1,
			}, () => {
				if ( this.state.startCountValue === this.state.maxCountValue ) {
					this.setState ({
						countColor: 'red',
						screenTitle: this.state.startCountValue,
						buttons: this.state.buttons.map (button => {
							if ( button.id === 1 ) {
								return { ...button, buttonStatus: true, activeClassBtn: 'button_red' }
							} else {
								return button
							}
						})
					})
				} else {
					this.setState ({
						screenTitle: this.state.startCountValue
					})
				}
			});
		}
	};

	reset = () => {
		this.setState ({
			countColor: 'green',
			screenTitle: this.state.startCountStore,
			startCountValue: this.state.startCountStore,
			maxCountValue: this.state.maxCountStore,
			buttons: this.state.buttons.map (button => {
				if ( button.id === 1 ) {
					return { ...button, buttonStatus: false, activeClassBtn: 'button_green' }
				} else {
					return button
				}
			})
		});
	};

	setCountValue = () => {
		this.setState ({
			startCountValue: this.state.startCountValue,
			maxCountValue: this.state.maxCountValue,
			startCountStore: this.state.startCountValue,
			maxCountStore: this.state.maxCountValue,
			countColor: 'green',
			screenTitle: this.state.startCountValue,
			buttons: this.state.buttons.map (button => {
				if ( button.id === 1 || button.id === 2 ) {
					return { ...button, buttonStatus: false }
				} else if ( button.id === 3 ) {
					return { ...button, buttonStatus: true }
				} else {
					return button
				}
			})
		});
	};

	repeatCode = (currentCount) => {
		if ( currentCount < 0 || this.state.maxCountValue < this.state.startCountValue ||
			this.state.maxCountValue === this.state.startCountValue ) {
			this.setState ({
				inputError: true,
				screenTitle: 'Incorrect value',
				countColor: 'error',
				buttons: this.state.buttons.map (button => {
					if ( button.id === 3 ) {
						return { ...button, buttonStatus: true }
					} else {
						return button
					}
				})
			});
		} else {
			this.setState ({
				screenTitle: 'input value and press "Set"',
				countColor: 'text',
				inputError: false,
				buttons: this.state.buttons.map (button => {
					if ( button.id === 1 || button.id === 2 ) {
						return { ...button, buttonStatus: true }
					} else if ( button.id === 3 ) {
						return { ...button, buttonStatus: false }
					} else {
						return button
					}
				})
			});
		}
	};

	setMaxValue = (e) => {
		this.setState ({
			maxCountValue: +e.currentTarget.value,
		}, () => {this.repeatCode (this.state.maxCountValue)});
	};
	setStartValue = (e) => {
		this.setState ({
			startCountValue: +e.currentTarget.value,
		}, () => {this.repeatCode (this.state.startCountValue)});
	};

	render = () => {
		return (
			<div className={styles.main}>
				<SetCounter state={this.state} setCountValue={this.setCountValue} setMaxValue={this.setMaxValue}
							setStartValue={this.setStartValue}/>
				<Main state={this.state} addCount={this.addCount} reset={this.reset}/>
			</div>

		);
	}
}

export default App;


