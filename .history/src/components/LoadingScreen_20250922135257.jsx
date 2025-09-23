"use client";

// lottie-react에서 Player를 가져옵니다.
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
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 9999,
    }}>
        <p style={{
            fontSize: '32px',
            fontWeight: 'bold',
        }}>
          화면을 구성중입니다
        </p>
        <Player
          autoplay
          loop
          src="https://lottie.host/dfe9ce55-f0b7-4bb0-bcd2-241897b61dec/JhkEyDhSuU.json"
          style={{ width: '50%', height: 'auto' }}
        />
    </div>
  );
};

export default LoadingScreen;