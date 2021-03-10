import { useEffect, useState } from "react";
import "./App.css";
import Layout from "./layout";
import HomePage from "./components/TabletHome";
import ImageSLider from "./components/ImagesSlider";
// import GlowEffect from "./components/Effects";
import ClickEffect from "./components/Effects/ClickEffect";

function App() {
  const [pageNum, setPageNum] = useState(null);
  const [mode, setMode] = useState("home");
  const [displayGlow, setDisplayGlow] = useState(false);

  const changeMode = (mode) => {
    setMode(mode);
    setDisplayGlow(true);
    setPageNum(1);
    setInterval(() => setDisplayGlow(false), 4000);
  };

  const chnagePageNum = (Num) => {
    setPageNum(Num);
    setDisplayGlow(true);
    setInterval(() => setDisplayGlow(false), 4000);
  };

  return (
    <div className="App">
      <Layout
        pageNum={pageNum}
        mode={mode}
        changeMode={changeMode}
        displayGlow={displayGlow}
        selectMode={() => changeMode("home")}
      >
        {mode === "home" ? (
          <HomePage changeMode={() => changeMode()} mode={mode} />
        ) : (
          <ImageSLider chnagePageNum={chnagePageNum} />
        )}
        {/* {displayGlow && <GlowEffect />} */}
        {pageNum === 1 ? <ClickEffect pageNum={pageNum} /> : null}
        <ClickEffect pageNum={pageNum} />
      </Layout>
    </div>
  );
}

export default App;
