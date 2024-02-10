import { useNavigate } from "react-router-dom";
import { BsFillArrowRightCircleFill} from "react-icons/bs";


export  function HomePage() {

  const navigate = useNavigate();

  return (
    <div className=' mx-auto p-8 pt-[20rem]  flex justify-center items-center flex-col'>
          <div className=' text-white font-bold text-[3rem]'>Ready to watch?  Let's start</div>
          <button onClick={()=> navigate('/shows')} className=' flex items-center gap-2 bg-red-600 text-white p-3 rounded-full'>Get started ?
          <BsFillArrowRightCircleFill/>
          </button>
    </div>
  )
}
