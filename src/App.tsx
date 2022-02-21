import { useEffect, VFC } from 'react';
import './App.scss';

const App: VFC = () => {
  const checkFC = () => {
    const isPWA = window.matchMedia('(display-mode: standalone)').matches;
    if (isPWA) {
      alert('hello! PWA!');
    } else {
      alert('hello! WEB!');
    }
  };
  useEffect(() => checkFC(), []);
  return (
    <>
      WEB : red
      <br />
      PWA : blue
    </>
  );
};

export default App;
