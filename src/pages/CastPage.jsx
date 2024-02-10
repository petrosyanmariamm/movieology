import { useState, useEffect } from "react";
import { getShowsCast } from  "../api";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { CastList } from "../components/CastList";




export  function CastPage() {

  const [cast, setCast] = useState([]);
  const navigate = useNavigate();
  const {id} = useParams();

  useEffect(()=>{
    getShowsCast(id).then(data=>{
      console.log(data);
      setCast(data);
    })
  }, []);

  return (
    <div className=" p-8 pt-[9rem]">
      <button className=" bg-red-500 text-white p-2  rounded" onClick={()=>navigate(-1)}>Back</button>
      <div className=" font-bold my-8 text-white text-[2rem] text-center"> Cast
        <CastList cast={cast}/>
      </div>
    </div>
  )
}
