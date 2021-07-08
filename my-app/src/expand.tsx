export const expand = (tableRef: any, containerRef: any, columnRef: any, mainRef: any) => {
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