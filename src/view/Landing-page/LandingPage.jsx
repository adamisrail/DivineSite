import React from "react";
import styled from "styled-components";
import BackgroundImage from "/src/assets/svg/Background.svg";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

export default function LandingPage() {
  return (
    <Wrapper>
      <Header />
      <Footer />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-image: url(${BackgroundImage});
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
`;
