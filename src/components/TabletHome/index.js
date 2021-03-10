import React from "react";
import styled from "styled-components";
import StyledButton from "../StyledComponents/StyledButton";
import HomeImage from "../../assets/Cutouts/Home-page-7.png";

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  color: white;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const WelcomeText = styled.div`
  color: gold;
  font-family: "Goldman", cursive;
`;

const WelcomeHeader = styled.div`
  font-size: 20em;
  text-transform: uppercase;
  line-height: 0.8;
`;

const WelcomeSubheader = styled.div`
  font-size: 10em;
  font-family: "Redressed", cursive;
  line-height: 1;
`;

const LanguageSelection = styled.div`
  display: flex;
  position: absolute;
  bottom: 400px;
`;

const TabletHome = ({ changeMode }) => {
  return (
    <Wrapper>
      <img
        src={HomeImage}
        alt="home"
        style={{ height: "100%", width: "100%" }}
      />
      <LanguageSelection>
        <StyledButton
          content="English"
          width="300px"
          onClick={changeMode}
          color="transparent"
        />
        <div style={{ position: "relative", left: "18px" }}>
          <StyledButton content="عربي" width="300px" color="transparent" />
        </div>
      </LanguageSelection>
    </Wrapper>
  );
};
export default TabletHome;
