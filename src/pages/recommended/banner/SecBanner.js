import React, { useState, useEffect } from "react";
import {
  Wrapper,
  Banner,
  Title,
  SemiTitle,
  CloseButton,
} from "./SecBannerStyles";

const SecBanner = ({ setShowPopUp }) => {
  const [showBanner, setShowBanner] = useState(true);

  const handleDismiss = () => {
    setShowPopUp(false);
    setShowBanner(false);
  };

  return (
    <Wrapper style={{ display: showBanner ? "block" : "" }}>
      <Banner style={{ height: "25%" }}>
        <SemiTitle style={{ fontSize: "20px" }}>
          כניסה לכלים חינוכיים תעביר אותך לאתר אחר
        </SemiTitle>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <CloseButton onClick={handleDismiss}>חזרה לדף בית</CloseButton>
          <CloseButton
            onClick={() => (window.location.href = "https://www.4u2023.com/")}
          >
            מעבר לאתר
          </CloseButton>
        </div>
      </Banner>
    </Wrapper>
  );
};

export default SecBanner;
