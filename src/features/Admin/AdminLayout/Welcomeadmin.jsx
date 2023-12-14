import React from "react";
import { useNavigate } from "react-router-dom";

export default function Welcomeadmin() {
  const navigate = useNavigate();
  return (
    <center>
      <h1 className="text-5xl dark:text-white mt-40">Welcome Admin Mohammad</h1>
      <h1 className="text-2xl mt-3 dark:text-white">
        This is your admin's dashboard
      </h1>
      <h1 className="text-xl mt-2 dark:text-white">
        You can control anything in your store throw the tabs
      </h1>
      <button
        onClick={() => navigate("/admin/dashboard")}
        className="p-3 mt-5 rounded-xl text-xl bg-neutral-800 text-white dark:bg-slate-100 dark:text-black"
      >
        Start the Tour
      </button>
    </center>
  );
}
