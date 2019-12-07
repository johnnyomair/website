import React from "react";
import Styles from "./OfflineHint.module.css";

export const OfflineHint = () => (
  <p className={Styles.text}>
    You seem to be offline. Some of this information might be outdated (although
    probably not).{" "}
    <span role="img" aria-label="Emoji indicating a hint">
      🤫
    </span>
  </p>
);
