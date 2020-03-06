import React from 'react';
import styles from './Screen.module.css';

class Screen extends React.Component {

	render = () => {
		let currentClass = this.props.state.countColor === 'text' ? styles.screen_text :
			this.props.state.countColor === 'red' ? styles.screen_red : this.props.state.countColor === 'error' ?
				styles.screen_error : styles.screen_green;
		return (

			<div className={styles.screen}>
				<div className={currentClass}>{this.props.state.screenTitle}</div>
			</div>
		);
	}
}

export default Screen;
