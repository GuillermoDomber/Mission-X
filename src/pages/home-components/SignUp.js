import classRoom from "../../assets/Home/classroom.png";
import "./SignUp.css";

export default function HomeSection5() {
  return (
    <>
      <div className="homeSection5">
        <div className="homeSection5Left">
          <img src={classRoom} alt="img"></img>
        </div>
        <div className="homeSection5Right">
          <div className="homeSection5Title">What are you waiting for?</div>
          <div className="homeSection5Text">
            Start teaching Digital Technologies today.
          </div>
          <div className="homeSection5Text">
            If you need more information, we are happy to answer any wuestions
            you may have.
          </div>
          <div className="homeSection5Buttons">
            <button className="homeSection5ButtonLearn">ENQUIRE NOW</button>
            <button className="homeSection5ButtonSign">SIGN UP</button>
          </div>
        </div>
      </div>
    </>
  );
}
