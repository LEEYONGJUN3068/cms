"use client";

import { useState, useEffect } from "react";
import LoadingScreen from "./LoadingScreen";

const AppLoader = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const isFirstVisit = sessionStorage.getItem("isFirstVisit");

    if (isFirstVisit) {
      setLoading(false);
    } else {
      sessionStorage.setItem("isFirstVisit", "false");
      setTimeout(() => {
        setLoading(false);
      }, 3000); // 3초
    }
  }, []);

  return loading ? <LoadingScreen /> : <>{children}</>;
};

export default AppLoader;