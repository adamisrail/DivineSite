import styled from "styled-components";

export const FooterWrapper = styled.footer`
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  padding-bottom: 60px;
  height: calc(100px - 60px);
  background-color: transparent;
  display: flex;
  justify-content: center;
  .button {
    background-color:rgba(255, 255, 255, 0.1);
    width: 889px;
    height: 55.02px;
    flex-shrink: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    color: #FFF;
    text-align: center;
    font-size: 23.166px;
    font-family: Poppins;
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    display: none !important;
  }
`;
