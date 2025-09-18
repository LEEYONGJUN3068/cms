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
      <Player
        autoplay
        loop
        src="https://lottie.host/422e47f5-0392-4837-a690-d9db1433145e/T2OpmF42Ee.lottie"
        style={{ height: '300px', width: '300px' }}
      />
    </div>
  );
};

export default LoadingScreen;