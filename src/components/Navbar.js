import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = ({ setCurrentUser, currentUser }) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    setCurrentUser(null);
    navigate("/");
  };
  return (
    <nav className="bg-blue-500 py-5 text-white">
      <div className="container w-[90%] mx-auto flex items-center justify-between">
        <h1 className="text-lg md:text-xl">FacePrep Task</h1>
        {currentUser && (
          <button
            onClick={handleLogout}
            className="bg-red-500 rounded-md py-2 px-3"
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
