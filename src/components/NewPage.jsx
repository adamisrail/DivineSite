import React from "react";
import './NewPage.css'


const NewPage = () => {
  return (
    <div
      className="Frame1"
    
    >
      <img
        className="backgroundimg"
        
        src='/src/assets/Bg.png'
      />
      <div
        className="AvailablePackages"
        style={{
          width: 889,
          height: 55.02,
          left: 524,
          top: 1006,
          position: "absolute",
        }}
      >
        <div
          className="Rectangle6"
          style={{
            width: 889,
            height: 55.02,
            left: 0,
            top: 0,
            position: "absolute",
            background: "rgba(255, 255, 255, 0.10)",
            borderRadius: 4.83,
          }}
        ></div>
        <div
          className="AvailablePackages"
          style={{
            width: 264.48,
            height: 24.35,
            left: 311.78,
            top: 15.44,
            position: "absolute",
            textAlign: "center",
            color: "black",
            fontSize: 23.17,
            fontFamily: "Poppins",
            fontWeight: "400",
            wordWrap: "break-word",
          }}
        >
          Available Packages
        </div>
      </div>
      <div
        className="Rectangle7"
        style={{
          width: 673,
          height: 44,
          left: 625,
          top: 122,
          position: "absolute",
          opacity: 0.1,
          background: "#D9D9D9",
          borderRadius: 69,
        }}
      />
      <div
        className="About"
        style={{
          width: 141,
          height: 36,
          left: 647,
          top: 125,
          position: "absolute",
          textAlign: "center",
          color: "#7F7F7F",
          fontSize: 24,
          fontFamily: "Poppins",
          fontWeight: "400",
          wordWrap: "break-word",
        }}
      >
        About
      </div>
      <div
        className="Discover"
        style={{
          width: 142,
          height: 36,
          left: 807,
          top: 125,
          position: "absolute",
          textAlign: "center",
          color: "#7F7F7F",
          fontSize: 24,
          fontFamily: "Poppins",
          fontWeight: "400",
          wordWrap: "break-word",
        }}
      >
        Discover
      </div>
      <div
        className="Find"
        style={{
          width: 142,
          height: 36,
          left: 969,
          top: 125,
          position: "absolute",
          textAlign: "center",
          color: "#7F7F7F",
          fontSize: 24,
          fontFamily: "Poppins",
          fontWeight: "400",
          wordWrap: "break-word",
        }}
      >
        Find
      </div>
      <div
        className="Contact"
        style={{
          width: 142,
          height: 36,
          left: 1130,
          top: 125,
          position: "absolute",
          textAlign: "center",
          color: "#7F7F7F",
          fontSize: 24,
          fontFamily: "Poppins",
          fontWeight: "400",
          wordWrap: "break-word",
        }}
      >
        Contact
      </div>
      <div
        className="Company"
        style={{
          width: 1920,
          height: 133,
          left: -0,
          top: 0,
          position: "absolute",
          textAlign: "center",
          color: "white",
          fontSize: 96,
          fontFamily: "Poppins",
          fontWeight: "400",
          letterSpacing: 57.6,
          wordWrap: "break-word",
        }}
      >
        COMPANY
      </div>
    </div>
  );
};

export default NewPage;
