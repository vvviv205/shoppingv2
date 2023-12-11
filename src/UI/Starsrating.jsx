import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
export default function Starsrating({ rate = 0 }) {
  return (
    <div className="flex gap-1">
      <div className="flex mt-1">
        {Array.from({ length: 5 }, (_, i) => (
          <Stars full={i + 1 <= rate ? true : false} />
        ))}
      </div>
      {/* 
      <p className="text-yellow-400">{rate}</p> */}
    </div>
  );
}
function Stars({ full }) {
  return (
    <>
      {full ? (
        <AiFillStar className="text-yellow-400" />
      ) : (
        <AiOutlineStar className="text-yellow-400" />
      )}
    </>
  );
}
