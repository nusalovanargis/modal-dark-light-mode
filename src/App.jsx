import React, { Fragment, useState } from "react";
import { ThemeProvider } from "styled-components";

// Theme
import { themeSettings } from "./theme";

// Styled Components
import Button from "./components/Button";
import CloseIcon from "./components/CloseIcon";
import CommentIcon from "./components/CommentIcon";
import GlobalStyle from "./components/GlobalStyle";
import {
  ModalButtonWrapper,
  ModalContent,
  ModalParagraph,
  ModalTitle,
  ModalWrapper
} from "./components/Modal";

const App = () => {
  const [theme, toggleTheme] = useState("light");

  const newTheme = theme === "light" ? "dark" : "light";

  const setTheme = () => {
    toggleTheme(newTheme);
  };

  return (
    <Fragment>
      <GlobalStyle />
      <ThemeProvider theme={themeSettings[theme]}>
        <ModalWrapper>
          <CloseIcon />
          <ModalContent>
            <CommentIcon />
            <ModalTitle>Reply to join the conversation.</ModalTitle>
            <ModalParagraph>
              Once you join Twitter, you can respond to Yasin Softaoğlu's Tweet
            </ModalParagraph>
            <ModalButtonWrapper>
              <Button type="primary">Log in</Button>
              <Button type="secondary" onClick={setTheme}>
                Set {newTheme} Theme
              </Button>
            </ModalButtonWrapper>
          </ModalContent>
        </ModalWrapper>
      </ThemeProvider>
    </Fragment>
  );
};

export default App;
