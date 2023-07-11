import { useState } from "react";
import Image from "next/image";
import icons from "../ui/IconImport";

export default function AnimatedRocket() {
  const [flyAway, setFlyAway] = useState(false);

  const handleFlyAway = () => {
    setFlyAway(true);
    setTimeout(() => {
      setFlyAway(false);
    }, 2000);
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
        } drop-shadow-[0px_0px_1px_rgb(0,0,0)] hover:scale-110 transition-transform`}
        onClick={handleFlyAway}
      >
        <Image src={icons.rocket} alt="animated rocket" className="w-14 h-14" />
      </p>
    </div>
  );
}
