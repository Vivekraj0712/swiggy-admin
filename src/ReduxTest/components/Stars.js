import ReactStars from "react-rating-stars-component";
import React from "react";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
 
const Stars = (props) => {
 const {changeBg}=props
  const ratingChanged=(e)=>{
   changeBg(e)
  }
 
return(
    <>
  <ReactStars
    count={5}
    onChange={ratingChanged}
    size={24}
    activeColor="#ffd700"
    value={0}
  />
  <FontAwesomeIcon className="font-awesome" icon={faStar} />
  </>
)
}
export default Stars 
