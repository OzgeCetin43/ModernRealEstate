import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { homePlans } from "../../assets/data/homePlans";

import "./homePlan.scss";
import Reveal from "../Reveal/Reveal";

const HomePlan: React.FC = () => {
  const [activePart, setActivePart] = useState<string>("south");
  const [activePartInfo, setActivePartInfo] = useState<{
    id: number;
    title: string;
    totalArea: number;
    room: number;
    bath: number;
    bed: number;
    plan: any;
    hero: any;
  } | null>(null);

  useEffect(() => {
    setActivePartInfo(homePlans.filter((plan) => plan.title === activePart)[0]);
  }, [activePart]);

  return (
    <div className="home-plan-container">
      <div className="home-plan-left-container">
        {<img src={activePartInfo?.plan} alt="plan" />}
      </div>
      <div className="home-plan-right-container">
        <Reveal>
          <div className="home-plan-actions">
            <button
              className={activePart === "south" ? "active" : ""}
              onClick={() => setActivePart("south")}
            >
              South
            </button>
            <button
              className={activePart === "north" ? "active" : ""}
              onClick={() => setActivePart("north")}
            >
              North
            </button>
            <button
              className={activePart === "west" ? "active" : ""}
              onClick={() => setActivePart("west")}
            >
              West
            </button>
            <button
              className={activePart === "east" ? "active" : ""}
              onClick={() => setActivePart("east")}
            >
              East
            </button>
          </div>
        </Reveal>
        <Reveal>
          {" "}
          <h1 className="home-plan-title">{activePartInfo?.title} Layouts</h1>
        </Reveal>
        <div className="home-plan-info">
          <Reveal>
            <h3>Floor: First Floor</h3>
          </Reveal>
          <Reveal>
            <p>Total Area: {activePartInfo?.totalArea} Square Feet's</p>
          </Reveal>
          <Reveal>
            <p>
              Room: {activePartInfo?.room} | Bath: {activePartInfo?.bath} | Bed:{" "}
              {activePartInfo?.bed}
            </p>
          </Reveal>
          <Reveal>
            <Link to="/properties">Know More</Link>
          </Reveal>
          <img src={activePartInfo?.hero} alt="plan hero" />
        </div>
      </div>
    </div>
  );
};

export default HomePlan;
