import React from "react";

const Card = ({ user }) => {
  return (
    <div className="flex items-center justify-between border-2 w-full p-5 my-1">
      <h1>{user.title}</h1>
      <img
        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
        alt="Person"
        className="w-[20%] rounded-full"
      />
    </div>
  );
};

export default Card;
