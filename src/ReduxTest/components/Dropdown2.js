import React from "react"
import { useSelector } from "react-redux";
import { filter_chapters } from "../../redux/actions/Action";
import {useEffect,useState} from "react"
import { useDispatch } from "react-redux";
import { Select } from '@chakra-ui/react'
const Dropdown2=(props)=>{

 const {standardId}= props  
 const subjects=useSelector((state)=>state)
 const subs=subjects.courseData[0].subjects
 
 const dispatch=useDispatch();  
 const [currentSubjects,setCurrentSubjects]=useState([]);
 const handleChange=(e)=>{
    
    dispatch(filter_chapters(standardId,e.target.value))    
 }
 useEffect(()=>{
    
    setCurrentSubjects(subs)
    console.log({subs})
},[subs])
return( 
  <>  
  <Select placeholder='Choose a Subject' onChange={handleChange} style={{width:"30%"}}>
  {currentSubjects?currentSubjects.map((i)=><option  value={i.id}>{i.subjectName}</option>):<div>loader...</div>}
</Select> 
      {/* <select onChange={handleChange} style={{height:"2rem",width:"8rem",margin:"5px"}}>
        <option selected value="0">Choose a Subject</option>
    {currentSubjects?currentSubjects.map((i)=><option  value={i.id}>{i.subjectName}</option>):<div>loader...</div>}
  </select> */}
  </>

  
  
   )
}

export default Dropdown2;