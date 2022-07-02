import React from "react";
import "./../css/App.css";
import Aboutme from "./about";
import Topsite from "./topsite";
export default function Main() {
  return (
    <>
      <div className="App container p-0 ">
        <div className="topback container">
            <Topsite />
        </div>
        <Aboutme />
      </div>
    </>
  );
}
