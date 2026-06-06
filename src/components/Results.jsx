function isAnswerCorrect(q, answer) {
  if (answer == null) return false
  if (q.type === 'calculation') {
    if (typeof answer !== 'object' || !answer.value) return false
    if (answer.unit !== q.unit) return false
    const val = parseFloat(answer.value)
    if (isNaN(val)) return false
    const tol = Math.max(Math.abs(q.answer) * 0.02, 0.01)
    return Math.abs(val - q.answer) <= tol
  }
  const correctOpt = q.options?.find(o => o.correct)
  return answer === correctOpt?.id
}

export default function Results({ questions, userAnswers, onReview, onHome, onRetry, onRetryWrong }) {
  const correct = questions.filter(q => isAnswerCorrect(q, userAnswers[q.id])).length
  const wrongQuestions = questions.filter(q => !isAnswerCorrect(q, userAnswers[q.id]))
  const total = questions.length
  const pct = Math.round((correct / total) * 100)
  const circumference = 2 * Math.PI * 52

  const getMessage = () => {
    if (pct === 100) return { title: 'Perfect Score!', sub: 'You nailed every single question.' }
    if (pct >= 80) return { title: 'Great Job!', sub: 'Solid performance — almost there.' }
    if (pct >= 60) return { title: 'Not Bad', sub: 'Review the ones you missed and try again.' }
    if (pct >= 40) return { title: 'Keep Practicing', sub: 'Use review mode to understand the material.' }
    return { title: 'More Practice Needed', sub: 'Review mode will help you learn the answers.' }
  }

  const msg = getMessage()
  const strokeDash = circumference - (pct / 100) * circumference
  const accentColor = pct >= 80 ? '#22c55e' : pct >= 60 ? '#f59e0b' : '#ef4444'

  return (
    <div className="results">
      <div className="score-card">
        <div className="score-ring">
          <svg width="120" height="120" viewBox="0 0 120 120">
            <circle cx="60" cy="60" r="52" fill="none" stroke="#334155" strokeWidth="10" />
            <circle
              cx="60" cy="60" r="52"
              fill="none"
              stroke={accentColor}
              strokeWidth="10"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDash}
              style={{ transition: 'stroke-dashoffset 0.8s ease' }}
            />
          </svg>
          <div className="score-ring-text">
            <span className="score-pct">{pct}%</span>
            <span className="score-fraction">{correct}/{total}</span>
          </div>
        </div>
        <h2>{msg.title}</h2>
        <p>{msg.sub}</p>
      </div>

      <div className="results-breakdown">
        <div className="breakdown-item correct-item">
          <div className="breakdown-count">{correct}</div>
          <div className="breakdown-label">Correct</div>
        </div>
        <div className="breakdown-item wrong-item">
          <div className="breakdown-count">{total - correct}</div>
          <div className="breakdown-label">Incorrect</div>
        </div>
      </div>

      <div className="results-actions">
        <button className="btn btn-primary" onClick={onReview}>Review Answers</button>
        {wrongQuestions.length > 0 && (
          <button className="btn btn-secondary" onClick={() => onRetryWrong(wrongQuestions)}>
            Try Again ({wrongQuestions.length} wrong)
          </button>
        )}
        <button className="btn btn-ghost" onClick={onRetry}>Try All Again</button>
        <button className="btn btn-ghost" onClick={onHome}>Back to Home</button>
      </div>
    </div>
  )
}
