import React,{useState} from 'react';

import axios from "axios"
import Recipe from './Recipe';


function Home() {
 
  const [query, setquery] = useState("")
  const [state, setstate] = useState([]);
  const [filter, setfilter] = useState("vegan")
  
  const url = `https://api.edamam.com/search?q=${query}&app_id=c75700fc&app_key=
  6e23116f39483ed109b65e8a8faabd4c&&health=${filter}`;

  const fetchData =async ()=>{
    const res = await axios.get(url)
     setstate(res.data.hits)
    console.log(res.data)
    

  }

  const onSubmit= (e)=>{
      e.preventDefault()
      fetchData();
  }
  return (
    <div className="container">
        <div className="row text-center">
            <h1 className="my-3">Search Any Food</h1>
            <div className="col-md-6 mx-auto my-5">
                <form onSubmit={onSubmit}>
                    
             <input className="form"  type="text" placeholder="search" value={query} onChange={(e)=>setquery(e.target.value)}   />
           <input   type="submit"  value="search" className="mx-2 btn-primary form1" />
         
          
           </form>
         
            </div>
            <div className="col-md-12">
                    <div className="row">
            {state.map((recipe)=>{
                return(
                    
                        <div className="col-md-4">
                    <Recipe recipe={recipe}/>
                    </div>
                   
                )
            })}
            </div>
            </div>
        </div>

    </div>
  )
}

export default Home
