import { useEffect, useRef } from 'react';

export default function SolvingCanvas(props) {
  const canvasRef = useRef(null);

  const getCoordinates = (event) => {
    const parentTransform =
      event.target.parentElement.parentNode.style.transform;
    const array = parentTransform.split(' ');

    const xOffset = Number(array[0].slice(10, -3));
    const yOffset = Number(array[1].slice(0, -3));
    const scale = Number(array[2].slice(6, -1));

    const x = (event.touches[0].clientX - xOffset - props.leftOffset) / scale;
    const y = (event.touches[0].clientY - yOffset - props.topOffset) / scale;

    return { x, y };
  };

  const handleTouchStart = (event) => {
    props.setStartingMousePos(getCoordinates(event));
  };

  const handleTouchMove = (event) => {
    const coords = getCoordinates(event);

    coords.x = coords.x < 0 ? 0 : coords.x;
    coords.x = coords.x > event.target.width ? event.target.width : coords.x;

    coords.y = coords.y < 0 ? 0 : coords.y;
    coords.y = coords.y > event.target.height ? event.target.height : coords.y;

    props.setMousePos(coords);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);

    const topLeftX = Math.min(props.mousePos.x, props.startingMousePos.x);
    const topLeftY = Math.min(props.mousePos.y, props.startingMousePos.y);

    const width = Math.abs(props.mousePos.x - props.startingMousePos.x);
    const height = Math.abs(props.mousePos.y - props.startingMousePos.y);

    context.strokeStyle = 'rgba(255, 0, 0, 1)';
    context.beginPath();
    context.rect(topLeftX, topLeftY, width, height);
    //context.rect(0, 0, 100, 100);
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
