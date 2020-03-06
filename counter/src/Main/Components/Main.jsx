import React from 'react';
import styles from './Main.module.css';
import Screen from "./ScreenComponent/Screen";
import Buttons from "./ButtonsComponent/Buttons";


const Main = (props) => {
	return (
		<div className={styles.main_container}>
			<div className={styles.main_wrap}>
				<Screen state={props.state}/>
				<Buttons state={props.state} addCount={props.addCount} reset={props.reset}/>
			</div>
		</div>
	);
};

export default Main;
