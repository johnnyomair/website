import React from "react";
import Styles from "./OfflineIndicator.module.css";

export const OfflineIndicator = () => (
  <p className={Styles.text}>
    You seem to be offline. Please check your internet connection or refresh
    your browser.{" "}
    <span role="img" aria-label="Emoji indicating a hint">
      🤫
    </span>
  </p>
);
