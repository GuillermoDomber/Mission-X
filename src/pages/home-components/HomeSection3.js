import groupImg1 from "../../assets/Home/Group 1.png";
import groupImg2 from "../../assets/Home/Group 2.png";
import groupImg3 from "../../assets/Home/Group 3.png";
import groupImg4 from "../../assets/Home/Group 4.png";
import "./HomeSection3.css"

export default function HomeSection3() {
  return (
    <>
      <div className="homeSection3">
        <div className="homeSection3Title">
          Teaching kids programing and digital skills is MORE than just writing
          code
        </div>
        <div className="homeSection3Imgs">
          <img src={groupImg1} alt="img"></img>
          <img src={groupImg2} alt="img"></img>
          <img src={groupImg3} alt="img"></img>
          <img src={groupImg4} alt="img"></img>
        </div>
      </div>
    </>
  );
}
