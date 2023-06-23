import React from "react";
import "/src/HomePage.css";

const HomePage = () => {
  return (
    <div>
      <div className="nav">
        <img
          className="nav-img"
          src="/src/assets/logo.png"
          alt="Girl in a jacket"
          width="50"
          height="50"
        />

        <a className="buttonnav" href="#">
          Adam
        </a>
        <a className="buttonnav" href="#">
          Hello
        </a>
        <div className="aligndiv">
          <input className="" />
          <button className="buttonnav ">Submit</button>
        </div>
      </div>

      <section>
        <div style={{ height: "8000px", backgroundColor: "black" }}></div>
      </section>
    </div>
  );
};

export default HomePage;
