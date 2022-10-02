import { useState } from "react";
import groupImg1 from "../assets/Home/Group 1.png";
import groupImg2 from "../assets/Home/Group 2.png";
import groupImg3 from "../assets/Home/Group 3.png";
import groupImg4 from "../assets/Home/Group 4.png";
import animations from "../assets/Home/animation.png";
import augreality from "../assets/Home/augreality.png";
import chatbots from "../assets/Home/chatbots.png";
import games from "../assets/Home/games.png";
import catImg from "../assets/cat.jpg";
import duckImg from "../assets/duck.jpg";
import dogImg from "../assets/dog.jpg";
import laptop1 from "../assets/Home/laptop1.png";
import laptop2 from "../assets/Home/laptop2.png";
import laptop3 from "../assets/Home/laptop3.png";
import laptop4 from "../assets/Home/laptop4.png";
import baby from "../assets/Home/hero.png";
import classRoom from "../assets/Home/classroom.png";

export default function HomePage() {
  const [buttonsImageURL, buttonImageURL] = useState("");

  const handleDigTech = () => {
    buttonImageURL(dogImg);
  };
  const handleLearnPath = () => {
    buttonImageURL(catImg);
  };
  const handleKeyComp = () => {
    buttonImageURL(duckImg);
  };
  const handleIr4 = () => {
    buttonImageURL(duckImg);
  };

  const [buttonsImageURL1, buttonImageURL1] = useState("");

  const handleAnimation = () => {
    buttonImageURL1(laptop1);
  };
  const handleAugRea = () => {
    buttonImageURL1(laptop2);
  };
  const handleChatBots = () => {
    buttonImageURL1(laptop3);
  };
  const handleGames = () => {
    buttonImageURL1(laptop4);
  };

  return (
    <>
      <div className="firstSection">
        <div className="Footer">This is a Header</div>
        <div>Prepare youg minds for a better future.</div>
        <div>
          Let us help you advance students in Digital Technologies and other
          learning areas with our project-based learning programme.
        </div>
        <button>LEARN MORE</button>
        <button>SIGN UP</button>
        <div>
          *Basic subscription includes the first 15 projects free of charge.
        </div>
        <img src={baby} alt=""></img>
      </div>

      <div className="secondSection">
        <div>What we offer</div>
        <div>
          The Creative Problem Solving programme is series of digital creation
          projects aimed to encourage self-motivation and student agency,
          designated by New Zealand's leading IT industry experts and schools.
        </div>
      </div>
      <div className="thirdSection">
        <div>What will student create?</div>
        <button onClick={handleAnimation} className="squareButtonPicture">
          <img src={animations} />
        </button>
        <button onClick={handleAugRea} className="squareButtonPicture">
          <img src={augreality} />
        </button>
        <button onClick={handleChatBots} className="squareButtonPicture">
          <img src={chatbots} />
        </button>
        <button onClick={handleGames} className="squareButtonPicture">
          <img src={games} />{" "}
        </button>

        <img src={buttonsImageURL1} alt="" />

        <button>animation</button>
        <button>augreality</button>
        <button>chatbots</button>
        <button>games</button>
      </div>

      <div className="fourthSection">
        <div>
          Teaching kids programing and digital skills is MORE than just writing
          code
        </div>
        <img src={groupImg1} alt=""></img>
        <img src={groupImg2} alt=""></img>
        <img src={groupImg3} alt=""></img>
        <img src={groupImg4} alt=""></img>
      </div>

      <div className="fifthSection">
        <div>How our programe help teachers and schools</div>
        <button onClick={handleDigTech} className="howHelpButtons">
          DIGITAL TECHNOLOGIES
        </button>

        <button onClick={handleLearnPath} className="howHelpButtons">
          LEARNING PATHWAYS
        </button>
        <button onClick={handleKeyComp} className="howHelpButtons">
          KEY COMPETENCIES
        </button>
        <button onClick={handleIr4} className="howHelpButtons">
          IR4.0
        </button>
        <img src={buttonsImageURL} alt="" />
      </div>

      <div className="sixthSection">
        <img src={classRoom} alt=""></img>
        <div>What are you waiting for?</div>
        <div>Start teaching Digital Technologies today.</div>
        <div>
          If you need more information, we are happy to answer any wuestions you
          may have.
        </div>

        <button className="squareButtonPicture">ENQUIRE NOW</button>
        <button className="squareButtonPicture">SIGN UP</button>
      </div>

      <div className="Footer">
        <div>COMPANY</div>
        <div>About Us</div>
        <div>Careers</div>
        <div>Partners</div>
        <div>COURSES</div>
        <div>Register</div>
        <div>Login</div>
        <div>Projects</div>
        <div>Teachers</div>
        <div>Parents</div>
        <div>Resources</div>
        <div>SUPPORT</div>
        <div>FAQs</div>
        <div>Helpdesk</div>
        <div>Contact Us</div>
        <div>LEGAL</div>
        <div>Terms & Conditions</div>
        <div>Privacy Policy</div>
        <div>LevelUp Works</div>
        <div>
          LevelUp Works is an Auckland-based enterprise dedicated to developing
          game-based learning software to help teachers in response to the New
          Zealand Digital Technologies & hangarau Matihiko.
        </div>
        <div>alan@levelupworks.com</div>
        <div>(021) 668 185</div>
      </div>
    </>
  );
}
