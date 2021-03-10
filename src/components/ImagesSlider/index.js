import React from "react";
import HTMLFlipBook from "react-pageflip";
import First from "../../assets/Cutouts/page-4.png";
import Second from "../../assets/Cutouts/page-2.png";
import Third from "../../assets/Cutouts/page-3.png";
import Last from "../../assets/Cutouts/page-7.png";
import StyledButton from "../../components/StyledComponents/StyledButton";

function MyBook({ chnagePageNum }) {
  const onFlip = (data) => {
    chnagePageNum(data + 1);
  };

  return (
    <HTMLFlipBook
      width={1600}
      height={2560}
      flipNext={{ corner: "bottom" }}
      onFlip={(e) => onFlip(e.data)}
      autoSize={false}
      changeState="user_fold"
    >
      <div className="demoPage">
        <div style={{ position: "absolute", top: "0px", right: "0px" }}>
          <StyledButton
            color="transparent"
            onClick={() => window.location.reload()}
          />
        </div>
        <img
          src={Second}
          style={{ height: "100%", width: "100%" }}
          alt="dummy"
        />
      </div>
      <div className="demoPage">
        <div
          style={{
            position: "absolute",
            top: "0px",
            right: "0px",
            zIndex: 1,
          }}
        >
          <StyledButton
            color="transparent"
            onClick={() => window.location.reload()}
          />
        </div>
        <img
          src={Third}
          style={{
            height: "100%",
            width: "104%",
            objectFit: "cover",
            transform: "scale(1.02)",
          }}
          alt="dummy"
        />
      </div>

      <div className="demoPage">
        <div style={{ position: "absolute", top: "0px", right: "0px" }}>
          <StyledButton
            color="transparent"
            onClick={() => window.location.reload()}
          />
        </div>
        <img
          src={First}
          style={{ height: "100%", width: "100%" }}
          alt="dummy"
        />
      </div>
      <div className="demoPage">
        <div style={{ position: "absolute", bottom: "5.9%", right: "43.%" }}>
          <StyledButton
            color="transparent"
            onClick={() => window.location.reload()}
          />
        </div>
        <img src={Last} style={{ height: "100%", width: "100%" }} alt="dummy" />
      </div>
    </HTMLFlipBook>
  );
}
export default MyBook;
