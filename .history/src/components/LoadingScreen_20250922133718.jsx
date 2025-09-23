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
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 9999,
    }}>
      {/* <dotlottie-wc> 대신 <Player> 컴포넌트를 사용합니다. */}
      <Player
        autoplay
        loop
        // 여기에 .json으로 끝나는 URL을 넣으세요.
        src="https://lottie.host/e2b621af-c11c-482f-8710-85f269a9b6c4/b2AR42ci3A.json"
        // React에서는 style을 객체 형태로 전달합니다.
        style={{ height: '300px', width: '300px' }}
      />
    </div>
  );
};

export default LoadingScreen;