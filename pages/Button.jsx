import playButton from "../public/play_button.svg";
import Image from "next/image";

export default function Button({ handler, text, isDisabled }) {
  return (
    <div style={buttonContainerStyle}>
      <div style={{ display: "inline-block" }}>
        <button
          style={{
            ...buttonStyle,
            backgroundColor: isDisabled ? "#90C4FF" : "#0077FF",
          }}
          onClick={handler}
        >
          <div style={flexItem}>{text}</div>
          <div>
            <Image
              style={{ ...flexItem, paddingTop: "8px" }}
              src={playButton}
              alt="play"
              width="40"
              height="40"
            ></Image>
          </div>
        </button>
      </div>
    </div>
  );
}

const buttonContainerStyle = {
  position: "fixed",
  left: "0",
  bottom: "0",
  width: "100%",
  margin: "10% auto",
  textAlign: "center",
};

const buttonStyle = {
  fontFamily: "Quicksand, sans-serif",
  border: "none",
  color: "white",
  padding: "15px 20px",
  textAlign: "center",
  textDecoration: "none",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "30px",
  borderRadius: "50px",
  textTransform: "capitalize",
  filter: "drop-shadow(6px 6px 8px #505050)",
};

const flexItem = {
  padding: "0 10px",
};
