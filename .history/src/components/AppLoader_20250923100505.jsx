"use client";

import { useState, useEffect } from "react";
import dynamic from 'next/dynamic'; // dynamic import 추가

// LoadingScreen 컴포넌트를 dynamic으로 불러오고, ssr을 false로 설정합니다.
// 이렇게 하면 이 컴포넌트는 오직 브라우저에서만 렌더링됩니다.
const LoadingScreen = dynamic(() => import('./LoadingScreen'), { ssr: false });

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
      }, 3000);
    }
  }, []);

  return loading ? <LoadingScreen /> : <>{children}</>;
};

export default AppLoader;