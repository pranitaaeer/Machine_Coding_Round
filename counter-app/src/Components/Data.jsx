
import { useEffect, useState } from "react"
import "../style/data.css"
import axios from "axios"

const Data = () => {
  const [data,setData]=useState([])

  
  useEffect(()=>{
    const fetchData=async()=>{
      const res=await axios.get("https://jsonplaceholder.typicode.com/comments")
      setData(res.data)
      console.log("data",res.data)
    }
    fetchData()
  },[])
  return (
    <div className="box">
       <div className="topbar">Your comments</div>
        <div className="stats-container">
          {data.length>0 ? (
           data.slice(0,10).map((elm)=>(
               <div className="stats" key={elm.id}>
            <h1>{elm.name}</h1>
            <h3>{elm.email}</h3>
            <p>{elm.body}</p>
               </div>
            ))
          ) :(
            <p>No data found</p>
          )}
        </div>
    </div>
  )
}

export default Data
