import { startTransition, useEffect, useRef, useState } from "react";

export default function SolvingCanvas({
  startingMousePos,
  mousePos,
  setStartingMousePos,
  setMousePos,
  leftOffset,
  topOffset,
  style,
  width,
  height,
}) {
  const canvasRef = useRef(null);

  const [isEditing, setIsEditing] = useState(false);
  const [editingSide, setEditingSide] = useState(null);
  const [prevStartingMousePos, setPrevStartingMousePos] = useState({});
  const [prevMousePos, setPrevMousePos] = useState({});

  const getCoordinates = (event) => {
    const parentTransform =
      event.target.parentElement.parentNode.style.transform;
    const array = parentTransform.split(" ");

    const xOffset = Number(array[0].slice(10, -3));
    const yOffset = Number(array[1].slice(0, -3));
    const scale = Number(array[2].slice(6, -1));

    const x = (event.touches[0].clientX - xOffset - leftOffset) / scale;
    const y = (event.touches[0].clientY - yOffset - topOffset) / scale;

    return { x, y };
  };

  const handleTouchStart = (event) => {
    const coordinates = getCoordinates(event);

    if (
      Object.keys(startingMousePos).length !== 0 &&
      Object.keys(mousePos).length !== 0
    ) {
      setIsEditing(true);
      if (
        coordinates.x < Math.max(startingMousePos.x, mousePos.x) + 30 &&
        coordinates.x > Math.max(startingMousePos.x, mousePos.x - 30)
      ) {
        setEditingSide("right");
      } else if (
        coordinates.x < Math.min(startingMousePos.x, mousePos.x) + 30 &&
        coordinates.x > Math.min(startingMousePos.x, mousePos.x - 30)
      ) {
        setEditingSide("left");
      } else if (
        coordinates.y < Math.max(startingMousePos.y, mousePos.y) + 30 &&
        coordinates.y > Math.max(startingMousePos.y, mousePos.y - 30)
      ) {
        setEditingSide("bottom");
      } else if (
        coordinates.y < Math.min(startingMousePos.y, mousePos.y) + 30 &&
        coordinates.y > Math.min(startingMousePos.y, mousePos.y - 30)
      ) {
        setEditingSide("top");
      } else {
        setIsEditing(false);
      }
    }

    setStartingMousePos(coordinates);
  };

  const handleTouchMove = (event) => {
    const coords = getCoordinates(event);

    coords.x = coords.x < 0 ? 0 : coords.x;
    coords.x = coords.x > event.target.width ? event.target.width : coords.x;

    coords.y = coords.y < 0 ? 0 : coords.y;
    coords.y = coords.y > event.target.height ? event.target.height : coords.y;

    setMousePos(coords);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);

    let topLeftX, topLeftY, width, height;

    if (!isEditing) {
      topLeftX = Math.min(mousePos.x, startingMousePos.x);
      topLeftY = Math.min(mousePos.y, startingMousePos.y);

      width = Math.abs(mousePos.x - startingMousePos.x);
      height = Math.abs(mousePos.y - startingMousePos.y);
    } else {
      console.log("first");
      topLeftX = Math.min(prevMousePos.x, prevStartingMousePos.x);
      topLeftY = Math.min(prevMousePos.y, prevStartingMousePos.y);

      width = Math.abs(prevMousePos.x - prevStartingMousePos.x);
      height = Math.abs(prevMousePos.y - prevStartingMousePos.y);

      switch (editingSide) {
        case "top":
          topLeftY = mousePos.y;
          height -=
            mousePos.y - Math.min(prevMousePos.y, prevStartingMousePos.y);
          break;
      }
    }

    context.strokeStyle = "rgba(255, 0, 0, 1)";
    context.beginPath();
    context.rect(topLeftX, topLeftY, width, height);
    context.stroke();

    setPrevMousePos(mousePos);
    setPrevStartingMousePos(startingMousePos);
  }, [mousePos]);

  return (
    <canvas
      ref={canvasRef}
      style={style}
      width={width}
      height={height}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    ></canvas>
  );
}
