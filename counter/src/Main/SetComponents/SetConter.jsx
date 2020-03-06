import React from 'react';
import styles from './SetCounter.module.css';
import SetScreen from "./ScreenComponent/SetScreen";
import SetButton from "./ButtonsComponent/SetButton";

const SetCounter = (props) => {
	return (
		<div className={styles.main_container}>
			<div className={styles.main_wrap}>
				<SetScreen state={props.state} setMaxValue={props.setMaxValue} setStartValue={props.setStartValue}/>
				<SetButton state={props.state} setCountValue={props.setCountValue} />
			</div>
		</div>
	);
};

export default SetCounter;
