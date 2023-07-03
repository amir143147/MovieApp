import React, {useState,useEffect} from "react";
import { useParams } from "react-router-dom";



let Singlemovie=()=>{
    let {id}=useParams();
    let [movie,setmovie]=useState([]);
    let [loading,setloading]=useState(true)
    useEffect(()=>{
       getdata()
    },[id])
    
    let getdata=async ()=>{
        // let url=`http://img.omdbapi.com/?apikey=6661c859&i=${id}`;
            // let url=`https://www.omdbapi.com/?apikey=6661c859&s=harry%20potter`;
            let url=`http://www.omdbapi.com/?apikey=6661c859&i=${id}`;
            // let url=`https://www.omdbapi.com/?apikey=6661c859&i=${id}`;
       let res=await fetch(url);
       let data=await res.json();
       setTimeout(()=>setloading(false),3000)
       return setmovie(data);
       
    }
    return(
        <>
        {
            loading ? <h1>Please wait detail is fetching.....</h1> :
            <div className="container" key={id}>
        <div className="row">
        <div className="col-8 py-4">
        <div className="row py-5" >
        <div className="col-3 offset-2">
            <img alt="img" className="" src={movie.Poster}/>
        </div>
        <div className="col-4 offset-3">
            <h3>Title:{movie.Title}</h3>
            <h3>Year:{movie.Year}</h3>
            <h3>Date:{movie.Released}</h3>
            <h3>Country:{movie.Country}</h3>
            <h3>Language:{movie.Language}</h3>
            <h3>Director:{movie.Director}</h3>
        </div>
        
        </div>
        </div>
        </div>
        </div>

        }
        
       
        </>
    );
}

export default Singlemovie;