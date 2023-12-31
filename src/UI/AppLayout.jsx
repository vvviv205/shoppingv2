import React from "react";
import Nav from "./Nav";
import { Outlet, useNavigation } from "react-router-dom";
import { usePost } from "../App";
import Loading from "./Loading";
import Form from "./Form";
import Footer from "./Footer";

export default function AppLayout() {
  const { isBuying, buyInfor } = usePost();
  const single = buyInfor.length === 0;
  const { state } = useNavigation();
  return (
    <>
      {isBuying ? <Form single={!single} /> : ""}
      <div className="min-h-screen h-fit">
        <Nav />

        {state === "loading" ? <Loading /> : <Outlet />}
      </div>

      <Footer />
    </>
  );
}
