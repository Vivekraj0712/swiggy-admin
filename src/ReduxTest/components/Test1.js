import React from 'react';
import Dropdown from './Dropdown';
import ChapterComponent from './ChapterComponent';

const Test = () => {
	return (
		<>
			<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
				<Dropdown />
				<ChapterComponent />
			</div>
		</>
	);
};

export default Test;
