import { useEffect, useLayoutEffect, useRef, useState } from "react";
import useMouse from "@react-hook/mouse-position";
import Logo from "./Logo";
import getObjectAfterDelay from "./api/getImage";
import Image from "next/image";
import exampleImage from "../images/vid_4_600.jpg";

export default function SolvingPage() {
  const ref = useRef(null);

  const [image, setImage] = useState(null);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [mousePos, setMousePos] = useState({});
  const [startingMousePos, setStartingMousePos] = useState({});

  useLayoutEffect(() => {
    setWidth(ref.current.offsetWidth);
    setHeight(
      (ref.current.offsetWidth * exampleImage.height) / exampleImage.width
    );
  }, []);

  useEffect(() => {
    getObjectAfterDelay().then((res) => {
      setImage(res);
    });
  });

  const TestImage = () => {
    if (image) {
      return (
        <Image
          src={"/../images/" + image.fileName}
          width="100"
          height="100"
          alt="Test image"
        ></Image>
      );
    } else return null;
  };

  const handleTouchStart = (event) => {
    setStartingMousePos({
      x:
        ((event.touches[0].clientX - event.target.offsetLeft) /
          event.target.width) *
        100,
      y:
        100 -
        ((event.touches[0].clientY - event.target.offsetTop) /
          event.target.height) *
          100,
    });
  };

  const handleTouchEnd = () => {
    console.log(startingMousePos.x, startingMousePos.y);
    console.log(mousePos.x, mousePos.y);
  };

  const handleTouchMove = (event) => {
    setMousePos({
      x:
        ((event.touches[0].clientX - event.target.offsetLeft) /
          event.target.width) *
        100,
      y:
        100 -
        ((event.touches[0].clientY - event.target.offsetTop) /
          event.target.height) *
          100,
    });
  };

  return (
    <>
      <Logo></Logo>
      <div ref={ref} style={testImage}>
        <Image
          src={exampleImage}
          alt="Test image"
          width={width}
          height={height}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onTouchMove={handleTouchMove}
        ></Image>
      </div>
    </>
  );
}

const testImage = { width: "100%", height: "100%" };
