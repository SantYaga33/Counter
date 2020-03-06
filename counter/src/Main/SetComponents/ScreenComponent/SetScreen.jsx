import React from 'react';
import styles from './SetScreen.module.css';
import CreatInput from "./CreateInput";

class SetScreen extends React.Component {

	analyzeInputStatus = (e) => {
		let target = e.currentTarget;

		if(target.getAttribute('id') === '1' ){
			this.props.setMaxValue(e);
		} else if(target.getAttribute('id') === '2' ){
			this.props.setStartValue(e);
		}
	};

	render = () => {
		let currentClass = this.props.state.inputError ? styles.input_red : '' ;

		const InputList = this.props.state.inputs.map (el =><CreatInput key={el.id} type={'number'} {...el}
																		className={currentClass} pattern={'^[0-9]+$'}
																		onChange={this.analyzeInputStatus}/>);
		return (
			<div className={styles.screen}>
				<div className={styles.discr_wrap}>
					<span className={styles.discr}>max value</span>
					<span className={styles.discr}>start value</span>
				</div>
				<div className={styles.input_wrap}>
					{InputList}
				</div>
			</div>
		);
	}
}

export default SetScreen;
