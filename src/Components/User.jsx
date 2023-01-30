import React from 'react';
import {useParams, useNavigate} from 'react-router-dom';

const User = () => {
	const param = useParams();
	const navigation = useNavigate();

	return (
		<div className="user">
			<button onClick={() => navigation('/about')}>CLICK ME</button>
		</div>
	);
};

export default User;
