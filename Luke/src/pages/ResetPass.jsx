import { useState } from "react";
import Image from "../assets/resetimg.png";
import { BiSolidLock, BiUserCircle } from "react-icons/bi";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { IoIosMail } from "react-icons/io";

const ResetPass = () => {
  const [togglepass, settogglepass] = useState(false);
  const [toggleconpass, settoggleconpass] = useState(false);

  const [password, setpassword] = useState("")
  const [conpassword, setconpassword] = useState("")

  return (
    <div className="w-full h-screen flex flex-col items-center ">
      <div className="w-[90%] md:w-[50%] lg:w-[40%] xl:w-[30%] h-full flex flex-col items-center gap-4">
        <div className="w-[90%] md:w-full h-[45%] relative flex flex-col items-center">
          <div className="w-[90%] h-[90%] card-gradient rounded-ee-[8vmax] rounded-es-[8vmax]">
            {" "}
          </div>

          <div className="h-full w-full absolute bottom-[-4%] lg:bottom-[-10%] flex flex-col items-center justify-end gap-2">
           
            <img src={Image} className="h-[110%]" alt="" />
          </div>
        </div>

        <form className="w-[80%] flex-grow flex flex-col gap-2 md:gap-[1.5vmin] 2xl:gap-[2vmin] pt-[1.5vmax]">
        <div className="text-[2.5vmax] font-[800] mb-2"> Reset <br/> Password?</div>
          
        <div className="flex gap-2 items-center rounded-full bg-slate-100 p-2 md:p-[0.6vmax]  px-4">
            <input
              className="flex-grow border-none bg-transparent outline-none px-2 "
              type={`${togglepass ? "text" : "password"}`}
              placeholder="New Password"
              value={password}
              onChange={(e)=>{setpassword(e.target.value)}}
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
          <div className="flex gap-2 items-center rounded-full bg-slate-100 p-2 md:p-[0.6vmax]  px-4">
            <input
              className="flex-grow border-none bg-transparent outline-none px-2 "
              type={`${toggleconpass ? "text" : "password"}`}
              placeholder="Confirm New Password"
              value={conpassword}
              onChange={(e)=>{setconpassword(e.target.value)}}
            />
            {toggleconpass ? (
              <AiFillEye
                onClick={() => {
                  settoggleconpass(false);
                }}
                className="text-lg md:text-[1.5vmax] text-slate-400"
              />
            ) : (
              <AiFillEyeInvisible
                onClick={() => {
                  settoggleconpass(true);
                }}
                className="text-lg md:text-[1.5vmax] text-slate-400"
              />
            )}
          </div>

    

          <button className="w-full card-gradient font-bold text-white text-[1.3vmax] rounded-full p-3 md:p-[0.8vmax]">
            Submit
          </button>

        </form>
        {/* </div> */}
      </div>
    </div>
  );
};

export default ResetPass;
