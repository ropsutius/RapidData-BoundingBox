import Logo from "./Logo";
import Button from "./Button";
import TextField from "./TextField";

export default function ThankYouPage({ setPage }) {
  return (
    <>
      <Logo></Logo>
      <TextField text="GREAT!"></TextField>
      <TextField text="Thank you for submitting your answer!"></TextField>
      <Button
        handler={() => setPage("home")}
        text="Continue"
        isDisabled={false}
      ></Button>
    </>
  );
}
