import Image from "next/image";
import logo from "../public/logo_with_name.svg";

function Logo() {
  return <Image src={logo} alt="RapidData logo" height="100"></Image>;
}

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
