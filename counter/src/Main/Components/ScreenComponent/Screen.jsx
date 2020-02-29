import React from 'react';
import styles from './Screen.module.css';

const Screen = (props) => {
	return (
		<div className={styles.screen}>
			<div className={styles.screen_text}>{props.state.countValue}</div>
		</div>
	);
};

export default Screen;
