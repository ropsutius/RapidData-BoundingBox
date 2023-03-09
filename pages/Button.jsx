export default function Button({ handler, text, isDisabled }) {
  return (
    <div style={buttonContainerStyle}>
      <button
        style={{
          ...buttonStyle,
          backgroundColor: isDisabled ? "#90C4FF" : "#0077FF",
        }}
        onClick={handler}
      >
        {text}
      </button>
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
  border: "none",
  color: "white",
  padding: "15px 32px",
  textAlign: "center",
  textDecoration: "none",
  display: "inline-block",
  fontSize: "25px",
  borderRadius: "8px",
  textTransform: "capitalize",
};
