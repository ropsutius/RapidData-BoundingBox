import { useState, useEffect, useRef } from "react";

export default function SolvingCanvas(props) {
  const canvasRef = useRef(null);

  /*setMousePos({
      x:
        ((event.touches[0].clientX - event.target.offsetLeft) /
          event.target.width) *
        100,
      y:
        100 -
        ((event.touches[0].clientY - event.target.offsetTop) /
          event.target.height) *
          100,
    });*/

  const handleTouchStart = (event) => {
    props.setStartingMousePos({
      x: event.touches[0].clientX - event.target.offsetLeft,
      y: event.touches[0].clientY - event.target.offsetTop,
    });
  };

  const handleTouchMove = (event) => {
    let x = event.touches[0].clientX - event.target.offsetLeft;
    x = x < 0 ? 0 : x;
    x = x > event.target.width ? event.target.width : x;

    let y = event.touches[0].clientY - event.target.offsetTop;
    y = y < 0 ? 0 : y;
    y = y > event.target.height ? event.target.height : y;

    props.setMousePos({ x, y });
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);

    const topLeftX = Math.min(props.mousePos.x, props.startingMousePos.x);
    const topLeftY = Math.min(props.mousePos.y, props.startingMousePos.y);

    const width = Math.abs(props.mousePos.x - props.startingMousePos.x);
    const height = Math.abs(props.mousePos.y - props.startingMousePos.y);

    context.strokeStyle = "rgba(255, 0, 0, 1)";
    context.beginPath();
    context.rect(topLeftX, topLeftY, width, height);
    context.stroke();
  }, [props.mousePos]);

  return (
    <canvas
      ref={canvasRef}
      style={props.style}
      width={props.width}
      height={props.height}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    ></canvas>
  );
}
