import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";



export  function Cast({item}) {

    const navigate = useNavigate();

  return (
    <Link className=" flex justify-center items-center flex-col my-2 
      cursor-pointer" to={'https://en.wikipedia.org/wiki/' + item.person.name}>
        <img src={item.person.image.medium} alt="castImg"/>
        <div className=" text-center text-white font-bold">{item.person.name}</div>
    </Link>
  )
}
