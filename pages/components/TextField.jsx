export default function TextField({ text, fontSize }) {
  return (
    <div style={textContainerStyle}>
      <p style={{ ...textStyle, fontSize }}>{text}</p>
    </div>
  );
}

const textContainerStyle = {
  textAlign: 'center',
  margin: '0 auto',
};

const textStyle = {
  fontFamily: 'Quicksand, sans-serif',
  padding: '15px 32px',
  textAlign: 'center',
  textDecoration: 'none',
  display: 'inline-block',
  color: '#0077FF',
};
