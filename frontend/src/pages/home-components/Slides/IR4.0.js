import StarItem from "./StarItem";

export default function Slide4() {
  return (
    <>
      <div className="home-slides">
        <div className="home-slides-title">IR4.0</div>
        <div className="home-slides-text">
          Designed with IT industry experts, the programme develops the students
          to find applicable jobs and careers in the Fourth Industrial
          Revolution. (IR4.0)
        </div>
        <div className="home-colum">
          <StarItem
            title="LEARNING TO LEARN"
            text="The programme will set challenges at the end of every project to
            encourage students to explore and learn how to learn."
          />
          <StarItem
            title="COMMUNITY ENGAGEMENT"
            text="The programme encourages students to be involved in the communities,
          such as family, friends, and in school, to contribute and make
          connections with other people."
          />
          <StarItem
            title="CULTURAL DIVERSITY"
            text="This programme is designed in New Zealand and reflects NZ's cultural
        diversity."
          />
          <StarItem
            title="INCLUSION"
            text="In particular the programme is designed with acknowledgement to the
      student's identities and talents, allowing them to be creative to
      their personal ability."
          />
          <StarItem
            title="FUTURE FOCUS"
            text="The programme leads students to explore future themes such as
    artificial intelligence and augmented reality."
          />
        </div>
      </div>
    </>
  );
}
