import React from "react";
import HTMLFlipBook from "react-pageflip";
import authorimage from "../assets/author.png";
import scriptimg from "../assets/script.png";
import Logo from "../assets/Logo.png";
import finalimg from "../assets/final.png";
import EyeDraw from "../assets/eyedraw.png";
import dummy from "../assets/dummy.png";
import StyledButton from "../components/StyledComponents/StyledButton";
import HomeIcon from "../Icons/HomeIcon";

function MyBook({ chnagePageNum }) {
  const onFlip = (data) => {
    chnagePageNum(data);
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
        <StyledButton
          content={<HomeIcon />}
          onClick={() => window.location.reload()}
        />
        <img
          src={dummy}
          style={{ height: "100%", width: "100%" }}
          alt="dummy"
        />
        {/* <div
          style={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              borderTop: "6px solid #eacb4d",
              padding: "1em 0",
              borderBottom: "6px solid #eacb4d",
            }}
          >
            <img
              src={authorimage}
              style={{ height: 1000, width: 800 }}
              alt="author"
            />
          </div>
          <div
            style={{
              border: "5px solid #eacb4d",
              marginTop: "1em",
              width: 800,
            }}
          ></div>
          <div
            style={{
              fontSize: "2.5em",
              padding: "0 2em",
              marginTop: "2em",
              fontFamily: "fantasy",
            }}
          >
            <div style={{ margin: "0.5em 0" }}>
              My name is Ahmad Baba al-massufi, i am one of Tinbuctu's greatest
              scholars of time, which was over 400 years authorimage i have
              authored more than 40 books in my lifetime and tinbuctu's only
              public library my name
            </div>
            <div style={{ margin: "0.5em 0" }}>
              The ahmad baba institue holds tens of thousands of ancient
              manuscripts to introduce you to this experience, which will
              uncover some our most precious onces.
            </div>
            it has?
          </div>
        </div> */}
      </div>
      <div className="demoPage">
        <div
          style={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div style={{ position: "relative", top: "8em" }}>
            <img
              alt="timktu"
              style={{
                width: 600,
                zIndex: 1,
                position: "relative",
                left: 50,
                bottom: 300,
              }}
              src="https://www.brandsouthafrica.com/wp-content/uploads/mediaclub/2015/08/timbuktuARTICLE.jpg"
            />
            <img
              src="https://www.verdemode.com/wp-content/uploads/2012/10/timbuktu2-600x400.jpg"
              alt="many"
              style={{
                width: 750,
                zIndex: 0,
                position: "relative",
                left: -100,
              }}
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                textAlign: "left",
                fontFamily: "auto",
                padding: "0 5em",
                zIndex: 2,
              }}
            >
              <div style={{ fontSize: "8em", letterSpacing: "0.2em" }}>
                TINBUCTU
              </div>
              <div style={{ display: "flex" }}>
                <img src={EyeDraw} alt="draw" />
                <div>
                  <div style={{ fontSize: "5em", letterSpacing: ".3em" }}>
                    {" "}
                    THE CITY{" "}
                  </div>
                  <div
                    style={{
                      fontSize: "5em",
                      left: 100,
                      position: "relative",
                      letterSpacing: ".3em",
                    }}
                  >
                    OF MANY SOULS
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                fontSize: "2.5em",
                letterSpacing: 1,
                marginTop: "1em",
                display: "flex",
                flexDirection: "column",
                textAlign: "left",
                fontFamily: "fantasy",
                padding: "0 2em",
              }}
            >
              <div style={{ margin: "0.5em 0" }}>
                The irreplaceable historic and architectural treasures of Mali’s
                great desert city, Timbuktu, are under threat of destruction by
                Islamist rebels occupying the city.
              </div>
              <div style={{ margin: "0.5em 0" }}>
                Timbuktu, a UNESCO World Heritage site since 1988, has already
                suffered several attacks on its religious monuments, including
                the destruction of several ancient shrines of Muslim saints that
                the fundamentalist attackers consider to be idolatrous.
              </div>
              <div style={{ margin: "0.5em 0" }}>
                “God is unique. All of this is haram (forbidden in Islam),”
                Sanda Ould Boumama, spokesman for the militant Islamist group
                Ansar Dine (Defenders of Faith), said to the Telegraph.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="demoPage">
        <div
          style={{
            height: "100%",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            textAlign: "center",
            fontFamily: "auto",
          }}
        >
          <div>
            <div style={{ fontSize: "3em", letterSpacing: "0.1em" }}>
              Manuscript No - 1
            </div>
            <div
              style={{
                fontSize: "4em",
                paddingBottom: "0.5em",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              Risila Ila al-fullan ahmad ahmad
            </div>
            <div
              style={{ border: "1px solid #eacb4d", margin: "0.5em 0" }}
            ></div>
            <div
              style={{ border: "1px solid #eacb4d", margin: "0.5em 0" }}
            ></div>

            <div></div>
          </div>
          <div style={{ height: "100%", padding: "3em" }}>
            <img
              src={scriptimg}
              style={{ height: "100%", paddingTop: "0.5em" }}
              alt="script"
            />
          </div>
        </div>
      </div>
      <div className="demoPage">
        <div
          style={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img src={Logo} alt="logo" style={{ height: 130 }} />
          <div
            style={{
              border: "4px solid #eacb4d",
              margin: "2.5em",
              marginTop: "2em",
              width: "70%",
            }}
          ></div>
          <img
            src={finalimg}
            alt="final"
            style={{
              height: "50%",
            }}
          />
          <div
            style={{
              border: "4px solid #eacb4d",
              margin: "2em 1.5em 0.5em",
              width: "70%",
            }}
          ></div>
          <div
            style={{
              border: "4px solid #eacb4d",
              margin: "2em 1.5em 0.5em",
              width: "70%",
            }}
          ></div>
          <div
            style={{
              borderTop: "3px solid gold",
              borderBottom: "3px solid gold",
              margin: "2em",
              fontFamily: "auto",
              padding: "1em 0",
              fontSize: "3em",
              lineHeight: "1.5",
              textAlign: "center",
            }}
          >
            THANK YOU FOR EXPLORING SOME OF OUR PRECIOUS MANUSCRIPTS. THEY
            CONTRIBUTE TO MAKING TINBUCTU A RENOWNED CENTER OF SCHOLARSHIP
          </div>
        </div>
      </div>
    </HTMLFlipBook>
  );
}
export default MyBook;
// import React from "react";
// import HTMLFlipBook from "react-pageflip";
// import authorimage from "../assets/author.png";
// import scriptimg from "../assets/script.png";
// import Logo from "../assets/Logo.png";
// import finalimg from "../assets/final.png";
// import EyeDraw from "../assets/eyedraw.png";

// function MyBook({ chnagePageNum }) {
//   const onFlip = (data) => {
//     chnagePageNum(data);
//   };

//   return (
//     <HTMLFlipBook
//       width={700}
//       height={1000}
//       flipNext={{ corner: "bottom" }}
//       onFlip={(e) => onFlip(e.data)}
//       autoSize={false}
//       changeState="user_fold"
//     >
//       <div className="demoPage">
//         <div
//           style={{
//             height: "100%",
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "center",
//             justifyContent: "center",
//           }}
//         >
//           <div
//             style={{
//               borderTop: "3px solid #eacb4d",
//               padding: "1em 0",
//               borderBottom: "3px solid #eacb4d",
//             }}
//           >
//             <img
//               src={authorimage}
//               style={{ height: 400, width: 300 }}
//               alt="author"
//             />
//           </div>
//           <div
//             style={{
//               border: "2px solid #eacb4d",
//               marginTop: "1em",
//               width: 297,
//             }}
//           ></div>
//           <div
//             style={{
//               fontSize: "1em",
//               padding: "0 2em",
//               marginTop: "2em",
//               fontFamily: "fantasy",
//             }}
//           >
//             <div style={{ margin: "0.5em 0" }}>
//               My name is Ahmad Baba al-massufi, i am one of Tinbuctu's greatest
//               scholars of time, which was over 400 years authorimage i have
//               authored more than 40 books in my lifetime and tinbuctu's only
//               public library my name
//             </div>
//             <div style={{ margin: "0.5em 0" }}>
//               The ahmad baba institue holds tens of thousands of ancient
//               manuscripts to introduce you to this experience, which will
//               uncover some our most precious onces.
//             </div>
//             it has?
//           </div>
//         </div>
//       </div>
//       <div className="demoPage">
//         <div
//           style={{
//             height: "100%",
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "center",
//             justifyContent: "center",
//           }}
//         >
//           <div>
//             <img
//               alt="timktu"
//               style={{
//                 width: 321,
//                 zIndex: 1,
//                 position: "relative",
//                 left: 50,
//                 bottom: 90,
//               }}
//               src="https://www.brandsouthafrica.com/wp-content/uploads/mediaclub/2015/08/timbuktuARTICLE.jpg"
//             />
//             <img
//               src="https://www.verdemode.com/wp-content/uploads/2012/10/timbuktu2-600x400.jpg"
//               alt="many"
//               style={{
//                 width: 350,
//                 zIndex: 0,
//               }}
//             />
//           </div>
//           <div style={{ display: "flex", flexDirection: "column" }}>
//             <div
//               style={{
//                 textAlign: "left",
//                 fontFamily: "auto",
//                 padding: "0 2em",
//                 position: "relative",
//                 bottom: "4em",
//               }}
//             >
//               <div
//                 style={{
//                   fontSize: "3.5em",
//                   letterSpacing: "0.3em",
//                   lineHeight: "1.5",
//                 }}
//               >
//                 TINBUCTU
//               </div>
//               <div style={{ display: "flex" }}>
//                 <img src={EyeDraw} alt="draw" style={{ height: 80 }} />
//                 <div>
//                   <div style={{ fontSize: "2em" }}> THE CITY </div>
//                   <div
//                     style={{ fontSize: "2em", left: 100, position: "relative" }}
//                   >
//                     OF MANY SOULS
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div
//               style={{
//                 fontSize: "1em",
//                 letterSpacing: 1,
//                 marginTop: "1em",
//                 display: "flex",
//                 flexDirection: "column",
//                 textAlign: "left",
//                 fontFamily: "fantasy",
//                 padding: "0 2em",
//               }}
//             >
//               <div style={{ margin: "1em 0" }}>
//                 The irreplaceable historic and architectural treasures of Mali’s
//                 great desert city, Timbuktu, are under threat of destruction by
//                 Islamist rebels occupying the city.
//               </div>
//               <div style={{ margin: "1em 0" }}>
//                 Timbuktu, a UNESCO World Heritage site since 1988, has already
//                 suffered several attacks on its religious monuments, including
//                 the destruction of several ancient shrines of Muslim saints that
//                 the fundamentalist attackers consider to be idolatrous.
//               </div>
//               <div style={{ margin: "1em 0" }}>
//                 “God is unique. All of this is haram (forbidden in Islam),”
//                 Sanda Ould Boumama, spokesman for the militant Islamist group
//                 Ansar Dine (Defenders of Faith), said to the Telegraph.
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="demoPage">
//         <div
//           style={{
//             height: "100%",
//             display: "flex",
//             alignItems: "center",
//             flexDirection: "column",
//             textAlign: "center",
//             fontFamily: "auto",
//           }}
//         >
//           <div>
//             <div style={{ fontSize: "1em", letterSpacing: "0.1em" }}>
//               Manuscript No - 1
//             </div>
//             <div
//               style={{
//                 fontSize: "1.5em",
//                 paddingBottom: "0.5em",
//                 letterSpacing: "0.1em",
//                 textTransform: "uppercase",
//               }}
//             >
//               Risila Ila al-fullan ahmad ahmad
//             </div>
//             <div
//               style={{ border: "1px solid #eacb4d", margin: "0.5em 0" }}
//             ></div>
//             <div
//               style={{ border: "1px solid #eacb4d", margin: "0.5em 0" }}
//             ></div>

//             <div></div>
//           </div>
//           <div style={{ height: "100%", padding: "3em" }}>
//             <img
//               src={scriptimg}
//               style={{ height: "80%", paddingTop: "0.5em" }}
//               alt="script"
//             />
//           </div>
//         </div>
//       </div>
//       <div className="demoPage">
//         <div
//           style={{
//             height: "100%",
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "center",
//           }}
//         >
//           <img src={Logo} alt="logo" style={{ height: 70 }} />
//           <div
//             style={{
//               border: "2px solid #eacb4d",
//               margin: "1em",
//               width: "45%",
//             }}
//           ></div>
//           <img
//             src={finalimg}
//             alt="final"
//             style={{
//               height: "30%",
//             }}
//           />
//           <div
//             style={{
//               border: "4px solid #eacb4d",
//               margin: "1em",
//               width: "45%",
//             }}
//           ></div>
//           <div
//             style={{
//               border: "4px solid #eacb4d",
//               width: "45%",
//             }}
//           ></div>
//           <div
//             style={{
//               borderTop: "2px solid gold",
//               borderBottom: "2px solid gold",
//               margin: "2em",
//               fontFamily: "auto",
//               padding: "1em 0",
//               fontSize: "1em",
//               lineHeight: "1.5",
//               textAlign: "center",
//             }}
//           >
//             THANK YOU FOR EXPLORING SOME OF OUR PRECIOUS MANUSCRIPTS. THEY
//             CONTRIBUTE TO MAKING TINBUCTU A RENOWNED CENTER OF SCHOLARSHIP
//           </div>
//         </div>
//       </div>
//     </HTMLFlipBook>
//   );
// }
// export default MyBook;
