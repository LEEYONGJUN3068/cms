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
        src="/animation.json" // public 폴더의 파일을 가리킵니다.
        style={{ height: '300px', width: '300px' }}
      />
    </div>
  );
};

export default LoadingScreen;