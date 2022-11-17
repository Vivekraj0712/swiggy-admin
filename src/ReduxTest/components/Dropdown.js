import React, { useEffect } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux';
import {filter_standards, filter_subjects} from '../../redux/actions/Action';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {useState} from "react"
import { Select,Box } from '@chakra-ui/react'
import Dropdown2 from './Dropdown2';
const testData = require('../../redux/Data.json');


const Dropdown=()=>{
    const [standard,setStandard]=useState(0);
    const [standardArray,setStandardArray]=useState([])
    const reduxData = useSelector((state) => state);	
    
     //console.log({standardArray});
    const dispatch=useDispatch();
	const manageAddRedux = () => {
		dispatch(filter_standards(testData));
	};
  
    const handleChange=(e)=>{
        let currentStandard=e.target.value;
        setStandard(currentStandard);
        //console.log("standard in handlechange",currentStandard)
        dispatch(filter_subjects(currentStandard))
    }

useEffect(()=>{
  manageAddRedux()
  setStandardArray(reduxData)    
       }
    ,[])
        return(
        <>    
            
        
            {<Select onChange={handleChange} placeholder='Choose a Standard' style={{width:"30%"}}>
        

            {standardArray.courseData?standardArray.courseData.map((item)=>{return <option  value={item.Standard}>{item.Standard}</option>}):<div>loader...</div>}
            </Select>}    
          
        {/* { <select onChange={handleChange} style={{height:"2rem",color:"black",width:"8rem"}}>
            <option selected value="0">Choose a Standard</option>
            {standardArray.courseData?standardArray.courseData.map((item)=>{return <option  value={item.Standard}>{item.Standard}</option>}):<div>loader...</div>}
        </select> } */}
        
        <Dropdown2 standardId={standard}/>
        
        
             </>
    )
}

export default Dropdown