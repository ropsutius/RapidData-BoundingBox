import Image from "next/image";
import logo from "../public/logo_with_name.svg";

export default function Logo() {
  return (
    <div style={logoStyle}>
      <Image src={logo} alt="RapidData logo" width="200" height="auto"></Image>
    </div>
  );
}

const logoStyle = { margin: "0 auto", padding: "30px", paddingBottom: "25%" };
