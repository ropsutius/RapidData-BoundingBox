import Logo from "./Logo";

export default function ThankYouPage({ setPage }) {
  return (
    <>
      <Logo></Logo>
      <div style={thankYouStyle}>
        <p>Thank you for submitting your answer!</p>
      </div>
      <div style={buttonStyle}>
        <button onClick={() => setPage("home")}>Continue</button>
      </div>
    </>
  );
}

const thankYouStyle = { textAlign: "center", padding: "30px" };
const buttonStyle = { margin: "0 auto", textAlign: "center", padding: "30px" };
