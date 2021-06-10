import React, { useEffect } from 'react';
import { pipe } from 'fp-ts/function';
import './App.css';
import * as D from 'io-ts/Decoder';

class Person {
  constructor(readonly name: string, readonly health: number) {}
}

export const PersonD: D.Decoder<unknown, Person> = pipe(
  D.string,
  D.parse((name) => D.success(new Person(name, 100))),
);

const bCustomDecoder: D.Decoder<
  unknown,
  { name: string; health: number; isAlive: boolean }
> = D.struct({
  name: D.string,
  health: D.number,
  isAlive: D.boolean, // this is undefined when io-ts is imported as io-ts/Decoder 
});

interface AppProps {}

function App({}: AppProps) {
  useEffect(() => {
    console.log(PersonD.decode('john'));
    // uncomment this line
    // console.log(
    //   bCustomDecoder.decode({ name: 'john', health: 100, isAlive: true }),
    // );
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
