import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Logo from "./Logo";
import getObjectAfterDelay from "./api/getImage";
import Image from "next/image";
import exampleImage from "../images/vid_4_600.jpg";
import SolvingCanvas from "./SolvingCanvas";

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

  /*const testImage = () => {
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
  };*/

  const handleConfirmation = () => {
    const topLeftX = (Math.min(mousePos.x, startingMousePos.x) / width) * 100;
    const topLeftY =
      100 - (Math.min(mousePos.y, startingMousePos.y) / height) * 100;

    const bottomRightX =
      (Math.max(mousePos.x, startingMousePos.x) / width) * 100;
    const bottomRightY =
      100 - (Math.max(mousePos.y, startingMousePos.y) / height) * 100;

    console.log({
      id: "abc",
      boundingBox: {
        topLeft: { x: topLeftX, y: topLeftY },
        bottomRight: { x: bottomRightX, y: bottomRightY },
      },
    });
  };

  return (
    <>
      <Logo></Logo>
      <div ref={ref} style={testContainerStyle}>
        <Image
          style={imageStyle}
          src={exampleImage}
          alt="Test image"
          width={width}
          height={height}
        ></Image>
        <SolvingCanvas
          style={canvasStyle}
          width={width}
          height={height}
          mousePos={mousePos}
          startingMousePos={startingMousePos}
          setMousePos={setMousePos}
          setStartingMousePos={setStartingMousePos}
        ></SolvingCanvas>
      </div>
      <div>
        <button style={buttonStyle} onClick={handleConfirmation}>
          Confirm selection
        </button>
      </div>
    </>
  );
}

const testContainerStyle = {
  display: "grid",
  width: "100%",
  height: "100%",
};
const imageStyle = { gridColumn: 1, gridRow: 1 };
const canvasStyle = { gridColumn: 1, gridRow: 1 };
const buttonStyle = { margin: "0 auto", textAlign: "center" };
