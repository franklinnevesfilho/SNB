import { useState } from "react";
import Image from "../assets/signupimg.png";
import { BiSolidLock, BiSolidUserDetail, BiUserCircle } from "react-icons/bi";
import { AiFillCalendar, AiFillEye, AiFillEyeInvisible, AiOutlineCalendar, AiTwotoneCalendar } from "react-icons/ai";
import { IoIosMail } from "react-icons/io";
import { FiEdit2 } from "react-icons/fi";
import { Link } from "react-router-dom";

const SignUp = ({ apiCall }) => {
  const [togglepass, settogglepass] = useState(false);
  const [toggleconpass, settoggleconpass] = useState(false);

  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [dob, setdob] = useState("");
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [conpassword, setconpassword] = useState("");
  const [remember, setremember] = useState(false);

  const registrationRequest = () => {
    if (password == conpassword) {
      apiCall(
        "/auth/register",
        "POST",
        { "Content-Type": "application/json" },
        {firstname, lastname, dob, username, email, password },
        (r) => console.log(r)
      );
    }
  };

  return (
    <div className="w-full h-screen flex flex-col items-center ">
      <div className="w-[90%] md:w-[50%] lg:w-[40%] xl:w-[30%] h-full flex flex-col items-center gap-4">
        <div className="w-[90%] md:w-full h-[25%] relative flex flex-col items-center">
          <div className="w-full h-[90%] card-gradient rounded-ee-[8vmax] rounded-es-[8vmax]">
            {" "}
          </div>

          <div className="h-full w-full absolute bottom-[-4%] lg:bottom-[-12%] flex flex-col items-center justify-end gap-2">
            <img src={Image} className="h-full" alt="" />
          </div>
        </div>

        <form className="w-[80%] flex-grow flex flex-col gap-2 md:gap-[1.5vmin] pt-[1vmax]">
          <div className="text-[2.5vmax] font-[800] mb-1"> Sign Up </div>


        {/* Add Firstname , lastname and date of birth block start here ---------------------- */}

          <div className="flex gap-2 items-center rounded-full bg-slate-100 p-2 md:p-[0.5vmax] pl-4">
            <BiSolidUserDetail className="text-[1.7vmax] text-slate-400" />
            <input
              className="flex-grow border-none bg-transparent outline-none "
              type="text"
              placeholder="First Name"
              onChange={(e) => {
                setfirstname(e.target.value);
              }}
              value={firstname}
            />
          </div>
          <div className="flex gap-2 items-center rounded-full bg-slate-100 p-2 md:p-[0.5vmax] pl-4">
            <BiSolidUserDetail className="text-[1.7vmax] text-slate-400" />
            <input
              className="flex-grow border-none bg-transparent outline-none "
              type="text"
              placeholder="Last Name"
              onChange={(e) => {
                setlastname(e.target.value);
              }}
              value={lastname}
            />
          </div>
          <div className="flex gap-2 items-center rounded-full bg-slate-100 p-2 md:p-[0.5vmax] pl-4">
            <AiTwotoneCalendar className="text-[1.7vmax] text-slate-400" />
            <input
              className="flex-grow border-none bg-transparent outline-none "
              type="date"
              onChange={(e) => {
                setdob(e.target.value);
              }}
              value={dob}
            />
          </div>

        {/*  block End here ---------------------- */}



          <div className="flex gap-2 rounded-full bg-slate-100 p-2 md:p-[0.5vmax] pl-4">
            <BiUserCircle className="text-[2vmax] text-slate-400" />
            <input
              className="flex-grow border-none bg-transparent outline-none "
              type="text"
              placeholder="Username"
              onChange={(e) => {
                setusername(e.target.value);
              }}
              value={username}
            />
          </div>
          <div className="flex gap-2 rounded-full bg-slate-100 p-2 md:p-[0.5vmax] pl-4">
            <IoIosMail className="text-[2vmax] text-slate-400" />
            <input
              className="flex-grow border-none bg-transparent outline-none "
              type="email"
              placeholder="Email"
              onChange={(e) => {
                setemail(e.target.value);
              }}
              value={email}
            />
          </div>
          <div className="flex gap-2 items-center rounded-full bg-slate-100 p-2 md:p-[0.5vmax]  px-4">
            <BiSolidLock className="text-[2vmax] text-slate-400" />
            <input
              className="flex-grow border-none bg-transparent outline-none "
              type={`${togglepass ? "text" : "password"}`}
              placeholder="Password"
              onChange={(e) => {
                setpassword(e.target.value);
              }}
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
          <div className="flex gap-2 items-center rounded-full bg-slate-100 p-2 md:p-[0.5vmax]  px-4">
            <BiSolidLock className="text-[2vmax] text-slate-400" />
            <input
              className="flex-grow border-none bg-transparent outline-none "
              type={`${toggleconpass ? "text" : "password"}`}
              placeholder="Password"
              onChange={(e) => {
                setconpassword(e.target.value);
              }}
              value={conpassword}
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

          <div className="flex justify-between mb-1">
            <div className="flex gap-1">
              <input type="checkbox" id="rp" onChange={()=>{ setremember(!remember)}} value={remember}/>
              <label
                htmlFor="rp"
                className="text-blue-600 font-bold text-xs md:text-sm lg:text-base 2xl:text-lg"
              >
                Remember Password
              </label>
            </div>
          </div>

          <button
            onClick={registrationRequest}
            className="w-full card-gradient font-bold text-white text-[1.3vmax] rounded-full p-3 md:p-[0.4vmax]"
          >
            SignUp
          </button>

          <Link
            to="/login"
            className="text-blue-600 font-bold text-center text-xs md:text-sm lg:text-base 2xl:text-lg"
          >
            {" "}
            Already Have an Account ? Sign In
          </Link>
        </form>
        {/* </div> */}
      </div>
    </div>
  );
};

export default SignUp;
