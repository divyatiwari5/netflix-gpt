import React from "react";

const Login = () => {
  return (
    <div className="absolute top-[30%] left-[35%]">
      <form className="bg-black p-7 flex gap-3 flex-col w-[400px]">
        <p className="text-white font-bold text-3xl">Sign In</p>
        <input
          className="h-12 p-2 m-2 bg-black border-white border rounded-md text-white"
          type="text"
          placeholder="Enter Email"
        />
        <input
          className="h-12 p-2 m-2 bg-black border-white border rounded-md text-white"
          type="text"
          placeholder="Enter Password"
        />
        <button className="bg-red-600 p-2 m-2 text-white">Sign In</button>
      </form>
    </div>
  );
};

export default Login;
