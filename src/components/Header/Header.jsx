import React from "react";
import { Wrapper } from "./Header.styled";
import { useNavigate,Link  } from "react-router-dom";

export default function Header() {
    const navigate = useNavigate();
  return (
    <Wrapper>
      <div className="main" >
        <div className="title">COMPANY</div>
        <div className="sub-menu">
          <div className="heading" onClick={()=>navigate("/about")}>
           About
          </div>
          <div className="heading" onClick={()=>navigate("/discover")}>
            
           Discover
          </div>
          <div className="heading"  onClick={()=>navigate("/find")}>
           Find
          </div>
          <div className="heading"  onClick={()=>navigate("/contact")}>
          Contact
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
