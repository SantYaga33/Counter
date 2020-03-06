import React from 'react';
import styles from './SetButton.module.css';
import CreatButton from "./ButtonCopmponent/CreateButton";

const SetButton = (props) => {

	const analyzeBtnStatus = (e) => {
		let target = e.currentTarget;

		if(target.getAttribute('id') === '3' ) {
			props.setCountValue();
		}
	};

	const buttonsList = props.state.buttons.map ((el, index) =>index===2 ?
											<CreatButton key={el.id} {...el} onClick={analyzeBtnStatus}
														 className={styles[el.activeClassBtn]}/> :false);

	return (
		<div className={styles.buttons}>
			<div className={styles.button_wrap}>
				{buttonsList}
			</div>
		</div>
	);
};

export default SetButton;
