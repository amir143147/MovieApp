import React, { useEffect, useState } from "react";


let AppContext=React.createContext();

let Appprovider=({children})=>{
    let moviename='harry potter';
    let [movie,setmovie]=useState([]);
    let [query,setquery]=useState(moviename);
    let [isloading,setisloading]=useState(true);


    useEffect(()=>{
        let cleartimer=setTimeout(()=>{
            getdata();
           
        },3000)
        return ()=> clearTimeout(cleartimer);
    },[query]);
    
    
    let getdata =   async ()=>{
            let url=`https://www.omdbapi.com/?apikey=6661c859&s=${query}`;
            // let url="https://www.omdbapi.com/?apikey=6661c859&s=titanic";
       let res=await fetch(url);
       let data=await res.json();
       console.log(data);
       if(data.Response==="True"){
        setisloading(false);
        setmovie(data.Search);
       }
       else{
             <>
             <p>data not found </p>
             </> 
       }
        
    }
    return(
        <>
            <AppContext.Provider value={{movie,isloading,query,setquery}}> {children} </AppContext.Provider>;
        </>
    );
};





export {AppContext,Appprovider};