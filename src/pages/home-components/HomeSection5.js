import classRoom from "../../assets/Home/classroom.png";
import "./HomeSection5.css";

export default function HomeSection5() {
  return (
    <>
      <div className="homeSection5">
        <div className="homeSection5Left">
          <img src={classRoom} alt="img"></img>
        </div>
        <div className="homeSection5Right">
          <div>What are you waiting for?</div>
          <div>Start teaching Digital Technologies today.</div>
          <div>
            If you need more information, we are happy to answer any wuestions
            you may have.
          </div>
          <button className="squareButtonPicture">ENQUIRE NOW</button>
          <button className="squareButtonPicture">SIGN UP</button>
        </div>
      </div>
    </>
  );
}
