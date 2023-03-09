export default function TextField({ text }) {
  return (
    <div style={textContainerStyle}>
      <p style={textStyle}>{text}</p>
    </div>
  );
}

const textContainerStyle = {
  textAlign: "center",
  margin: "0 auto",
};

const textStyle = {
  fontFamily: "Helvetica",
  padding: "15px 32px",
  textAlign: "center",
  textDecoration: "none",
  display: "inline-block",
  fontSize: "25px",
  color: "#0077FF",
};
