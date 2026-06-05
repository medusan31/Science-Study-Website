import { useState, useEffect } from 'react'

const LETTERS = ['A', 'B', 'C', 'D']

export default function Quiz({ questions, onFinish, onHome }) {
  const [current, setCurrent] = useState(0)
  const [selected, setSelected] = useState(null)
  const [calcValue, setCalcValue] = useState('')
  const [calcUnit, setCalcUnit] = useState('')
  const [answers, setAnswers] = useState({})

  const q = questions[current]
  const isCalc = q.type === 'calculation'
  const isLast = current === questions.length - 1
  const progress = (current / questions.length) * 100
  const hasAnswer = isCalc ? calcValue.trim() !== '' : selected !== null

  useEffect(() => {
    setSelected(null)
    setCalcValue('')
    setCalcUnit(questions[current].allowedUnits?.[0] ?? '')
  }, [current])

  const handleSelect = (optionId) => {
    if (selected !== null) return
    setSelected(optionId)
  }

  const handleNext = () => {
    const answer = isCalc
      ? { value: calcValue, unit: calcUnit || q.allowedUnits[0] }
      : selected
    const newAnswers = { ...answers, [q.id]: answer }
    if (isLast) {
      onFinish(newAnswers)
    } else {
      setAnswers(newAnswers)
      setCurrent(current + 1)
    }
  }

  return (
    <div className="quiz">
      <div className="quiz-header">
        <span className="quiz-progress-label">Question {current + 1} of {questions.length}</span>
        <button className="btn btn-ghost" style={{ padding: '8px 16px', fontSize: '13px' }} onClick={onHome}>
          Exit
        </button>
      </div>

      <div className="quiz-progress-bar">
        <div className="quiz-progress-fill" style={{ width: `${progress}%` }} />
      </div>

      <div className="quiz-question">
        <div className="question-number">Question {current + 1}</div>
        <div className="question-text">{q.question}</div>
      </div>

      {isCalc ? (
        <div className="calc-input-row">
          <input
            type="number"
            className="calc-number-input"
            placeholder="Enter your answer…"
            value={calcValue}
            onChange={e => setCalcValue(e.target.value)}
            onKeyDown={e => { if (e.key === 'Enter' && hasAnswer) handleNext() }}
            autoFocus
          />
          <select
            className="calc-unit-select"
            value={calcUnit || q.allowedUnits[0]}
            onChange={e => setCalcUnit(e.target.value)}
          >
            {q.allowedUnits.map(u => (
              <option key={u} value={u}>{u}</option>
            ))}
          </select>
        </div>
      ) : (
        <div className="quiz-options">
          {q.options.map((opt, i) => (
            <button
              key={opt.id}
              className={`option-btn${selected === opt.id ? ' selected' : ''}`}
              onClick={() => handleSelect(opt.id)}
              disabled={selected !== null}
            >
              <span className="option-letter">{LETTERS[i]}</span>
              <span className="option-text">{opt.text}</span>
            </button>
          ))}
        </div>
      )}

      <div className="quiz-footer">
        <button className="btn btn-primary" onClick={handleNext} disabled={!hasAnswer}>
          {isLast ? 'Finish Quiz' : 'Next Question'}
        </button>
      </div>
    </div>
  )
}
