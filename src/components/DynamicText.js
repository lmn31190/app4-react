import React from "react";
import Typewriter from "typewriter-effect";

const DynamicText = () => {
  return (
    <div className="dynamic-text">
      <span id="text-target">
      <Typewriter
        options={{
          strings: ["Développement web", "Marketing digital"],
          autoStart: true,
          loop: true,
        }}
      />
      </span>
    </div>
  );
};

export default DynamicText;
