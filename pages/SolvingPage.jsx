import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import SolvingCanvas from "./SolvingCanvas";
import Logo from "./Logo";
import Button from "./Button";
import getObjectAfterDelay from "./api/getImage";
import postObjectAfterDelay from "./api/postSubmission";
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";

export default function SolvingPage({ setPage }) {
  const ref = useRef(null);

  const [image, setImage] = useState(null);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [leftOffset, setLeftOffset] = useState(0);
  const [topOffset, setTopOffset] = useState(0);
  const [mousePos, setMousePos] = useState({});
  const [startingMousePos, setStartingMousePos] = useState({});
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    getObjectAfterDelay().then((res) => {
      setImage(res);
      setWidth(ref.current.offsetWidth);
      setHeight(
        (ref.current.offsetWidth * res.imageDOM.height) / res.imageDOM.width
      );
      setLeftOffset(ref.current.offsetLeft);
      setTopOffset(ref.current.offsetTop);
    });
  }, []);

  useEffect(() => {
    if (
      Object.keys(mousePos).length === 0 ||
      Object.keys(startingMousePos).length === 0
    )
      setIsDisabled(true);
    else setIsDisabled(false);
  }, [mousePos]);

  const handleConfirmation = async () => {
    if (
      Object.keys(mousePos).length === 0 ||
      Object.keys(startingMousePos).length === 0
    )
      return;

    const topLeftX = (Math.min(mousePos.x, startingMousePos.x) / width) * 100;
    const topLeftY =
      100 - (Math.min(mousePos.y, startingMousePos.y) / height) * 100;

    const bottomRightX =
      (Math.max(mousePos.x, startingMousePos.x) / width) * 100;
    const bottomRightY =
      100 - (Math.max(mousePos.y, startingMousePos.y) / height) * 100;

    await postObjectAfterDelay({
      id: "abc",
      boundingBox: {
        topLeft: { x: topLeftX, y: topLeftY },
        bottomRight: { x: bottomRightX, y: bottomRightY },
      },
    });

    setPage("thanks");
  };

  const transformOptions = {
    initialScale: 1,
    minScale: 0.5,
    maxScale: 1,
  };

  return (
    <>
      <Logo></Logo>
      <div ref={ref} style={testContainerStyle}>
        <TransformWrapper
          options={transformOptions}
          panning={{ disabled: true }}
        >
          <TransformComponent>
            <div style={{ display: "grid", width: "100%", height: "100%" }}>
              {image && (
                <Image
                  style={imageStyle}
                  src={"/images/" + image.fileName}
                  alt="Test image"
                  width={width}
                  height={height}
                ></Image>
              )}
              <SolvingCanvas
                style={canvasStyle}
                width={width}
                height={height}
                leftOffset={leftOffset}
                topOffset={topOffset}
                mousePos={mousePos}
                startingMousePos={startingMousePos}
                setMousePos={setMousePos}
                setStartingMousePos={setStartingMousePos}
              ></SolvingCanvas>
            </div>
          </TransformComponent>
        </TransformWrapper>
      </div>
      <Button
        handler={handleConfirmation}
        text="Confirm selection"
        isDisabled={isDisabled}
      ></Button>
    </>
  );
}

const testContainerStyle = { width: "100%", height: "100%" };
const imageStyle = { gridColumn: 1, gridRow: 1 };
const canvasStyle = { gridColumn: 1, gridRow: 1 };
