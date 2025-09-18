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
        src="https://lottie.host/890b77e8-48b0-466d-8822-26338f0d3550/gU35x5s2bA.json"
        style={{ height: '300px', width: '300px' }}
      />
    </div>
  );
};

export default LoadingScreen;