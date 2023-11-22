import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  const [allListings, setListings] = React.useState([]);

  const makeQuery = () => {
    let url = "https://sandbbackend.onrender.com";
    let path = "/personal-listings";
    let query = url + path;

    callAPI(query).catch(console.error);
  };

  const callAPI = async (query) => {
    const response = (await fetch(query)).json();
    const node = await response.node;
    setListings(node);
  };

  return (
    <div className="h-screen w-screen card-gradient grid grid-rows-[10%_90%]">
      <div className="flex justify-center items-center gap-4">
        <Link to="/signup" className="border-black border-2 rounded-[1vmax] font-bold p-[0.8vmax] px-[1vmax] bg-blue-300">Sign Up</Link>
        <Link to="/login" className="border-black border-2 rounded-[1vmax] font-bold p-[0.8vmax] px-[1vmax] bg-green-300">Login</Link>
      </div>
      <div className="flex-grow flex justify-center items-center">
        <h1 className="font-bold text-[5vmax] text-white [text-shadow:_0_2px_#000,2px_0_#000,-2px_0_#000,0_-2px_#000]">
          HomePage
        </h1>
      </div>
    </div>
  );
}

export default HomePage;
