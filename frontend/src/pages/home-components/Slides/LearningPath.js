import StarItem from "./StarItem";

export default function Slide1() {
  return (
    <>
      <div className="home-slides">
        <div className="home-slides-title">Interlinking Pathways </div>
        <div className="home-slides-text">
          This programme gives us 5 important interlinking Learning Pathways.
        </div>
        <div className="home-slides-star">
          <StarItem
            title="COMPUTATIONAL THINKING"
            text="Within the programme the students are enabled to express problems
            and form solutions that will be designed so a computer can be used
            to create diverse and encapsulating applications."
          />
          <StarItem
            title="DEVELOPING DIGITAL OUTCOMES"
            text="This programme is designed to strengthen the outcomes of each
            students personally to form strong applications."
          />
          <StarItem
            title="DESIGNING PROCESSED OUTCOMES"
            text="Students will be taught the ways of how outcomes are processed,
            thought about, and produced."
          />
          <StarItem
            title="DEVELOP VISUAL AND SOCIAL COMMUNICATIONS"
            text="Students will learn to design visually pleasing applications used to
            both keep the user aware of what is happening on the screen."
          />
          <StarItem
            title="STRONG TECHNOLOGICAL PRACTICES"
            text="The programme will show students the best practices to think and
            solve the problems brought on by using technology."
          />
        </div>
      </div>
    </>
  );
}
