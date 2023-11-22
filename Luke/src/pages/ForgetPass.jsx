import { useState } from "react";
import Image from "../assets/loginimg.png";
import { BiSolidLock, BiUserCircle } from "react-icons/bi";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { IoIosMail } from "react-icons/io";

const ForgetPass = () => {
  const [togglepass, settogglepass] = useState(false);
  const [email, setemail] = useState("");
  return (
    <div className="w-full h-screen flex flex-col items-center ">
      <div className="w-[90%] md:w-[50%] lg:w-[40%] xl:w-[30%] h-full flex flex-col items-center gap-4">
        <div className="w-[90%] md:w-full h-[55%] relative flex flex-col items-center">
          <div className="w-full h-[90%] card-gradient rounded-ee-[8vmax] rounded-es-[8vmax]">
            {" "}
          </div>

          <div className="h-full w-full absolute bottom-[-4%] lg:bottom-[-8%] flex flex-col items-center justify-end gap-2">
           
            <img src={Image} className="w-full" alt="" />
          </div>
        </div>

        <form className="w-[80%] flex-grow flex flex-col gap-2 md:gap-[1.5vmin] 2xl:gap-[2vmin] pt-[1.5vmax]">
        <div className="text-[2.5vmax] font-[800] mb-2"> Forget <br/> Password?</div>
          
          <div className="flex gap-2 rounded-full bg-slate-100 p-2 md:p-[0.6vmax] pl-4">
            <IoIosMail className="text-[2vmax] text-slate-400" />
            <input
              className="flex-grow border-none bg-transparent outline-none "
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e)=>{setemail(e.target.value)}}
            />
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

export default ForgetPass;
