import { faStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react"
import "./bg.css"
const Star1=React.forwardRef((props,ref)=>{
   const {clickFunc,id}=props
   console.log({ref})
   console.log({id})
 return(
    
    <FontAwesomeIcon onClick={()=>clickFunc(id)} ref={ref} id={id} icon={faStar} />
 )
})

export default Star1