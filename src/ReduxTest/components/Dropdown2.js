import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { filter_chapters } from '../../redux/actions/Action';
// import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Select } from '@chakra-ui/react';
const Dropdown2 = (props) => {
	// const { standardId } = props;
	const [selectedSubject, setselectedSubject] = useState();
	const currentSubjects = useSelector((state) => state.currentSubjects);
	// const subs = subjects.courseData[0].subjects;

	const dispatch = useDispatch();
	// const [currentSubjects, setCurrentSubjects] = useState([]);
	const handleChange = (e) => {
    console.log({e});
		setselectedSubject(e.target.value);
		// setCurrentChapter(e.target.value);
		dispatch(filter_chapters(e.target.value));
	};
	// useEffect(() => {
	// 	setCurrentSubjects(subs);
	// 	console.log({ subs });
	// }, [subs]);

	return (
		<>
			<Select value={selectedSubject} placeholder='Choose a Subject' onChange={handleChange} style={{ width: '30%' }}>
				{currentSubjects ? currentSubjects.map((i) => <option value={i.id}>{i.subjectName}</option>) : <div>loader...</div>}
			</Select>
		</>
	);
};

export default Dropdown2;
