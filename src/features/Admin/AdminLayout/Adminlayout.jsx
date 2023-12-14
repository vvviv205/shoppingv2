import React from "react";
import Sidenav from "./Sidenav";
import Header from "./Header";
import Dashboard from "../DashBoard/Dashboard";
import { Outlet } from "react-router-dom";
export default function Adminlayout() {
  return (
    <div className="bg-gray-200 dark:bg-slate-900 h-fit min-h-screen w-full overflow-x-hidden">
      <Header />
      <Sidenav />
      <div className="ml-0 lg:ml-64">
        <Outlet />
      </div>
      <h1 className="fixed text-[0.6rem] sm:text-base w-full text-center bottom-0 opacity-50">
        © {new Date().getFullYear()} MoH™. All CopyRights Reserved.
      </h1>
    </div>
  );
}
