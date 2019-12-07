import { useEffect, useState } from "react";

export function useNetwork() {
  const [isOnline, setNetwork] = useState(
    typeof window !== `undefined` ? window.navigator.onLine : true,
  );
  const updateNetwork = () => {
    setNetwork(window.navigator.onLine);
  };
  useEffect(() => {
    if (typeof window !== `undefined`) {
      window.addEventListener("offline", updateNetwork);
      window.addEventListener("online", updateNetwork);
    }

    return () => {
      if (typeof window !== `undefined`) {
        window.removeEventListener("offline", updateNetwork);
        window.removeEventListener("online", updateNetwork);
      }
    };
  });
  return isOnline;
}
