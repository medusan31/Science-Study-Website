function formatDate(iso) {
  return new Date(iso).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
}

export default function Home({
  title, description, questionCount, setQuestionCount,
  onStart, onStudy, totalQuestions, instantFeedback, setInstantFeedback,
  currentUser, onLogout, quizHistory, onReviewPast,
}) {
  const max = totalQuestions
  const min = 1

  const handleSlider = (e) => setQuestionCount(Number(e.target.value))
  const handleInput = (e) => {
    const val = Math.min(max, Math.max(min, Number(e.target.value) || min))
    setQuestionCount(val)
  }

  return (
    <div className="home">
      <div className="home-user-bar">
        <span className="home-user-name">{currentUser}</span>
        <button className="btn btn-ghost home-logout-btn" onClick={onLogout}>Log Out</button>
      </div>

      <div className="home-header">
        <div className="badge">Quiz</div>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>

      <div className="home-stats">
        <div className="stat">
          <div className="stat-value">{totalQuestions}</div>
          <div className="stat-label">Questions</div>
        </div>
        <div className="stat">
          <div className="stat-value">4</div>
          <div className="stat-label">Choices each</div>
        </div>
        <div className="stat">
          <div className="stat-value">∞</div>
          <div className="stat-label">Attempts</div>
        </div>
      </div>

      <div className="home-config">
        <label className="config-label">How many questions?</label>
        <div className="count-control">
          <input
            type="range"
            min={min}
            max={max}
            value={questionCount}
            onChange={handleSlider}
          />
          <div className="count-display">
            <input
              type="number"
              min={min}
              max={max}
              value={questionCount}
              onChange={handleInput}
            />
            <span>/ {max}</span>
          </div>
        </div>

        <div className="toggle-row">
          <div className="toggle-row-text">
            <div className="toggle-row-label">Instant Feedback</div>
            <div className="toggle-row-desc">See if each answer is right as you go</div>
          </div>
          <label className="toggle-switch">
            <input
              type="checkbox"
              checked={instantFeedback}
              onChange={e => setInstantFeedback(e.target.checked)}
            />
            <span className="toggle-track" />
          </label>
        </div>
      </div>

      <div className="home-start">
        <button className="btn btn-primary" onClick={onStart}>
          Start Quiz
        </button>
        <button className="btn btn-secondary" onClick={onStudy}>
          Study Guide
        </button>
        <span className="hint">{questionCount} random questions from the full bank</span>
      </div>

      {quizHistory && quizHistory.length > 0 && (
        <div className="home-history">
          <div className="home-history-label">Recent Quizzes</div>
          {quizHistory.map(entry => {
            const pct = Math.round((entry.correct / entry.total) * 100)
            return (
              <div key={entry.id} className="history-item">
                <div className="history-item-info">
                  <span className="history-score">{entry.correct}/{entry.total}</span>
                  <span className="history-pct">{pct}%</span>
                  <span className="history-date">{formatDate(entry.date)}</span>
                </div>
                <button
                  className="btn btn-ghost history-review-btn"
                  onClick={() => onReviewPast(entry)}
                >
                  Review
                </button>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
