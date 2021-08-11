import React, { useState } from "react";
import Nav from "../Components/Nav";
import "../Css/Home.css";
function Home() {
  const [toggle, setToggle] = useState({
    nav: "",
    proj: false,
    home: false,
    skill: false
  });
  return (
    <div>
      <section
        className={`Navigation ${
          toggle.nav == "home"
            ? `pukos`
            : toggle.nav == "work"
            ? `fromWork`
            : toggle.nav == "skill"
            ? `fromSkill`
            : null
        }`}
      >
        <div
          className="sideBar"
          onClick={() => {
            setToggle((prev) => {
              return { nav: "home" };
            });
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="40px"
            width="40px"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </div>
        <div className="classNav">
          <div
            onClick={() => {
              setToggle((prev) => {
                return { home: true, skill: false, proj: false };
              });
            }}
          >
            <h1>Home</h1>
            <p>Visit Our Home Page</p>
          </div>
          <div
            onClick={() => {
              setToggle((prev) => {
                return { home: false, skill: false, proj: true };
              });
            }}
          >
            <h1>Works</h1>
            <p>Preview Our Past Project</p>
          </div>
          <div
            onClick={() => {
              setToggle((prev) => {
                return { home: false, skill: true, proj: false };
              });
            }}
          >
            <h1>Skills</h1>
            <p>Things we use and do</p>
          </div>
        </div>
      </section>
      <section className="homeSection">
        {/**|====================================================== |
         * |             Home
         * |====================================================== |
         */}
        <div className="homeContainer">
          <div
            className="sideBar"
            onClick={() => {
              setToggle((prev) => {
                return { ...prev, nav: "home" };
              });
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="40px"
              width="40px"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
          <div className="main">
            <img height="300" width="500" src="images/image.png" alt="" />
            <h1>Portfolio Website</h1>
          </div>
        </div>
      </section>

      <section
        className={`projectSection ${toggle.proj ? `projectToggle` : null}`}
      >
        {/**|====================================================== |
         * |             Projects
         * |====================================================== |
         */}
        <div
          className="sideBar"
          onClick={() => {
            setToggle((prev) => {
              return { ...prev, nav: "work" };
            });
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="40px"
            width="40px"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
        <div className="projMain">
          <div className="projContainer">
            <div>
              <img width="300" src="images/e-com.png" alt="" />
              <p>E - Commerce Website</p>
            </div>
            <div>
              <img width="300" src="images/e-learn.png" alt="" />
              <p>E Learning Website</p>
            </div>
            <div>
              <img width="300" src="images/school-web.png" alt="" />
              <p>College Website</p>
            </div>
          </div>
          <br />
          <div className="projContainer">
            <div>
              <img width="300" src="images/ea-gt.png" alt="" />
              <p>Landing Page</p>
            </div>
            <div>
              <img width="300" src="images/portfolio.png" alt="" />
              <p>Portfolio Website</p>
            </div>
            <div>
              <img width="300" src="images/music.png" alt="" />
              <p>Music Website</p>
            </div>
          </div>
        </div>
      </section>
      <section className={`skillSection ${toggle.skill ? `fromSkillz` : null}`}>
        {/**|====================================================== |
         * |             Skills
         * |====================================================== |
         */}
        <div
          className="sideBar"
          onClick={() => {
            setToggle((prev) => {
              return { ...prev, nav: "skill" };
            });
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="40px"
            width="40px"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
        <div className="skillMain">
          <ul>
            <li>
              <h1>HTML : 100%</h1>
            </li>
            <li>
              <h1>Javascript : 100%</h1>
            </li>
            <li>
              <h1>Laravel Framework : 100%</h1>
            </li>
            <li>
              <h1>Mern Stack : 100%</h1>
            </li>
            <li>
              <h1>PHP : 100%</h1>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Home;
