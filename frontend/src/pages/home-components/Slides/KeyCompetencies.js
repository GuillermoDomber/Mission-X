import StarItem from "./StarItem";

export default function Slide3() {
  return (
    <>
      <div className="home-slides">
        <div className="home-slides-title">Enhance key competencies</div>
        <div className="home-slides-text">
          The programme enhances capabilities of students in the 5 Key
          Competencies identified in the New Zealand Curriculum:
        </div>
        <div className="home-slides-star">
          <StarItem
            title="THINKING"
            text="In particular the programme focused on problem solving, design
            thinking and computational thinking."
          />
          <StarItem
            title="DISCERNING CODES"
            text="Analysing language, symbols, and texts in order to understand and
            make sense of the codes in which knowledge is expressed."
          />
          <StarItem
            title="SELF-MANAGEMENT"
            text="Projects and challenges are designed to motivate students to explore
            and experiment with self-motivation."
          />
          <StarItem
            title="RELATIONSHIPS WITH PEERS"
            text="The programme is designed with unplugged sessions where students
            interact in a range of different situations, including things like
            being able to listen well, recognise different points of view, and
            share ideas."
          />
          <StarItem
            title="PARTICIPATION AND COLLABORATION"
            text="The programme encourages students to be involved in communities,
            such as family, whanau, school, and contribute and make connections
            with other people."
          />
        </div>
      </div>
    </>
  );
}
