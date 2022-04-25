import { useEffect } from "react";
import TagCloud from "TagCloud";

const Sphere = () => {

  useEffect(() => {
    const Texts = [
      "HTML", "CSS", "JavaScript", "React",
      "SASS", "Node Js", "MongoDB", "Express",
      "jQuery", "Figma", "Git", "Bootstrap",
    ];

    let tagCloud = TagCloud(".sphere", Texts, {
      radius: 300,
      maxSpeed: "0.9",
      initSpeed: "0.9",
      direction: 135,
      keep: true,
      containerClass: ".sphere",
    });
  });

  return <div className="sphere"></div>;
};

export default Sphere;
