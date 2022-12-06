import React, { useCallback, useState } from 'react';

// const Test = () => {
// 	const [userName, setUserName] = useState(0);
// 	const [age, setage] = useState('');

// 	// const logData = () => console.log('data logged like pro!!!!!');
// 	// const logData = useCallback(() => console.log('data logged like pro!!!!!'), []);

// 	// const changeAgeTo50 = () => setage(50);
// 	const changeAgeTo50 = useCallback(() => setage(50), [age]);

// 	const handleUserName = (e) => setUserName(e.target.value);
//     console.log({handleUserName});

// 	return (
// 		<div style={{ height: '20em', fontSize: '3em' }}>
// 			<div>Test</div>
// 			{userName}

// 			<input style={{ border: '2px solid green' }} value={userName} onChange={handleUserName} />
// 			{age}
// 			<Child {...{ changeAgeTo50, age }} />
// 		</div>
// 	);
// };

const Test = () => {
	const [counter, setCounter] = useState(0);

	// const handleChange = useCallback((e) => {
	// 	let idd = e.target.id;
	// 	let sessionCount = window.sessionStorage.getItem('counter') ? parseInt(window.sessionStorage.getItem('counter')) : 0;
	// 	if (idd === 'add') {
	// 		setCounter(sessionCount + 1);
	// 		window.sessionStorage.setItem('counter', sessionCount + 1);
	// 	}
	// 	if (idd === 'sub') {
	// 		setCounter(sessionCount - 1);
	// 		// window.sessionStorage.getItem('counter')
	// 		window.sessionStorage.setItem('counter', sessionCount - 1);
	// 	}
	// 	if (idd === 'text') {
	// 		setCounter(parseInt(e.target.value));
	// 		window.sessionStorage.setItem('counter', parseInt(e.target.value));
	// 	}
	// }, []);

	const handleChange = (e) => {
		let idd = e.target.id;
		let sessionCount = window.sessionStorage.getItem('counter') ? parseInt(window.sessionStorage.getItem('counter')) : 0;
		if (idd === 'add') {
			setCounter(sessionCount + 1);
			window.sessionStorage.setItem('counter', sessionCount + 1);
		}
		if (idd === 'sub') {
			setCounter(sessionCount - 1);
			window.sessionStorage.setItem('counter', sessionCount - 1);
		}
		if (idd === 'text') {
			setCounter(parseInt(e.target.value));
			window.sessionStorage.setItem('counter', parseInt(e.target.value));
		}
	};

	return (
		<div style={{ height: '20em', fontSize: '3em' }}>
			Counter value
			<p style={{ fontSize: '1.4em' }}>{counter}</p>
			<CartCounter {...{ handleChange }} />
		</div>
	);
};

const CartCounter = React.memo((props) => {
	const { handleChange } = props;

	console.log('CHILD CALLED');

	return (
		<div>
			<button onClick={handleChange} id='add'>
				+
			</button>
			<input style={{ border: '2px solid gray' }} onChange={handleChange} id='text' />
			<button onClick={handleChange} id='sub'>
				-
			</button>
		</div>
	);
});

const isEqual = (prevProps, nextProps) => {
	console.log({ prevProps, nextProps });
	// if (prevProps.cart.total.subtotal.final === nextProps.cart.total.subtotal.final) return true;
	return false;

	// false => re-rendering
	// true => no re-rendering
};
const Child = React.memo((props) => {
	const { changeAgeTo50 } = props;
	console.log('CHILD LOGGED PROPS ', props);
	return (
		<div>
			<button onClick={changeAgeTo50} style={{ border: '2px solid orange' }}>
				update age
			</button>
		</div>
	);
}, isEqual);

export default Test;
