import { useEffect, useState } from "react"
import { getShows } from '../api';
import { ShowsList } from "../components/ShowsList";


export  function ShowsPage() {

  const [shows, setShows] = useState([]);

  useEffect(()=>{}, [])
  getShows().then(data => {
    console.log(data);
    setShows(data);
  })



  return (
    <div className=" p-8 pt-[9rem]">
      <ShowsList shows={shows}/>
    </div>
  )
}
