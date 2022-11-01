import StarItem from "./StarItem";

export default function Slide2() {
  return (
    <>
      <div className="home-slides">
        <div className="home-slides-title">Expands Digital Knowledge Base</div>
        <div className="home-slides-text">
          This programme gives you the 5 major capabilities to be confident in
          Digital Technologies.
        </div>
        <div className="home-column">
          <StarItem
            title="PROBLEM SOLVING"
            text="The programme challenges are designed to think around multiple issues and challenges the way students interact with computers and other related technology."
          />
          <StarItem
            title="DECISION-MAKING"
            text="The programme uses technology to make the lives of many people happier through the decisions made when creating digital applications.."
          />
          <StarItem
            title="CONFIDENCE"
            text="When having the skills to manipulate the applications and learning to use it brings self-confidence into your life."
          />
          <StarItem
            title="HIGHER SELF-EXPECTATIONS"
            text="This programme develops students to think the best of themselves to bring higher expectations to their learning and lives as young adults."
          />
          <StarItem
            title="COHERENCE"
            text="This programme offers all students a broader education that makes links within and across learning areas."
          />
        </div>
      </div>
    </>
  );
}
