import React from 'react';

const CreatInput = ({id,className,type,pattern,onChange}) => {

	return <input  id={id} type={type} className={className} pattern={pattern} onChange={onChange}/>
};

export default CreatInput;
