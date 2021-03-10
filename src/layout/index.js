import React from "react";
import styled from "styled-components";
import BG_IMG from "../assets/bagi.jpeg";
import HomeIcon from "../Icons/HomeIcon";
import StyledButton from "../components/StyledComponents/StyledButton";
import Logo from "../assets/Logo.png";
// import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  flex: 1;
  display: flex;
  flex-direction: column;
  background: #141f44;
`;

const Layout = ({ children, pageNum, mode = "" }) => {
  return (
    <Wrapper>
      {/* {mode !== "home" && (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            margin: "1em 5em",
            alignItems: "center",
          }}
        >
          <div>
            {pageNum === 0 ? (
              <img src={Logo} alt="logo" style={{ height: 200 }} />
            ) : (
              <StyledButton content={<ArrowBackIcon />} />
            )}
          </div>
          <div>
            <StyledButton
              content={<HomeIcon />}
              onClick={() => window.location.reload()}
            />
          </div>
        </div>
      )} */}
      {children}
      {/* {mode !== "home" && (
        <div
          style={{
            height: 100,
            borderTop: "4px solid #eacb4d",
            color: "#eacb4d",
            padding: "1em",
            margin: "0 em",
            textAlign: "center",
            fontSize: "3em",
          }}
        >
          {pageNum + 1}
        </div>
      )} */}
    </Wrapper>
  );
};
export default Layout;
