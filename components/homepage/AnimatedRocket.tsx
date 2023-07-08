import { useState } from "react";

export default function AnimatedRocket() {
  const [flyAway, setFlyAway] = useState(false);

  const handleFlyAway = () => {
    setFlyAway(true);
    setTimeout(() => {
      setFlyAway(false);
    }, 2000); // Adjust the duration of the animation (in milliseconds) here
  };

  return (
    <div
      className="rocket-container h-min"
      data-aos="fade-up-right"
      data-aos-delay="1800"
    >
      <p
        className={` ${
          flyAway ? "fly" : ""
        } text-3xl lg:text-6xl drop-shadow-[0px_0px_1px_rgb(0,0,0)] hover:scale-110 transition-transform`}
        onClick={handleFlyAway}
      >
        🚀
      </p>
    </div>
  );
}
