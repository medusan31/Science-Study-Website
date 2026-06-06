import { useState, useEffect, useMemo } from 'react'
import Calculator from './Calculator'
import { checkShortAnswer } from '../data/utils'

const LETTERS = ['A', 'B', 'C', 'D']

function checkCalc(q, value, unit) {
  if (unit !== q.unit) return false
  const val = parseFloat(value)
  if (isNaN(val)) return false
  const tol = Math.max(Math.abs(q.answer) * 0.02, 0.01)
  return Math.abs(val - q.answer) <= tol
}

export default function Quiz({ questions, onFinish, onHome, instantFeedback }) {
  const [current, setCurrent] = useState(0)
  const [selected, setSelected] = useState(null)
  const [calcValue, setCalcValue] = useState('')
  const [calcUnit, setCalcUnit] = useState('')
  const [shortValue, setShortValue] = useState('')
  const [calcFeedbackShown, setCalcFeedbackShown] = useState(false)
  const [mcFeedbackShown, setMcFeedbackShown] = useState(false)
  const [shortFeedbackShown, setShortFeedbackShown] = useState(false)
  const [answers, setAnswers] = useState({})
  const [showCalc, setShowCalc] = useState(false)

  const q = questions[current]
  const isCalc = q.type === 'calculation'
  const isShortAnswer = q.type === 'short-answer'

  const shuffledOptions = useMemo(() => {
    if (!q.options) return []
    return [...q.options].sort(() => Math.random() - 0.5)
  }, [current])

  const isLast = current === questions.length - 1
  const progress = (current / questions.length) * 100
  const hasAnswer = isCalc
    ? calcValue.trim() !== ''
    : isShortAnswer
      ? shortValue.trim() !== ''
      : selected !== null

  useEffect(() => {
    setSelected(null)
    setCalcValue('')
    setCalcUnit(questions[current].allowedUnits?.[0] ?? '')
    setShortValue('')
    setCalcFeedbackShown(false)
    setMcFeedbackShown(false)
    setShortFeedbackShown(false)
  }, [current])

  const handleSelect = (optionId) => {
    setSelected(optionId === selected ? null : optionId)
  }

  const handleNext = () => {
    if (!isCalc && !isShortAnswer && instantFeedback && !mcFeedbackShown) {
      setMcFeedbackShown(true)
      return
    }
    if (isCalc && instantFeedback && !calcFeedbackShown) {
      setCalcFeedbackShown(true)
      return
    }
    if (isShortAnswer && instantFeedback && !shortFeedbackShown) {
      setShortFeedbackShown(true)
      return
    }
    const answer = isCalc
      ? { value: calcValue, unit: calcUnit || q.allowedUnits[0] }
      : isShortAnswer
        ? shortValue
        : selected
    const newAnswers = { ...answers, [q.id]: answer }
    if (isLast) {
      onFinish(newAnswers)
    } else {
      setAnswers(newAnswers)
      setCurrent(current + 1)
    }
  }

  const showMCFeedback = mcFeedbackShown
  const correctOpt = q.options?.find(o => o.correct)
  const selectedCorrect = selected !== null && q.options?.find(o => o.id === selected)?.correct
  const calcCorrect = calcFeedbackShown && checkCalc(q, calcValue, calcUnit || q.allowedUnits?.[0])
  const shortCorrect = shortFeedbackShown && checkShortAnswer(q, shortValue)

  const getOptionClass = (opt) => {
    if (showMCFeedback) {
      if (opt.correct) return 'option-btn revealed-correct'
      if (selected === opt.id) return 'option-btn revealed-wrong'
      return 'option-btn'
    }
    return `option-btn${selected === opt.id ? ' selected' : ''}`
  }

  const btnText = ((isCalc && instantFeedback && !calcFeedbackShown) ||
    (isShortAnswer && instantFeedback && !shortFeedbackShown))
    ? 'Check Answer'
    : isLast ? 'Finish Quiz' : 'Next Question'

  const isNextDisabled = (instantFeedback && (mcFeedbackShown || calcFeedbackShown || shortFeedbackShown))
    ? false
    : !hasAnswer

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
        <>
          <div className="calc-input-row">
            <input
              type="number"
              className="calc-number-input"
              placeholder="Enter your answer…"
              value={calcValue}
              onChange={e => setCalcValue(e.target.value)}
              onKeyDown={e => { if (e.key === 'Enter' && hasAnswer && !calcFeedbackShown) handleNext() }}
              disabled={calcFeedbackShown}
              autoFocus
            />
            <select
              className="calc-unit-select"
              value={calcUnit || q.allowedUnits[0]}
              onChange={e => setCalcUnit(e.target.value)}
              disabled={calcFeedbackShown}
            >
              {q.allowedUnits.map(u => (
                <option key={u} value={u}>{u}</option>
              ))}
            </select>
          </div>
          {calcFeedbackShown && (
            <div className={`instant-feedback ${calcCorrect ? 'correct' : 'wrong'}`}>
              <div className="instant-feedback-title">{calcCorrect ? 'Correct!' : 'Incorrect'}</div>
              {!calcCorrect && (
                <div className="instant-feedback-body">
                  The correct answer is <strong>{q.answer} {q.unit}</strong>
                </div>
              )}
            </div>
          )}
        </>
      ) : isShortAnswer ? (
        <>
          <div className="short-answer-row">
            <input
              type="text"
              className="short-answer-input"
              placeholder="Type your answer…"
              value={shortValue}
              onChange={e => setShortValue(e.target.value)}
              onKeyDown={e => { if (e.key === 'Enter' && hasAnswer && !shortFeedbackShown) handleNext() }}
              disabled={shortFeedbackShown}
              autoFocus
            />
          </div>
          {shortFeedbackShown && (
            <div className={`instant-feedback ${shortCorrect ? 'correct' : 'wrong'}`}>
              <div className="instant-feedback-title">{shortCorrect ? 'Correct!' : 'Incorrect'}</div>
              <div className="instant-feedback-body">{q.explanation}</div>
            </div>
          )}
        </>
      ) : (
        <>
          <div className="quiz-options">
            {shuffledOptions.map((opt, i) => (
              <button
                key={opt.id}
                className={getOptionClass(opt)}
                onClick={() => handleSelect(opt.id)}
                disabled={showMCFeedback}
              >
                <span className="option-letter">{LETTERS[i]}</span>
                <span className="option-text">{opt.text}</span>
              </button>
            ))}
          </div>
          {showMCFeedback && (
            <div className={`instant-feedback ${selectedCorrect ? 'correct' : 'wrong'}`}>
              <div className="instant-feedback-title">{selectedCorrect ? 'Correct!' : 'Incorrect'}</div>
              <div className="instant-feedback-body">{correctOpt?.correctExplanation}</div>
            </div>
          )}
        </>
      )}

      {showCalc && (
        <div className="quiz-calc-panel">
          <Calculator />
        </div>
      )}

      <div className="quiz-footer">
        <button
          className={`btn btn-ghost quiz-calc-toggle${showCalc ? ' active' : ''}`}
          onClick={() => setShowCalc(v => !v)}
          title="Toggle calculator"
        >
          🧮
        </button>
        <button className="btn btn-primary" onClick={handleNext} disabled={isNextDisabled}>
          {btnText}
        </button>
      </div>
    </div>
  )
}
