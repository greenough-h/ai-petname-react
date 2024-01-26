import React from "react";
import Typewriter from "typewriter-effect";

export default function GeneratedName(props) {
  if (props.ready) {
    return (
      <div className="name">
        <Typewriter
          options={{
            strings: `${props.name}`,
            autoStart: true,
            loop: false,
          }}
        />
      </div>
    );
  } else {
    return (
      <div className="name">
        <Typewriter
          options={{
            strings: `waiting to generate...`,
            autoStart: true,
            loop: false,
          }}
        />
      </div>
    );
  }
}
