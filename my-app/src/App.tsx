import React from 'react';
import './App.css';
import { useRef } from 'react'
import { Container } from '@material-ui/core';
import { TablePlain } from './Table';

function App() {
  const mainRef: any = useRef()
  const colRef: any = useRef()
  const colRef0: any = useRef()
  const contRef: any = useRef()
  const contRef0: any = useRef()
  const contRef3: any = useRef()
  const contRef4: any = useRef()
  const ref: any = useRef()
  const ref2: any = useRef()
  const ref3: any = useRef()
  const ref4: any = useRef()
  const loc: any = useRef()

  const onClick = (e: any) => {
    console.log('ORIG ONCLICK')
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

      t.style.setProperty('--loc-x', x + 8 + 'px')
      t.style.removeProperty('--loc-y')
      t.style.removeProperty('--loc-w')
      t.style.removeProperty('--loc-h')
      setTimeout(() => {
        ref.current.classList.remove('table--abs')
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
  const onClick2 = (e: any) => {
    const cont: any = contRef0.current
    const col: any = colRef0.current
    const t = ref2.current

    const x = col?.offsetLeft
    const y = cont?.offsetTop
    const w = cont?.offsetWidth
    const h = cont?.offsetHeight
    cont.style.setProperty('--loc-x', x + 'px')
    cont.style.setProperty('--loc-y', y + 'px')
    cont.style.setProperty('--loc-w', w + 'px')
    cont.style.setProperty('--loc-h', h + 'px')

    if (ref2.current?.classList.contains('table--abs')) {
      t.style.setProperty('--loc-x', x + 8 + 'px')
      t.style.removeProperty('--loc-y')
      t.style.removeProperty('--loc-w')
      t.style.removeProperty('--loc-h')
      setTimeout(() => {
        ref2.current.classList.remove('table--abs')
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
  const onClick4 = (e: any) => {
    const cont: any = contRef4.current
    const col: any = colRef0.current
    const t = ref4.current

    const x = col?.offsetLeft
    const y = cont?.offsetTop
    const w = cont?.offsetWidth
    const h = cont?.offsetHeight
    cont.style.setProperty('--loc-x', x + 'px')
    cont.style.setProperty('--loc-y', y + 'px')
    cont.style.setProperty('--loc-w', w + 'px')
    cont.style.setProperty('--loc-h', h + 'px')

    if (ref4.current?.classList.contains('table--abs')) {
      t.style.setProperty('--loc-x', x + 8 + 'px')
      t.style.removeProperty('--loc-y')
      t.style.removeProperty('--loc-w')
      t.style.removeProperty('--loc-h')
      setTimeout(() => {
        ref4.current.classList.remove('table--abs')
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
  const onClick3 = (e: any) => {
    const cont: any = contRef3.current
    const col: any = colRef.current
    const t = ref3.current

    const x = col?.offsetLeft

    const y = cont?.offsetTop
    const w = cont?.offsetWidth
    const h = cont?.offsetHeight
    cont.style.setProperty('--loc-x', x + 'px')
    cont.style.setProperty('--loc-y', y + 'px')
    cont.style.setProperty('--loc-w', w + 'px')
    cont.style.setProperty('--loc-h', h + 'px')

    if (ref3.current?.classList.contains('table--abs')) {
      t.style.setProperty('--loc-x', x + 8 + 'px')
      t.style.removeProperty('--loc-y')
      t.style.removeProperty('--loc-w')
      t.style.removeProperty('--loc-h')
      setTimeout(() => {
        ref3.current.classList.remove('table--abs')
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
      <div className="col" ref={colRef0}>
        <div className="container" ref={contRef4}><div className="table sq" ref={ref4} onClick={onClick4}><TablePlain /></div></div>
        <div className="container" ref={contRef0}><div className="table rect" ref={ref2} onClick={onClick2}><TablePlain /></div></div>
      </div>
      <div className="col" ref={colRef}>
        <div className="container" ref={contRef3}><div className="table rect" ref={ref3} onClick={onClick3}><TablePlain /></div></div>
        <div className="container" ref={contRef}><div className="table sq" ref={ref} onClick={onClick}><TablePlain /></div></div>
      </div>
    </div>
  );
}

export default App;
