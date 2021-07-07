import React from 'react';
import './App.css';
import { useRef } from 'react'
import { Container } from '@material-ui/core';
import { TablePlain } from './Table';

function App() {
  const mainRef: any = useRef()
  const colRef2: any = useRef()
  const colRef1: any = useRef()
  const contRef: any = useRef()
  const contRef0: any = useRef()
  const contRef3: any = useRef()
  const contRef4: any = useRef()
  const ref: any = useRef()
  const ref2: any = useRef()
  const ref3: any = useRef()
  const ref4: any = useRef()
  const loc: any = useRef()

  const onClick = (tableRef: any, containerRef: any, columnRef: any) => {
    const cont: any = containerRef.current
    const col: any = columnRef.current
    const t = tableRef.current

    const x = col?.offsetLeft
    const y = cont?.offsetTop
    const w = cont?.offsetWidth
    const h = cont?.offsetHeight
    cont.style.setProperty('--loc-x', x + 'px')
    cont.style.setProperty('--loc-y', y + 'px')
    cont.style.setProperty('--loc-w', w + 'px')
    cont.style.setProperty('--loc-h', h + 'px')

    if (tableRef.current?.classList.contains('table--abs')) {

      t.style.setProperty('--loc-x', x + 8 + 'px')
      t.style.removeProperty('--loc-y')
      t.style.removeProperty('--loc-w')
      t.style.removeProperty('--loc-h')
      setTimeout(() => {
        tableRef.current.classList.remove('table--abs')
      }, 1000)
    } else {
      cont.classList.add('container--filler')

      loc.current = {
        x: t.offsetLeft,
        y: t.offsetTop,
        w: t.offsetWidth,
        h: t.offsetHeight
      }
      t.style.setProperty('--loc-x', t.offsetLeft + 'px')
      t.style.setProperty('--loc-y', t.offsetTop + 'px')
      t.style.setProperty('--loc-w', t.offsetWidth + 'px')
      t.style.setProperty('--loc-h', t.offsetHeight + 'px')
      t.classList.add('table--abs')
      setTimeout(() => {
        t.style.setProperty('--timing', '1s')
        t.style.setProperty('--loc-x', 0 + 'px')
        t.style.setProperty('--loc-y', 0 + 'px')
        t.style.setProperty('--loc-w', mainRef.current?.offsetWidth + 'px')
        t.style.setProperty('--loc-h', mainRef.current.offsetHeight + 'px')
      }, 0)
    }
  }
  return (
    <div className="App" ref={mainRef}>
      <div className="col" ref={colRef1}>
        <div className="container" ref={contRef4}><div className="table sq" ref={ref4} onClick={() => onClick(ref4, contRef4, colRef1)}><TablePlain /></div></div>
        <div className="container" ref={contRef0}><div className="table rect" ref={ref2} onClick={() => onClick(ref2, contRef0, colRef1)}><TablePlain /></div></div>
      </div>
      <div className="col" ref={colRef2}>
        <div className="container" ref={contRef3}><div className="table rect" ref={ref3} onClick={() => onClick(ref3, contRef3, colRef2)}><TablePlain /></div></div>
        <div className="container" ref={contRef}><div className="table sq" ref={ref} onClick={() => onClick(ref, contRef, colRef2)}><TablePlain /></div></div>
      </div>
    </div>
  );
}

export default App;
