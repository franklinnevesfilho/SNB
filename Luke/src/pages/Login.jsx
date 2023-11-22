import { useState } from "react";
import Image from "../assets/loginimg.png";
import { BiSolidLock, BiUserCircle } from "react-icons/bi";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";

const Login = ({apiCall}) => {
  
  const [togglepass, settogglepass] = useState(false);

  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const [remember, setremember] = useState("")


  const loginRequest = () =>{
    
    apiCall(
        '/auth/login',
        'POST',
        {'Content-Type': 'application/json'},
        {email, password},
        (r) => console.log(r)
    );

}

  return (
    <div className="w-full h-screen flex flex-col items-center ">
      <div className="w-[90%] md:w-[50%] lg:w-[40%] xl:w-[30%] h-full flex flex-col items-center gap-4">
        <div className="w-[90%] md:w-full h-[55%] relative flex flex-col items-center">
          <div className="w-full h-[90%] card-gradient rounded-ee-[8vmax] rounded-es-[8vmax]">
            {" "}
          </div>

          <div className="h-full w-full absolute bottom-[-4%] lg:bottom-[-8%] flex flex-col items-center justify-end gap-2">
            <div className="font-bold text-center text-white text-[2vmax]">
              Welcome Back
            </div>
            <img src={Image} className="w-[90%]" alt="" />
          </div>
        </div>

        <form className="w-[80%] flex-grow flex flex-col gap-2 md:gap-[1.5vmin] 2xl:gap-[2vmin] pt-[1.5vmax]">
          <div className="flex gap-2 rounded-full bg-slate-100 p-2 md:p-[0.6vmax] pl-4">
            <BiUserCircle className="text-[2vmax] text-slate-400" />
            <input
              className="flex-grow border-none bg-transparent outline-none "
              type="email"
              placeholder="Email"
              onChange={(e)=> { setemail(e.target.value) }}
              value={email}
            />
          </div>
          <div className="flex gap-2 items-center rounded-full bg-slate-100 p-2 md:p-[0.6vmax]  px-4">
            <BiSolidLock className="text-[2vmax] text-slate-400" />
            <input
              className="flex-grow border-none bg-transparent outline-none "
              type={`${togglepass ? "text" : "password"}`}
              placeholder="Password"
              onChange={(e)=> { setpassword(e.target.value)}}
              value={password}
            />
            {togglepass ? (
              <AiFillEye
                onClick={() => {
                  settogglepass(false);
                }}
                className="text-lg md:text-[1.5vmax] text-slate-400"
              />
            ) : (
              <AiFillEyeInvisible
                onClick={() => {
                  settogglepass(true);
                }}
                className="text-lg md:text-[1.5vmax] text-slate-400"
              />
            )}
          </div>

          <div className="flex justify-between mb-1">
            <div className="flex gap-1">
              <input type="checkbox" id="rp" onChange={()=>{ setremember(!remember)}} value={remember}/>
              <label htmlFor="rp" className="text-blue-600 font-bold text-xs md:text-sm lg:text-base 2xl:text-lg">
                Remember Password
              </label>
            </div>
            <Link to="/forget" className="text-blue-600 font-bold text-xs md:text-sm lg:text-base 2xl:text-lg">
              Forget Password?
            </Link>
          </div>

          <button onClick={loginRequest} className="w-full font-bold text-white text-[1.3vmax] rounded-full p-3 md:p-[0.8vmax] card-gradient">
            Login
          </button>

          <Link to="/signup" className="text-blue-600 font-bold text-center text-xs md:text-sm lg:text-base 2xl:text-lg">
            Don't Have an Account ? Sign Up
          </Link>
        </form>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Login;
