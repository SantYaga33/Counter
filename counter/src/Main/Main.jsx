import React from 'react';
import styles from './Main.module.css';
import Screen from "./Components/ScreenComponent/Screen";
import Buttons from "./Components/ButtonsComponent/Buttons";


const Main = (props) => {
	return (
		<div className={styles.main}>
			<div className={styles.main_container}>
				<div className={styles.main_wrap}>
					<Screen state={props.state}/>
					<Buttons state={props.state} addCount={props.addCount} reset={props.reset}/>
				</div>
			</div>
		</div>
	);
};

export default Main;
