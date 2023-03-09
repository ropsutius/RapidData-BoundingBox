import { useState } from "react";
import InitialPage from "./InitialPage";
import SolvingPage from "./SolvingPage";

export default function Home() {
  const [isSolvingPage, setSolvingPage] = useState(false);

  const handleSetSolvingPage = (value) => {
    setSolvingPage(value);
  };

  const PageToShow = () => {
    return isSolvingPage ? (
      <SolvingPage></SolvingPage>
    ) : (
      <InitialPage buttonHandler={handleSetSolvingPage}></InitialPage>
    );
  };

  return (
    <>
      <PageToShow></PageToShow>
    </>
  );
}
