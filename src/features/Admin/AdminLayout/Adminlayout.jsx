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
    </div>
  );
}
