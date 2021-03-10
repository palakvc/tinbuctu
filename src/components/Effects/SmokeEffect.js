import React, { useEffect } from "react";
import "./smoke.css";

const SMokeEffect = () => {
  useEffect(() => {
    let smokeDensity = 100;
    const imageUrl =
      "http://www.blog.jonnycornwell.com/wp-content/uploads/2012/07/Smoke10.png";
    const playground = document.getElementById("playground");
    let smokeGeneratorTimer;
    let smokeObject;
    let smokes = [];
    const smokeLife = 10000;

    function loadImage() {
      return new Promise((resolve, reject) => {
        let Img = new Image();
        Img.src = imageUrl;
        Img.onload = resolve;
        Img.onerror = reject;
      });
    }

    function createSmokeObject() {
      smokeObject = document.createElement("div");
      smokeObject.className = "smoke";
    }

    function removeSmoke(smokeElement, delay) {
      setTimeout(function () {
        smokeElement.remove();
      }, delay + smokeLife);
    }

    /**
     * Start Stop Smoke Generator
     */
    function smokeSwitch(status) {
      smokeGeneratorTimer = setInterval(() => {
        smokeGenerator(getRandomInt(1, 100));
      }, smokeLife);
    }

    function smokeGenerator(smokeDensity) {
      let smokeClone, delay;
      for (let i = 0; i < smokeDensity; i++) {
        smokeClone = smokeObject.cloneNode();
        smokeClone.style.left = getRandomInt(0, 100) + "%";
        delay = getRandomInt(0, smokeLife);
        smokeClone.style.animationDelay = delay + "ms";
        smokeClone.style.animationDuration = smokeLife + "ms";
        playground.appendChild(smokeClone);
        smokes.push(smokeClone);
        // removeSmoke(smokeClone, delay);
      }
    }

    function smokeEater() {
      console.log("Smokes: ", smokes.length);
      for (var index = 0; index < smokes.length; index++) {
        if (smokes[index].offsetTop < 0) {
          smokes[index].remove();
          smokes.splice(index, 0);
        }
      }
      window.requestAnimationFrame(smokeEater);
    }

    window.onload = () => {
      console.info("Page Loaded");
      loadImage().then(() => {
        console.info("Image Loaded");
        createSmokeObject();
        smokeSwitch();
        smokeEater();
      });
    };

    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  });

  return <div id="playground"></div>;
};
export default SMokeEffect;
