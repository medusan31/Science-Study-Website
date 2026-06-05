import { useState } from 'react'
import { generateSimilarQuestion } from '../data/practiceGenerator'

const LETTERS = ['A', 'B', 'C', 'D']

function isCalcCorrect(q, answer) {
  if (!answer || !answer.value) return false
  if (answer.unit !== q.unit) return false
  const val = parseFloat(answer.value)
  if (isNaN(val)) return false
  const tol = Math.max(Math.abs(q.answer) * 0.02, 0.01)
  return Math.abs(val - q.answer) <= tol
}

function isPracticeCorrect(pq, state) {
  if (pq.type === 'calculation') {
    return isCalcCorrect(pq, { value: state.inputValue, unit: state.inputUnit })
  }
  const correctOpt = pq.options?.find(o => o.correct)
  return state.selectedId === correctOpt?.id
}

function PracticePanel({ origQ, practice, onUpdate, onTryAnother, onClose }) {
  const { q, inputValue, inputUnit, selectedId, submitted, shuffledOpts } = practice
  const isCalc = q.type === 'calculation'
  const hasAnswer = isCalc ? inputValue.trim() !== '' : selectedId !== null
  const correct = submitted ? isPracticeCorrect(q, practice) : false

  const handleSubmit = () => {
    if (!hasAnswer) return
    onUpdate({ submitted: true })
  }

  return (
    <div className="practice-panel">
      <div className="practice-header">
        <span className="practice-label">Practice</span>
        <button className="practice-close" onClick={onClose} aria-label="Close">✕</button>
      </div>

      <div className="practice-question">{q.question}</div>

      {isCalc ? (
        <div className="calc-input-row" style={{ marginBottom: '12px' }}>
          <input
            type="number"
            className="calc-number-input"
            style={{ fontSize: '1.1rem', padding: '12px 16px' }}
            placeholder="Answer…"
            value={inputValue}
            onChange={e => onUpdate({ inputValue: e.target.value })}
            onKeyDown={e => { if (e.key === 'Enter' && hasAnswer && !submitted) handleSubmit() }}
            disabled={submitted}
          />
          <select
            className="calc-unit-select"
            style={{ fontSize: '0.95rem', padding: '12px 14px' }}
            value={inputUnit}
            onChange={e => onUpdate({ inputUnit: e.target.value })}
            disabled={submitted}
          >
            {q.allowedUnits.map(u => <option key={u} value={u}>{u}</option>)}
          </select>
        </div>
      ) : (
        <div className="practice-options">
          {shuffledOpts.map((opt, i) => {
            let cls = 'option-btn'
            if (submitted) {
              if (opt.correct) cls += ' revealed-correct'
              else if (selectedId === opt.id) cls += ' revealed-wrong'
            } else if (selectedId === opt.id) {
              cls += ' selected'
            }
            return (
              <button
                key={opt.id}
                className={cls}
                onClick={() => { if (!submitted) onUpdate({ selectedId: opt.id === selectedId ? null : opt.id }) }}
                disabled={submitted}
                style={{ padding: '12px 16px', fontSize: '14px' }}
              >
                <span className="option-letter">{LETTERS[i]}</span>
                <span className="option-text">{opt.text}</span>
              </button>
            )
          })}
        </div>
      )}

      {submitted && (
        <div className={`practice-result ${correct ? 'correct' : 'wrong'}`}>
          {correct
            ? 'Correct!'
            : isCalc
              ? `Incorrect — the answer is ${q.answer} ${q.unit}`
              : 'Incorrect'}
        </div>
      )}

      <div className="practice-footer">
        {!submitted ? (
          <button
            className="btn btn-primary"
            style={{ padding: '10px 20px', fontSize: '14px' }}
            onClick={handleSubmit}
            disabled={!hasAnswer}
          >
            Submit
          </button>
        ) : (
          <button
            className="btn btn-secondary"
            style={{ padding: '10px 20px', fontSize: '14px' }}
            onClick={onTryAnother}
          >
            Try Another
          </button>
        )}
      </div>
    </div>
  )
}

export default function Review({ questions, userAnswers, allQuestions, onHome }) {
  const [practices, setPractices] = useState({})
  const quizIds = questions.map(q => q.id)

  const openPractice = (origQ) => {
    const pq = generateSimilarQuestion(origQ, allQuestions, quizIds)
    if (!pq) return
    const shuffled = pq.options ? [...pq.options].sort(() => Math.random() - 0.5) : []
    setPractices(p => ({
      ...p,
      [origQ.id]: {
        q: pq,
        inputValue: '',
        inputUnit: pq.allowedUnits?.[0] ?? '',
        selectedId: null,
        submitted: false,
        shuffledOpts: shuffled,
      }
    }))
  }

  const closePractice = (origId) => {
    setPractices(p => { const n = { ...p }; delete n[origId]; return n })
  }

  const updatePractice = (origId, patch) => {
    setPractices(p => ({ ...p, [origId]: { ...p[origId], ...patch } }))
  }

  return (
    <div className="review">
      <div className="review-header">
        <h2>Answer Review</h2>
        <button className="btn btn-ghost" style={{ padding: '8px 16px', fontSize: '13px' }} onClick={onHome}>
          Back to Home
        </button>
      </div>

      {questions.map((q, qi) => {
        const userAnswer = userAnswers[q.id]
        const isCalc = q.type === 'calculation'

        let isCorrect
        if (isCalc) {
          isCorrect = isCalcCorrect(q, userAnswer)
        } else {
          const correctOpt = q.options?.find(o => o.correct)
          isCorrect = userAnswer === correctOpt?.id
        }

        const practice = practices[q.id]

        return (
          <div key={q.id} className="review-item">
            <div className="review-item-header">
              <span className="review-item-number">Q{qi + 1}</span>
              <span className="review-item-question">{q.question}</span>
              <span className={`review-status ${isCorrect ? 'correct' : 'wrong'}`}>
                {isCorrect ? 'Correct' : 'Incorrect'}
              </span>
            </div>

            {isCalc ? (
              <div className="review-calc-body">
                <div className={`review-calc-box ${isCorrect ? 'is-correct' : 'is-wrong'}`}>
                  <div className="review-calc-label">Your Answer</div>
                  <div className="review-calc-value">
                    {userAnswer?.value ? `${userAnswer.value} ${userAnswer.unit}` : '—'}
                  </div>
                </div>
                <div className="review-calc-box is-correct">
                  <div className="review-calc-label">Correct Answer</div>
                  <div className="review-calc-value">{q.answer} {q.unit}</div>
                </div>
              </div>
            ) : (
              <div className="review-options">
                {q.options.map((opt, i) => {
                  const isCorrectOpt = opt.correct
                  const isUserWrong = userAnswer === opt.id && !opt.correct

                  let cls = 'review-option'
                  if (isCorrectOpt) cls += ' is-correct'
                  else if (isUserWrong) cls += ' is-user-wrong is-wrong'
                  else cls += ' is-wrong'

                  return (
                    <div key={opt.id} className={cls}>
                      <div className="review-option-header">
                        <span className="review-option-letter">{LETTERS[i]}</span>
                        <span className="review-option-text">{opt.text}</span>
                        {isCorrectOpt && <span className="review-option-tag">Correct Answer</span>}
                        {isUserWrong && <span className="review-option-tag">Your Answer</span>}
                      </div>
                      {isCorrectOpt && (
                        <div className="review-explanation">
                          <div className="expl-label">Why this is correct</div>
                          <p>{opt.correctExplanation}</p>
                        </div>
                      )}
                      {!isCorrectOpt && (
                        <div className="review-explanation">
                          <div className="review-wrong-detail">
                            <div>
                              <div className="expl-label">Why someone might choose this</div>
                              <p className="why-choose">{opt.whyChoose}</p>
                            </div>
                            <div className="why-wrong">
                              <strong>Why it's wrong: </strong>{opt.whyWrong}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            )}

            <div className="review-practice-footer">
              {!practice ? (
                <button className="btn btn-ghost practice-btn" onClick={() => openPractice(q)}>
                  Practice Similar Question
                </button>
              ) : (
                <PracticePanel
                  origQ={q}
                  practice={practice}
                  onUpdate={(patch) => updatePractice(q.id, patch)}
                  onTryAnother={() => openPractice(q)}
                  onClose={() => closePractice(q.id)}
                />
              )}
            </div>
          </div>
        )
      })}

      <div style={{ display: 'flex', justifyContent: 'center', paddingBottom: '24px' }}>
        <button className="btn btn-primary" onClick={onHome}>Back to Home</button>
      </div>
    </div>
  )
}
