const LETTERS = ['A', 'B', 'C', 'D']

function isCalcCorrect(q, answer) {
  if (!answer || !answer.value) return false
  if (answer.unit !== q.unit) return false
  const val = parseFloat(answer.value)
  if (isNaN(val)) return false
  const tol = Math.max(Math.abs(q.answer) * 0.02, 0.01)
  return Math.abs(val - q.answer) <= tol
}

export default function Review({ questions, userAnswers, onHome }) {
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
          </div>
        )
      })}

      <div style={{ display: 'flex', justifyContent: 'center', paddingBottom: '24px' }}>
        <button className="btn btn-primary" onClick={onHome}>Back to Home</button>
      </div>
    </div>
  )
}
