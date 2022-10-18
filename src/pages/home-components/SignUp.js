import classRoom from "../../assets/Home/classroom.png";
import "./SignUp.css";

export default function HomeSection5() {
  return (
    <>
      <div className="home-row home-signup">
        <div className="home-signup-img">
          <img src={classRoom} alt="img"></img>
        </div>
        <div className="home-signup-info">
          <div className="home-signup-title">What are you waiting for?</div>
          <div className="home-signup-text">
            Start teaching Digital Technologies today.
          </div>
          <div className="home-signup-text">
            If you need more information, we are happy to answer any wuestions
            you may have.
          </div>
          <div className="home-row home-signup-actions">
            <button className="button">ENQUIRE NOW</button>
            <button className="button button-accent">SIGN UP</button>
          </div>
        </div>
      </div>
    </>
  );
}
