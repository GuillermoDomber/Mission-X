import { useState } from "react";
import Slider from "./Slider";
import "./Help.css";

export default function HomeSection4() {
  const [selected, setSelected] = useState(0);

  return (
    <div className="home-colum home-help">
      <div className="home-feature-centre-title">
        How our programe help teachers and schools
      </div>
      <Slider position={selected} onNavigate={(i) => setSelected(i)} />
    </div>
  );
}
