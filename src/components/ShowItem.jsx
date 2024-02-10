import { useNavigate } from "react-router-dom";


export  function ShowItem({item}) {

    const navigate = useNavigate()
  return (
    <div className=" flex justify-center items-center flex-col bottom-2 rounded p-2 hover:scale-110 duration-700 cursor-pointer border-3 border
    " onClick={()=> navigate('/shows/' + item.id)}>
        <img src={item.image.medium} alt={item.name}/>
        <div className=" text-white text-center font-bold">{item.name}</div>
    </div>
  )
}
