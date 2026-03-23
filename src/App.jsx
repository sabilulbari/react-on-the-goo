
import { Suspense } from 'react';
import './App.css'
import Countris from './component/Countris/Countris'

const fetchCountris = fetch("https://openapi.programming-hero.com/api/all")
.then(res => res.json())

function App() {

  const allCountris = fetchCountris;

  return (
    <>
      <Suspense fallback={<p>On the go....</p>}>
        <Countris allCountris={allCountris}></Countris>
      </Suspense>
    </>
  );
}

export default App
