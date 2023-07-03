import React, { useContext } from "react";
import Card from "./card";
import {AppContext} from "./Context";
import Search from "./Search";



let Home=()=>{
    let {movie} = useContext(AppContext);
    // console.log(movie);
    return (
        <div>
            <h2 className ="text-center"><Search/></h2>  
        <div className ="container py-5">
            
        <div className ="row py-5" >
            
        
        
        {
            movie.map((v)=>{
             return (
             <>
            
                <Card v={v}  />
             
             
             
             </>)
                
                

            })
        }

        </div>
        </div>

       
        </div>
    );
}

export default Home;