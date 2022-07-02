import React from "react";
import "./../css/App.css";
import "../css/bootstrap.css";
import MyPic from "../image/me.jpg"
export default function Topsite() {
  return (
    <section className="topsite ">
      <div className="right">
        <figure>
          <img src={MyPic} />
        </figure>
      </div>
      <div className="left">
        <h1 >محسن صالحی</h1>
        <strong>برنامه نویس </strong>
        <div >
            <a href="#">i</a>
            <a href="#">w</a>
            <a href="#">l</a>
        </div>
      </div>
    </section>
  );
}
