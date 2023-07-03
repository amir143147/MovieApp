import React, {  useContext } from "react";
import { AppContext} from "./Context";



let Search=()=>{
    let {query,setquery}=useContext(AppContext);
//  function a(e){
//     return setquery(e.target.value)
//  }
// function handlechange(e){
    
//       let value=e.toLowerCase();
//       if(value==""){
//         return query;
//       }
//       else{avenger  underworld
//         // setquery(value.match(url));

//       }

// }

        //   if(query.match(url)){
        //     return url;
        //   }
        //   else{
        //     setquery(query);
        //   }
   
    
    return(
        <div>
        <h2>Search your Favourite movie here </h2>
        <form  onSubmit={(e)=>
            e.preventDefault()}>
            <div>
                <input 
                type="text" 
                placeholder="search here"
                value={query}
                onChange = {(e)=> 
                    // handlechange(e.target.value)
                     {
                   setquery(e.target.value);
            } 
                }
                 />
            </div>

        </form>
        </div>
    );
}

export default Search;