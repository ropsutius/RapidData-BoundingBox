import { useEffect, useState } from "react";
import Logo from "./Logo";

function Welcome() {
  return (
    <>
      <p>Draw a box around the car in the image</p>
      <p>Click next to start!</p>
    </>
  );
}

export default function InitialPage({ buttonHandler }) {
  const [timeLeft, setTimeLeft] = useState(5);

  const handleClick = () => {
    return buttonHandler(true);
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
      <Welcome></Welcome>
      <button onClick={handleClick}>Next ({timeLeft})</button>
    </>
  );
}
