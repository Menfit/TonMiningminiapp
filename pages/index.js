import { useState, useEffect } from 'react';
import { FaCoins, FaUserFriends, FaWallet } from 'react-icons/fa';

export default function Home() {
  const [timeLeft, setTimeLeft] = useState(180);
  const [isMining, setIsMining] = useState(false);

  useEffect(() => {
    if (isMining && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [timeLeft, isMining]);

  const startMining = () => setIsMining(true);

  const formatTime = (sec) => {
    const minutes = Math.floor(sec / 60);
    const seconds = sec % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>مرحبًا بك في تعدين طون! ⛏️</h1>
      <div style={{ margin: '30px 0' }}>
        <div style={{ fontSize: '50px' }}>🌀</div>
        <p>قوة التعدين: 20 جيجا هاش</p>
        <p>ستحصل على: 1 طون كل 24 ساعة</p>
      </div>
      <button 
        onClick={startMining}
        disabled={isMining}
        style={{ 
          background: isMining ? '#2A5C9A' : '#FFD700',
          padding: '10px 20px',
          borderRadius: '5px',
          border: 'none',
          fontSize: '18px'
        }}
      >
        {isMining ? `انتظر... ${formatTime(timeLeft)}` : 'ابدأ التعدين'}
      </button>
      <div style={{ position: 'fixed', bottom: '0', left: '0', right: '0', display: 'flex', justifyContent: 'space-around', background: '#f0f0f0', padding: '10px' }}>
        <button style={{ background: 'none', border: 'none' }}><FaCoins /> الرئيسية</button>
        <button style={{ background: 'none', border: 'none' }}><FaUserFriends /> الإحالة</button>
        <button style={{ background: 'none', border: 'none' }}><FaWallet /> المحفظة</button>
      </div>
    </div>
  );
}
