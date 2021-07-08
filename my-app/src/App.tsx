import React from 'react';
import './App.css';
import { useRef } from 'react'
import { Container } from '@material-ui/core';
import { TablePlain } from './Table';
import { expand } from './expand';

function App() {
  const mainRef: any = useRef()
  const colRef1: any = useRef()
  const colRef2: any = useRef()
  const contRef1: any = useRef()
  const contRef2: any = useRef()
  const contRef3: any = useRef()
  const contRef4: any = useRef()
  const ref1: any = useRef()
  const ref2: any = useRef()
  const ref3: any = useRef()
  const ref4: any = useRef()

  return (
    <div className="App" ref={mainRef}>
      <div className="col" ref={colRef1}>
        <div className="container" ref={contRef1}><div className="table sq" ref={ref1} onClick={() => expand(ref1, contRef1, colRef1, mainRef)}><TablePlain /></div></div>
        <div className="container" ref={contRef2}><div className="table rect" ref={ref2} onClick={() => expand(ref2, contRef2, colRef1, mainRef)}><TablePlain /></div></div>
      </div>
      <div className="col" ref={colRef2}>
        <div className="container" ref={contRef3}><div className="table rect" ref={ref3} onClick={() => expand(ref3, contRef3, colRef2, mainRef)}><TablePlain /></div></div>
        <div className="container" ref={contRef4}><div className="table sq" ref={ref4} onClick={() => expand(ref4, contRef4, colRef2, mainRef)}><TablePlain /></div></div>
      </div>
    </div>
  );
}

export default App;
