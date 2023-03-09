import Image from "next/image";
import logo from "../public/logo_with_name.svg";

export default function Logo() {
  return <Image src={logo} alt="RapidData logo" height="100"></Image>;
}
