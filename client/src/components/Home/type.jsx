import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <div>
      <Typewriter
        options={{
          strings: [
            // "Student",
            // "Ethical Hacker",
            "CyberSecurity Enthusiastic CyberSecurity Enthusiastic",
            // "Event Organizer",
            // "Blockchain Developer",
            // "Software Developer",
            // "Open Source Contributor",
          ],
          autoStart: true,
          loop: true,
          deleteSpeed: 50,
        }}
      />
    </div>
  );
}

export default Type;
