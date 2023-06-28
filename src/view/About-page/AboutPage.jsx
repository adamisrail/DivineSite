import React from "react";
import Header from "../../components/Header/Header";
import LandingPage from "../Landing-page/LandingPage";
import styled from "styled-components";
import Footer from "../../components/Footer/Footer";
import BackgroundImage from "/src/assets/svg/Background.svg";

export default function AboutPage() {
  return (
    <>
      <Bg>
        <Wrapper>
          <Header />
          <div className="aboutwindow">
            <p className="text">
            <span style={{fontSize: 48}}>
              COMPANY Courses
              </span>
              <br />
              <br />
              
              Our diverse range of courses will earn you internationally
              recognised qualifications, with the guarantee of a post-course
              interview. COMPANY are based in multiple locations in the UK, from
              Cornwall to Glasgow.
              
              <br />
              <br />
              
              
              From the fundamentals of fitness instruction to fully-fledged
              personal trainer qualifications to specialist, top-tier
              qualifications and CPD fitness courses, all courses are designed
              to support you in unlocking your potential.
              
              <br />
              <br />
              COMPANY courses are fully endorsed by PD Approval.
              <br />
              <br />
              Whether you’re at the beginning of your journey or looking to
              further your existing experience and qualifications, our passion
              is helping you pursue yours. yours.
            </p>
          </div>
          <Footer />
        </Wrapper>
      </Bg>
    </>
  );
}

const Bg = styled.div`
  background-image: url(${BackgroundImage});
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Wrapper = styled.div`
  .aboutwindow {
    position: relative;

    width: 86%;
    height: 50vh;
    margin: 30px auto;
    padding: 30px;
    border-radius: 69px;

    background: rgba(217, 217, 217, 0.1);
  }
  .text {
    color: white;
    font-size: 18px;
    font-family: Poppins;
  }
`;
