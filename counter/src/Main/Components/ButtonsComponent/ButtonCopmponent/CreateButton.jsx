import React from 'react';

const CreatButton = ({id,title,buttonStatus,onClick,className}) => {

	return <button   disabled={buttonStatus} onClick={onClick} id={id}
					 className={className}>{title}</button>
};

export default CreatButton;
