import Logo from "./Logo";

function Welcome() {
  return (
    <>
      <p>Draw a box around the car in the image</p>
      <p>Click next to start!</p>
    </>
  );
}

function NextButton() {
  return <button>Next</button>;
}

export default function InitialPage() {
  return (
    <>
      <Logo></Logo>
      <Welcome></Welcome>
      <NextButton></NextButton>
    </>
  );
}
