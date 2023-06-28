import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  .main {
    display: flex;
    flex-direction: column;
    .title {
      color: #fff;
      text-align: center;
      font-size: 96px;
      font-family: Poppins;
      letter-spacing: 57.6px;
    }
    .sub-menu {
      border-radius: 69px;
      background: rgba(217, 217, 217, 0.10000000149011612);
      padding: 0px 30px;
      display: flex;
      justify-content: space-between;
      height: 50px;
      align-items: center;
      .heading {
        color: #7f7f7f;
        text-align: center;
        font-size: 24px;
        font-family: Poppins;
        cursor:pointer;
        a{
            text-decoration:none;
            color: #7f7f7f;
        }
      }
    }
  }
`;
