import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { filter_standards, filter_subjects } from '../../../redux/actions/Action';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { Select } from '@chakra-ui/react';
import Dropdown2 from './Dropdown2';
const testData = require('../../../redux/Data.json');

const Dropdown = () => {
	const [standard, setStandard] = useState();
	const reduxData = useSelector((state) => state.courseData);
    console.log({reduxData})
	const dispatch = useDispatch();

	const handleChange = (e) => {
		let currentStandard = e.target.value;
		setStandard(currentStandard);
		dispatch(filter_subjects(currentStandard));
	};

	return (
		<>
			{
				<Select value={standard} onChange={handleChange} placeholder='Choose a Standard' style={{ width: '30%' }}>
					{reduxData ? (
						reduxData.map((item) => {
							return <option value={item.Standard}>{item.Standard}</option>;
						})
					) : (
						<div>loader...</div>
					)}
				</Select>
			}

			<Dropdown2 standardId={standard} />
		</>
	);
};

export default Dropdown;
