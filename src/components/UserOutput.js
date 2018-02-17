import React from 'react';
import './UserOutput.css'

const userOutput = (props) => {
	return (
		<div className="UserOutput">
			<p>{props.username}</p>
			<p>some text 2</p>
		</div>
		)
}

export default userOutput;