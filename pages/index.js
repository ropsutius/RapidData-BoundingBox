import { useState } from "react";
import InitialPage from "./InitialPage";
import SolvingPage from "./SolvingPage";

export default function Home() {
  const [currentPage, setPage] = useState("home");

  const PageToShow = () => {
    switch (currentPage) {
      case "home":
        return <InitialPage setPage={setPage}></InitialPage>;
      case "solve":
        return <SolvingPage setPage={setPage}></SolvingPage>;
      case "thanks":
        return <ThankYouPage setPage={setPage}></ThankYouPage>;
    }
  };

  return (
    <div style={pageStyle}>
      <PageToShow></PageToShow>
    </div>
  );
}

const pageStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
};
