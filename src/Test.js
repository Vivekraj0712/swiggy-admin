import React, { useEffect } from 'react';

const Test = () => {
	useEffect(() => {
		// document.getElementById('grandparent').addEventListener('click', () => {
		// 	console.log('grand parent clicked');
		// });
		// document.getElementById('parent').addEventListener('click', () => {
		// 	console.log(' parent clicked');
		// });
		// document.getElementById('child').addEventListener('click', () => {
		// 	console.log('child clicked');
		// });
		// document.getElementById('grandparent').addEventListener(
		// 	'click',
		// 	() => {
		// 		console.log('grand parent clicked');
		// 	},
		// 	true
		// );
		// document.getElementById('parent').addEventListener(
		// 	'click',
		// 	() => {
		// 		console.log(' parent clicked');
		// 	},
		// 	true
		// );
		// document.getElementById('child').addEventListener(
		// 	'click',
		// 	() => {
		// 		console.log('child clicked');
		// 	},
		// 	true
		// );
	}, []);

	// document.getElementById('grandparent').addEventListener('click', () => {
	// 	console.log('grand parent clicked');
	// });

	// document.getElementById('parent').addEventListener('click', () => {
	// 	console.log(' parent clicked');
	// });
	// document.getElementById('child').addEventListener('click', () => {
	// 	console.log('child clicked');
	// });

	// const div1 = () => console.log('outermost ', 1);
	// const div2 = () => console.log('outer ', 2);
	// const div3 = () => console.log('inner most', 3);

	//event bubbling

	//   document.getElementById("grandparent").addEventListener("click", () => {
	//     console.log("grand parent clicked");
	//   },true);

	//   document.getElementById("parent").addEventListener("click", () => {
	//     console.log(" parent clicked");
	//   },true);
	//   document.getElementById("child").addEventListener("click", () => {
	//     console.log("child clicked");
	//   },true);
	//   // event capturing

	return (
		<div style={{ fontSize: '4em' }}>
			<br />
			<div style={{ border: '2px solid red', width: '10em' }} id='grandparent'>
				Hello1
				<br />
				<div id='parent' style={{ border: '2px solid blue', width: '5em' }}>
					hello2
					<div style={{ border: '2px solid green', width: '3em' }} id='child'>
						hello3
					</div>
				</div>
			</div>
		</div>
	);
};

export default Test;
