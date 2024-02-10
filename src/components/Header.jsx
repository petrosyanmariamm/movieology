import { useState } from 'react';
import logo from '../img/movielogy.png';
import { BsFillPeopleFill} from 'react-icons/bs';
import { AiFillCloseCircle } from "react-icons/ai";
import { Link } from 'react-router-dom';



export  function Header() {

    const [user, setUser] = useState(false);

  return (
    <div>
    <nav className=' fixed w-full flex justify-between items-center p-6 px-24 bg-black/40'>
        <Link to={'/'} className=' cursor-pointer'>
            <img src={logo} alt='logoImage' width='200px'/>
        </Link>
        <div className=' text-orange-700 text-2xl cursor-pointer' onClick={()=> setUser(!user)}>
            <BsFillPeopleFill/>
        </div>
    </nav>

    {
        user &&
        <div className=' fixed top-0 left-0 right-0 bottom-0 bg-black/70 w-full flex justify-center items-center'>
            <form className=' bg-white py-8 px-12 text-center'>
                <div className=' text-gray-900 font-bold  text-[30px]'>LOGIN</div>
                <input type='email' placeholder='Enter Your Email' className=' w-[100%] rounded p-1 border-2 border-orange-700 my-1'/>
                <input type='password' placeholder=' Enter Your Password' className=' w-[100%] rounded p-1 border-2 border-orange-700 my-1'/>
                <input type='submit' value='Login Now' className=' p-2 bg-orange-700 text-white rounded cursor-pointer w-[100%] my-1'/>
                <input type='checkbox' /><span>Remember me</span>
                <div>
                    Forgot Password? <a href='#' className=' text-orange-700'>Click Here</a>
                </div>
                <div>
                    Don't Have An Account <a href='#' className=' text-orange-700'>Register Now</a>
                </div>
            </form>

            <div>
            <AiFillCloseCircle className=" text-white text-3xl absolute top-4 
                    right-6 cursor-pointer"
                    onClick={() => setUser(false)} />
            </div>
        </div>
    }
    </div>
    
  )
}
