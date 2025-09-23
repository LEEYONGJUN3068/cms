"use client";

import { Player } from "@lottiefiles/react-lottie-player";

const LoadingScreen = () => {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: '#000',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 9999,
    }}>
      <DotLottieReact
      src="https://lottie.host/2121cbe9-0c7f-4a70-9dc0-2e67b24f7d53/KUKYvipqy9.lottie"
      loop
      autoplay
      />
    </div>
  );
};

export default LoadingScreen;