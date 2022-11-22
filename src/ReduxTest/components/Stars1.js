import { faStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./bg.css"
const Star1=(props)=>{
   const {clickFunc,id}=props
   console.log({id})
 return(
    
    <FontAwesomeIcon onClick={()=>clickFunc(id)} id={id} icon={faStar} />
 )
}

export default Star1