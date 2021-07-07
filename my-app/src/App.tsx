import React from 'react';
import './App.css';
import { useRef } from 'react'

function App() {
  const mainRef: any = useRef()
  const colRef: any = useRef()
  const contRef: any = useRef()
  const ref: any = useRef()
  const loc: any = useRef()

  const onClick = (e: any) => {
    const cont: any = contRef.current
    const col: any = colRef.current
    const t = ref.current

    const x = col?.offsetLeft
    const y = cont?.offsetTop
    const w = cont?.offsetWidth
    const h = cont?.offsetHeight
    cont.style.setProperty('--loc-x', x + 'px')
    cont.style.setProperty('--loc-y', y + 'px')
    cont.style.setProperty('--loc-w', w + 'px')
    cont.style.setProperty('--loc-h', h + 'px')

    if (ref.current?.classList.contains('table--abs')) {
      console.log('containS --table--abs')
      t.style.setProperty('--loc-x', x + 8 + 'px')
      t.style.removeProperty('--loc-y')
      t.style.removeProperty('--loc-w')
      t.style.removeProperty('--loc-h')
      setTimeout(() => {
        ref.current.classList.remove('table--abs')
      }, 1000)
    } else {
      console.log('does NOT contain --table--abs')
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
      console.log('classlist test', t.classList)
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
    <div className="App" style={{ background: 'red' }} ref={mainRef}>
      <div className="col">
        <div className="container"><div className="table sq"></div></div>
        <div className="container"><div className="table rect"></div></div>
      </div>
      <div className="col" ref={colRef}>
        <div className="container"><div className="table rect"></div></div>
        <div className="container" ref={contRef}><div className="table sq" ref={ref} onClick={onClick}></div></div>
      </div>
    </div>
  );
}

export default App;
