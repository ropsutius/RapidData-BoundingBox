import { useEffect, useState } from "react";
import Logo from "./Logo";

export default function InitialPage({ setPage }) {
  const [timeLeft, setTimeLeft] = useState(5);

  const handleClick = () => {
    return setPage("solve");
  };

  useEffect(() => {
    if (timeLeft > 0) {
      const interval = setInterval(
        () => setTimeLeft((time) => (time -= 1)),
        1000
      );
      return () => clearInterval(interval);
    } else {
      return handleClick();
    }
  });

  return (
    <>
      <Logo></Logo>
      <div style={welcomeStyle}>
        <p>Draw a box around the car in the image</p>
        <p>Click next to start!</p>
      </div>
      <button onClick={handleClick}>Next ({timeLeft})</button>
    </>
  );
}

const welcomeStyle = { textAlign: "center", padding: "30px" };
