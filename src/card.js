import React from "react";
import { NavLink } from "react-router-dom";

let Card=({v})=>{

   return(
    <>
     <div className="col-md-4 ">
        
   <NavLink to={`/movie/${v.imdbID}`}  style= {{textDecoration:"none"}} >
    
    <div className="card" key={v.imdbID} >
        <img className="card-img"  alt="img" src={v.Poster} />
        <div className="card-body">
            <div className="card-title">{v?v.Title:""}</div>
            <div className="card-runtime">
               
                <span className="card-rating">{v?v.year:""}</span>
            </div>
            <div className="card-description">{v?v.Type:""}</div>
        </div>
    </div>
    
   </NavLink>
   </div>
    </>
   );

}
export default Card;