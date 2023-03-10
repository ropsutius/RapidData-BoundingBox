import { useEffect, useState } from 'react';
import Button from './components/Button';
import Logo from './components/Logo';
import TextField from './components/TextField';

export default function InitialPage({ setPage }) {
  const [timeLeft, setTimeLeft] = useState(5);

  useEffect(() => {
    if (timeLeft > 0) {
      const interval = setInterval(
        () => setTimeLeft((time) => (time -= 1)),
        1000
      );
      return () => clearInterval(interval);
    } else {
      return setPage('solve');
    }
  });

  return (
    <>
      <Logo></Logo>
      <TextField
        text="You can skip this ad by playing a quick game!"
        fontSize="25px"
      ></TextField>
      <TextField
        text="Draw a box around the car in the image. You can use two fingers to zoom in on the image!"
        fontSize="25px"
      ></TextField>
      <Button
        handler={() => setPage('solve')}
        text={`Start (${timeLeft})`}
        isDisabled={false}
      ></Button>
    </>
  );
}
