import { useState } from 'react'

function compute(a, op, b) {
  switch (op) {
    case '+': return a + b
    case '-': return a - b
    case '×': return a * b
    case '÷': return b === 0 ? NaN : a / b
    default: return b
  }
}

function fmt(n) {
  if (isNaN(n)) return 'Error'
  return String(parseFloat(n.toPrecision(10)))
}

export default function Calculator() {
  const [display, setDisplay] = useState('0')
  const [operand, setOperand] = useState(null)
  const [operator, setOperator] = useState(null)
  const [resetNext, setResetNext] = useState(false)

  const digit = (d) => {
    if (resetNext) { setDisplay(String(d)); setResetNext(false); return }
    setDisplay(display === '0' ? String(d) : display + d)
  }

  const dot = () => {
    if (resetNext) { setDisplay('0.'); setResetNext(false); return }
    if (!display.includes('.')) setDisplay(display + '.')
  }

  const op = (o) => {
    const val = parseFloat(display)
    if (operand !== null && operator && !resetNext) {
      const result = compute(operand, operator, val)
      setDisplay(fmt(result))
      setOperand(result)
    } else {
      setOperand(val)
    }
    setOperator(o)
    setResetNext(true)
  }

  const equals = () => {
    if (operand === null || !operator) return
    const result = compute(operand, operator, parseFloat(display))
    setDisplay(fmt(result))
    setOperand(null)
    setOperator(null)
    setResetNext(true)
  }

  const clear = () => {
    setDisplay('0')
    setOperand(null)
    setOperator(null)
    setResetNext(false)
  }

  const back = () => {
    if (resetNext) return
    setDisplay(display.length > 1 ? display.slice(0, -1) : '0')
  }

  const square = () => {
    const val = parseFloat(display)
    setDisplay(fmt(val * val))
    setResetNext(true)
  }

  return (
    <div className="calculator">
      <div className="calc-display-row">
        <span className="calc-op-hint">{operator || ''}</span>
        <span className="calc-display">{display}</span>
      </div>
      <div className="calc-grid">
        <button className="calc-btn calc-btn-fn" onClick={clear}>C</button>
        <button className="calc-btn calc-btn-fn" onClick={back}>⌫</button>
        <button className="calc-btn calc-btn-fn" onClick={square}>x²</button>
        <button className="calc-btn calc-btn-op" onClick={() => op('÷')}>÷</button>

        {[7, 8, 9].map(d => <button key={d} className="calc-btn" onClick={() => digit(d)}>{d}</button>)}
        <button className="calc-btn calc-btn-op" onClick={() => op('×')}>×</button>

        {[4, 5, 6].map(d => <button key={d} className="calc-btn" onClick={() => digit(d)}>{d}</button>)}
        <button className="calc-btn calc-btn-op" onClick={() => op('-')}>−</button>

        {[1, 2, 3].map(d => <button key={d} className="calc-btn" onClick={() => digit(d)}>{d}</button>)}
        <button className="calc-btn calc-btn-op" onClick={() => op('+')}>+</button>

        <button className="calc-btn calc-btn-zero" onClick={() => digit(0)}>0</button>
        <button className="calc-btn" onClick={dot}>.</button>
        <button className="calc-btn calc-btn-eq" onClick={equals}>=</button>
      </div>
    </div>
  )
}
