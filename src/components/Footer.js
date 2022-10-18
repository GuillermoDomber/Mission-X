import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footerSec">
        <div className="footer-title">COMPANY</div>
        <br />
        <div>About Us</div>
        <div>Careers</div>
        <div>Partners</div>
      </div>

      <div className="footerSec">
        <div className="footer-title">COURSES</div>
        <br />
        <div>Register</div>
        <div>Login</div>
        <div>Projects</div>
        <div>Teachers</div>
        <div>Parents</div>
        <div>Resources</div>
      </div>

      <div className="footerSec">
        <div className="footer-title">SUPPORT</div>
        <br />
        <div>FAQs</div>
        <div>Helpdesk</div>
        <div>Contact Us</div>
      </div>

      <div className="footerSec">
        <div className="footer-title">LEGAL</div>
        <br />
        <div>Terms & Conditions</div>
        <div>Privacy Policy</div>
      </div>

      <div className="footerSec footer-last-sec">
        <div className="footer-title">LevelUp Works</div>
        <div>
          LevelUp Works is an Auckland-based enterprise dedicated to developing
          game-based learning software to help teachers in response to the New
          Zealand Digital Technologies & hangarau Matihiko.
        </div>
        <div>alan@levelupworks.com</div>
        <div>(021) 668 185</div>
      </div>
    </div>
  );
}
