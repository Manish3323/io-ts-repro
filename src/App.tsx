import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import * as D from 'io-ts/lib/Decoder';

const aCustomDecoder: D.Decoder<unknown, { name: string; health: number }> =
  D.struct({
    name: D.string,
    health: D.number,
  });
const bCustomDecoder: D.Decoder<
  unknown,
  { name: string; health: number; isAlive: boolean }
> = D.struct({
  name: D.string,
  health: D.number,
  isAlive: D.boolean,
});

interface AppProps {}

function App({}: AppProps) {
  useEffect(() => {
    console.log(aCustomDecoder.decode({ name: 'john', health: 100 }));
    // uncomment this line
    console.log(bCustomDecoder.decode({ name: 'john', health: 100, isAlive: true }));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>Open browser console</p>
      </header>
    </div>
  );
}

export default App;
