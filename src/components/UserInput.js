import React from 'react';

const userInput = (props) => {
	const style = {
		width: '70%',
		border: '1px solid orange',
		borderRadius: '5px',
		padding: '3px',
		margin: '5px auto'
	}
	return (
		<div style={style}>
			<input type="text" onChange={props.changeUsername} value={props.currentValue} />
		</div>
		)
}

export default userInput;