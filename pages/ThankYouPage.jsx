import Logo from './components/Logo';
import Button from './components/Button';
import TextField from './components/TextField';

export default function ThankYouPage({ setPage }) {
  return (
    <>
      <Logo></Logo>
      <TextField text="GREAT!" fontSize="40px"></TextField>
      <TextField
        text="Thank you for submitting your answer!"
        fontSize="25px"
      ></TextField>
      <Button
        handler={() => setPage('home')}
        text="Continue"
        isDisabled={false}
      ></Button>
    </>
  );
}
