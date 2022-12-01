import React from 'react';
import Dropdown from './Dropdown';
import ChapterComponent from './ChapterComponent';

const Test1 = () => {
	return (
		<>
			<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
				<Dropdown />
				<ChapterComponent />
			</div>
		</>
	);
};

export default Test1;
